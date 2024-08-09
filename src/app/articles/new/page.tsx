"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_PUBLIC_URL;

    await fetch(`${API_URL}/api/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content }),
    });

    setLoading(false);
    router.push(`/`);
    router.refresh();
  };

  return (
    <div className="min-h-screen py-8 px-6 md:px-12">
      <h2 className="text-2xl font-bold my-4 border-b pb-2">ブログ新規作成</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-sm font-bold">URL</label>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold">タイトル</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold">本文</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className={`py-2 px-4 rounded-md ${
            loading
              ? "bg-orange-300 cursor-not-allowed"
              : "bg-orange-400 hover:bg-orange-500"
          }`}
          disabled={loading}
        >
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
