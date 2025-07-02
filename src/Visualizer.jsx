// import React, { useState, useEffect, useRef } from "react";
// import {
//   generateRandomArray,
//   getBubbleSortFrames,
//   getSelectionSortFrames,
//   getInsertionSortFrames,
//   getMergeSortFrames,
//   getQuickSortFrames,
//   getShellSortFrames,
// } from "./helpers/utils";

// import BarChart from "./components/Visualizer/BarChart";
// import PlaybackControls from "./components/controls/PlaybackControls";
// import ControlPanel from "./components/controls/ControlPanel";


// // map algorithm key → frame‑generator
// const algoMap = {
//   bubble:    getBubbleSortFrames,
//   selection: getSelectionSortFrames,
//   insertion: getInsertionSortFrames,
//   merge:     getMergeSortFrames,
//   quick:     getQuickSortFrames,
//   shell:     getShellSortFrames,
// };

// const Visualizer = ({ defaultAlgo = "bubble" }) => {
//   /* ───────── data settings ───────── */
//   const [size,  setSize]  = useState(30);
//   const [min,   setMin]   = useState(1);
//   const [max,   setMax]   = useState(100);
//   const [delay, setDelay] = useState(150);
//   const [array, setArray] = useState([]);

//   const [originalArray, setOriginalArray] = useState([]);


//   /* ───────── animation state ───────── */
//   const [frames,     setFrames]     = useState([]);
//   const [frameIndex, setFrameIndex] = useState(0);

//   /* ───────── playback state ───────── */
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [speed,     setSpeed]     = useState(1);
//   const timerRef = useRef(null);

//   /* ───────── generate data when sliders change ───────── */
//   useEffect(() => {
//     setArray(generateRandomArray(size, min, max));
//   }, [size, min, max]);

//   /* ───────── main playback loop ───────── */
//   useEffect(() => {
//     if (!isPlaying) return;
//     if (frameIndex >= frames.length - 1) { setIsPlaying(false); return; }

//     timerRef.current = setTimeout(() => {
//       setFrameIndex((i) => i + 1);
//       setArray(frames[frameIndex + 1].arr);
//     }, delay / speed);

//     return () => clearTimeout(timerRef.current);
//   }, [isPlaying, frameIndex, frames, delay, speed]);

//   /* ───────── controls ───────── */
// //   const runSort = () => {
// //     const sortFn = algoMap[defaultAlgo];
// //     if (!sortFn) return;
// //     const newFrames = sortFn(array);
// //     setFrames(newFrames);
// //     setFrameIndex(0);
// //     setIsPlaying(true);
// //   };

// const runSort = () => {
//   let newFrames = [];

//   if (defaultAlgo === "bubble") newFrames = getBubbleSortFrames(array);
//   else if (defaultAlgo === "selection") newFrames = getSelectionSortFrames(array);
//   else if (defaultAlgo === "insertion") newFrames = getInsertionSortFrames(array);
//   else if (defaultAlgo === "merge") newFrames = getMergeSortFrames(array);
//   else if (defaultAlgo === "quick") newFrames = getQuickSortFrames(array);
//   else if (defaultAlgo === "shell") newFrames = getShellSortFrames(array);

//   setOriginalArray([...array]); // store the original before sorting
//   setFrames(newFrames);
//   setFrameIndex(0);
//   setIsPlaying(true);
// };


// const reset = () => {
//   setIsPlaying(false);
//   if (originalArray.length) {
//     setArray([...originalArray]); // restore the pre-sorted array
//     setFrameIndex(0);
//   }
// };



//   const randomize = () =>
//     { setIsPlaying(false);
//       setArray(generateRandomArray(size, min, max));
//       setFrames([]);
//       setFrameIndex(0);
//     };

//   const stepBack = () => {
//     setIsPlaying(false);
//     setFrameIndex((i) => Math.max(0, i - 1));
//     if (frames.length) setArray(frames[Math.max(0, frameIndex - 1)].arr);
//   };

//   const stepForward = () => {
//     setIsPlaying(false);
//     if (frameIndex < frames.length - 1) {
//       setFrameIndex((i) => i + 1);
//       setArray(frames[frameIndex + 1].arr);
//     }
//   };

//   const togglePlay = () => setIsPlaying((p) => !p);

//   /* indices currently being compared/swapped */
//   const currentCompare = frames[frameIndex]?.compare || [];

//   /* helper to render the array as text with highlight */
//   const renderArrayValues = () =>
//     array.map((val, idx) => (
//       <span
//         key={idx}
//         className={currentCompare.includes(idx) ? "text-red-500 font-semibold" : ""}
//       >
//         {val}{idx < array.length - 1 ? ", " : ""}
//       </span>
//     ));

//   /* ───────── JSX ───────── */
//   return (
//     <div className="space-y-4">
//       <ControlPanel
//         size={size}   setSize={setSize}
//         min={min}     setMin={setMin}
//         max={max}     setMax={setMax}
//         delay={delay} setDelay={setDelay}
//         onRandomize={randomize}
//         onSort={runSort}
//         onReset={reset}
//         isSorting={isPlaying}
//       />

//       {/* current array values */}
//       <p className="text-center text-lg font-medium">{renderArrayValues()}</p>

//       <BarChart array={array} compareIdxs={currentCompare} />

//       <PlaybackControls
//         isPlaying={isPlaying}
//         onPlayPause={togglePlay}
//         onStepBack={stepBack}
//         onStepForward={stepForward}
//         speed={speed}
//         setSpeed={setSpeed}
//         frameIndex={frameIndex}
//         totalFrames={frames.length}
//       />
//     </div>
//   );
// };

// export default Visualizer;












import React, { useState, useEffect, useRef } from "react";
import {
  generateRandomArray,
  getBubbleSortFrames,
  getSelectionSortFrames,
  getInsertionSortFrames,
  getMergeSortFrames,
  getQuickSortFrames,
  getShellSortFrames,
} from "./helpers/utils";

import BarChart from "./components/Visualizer/BarChart";
import PlaybackControls from "./components/controls/PlaybackControls";
import ControlPanel from "./components/controls/ControlPanel";

// map algorithm key → frame‑generator
const algoMap = {
  bubble: getBubbleSortFrames,
  selection: getSelectionSortFrames,
  insertion: getInsertionSortFrames,
  merge: getMergeSortFrames,
  quick: getQuickSortFrames,
  shell: getShellSortFrames,
};

const Visualizer = ({ defaultAlgo = "bubble" }) => {
  // Data state
  const [size, setSize] = useState(30);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [delay, setDelay] = useState(150);
  const [array, setArray] = useState([]);
  const [originalArray, setOriginalArray] = useState([]);

  // Animation state
  const [frames, setFrames] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);

  // Playback state
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const timerRef = useRef(null);

  // Generate random data when sliders change
  useEffect(() => {
    const random = generateRandomArray(size, min, max);
    setArray(random);
    setOriginalArray(random);
    setFrames([]);
    setFrameIndex(0);
  }, [size, min, max]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;
    if (frameIndex >= frames.length - 1) {
      setIsPlaying(false);
      return;
    }

    timerRef.current = setTimeout(() => {
      setFrameIndex((i) => i + 1);
      setArray(frames[frameIndex + 1].arr);
    }, delay / speed);

    return () => clearTimeout(timerRef.current);
  }, [isPlaying, frameIndex, frames, delay, speed]);

  // Sorting
  const runSort = () => {
    const sortFn = algoMap[defaultAlgo];
    if (!sortFn) return;
    setOriginalArray([...array]);
    const newFrames = sortFn(array);
    setFrames(newFrames);
    setFrameIndex(0);
    setIsPlaying(true);
  };

  const reset = () => {
    setIsPlaying(false);
    if (originalArray.length) {
      setArray([...originalArray]);
      setFrameIndex(0);
    }
  };

  const randomize = () => {
    setIsPlaying(false);
    const rand = generateRandomArray(size, min, max);
    setArray(rand);
    setOriginalArray(rand);
    setFrames([]);
    setFrameIndex(0);
  };

  const stepBack = () => {
    setIsPlaying(false);
    setFrameIndex((i) => Math.max(0, i - 1));
    if (frames.length) {
      setArray(frames[Math.max(0, frameIndex - 1)].arr);
    }
  };

  const stepForward = () => {
    setIsPlaying(false);
    if (frameIndex < frames.length - 1) {
      setFrameIndex((i) => i + 1);
      setArray(frames[frameIndex + 1].arr);
    }
  };

  const togglePlay = () => setIsPlaying((p) => !p);

  const currentCompare = frames[frameIndex]?.compare || [];

  const renderArrayValues = () =>
    array.map((val, idx) => (
      <span
        key={idx}
        className={
          currentCompare.includes(idx)
            ? "text-red-500 font-semibold"
            : "text-gray-800"
        }
      >
        {val}
        {idx < array.length - 1 ? ", " : ""}
      </span>
    ));

  const handleCustomInput = (userArr) => {
    setIsPlaying(false);
    setArray(userArr);
    setOriginalArray(userArr);
    setFrames([]);
    setFrameIndex(0);
  };

  return (
    <div className="space-y-4">
      <ControlPanel
        size={size}
        setSize={setSize}
        min={min}
        setMin={setMin}
        max={max}
        setMax={setMax}
        delay={delay}
        setDelay={setDelay}
        onRandomize={randomize}
        onSort={runSort}
        onReset={reset}
        isSorting={isPlaying}
        onCustomInput={handleCustomInput} // 🔁 connected to custom input
      />

      <p className="text-center text-lg font-medium">{renderArrayValues()}</p>

      <BarChart array={array} compareIdxs={currentCompare} />

      <PlaybackControls
        isPlaying={isPlaying}
        onPlayPause={togglePlay}
        onStepBack={stepBack}
        onStepForward={stepForward}
        speed={speed}
        setSpeed={setSpeed}
        frameIndex={frameIndex}
        totalFrames={frames.length}
      />
    </div>
  );
};

export default Visualizer;
