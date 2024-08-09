"use client";
import { deleteArticle } from "@/BlogAPI";
import { useRouter } from "next/navigation";
import React from "react";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    // await deleteArticle(id);
    const API_URL = process.env.NEXT_PUBLIC_PUBLIC_URL;

    await fetch(`${API_URL}/api/blog/${id}`, {
      method: "DELETE",
    });

    router.push("/");
    router.refresh();
  };

  return (
    <button
      className="bg-red-500 rounded-md py-2 px-5 hover:bg-red-600 cursor-pointer"
      onClick={() => handleDelete()}
    >
      DeleteButton
    </button>
  );
};

export default DeleteButton;
