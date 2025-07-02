import React from "react";
import { Link } from "react-router-dom";

const AlgoCard = ({ title, path, svgPath, complexity }) => {
  return (
    <Link
      to={path}
      className="group block bg-white rounded shadow hover:shadow-lg transition p-4"
    >
      {/* Placeholder SVG curve chart */}
      <svg
        viewBox="0 0 100 60"
        className="w-full h-32 text-blue-500 group-hover:text-blue-600"
      >
        <rect width="100" height="60" fill="none" />
        <path
          d={svgPath}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <h3 className="mt-2 font-semibold text-center">{title}</h3>
      <p className="text-xs text-center text-gray-500">{complexity}</p>
    </Link>
  );
};

export default AlgoCard;