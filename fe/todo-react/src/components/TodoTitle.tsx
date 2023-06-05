import React, { memo } from "react";

// タイトルの表示コンポーネント
export const TodoTitle = memo(({ title, as }: { title: string; as: string}) => {
  if (as === "h1") {
    return <h1 className="text-8xl font-extrabold text-center p-4 m-4 font-mono italic text-green-800 antialiased text-shadow-xs" style={{textShadow: '0 0 6px rgba(0,0,0,0.5)'}}>{title}</h1>;
  } else if (as === "h2") {
    return <h2 className="text-6xl font-extrabold text-center p-2 m-2 font-mono italic text-green-800 antialiased text-shadow-xs" style={{textShadow: '0 0 6px rgba(0,0,0,0.5)'}}>{title}</h2>;
  } else {
    return <p>{title}</p>;
  }
});