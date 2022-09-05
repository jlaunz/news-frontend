import Head from "next/head";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import styles from "./index.module.css";

import ArticleCard from "../components/articleCard/ArticleCard";
import { ArticleSummary } from "../model/Article";

export type HomeProps = {
  articleSummaries: ArticleSummary[];
};
export default function Home({ articleSummaries }: HomeProps) {
  const [sortedSummaries, setSortedSummaries] = useState(articleSummaries);
  const [keyword, setKeyword] = useState("");

  const sortSummariesByDate = () => {
    const sortedCustomers = [...sortedSummaries].sort(
      (s1: ArticleSummary, s2: ArticleSummary) => {
        if (s1.date < s2.date) {
          return -1;
        } if (s1.date > s2.date) {
          return 1;
        }
        return 0;
      },
    );

    setSortedSummaries(sortedCustomers);
  };

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

        <div>
          <Button
            size="small"
            variant="contained"
            onClick={sortSummariesByDate}
          >
            {" "}
            Sort by date
          </Button>

          <TextField
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            label="keyword"
            variant="outlined"
          />
          <Button size="small" variant="contained">
            {" "}
            Sort by Section
          </Button>
        </div>

        <h2 className={styles.heading}>All articles</h2>
        <ol className={styles.articles}>
          {sortedSummaries
            .filter((s) => s.section.toLowerCase().includes(keyword.toLowerCase()))
            .map((articleSummary) => (
              <li key={articleSummary.id} className={styles.article}>
                <ArticleCard articleSummary={articleSummary} />
              </li>
            ))}
        </ol>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data: summaries } = await axios.get(
    "http://localhost:8000/summaries",
  );

  return {
    props: {
      articleSummaries: summaries,
    },
    revalidate: 1,
  };
};
