export const getStandardImageURL = (imageInsertion) => {
  let standardImg = imageInsertion.variants.find(
    (i) => i.layout === "Standard Image",
  );
  standardImg = standardImg
    || imageInsertion.variants.find((i) => i.layout === "Standard Portrait");

  return standardImg;
};
