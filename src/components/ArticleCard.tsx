import { Article } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article key={article.id} className="shadow my-4">
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        <Image
          src="https://picsum.photos/1280/600"
          alt=""
          width={1280}
          height={600}
        />
      </Link>

      <div className="bg-white flex flex-col justify-start p-6">
        <Link
          href={`articles/${article.id}`}
          className="text-blue-700 font-bold"
        >
          {article.tag}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3 text-slate-900">
          publishhed on {new Date(article.createdAt).toLocaleString()}
        </p>
        <Link href={`articles/${article.id}`} className="text-slate-900 pb-4">
          {article.content.length > 100
            ? article.content.substring(0, 100) + "..."
            : article.content}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-pink-800 hover:text-black"
        >
          続きを読む
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
