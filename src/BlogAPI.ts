import { notFound } from "next/navigation";
import { Article } from "./type";

export const getAllArticles = async (): Promise<Article[]> => {
  const response = await fetch(
    `http://localhost:3001/posts`,
    { cache: "no-store" } // SSR:更新が多い時
    // { cache : "force-cache" }, // SSG:更新が少ない時
    // { next : }
  );

  if (!response.ok) {
    throw new Error("エラーを発生させる");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));
  const articles = await response.json();
  return articles;
};

export const getArticle = async (id: string): Promise<Article> => {
  const response = await fetch(
    `http://localhost:3001/posts/${id}`,
    { next: { revalidate: 60 } } // SS:更新が多い時
  );

  // if (!response.ok) {
  //   throw new Error("エラーを発生させる");
  // }

  if (response.status === 404) {
    notFound();
  }

  await new Promise((resolve) => setTimeout(resolve, 500));
  const article = await response.json();
  return article;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDataTime = new Date().toISOString();

  const response = await fetch(`http://localhost:3001/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      title: title,
      content: content,
      createdAt: currentDataTime,
    }),
  });

  if (!response.ok) {
    throw new Error("エラーを発生させる");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const newArticle = await response.json();
  return newArticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const response = await fetch(`http://localhost:3001/posts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("エラーを発生させる");
  }

  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const deleteArticle = await response.json();
  return deleteArticle;
};
