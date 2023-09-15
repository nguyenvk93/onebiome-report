import { A4_FULL_WIDTH_POINT } from "../../../constants/PdfConstants";
import { urlToBase64 } from "../../../utility/ImageUtil";

const AdultsTitleHeader = async (title) => {
  const images = await Promise.all([
    urlToBase64("/img/pdf/adults/bg-header.png", "png"),
  ]);
  const HEADER_IMAGE = images[0];
  const content = [
    {
      image: HEADER_IMAGE,
      width: A4_FULL_WIDTH_POINT,
      // height: 58,
      absolutePosition: { x: 0, y: 0 },
    },
    {
      text: title || "",
      fontSize: 15,
      font: "Gotham",
      bold: true,
      color: "#fff",
      absolutePosition: { x: 50, y: 30 },
    },
  ];
  return content;
};

export default AdultsTitleHeader;
