import {
  A4_FULL_HEIGHT_POINT,
  A4_FULL_WIDTH_POINT,
} from "../../../constants/PdfConstants";
import { urlToBase64 } from "../../../utility/ImageUtil";

const FooterRight = async () => {
  const images = await Promise.all([
    urlToBase64("/img/pdf/adults/microbes-right.png", "png"),
  ]);
  const RESULTS_IMAGE = images[0];
  return {
    image: RESULTS_IMAGE,
    width: 970 / 3,
    height: 585 / 3,
    absolutePosition: {
      x: A4_FULL_WIDTH_POINT - 970 / 3,
      y: A4_FULL_HEIGHT_POINT - 585 / 3,
    },
  };
};

export default FooterRight;
