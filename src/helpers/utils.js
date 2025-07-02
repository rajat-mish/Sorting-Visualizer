export const generateRandomArray = (size, min = 1, max = 100) =>
  Array.from({ length: size }, () =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );

// Bubble Sort
export const getBubbleSortFrames = (input) => {
  const frames = [];
  const a = [...input];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      frames.push({ arr: [...a], compare: [j, j + 1] });
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        frames.push({ arr: [...a], compare: [j, j + 1] });
      }
    }
  }
  frames.push({ arr: [...a], compare: [] });
  return frames;
};

// Selection Sort
export const getSelectionSortFrames = (input) => {
  const frames = [];
  const a = [...input];
  for (let i = 0; i < a.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a.length; j++) {
      frames.push({ arr: [...a], compare: [minIdx, j] });
      if (a[j] < a[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [a[i], a[minIdx]] = [a[minIdx], a[i]];
      frames.push({ arr: [...a], compare: [i, minIdx] });
    }
  }
  frames.push({ arr: [...a], compare: [] });
  return frames;
};

// Insertion Sort
export const getInsertionSortFrames = (input) => {
  const frames = [];
  const a = [...input];
  for (let i = 1; i < a.length; i++) {
    let j = i;
    while (j > 0 && a[j] < a[j - 1]) {
      frames.push({ arr: [...a], compare: [j, j - 1] });
      [a[j], a[j - 1]] = [a[j - 1], a[j]];
      frames.push({ arr: [...a], compare: [j, j - 1] });
      j--;
    }
  }
  frames.push({ arr: [...a], compare: [] });
  return frames;
};

// Merge Sort
export const getMergeSortFrames = (input) => {
  const frames = [];
  const a = [...input];

  const mergeSort = (arr, l, r) => {
    if (l >= r) return;
    const m = Math.floor((l + r) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  };

  const merge = (arr, l, m, r) => {
    const left = arr.slice(l, m + 1);
    const right = arr.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;

    while (i < left.length && j < right.length) {
      frames.push({ arr: [...arr], compare: [k, l + i, m + 1 + j] });
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
      frames.push({ arr: [...arr], compare: [k - 1] });
    }

    while (i < left.length) {
      arr[k++] = left[i++];
      frames.push({ arr: [...arr], compare: [k - 1] });
    }
    while (j < right.length) {
      arr[k++] = right[j++];
      frames.push({ arr: [...arr], compare: [k - 1] });
    }
  };

  mergeSort(a, 0, a.length - 1);
  frames.push({ arr: [...a], compare: [] });
  return frames;
};

// Quick Sort
export const getQuickSortFrames = (input) => {
  const frames = [];
  const a = [...input];

  const quickSort = (arr, low, high) => {
    if (low < high) {
      const pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  };

  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      frames.push({ arr: [...arr], compare: [j, high] });
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        frames.push({ arr: [...arr], compare: [i, j] });
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    frames.push({ arr: [...arr], compare: [i + 1, high] });
    return i + 1;
  };

  quickSort(a, 0, a.length - 1);
  frames.push({ arr: [...a], compare: [] });
  return frames;
};

// Shell Sort
export const getShellSortFrames = (input) => {
  const frames = [];
  const a = [...input];
  let n = a.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = a[i];
      let j = i;
      while (j >= gap && a[j - gap] > temp) {
        frames.push({ arr: [...a], compare: [j, j - gap] });
        a[j] = a[j - gap];
        frames.push({ arr: [...a], compare: [j, j - gap] });
        j -= gap;
      }
      a[j] = temp;
      frames.push({ arr: [...a], compare: [j] });
    }
  }
  frames.push({ arr: [...a], compare: [] });
  return frames;
};