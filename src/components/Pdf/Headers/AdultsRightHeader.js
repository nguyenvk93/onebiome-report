import { urlToBase64 } from "../../../utility/ImageUtil";

const AdultsRightHeader = async () => {
  const images = await Promise.all([
    urlToBase64("/img/pdf/adults/bg-left-header.png", "png"),
  ]);
  const HEADER_IMAGE = images[0];
  const content = [
    {
      image: HEADER_IMAGE,

      width: 330,
      absolutePosition: { x: 308, y: -222 },
    },
  ];
  return content;
};

export default AdultsRightHeader;
