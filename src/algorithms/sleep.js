export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const generateArray = (size) => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 400 + 50));
};
