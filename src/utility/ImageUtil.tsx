import { FILE_EXTENSIONS } from '../constants/DefaultValues';

/**
 * Convert file to base64
 * @param url File
 * @return {string} base64
 */
export const urlToBase64 = async (url: string): Promise<any> => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => { return resolve(reader.result); };
    reader.onerror = reject;
  });
};

/**
 * Check image file pixel now allow Width > 4999px and Height > 3000
 * @param {object} file File
 * @return {bool} True is not error and False is error
 */
const checkImagePixel = async (file: any) => {
  const img = new Image();
  img.src = window.URL.createObjectURL(file);

  await new Promise<void>((resolve, reject) => {
    img.onload = () => {
      resolve();
    };
    img.onerror = (err) => {
      reject(err);
    };
  });

  if (img.width > 4999 || img.height > 3000) {
    return false;
  }
  return true;
};

/**
 * Check image file extension and file size
 * @param {object} file File
 * @param {number} size Maximum file size (4.99 MB)
 * @return {bool} True is not error and False is error
 */
interface File {
  name: string
  size: number
}
export const checkPhotoFile = async (file: File, size = 4.99) => {
  const maximumSize = size;
  const isExtension = new RegExp(
    `(${FILE_EXTENSIONS.join('|').replace(/\./g, '\\.')})$`
  ).test(file.name);

  if (!isExtension) {
    return {
      isExtension: false,
      isInAllowSize: true,
      message: `${file.name} has invalid extension. Only ${FILE_EXTENSIONS.join(
        ', '
      )} are allowed.`
    };
  }

  const isInAllowSize = parseFloat((file.size / 1024 ** 2).toFixed(2)) <= maximumSize;
  const isInAllowWidthHeight = await checkImagePixel(file);
  if (!isInAllowSize || !isInAllowWidthHeight) {
    return {
      isExtension: true,
      isInAllowSize: false,
      message: 'Your photo size is too large!'
    };
  }

  return {
    isExtension: true,
    isInAllowSize: true
  };
};
