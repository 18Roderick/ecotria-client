export const readFileUint8Array = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onerror = reject;
    reader.onload = function (e) {
      const arr = new Uint8Array(e.target?.result);
      resolve(arr);
    };
  });
};

export const readFileDataURL = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = reject;
    reader.onload = function (e) {
      const arr = new Uint8Array(e.target?.result);
      resolve(arr);
    };
  });
};
