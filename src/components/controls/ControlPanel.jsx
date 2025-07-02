// import React from "react";

// const Slider = ({ label, value, min, max, step, onChange }) => (
//   <div className="flex flex-col w-full max-w-xs">
//     <label className="text-sm font-medium mb-1">
//       {label}: <span className="font-semibold">{value}</span>
//     </label>
//     <input
//       type="range"
//       min={min}
//       max={max}
//       step={step}
//       value={value}
//       onChange={(e) => onChange(+e.target.value)}
//       className="w-full"
//     />
//   </div>
// );

// const ControlPanel = ({
//   size,
//   setSize,
//   min,
//   setMin,
//   max,
//   setMax,
//   delay,
//   setDelay,
//   onRandomize,
//   onSort,
//   onReset,
//   isSorting,
// }) => (
//   <div className="flex flex-wrap items-center gap-6 bg-gray-100 p-4 rounded shadow">
//     <Slider label="Array Size" value={size} min={5} max={150} onChange={setSize} />
//     <Slider label="Min"        value={min}  min={1}  max={max - 1} onChange={setMin} />
//     <Slider label="Max"        value={max}  min={min + 1} max={500} onChange={setMax} />
//     <Slider label="Delay ms"   value={delay} min={5} max={1000} step={5} onChange={setDelay} />

//     <button onClick={onSort}      disabled={isSorting}  className="btn bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200">Sort</button>
//     <button onClick={onReset}     disabled={isSorting}  className="btn bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200">Reset</button>
//     <button onClick={onRandomize} disabled={isSorting}  className="btn bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200">Randomize</button>
//   </div>
// );

// export default ControlPanel;







import React, { useState } from "react";

const Slider = ({ label, value, min, max, step, onChange }) => (
  <div className="flex flex-col w-full max-w-xs">
    <label className="text-sm font-medium mb-1">
      {label}: <span className="font-semibold">{value}</span>
    </label>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(+e.target.value)}
      className="w-full"
    />
  </div>
);

const ControlPanel = ({
  size,
  setSize,
  min,
  setMin,
  max,
  setMax,
  delay,
  setDelay,
  onRandomize,
  onSort,
  onReset,
  isSorting,
  onCustomInput, // ✅ new prop
}) => {
  const [customInput, setCustomInput] = useState("");

  const handleCustomInput = () => {
    const parsed = customInput
      .split(",")
      .map((val) => parseInt(val.trim()))
      .filter((val) => !isNaN(val));
    if (parsed.length) {
      onCustomInput(parsed);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-6 bg-gray-100 p-4 rounded shadow w-full">
      <Slider label="Array Size" value={size} min={5} max={150} onChange={setSize} />
      <Slider label="Min" value={min} min={1} max={max - 1} onChange={setMin} />
      <Slider label="Max" value={max} min={min + 1} max={500} onChange={setMax} />
      <Slider label="Delay ms" value={delay} min={5} max={1000} step={5} onChange={setDelay} />

      {/* Buttons */}
      <button
        onClick={onSort}
        disabled={isSorting}
        className="btn bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200"
      >
        Sort
      </button>
      <button
        onClick={onReset}
        disabled={isSorting}
        className="btn bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200"
      >
        Reset
      </button>
      <button
        onClick={onRandomize}
        disabled={isSorting}
        className="btn bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-200"
      >
        Randomize
      </button>

      {/* Custom Input */}
      <div className="flex items-center gap-2 w-full max-w-xs">
        <input
          type="text"
          placeholder="Enter comma-separated numbers"
          className="border border-gray-300 px-3 py-2 rounded w-full"
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          disabled={isSorting}
        />
        <button
          className="btn bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition"
          onClick={handleCustomInput}
          disabled={isSorting}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
