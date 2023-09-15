export const arrayDeviceUtils = (arr: Array<any>, size = 1) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => { return arr.slice(i * size, i * size + size); });
};

export const ReadFile = (file: any) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => { return resolve(reader.result); }, false);
    reader.readAsDataURL(file);
  });
};

export const ToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { return resolve(reader.result); };
    reader.onerror = (error) => { return reject(error); };
  });
};

export const stopScrollPage = (isAdd: boolean) => {
  const { body } = document;
  if (isAdd) {
    body.classList.add('stop-scroll');
  } else {
    body.classList.remove('stop-scroll');
  }
};
