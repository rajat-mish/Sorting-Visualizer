import React from "react";

const BarChart = ({ array, compareIdxs = [] }) => {
  const maxVal = Math.max(...array);

  return (
    <div className="flex items-end justify-center h-64 gap-1 mt-4 px-4 overflow-x-auto">
      {array.map((val, idx) => {
        const height = `${(val / maxVal) * 100}%`;
        const isComparing = compareIdxs.includes(idx);

        return (
          <div
            key={idx}
            className="relative flex justify-center items-end"
            style={{ height: "100px", width: "20px" }}
          >
            {/* Bar */}
            <div
              className={`w-full rounded-t ${isComparing ? "bg-red-500" : "bg-blue-500"}`}
              style={{ height }}
            ></div>

            {/* Value label */}
            <span className="absolute -top-6 text-xs text-gray-800 font-semibold">
              {val}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default BarChart;
