import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      {Array(7)
        .fill()
        .map((_, index) => (
          <React.Fragment key={index}>
            <div class="h-2 bg-slate-100 rounded-full dark:bg-slate-200 w-full mb-2.5"></div>
          </React.Fragment>
        ))}
    </div>
  );
};

export default LoadingSkeleton;
