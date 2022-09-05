import Head from "next/head";
import processRawArticleJSON from "../../util/richtextRenderer";
import style from "./Article.module.css";
import axios from "axios";

export type ArticleProps = {
  articleRaw: any;
};

export default function Article({ articleRaw }: ArticleProps) {
  return (
    <div>
      <Head>
        <title>{articleRaw.title}</title>
      </Head>
      <article className={style.article}>
        <h1>{articleRaw.title}</h1>
        <p className={style.articleAuthorDate}>
          Melanie Carroll 14:42, Sep 03 2022
        </p>
        <div
          className={style.articleContent}
          dangerouslySetInnerHTML={{
            __html: processRawArticleJSON(articleRaw),
          }}
        />
      </article>
    </div>
  );
}

export async function getStaticPaths(id) {
  // TO DO: Add to env variables
  const { data } = await axios.get(
    "http://localhost:8000/ids"
  );

  const paths = data.map((id) => {
    return { params: { id: `${id}` } };
  });
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  // TO DO: Add to env variables
  const { data } = await axios.get(
    `http://localhost:8000/articles/${params.id}`
  );
  return {
    props: { articleRaw: data },
  };
}
