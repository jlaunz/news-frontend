import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Link from "next/link";
import { Chip } from "@mui/material";
import { ArticleSummary } from "../../model/Article";
import { getStandardImageURL } from "../../util/richTextImgUtil";

export type ArticleCardProps = {
  articleSummary: ArticleSummary;
};
const ArticleCard = ({ articleSummary }: ArticleCardProps) => (
  <Card sx={{ maxWidth: 500 }}>
    <CardMedia
      component="img"
      height="140"
      image={getStandardImageURL(articleSummary.images[0]).src}
      alt="green iguana"
    />
    <CardContent>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        style={{ fontSize: "16px", lineHeight: 1.4 }}
      >
        {articleSummary.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <span>
          Updated At:
          {articleSummary.date}
        </span>
        <br />
        <span>
          {articleSummary.intro.substring(0, 80)
              + (articleSummary.intro.length > 80 ? "..." : "")}
        </span>
      </Typography>
    </CardContent>
    <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
      <Link href={`articles/${articleSummary.id}`}>
        <Button size="small" variant="contained">
          {" "}
          Read
        </Button>
      </Link>

      <Chip data-testid="section-label" label={articleSummary.section} variant="outlined" />
    </CardActions>
  </Card>
);

export default ArticleCard;
