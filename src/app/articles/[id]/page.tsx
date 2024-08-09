import { getArticle } from "@/BlogAPI";
import DeleteButton from "@/components/DeleteButton";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  const API_URL = process.env.NEXT_PUBLIC_PUBLIC_URL;
  const res = await fetch(`${API_URL}/api/blog/${params.id}`, {
    next: { revalidate: 10 },
  });

  const article = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://picsum.photos/1280/600"
        alt=""
        width={1280}
        height={600}
      />
      <h1 className="text-4xl text-center my-10">{article.title}</h1>
      <div className="text-lg leading-relaxed  text-justify">
        <p>{article.content}</p>
      </div>

      <div className="text-right mt-3">
        <DeleteButton id={article.id} />
      </div>
    </div>
  );
};

export default Article;
