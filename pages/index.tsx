
import Head from "next/head";
import styles from "./index.module.css";

import { getArticleSummary, sampleStory1 } from "../util/stories";
import ArticleCard from "../components/articleCard/ArticleCard";
import { ArticleSummary } from "../model/Article";

export type HomeProps = {
  articles: ArticleSummary[]
}
export default function Home({ articles }: HomeProps) {
  return (
    <div>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <h1>News list powered by Next.js</h1>
        </header>

        <h2 className={styles.heading}>All articles</h2>
        <ol className={styles.articles}>
          {articles.map((article) => {
            return (
              <li key={article.id} className={styles.article}>
                <ArticleCard article={article} />
              </li>
            );
          })}
        </ol>
      </main>

    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      articles: [getArticleSummary(sampleStory1)],
    },
    revalidate: 1,
  };
};
