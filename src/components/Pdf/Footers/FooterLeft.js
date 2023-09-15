import { A4_FULL_HEIGHT_POINT } from "../../../constants/PdfConstants";
import { urlToBase64 } from "../../../utility/ImageUtil";

const FooterLeft = async () => {
  const images = await Promise.all([
    urlToBase64("/img/pdf/adults/microbes-left.png", "png"),
  ]);
  const RESULTS_IMAGE = images[0];
  return {
    image: RESULTS_IMAGE,
    width: 1017 / 3,
    height: 489 / 3,
    absolutePosition: {
      x: 0,
      y: A4_FULL_HEIGHT_POINT - 489 / 3,
    },
  };
};

export default FooterLeft;
