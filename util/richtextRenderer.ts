import { getStandardImageURL } from "./richTextImgUtil";

const getParagraphTasks = (articleRaw) => {
  const expr = /<p>.*?<\/p>/g;
  const articleBody = articleRaw.body;

  const insertions = [
    ...articleRaw.images,
    ...articleRaw.videos,
    ...articleRaw.html_assets,
  ];
  const tasks = articleBody.match(expr).map((s) => {
    return { string: s, insertAfter: [] };
  });

  insertions.forEach((insertion) => {
    let paragraphTask = tasks[insertion.position_after_paragraph];

    if (!paragraphTask) {
      console.warn(
        "invalid insertion location at paragraph- " +
          insertion.position_after_paragraph
      );
      tasks.push({ string: "", insertAfter: [insertion] });
    } else {
      paragraphTask.insertAfter.push(insertion);
    }
  });

  return tasks;
};

const getImgSrcSet = (urls: { [x: string]: string }) => {
  const entries = Object.entries(urls);
  const srcSet = [];

  entries.forEach(([key, url], index) => {
    const intrinsicWidth = key.split("x")[0] + "w";
    const path = url.split("https://")[1];
    srcSet.push(`${url} ${intrinsicWidth}`);
  });

  return srcSet.join(", \n");
};

const applyInsertions = (paragraphString: string, insertionList: any[]) => {
  let finalString = paragraphString;

  insertionList.forEach((insertion) => {
    switch (insertion.asset_type) {
      case "IMAGE":

        const standardImg = getStandardImageURL(insertion)
        finalString += `<img src=${standardImg.src} srcset="${getImgSrcSet(
          standardImg.urls
        )}" />`;
        break;

      case "HTML":
        finalString += insertion.data_content;
        break;

      case "VIDEO":
        let videoSrc = insertion.src;
        finalString += `<video src=${videoSrc} controls></video>`;
        break;

      default:
        finalString += `<p> -- NOT SUPPORTED CONTENT -- </p>`;
    }
  });
  return finalString;
};

const processRawArticleJSON = (articleRaw) => {
  const tasks = getParagraphTasks(articleRaw);

  const doneTasks = tasks.map((paragraph) => {
    return {
      ...paragraph,
      finalString: applyInsertions(paragraph.string, paragraph.insertAfter),
    };
  });

  return doneTasks.map((paragraph) => paragraph.finalString).join("");
};

export default processRawArticleJSON;
