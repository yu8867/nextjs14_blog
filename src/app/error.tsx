"use client";
import React from "react";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-red-200 flex flex-col text-center border-l-4 border-red-500 text-red-700 my-4 rounded shadow-md max-w-md mx-auto">
      <div className="font-bold my-2">エラーが発生しました</div>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white mx-auto mb-2 p-2 rounded hover:bg-red-500 transition duration-200"
      >
        もう一度試す
      </button>
    </div>
  );
};

export default Error;
