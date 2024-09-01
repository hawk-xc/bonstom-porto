import React, { useEffect, useState } from "react";

const DynamicProgressBar = ({ value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animasi progres ketika component dimuat
    const timer = setTimeout(() => setProgress(value), 100); // Beri jeda 100ms untuk memulai animasi
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="w-full h-6 overflow-hidden bg-gray-200 rounded-full">
      <div
        className="h-6 transition-all duration-1000 ease-out bg-blue-500 rounded-full"
        style={{ width: `${progress}%` }}
      >
        <span className="flex items-center justify-center h-full text-xs font-semibold text-white">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default DynamicProgressBar;
