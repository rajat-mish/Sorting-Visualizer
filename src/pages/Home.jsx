import React from "react";
import AlgoCard from "../components/AlgoCard.jsx";

const algos = [
  {
    title: "Bubble Sort",
    path: "/bubble",
    svg: "M0 55 Q40 50 80 5",
    complexity: "O(n²) time | O(1) space",
  },
  {
    title: "Selection Sort",
    path: "/selection",
    svg: "M0 55 Q40 45 80 10",
    complexity: "O(n²) time | O(1) space",
  },
  {
    title: "Insertion Sort",
    path: "/insertion",
    svg: "M0 55 Q30 50 60 15 80 5",
    complexity: "O(n²) time | O(1) space",
  },
  {
    title: "Merge Sort",
    path: "/merge",
    svg: "M0 55 Q20 45 50 35 80 5",
    complexity: "O(n log n) time | O(n) space",
  },
  {
    title: "Quick Sort",
    path: "/quick",
    svg: "M0 55 Q25 45 50 20 80 5",
    complexity: "O(n log n) avg | O(log n) space",
  },
  {
    title: "Shell Sort",
    path: "/shell",
    svg: "M0 55 Q15 50 40 40 80 5",
    complexity: "O(n^(3/2)) avg",
  },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">The Sorting Algorithm Visualizer!</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {algos.map((algo) => (
          <AlgoCard
            key={algo.path}
            title={algo.title}
            path={algo.path}
            svgPath={algo.svg}
            complexity={algo.complexity}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;