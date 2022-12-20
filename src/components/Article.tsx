import { FC } from "react";

export type Article = {
  title: string;
  body: string;
  id: number;
};
export const Article: FC<Article> = ({ title, body, id }) => {
  return (
    <article className="p-5 bg-gray-700/50 rounded flex gap-3 flex-col">
      <header>
        <h1 className="text-3xl">{title}</h1>
      </header>
      <section>
        <p>{body}</p>
        <p>post id : {id}</p>
      </section>
    </article>
  );
};
