import react from "react";
import Link from "next/link";
import styles from "./ArticleCard.module.css";
import { ArticleSummary } from "../../model/Article";

export type ArticleCardProps = {
  article: ArticleSummary;
};
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className={styles.ArticleCard}>
      <h3 className={styles.ArticleCardTitle}>
        <Link href={`/${article.id}`}>
          <a>{article.title}</a>
        </Link>
      </h3>

      <p className={styles.ArticleCardDescription}>{article.date}</p>
      <Link href={`/${article.id}`}>
        <a> Read Article →</a>
      </Link>
    </div>
  );
};

export default ArticleCard;
