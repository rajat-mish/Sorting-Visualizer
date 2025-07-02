import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ControlPanel from './components/controls/ControlPanel';
import ArrayBars from './components/ArrayBars';
import { bubbleSort } from './algorithms/bubbleSort';
import { generateArray } from './algorithms/sleep';
import Footer from './components/Footer';

const App = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(100);
  const [size, setSize] = useState(30);

  const generateNewArray = () => {
    const newArr = generateArray(size);
    setArray(newArr);
  };

  useEffect(() => {
    generateNewArray();
  }, [size]);

  return (
 <div className="min-h-screen flex flex-col">
  <Navbar />
  <div className="flex-grow">
    <ControlPanel
      size={size}
      setSize={setSize}
      speed={speed}
      setSpeed={setSpeed}
      generateNewArray={generateNewArray}
      onSort={() => bubbleSort(array, setArray, speed)}
    />
    <ArrayBars array={array} />
  </div>
  <Footer />
</div>

  );
};

export default App;

