import React from "react";

const PlaybackControls = ({
  isPlaying,
  onPlayPause,
  onStepBack,
  onStepForward,
  speed,
  setSpeed,
  frameIndex,
  totalFrames,
}) => (
  <div className="flex items-center gap-4 mt-4">
    <button onClick={onStepBack}    className="text-2xl">⏮️</button>
    <button onClick={onPlayPause}   className="text-3xl">{isPlaying ? "⏸️" : "▶️"}</button>
    <button onClick={onStepForward} className="text-2xl">⏭️</button>

    <div className="flex items-center gap-2 ml-6">
      <label className="text-sm font-medium">Speed:</label>
      <select value={speed} onChange={(e) => setSpeed(+e.target.value)} className="border rounded px-2 py-1">
        {[0.25,0.5,1,1.5,2].map(s => <option key={s} value={s}>{s}x</option>)}
      </select>
    </div>

    <span className="ml-auto text-sm text-gray-500">
      Frame {frameIndex + 1} / {totalFrames}
    </span>
  </div>
);

export default PlaybackControls;
