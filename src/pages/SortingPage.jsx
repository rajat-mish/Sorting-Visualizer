import React from "react";
import Visualizer from "../Visualizer.jsx"; // your existing visualizer component

const SortingPage = ({ algoKey, title }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <Visualizer defaultAlgo={algoKey} />
  </div>
);

export default SortingPage;