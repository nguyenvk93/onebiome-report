import { A4_FULL_WIDTH_POINT } from "../../../constants/PdfConstants";
import { urlToBase64 } from "../../../utility/ImageUtil";

const MicrobiomeHeader = async (title, img) => {
  let images;
  if (img !== undefined) {
    images = await Promise.all([urlToBase64(`/img/pdf/${img}`, "png")]);
  } else {
    images = await Promise.all([
      urlToBase64("/img/pdf/adults/bg-header.png", "png"),
    ]);
  }

  const HEADER_IMAGE = images[0];
  const content = [
    {
      image: HEADER_IMAGE,
      width: A4_FULL_WIDTH_POINT,
      height: 88,
      absolutePosition: { x: 0, y: 0 },
    },
    {
      text: title,
      fontSize: 15,
      font: "Gotham",
      bold: true,
      color: "#fff",
      absolutePosition: { x: 49, y: 30 },
    },
  ];
  return content;
};

export default MicrobiomeHeader;
