export type ArticleSummary = {
    id: number;
    title: string;
    intro: string;
    date: string;
    section: string;
    images: any[];
  };

export type ArticleRaw = ArticleSummary & {
  body: string;
  images: ArticleImage[];
  html_assets: ArticleHTMLAsset[];
};

export type ArticleImage = {
  id: number;
  position_after_paragraph: number;
  variants: [];
};

export type ArticleImageVariant = {
  id: number;
  src: string;
  width: string;
};

export type ArticleHTMLAsset = {
  id: number;
  data_content: string;
  position_after_paragraph: number;
};
