"use client";

import React, { useEffect } from "react";

interface LoadingProps {
  status: string;
}

export default function Loading({ status }: LoadingProps) {
  const [progress, setProgress] = React.useState(0);

  const progressClasses = [
    "w-[1%]",
    "w-[2%]",
    "w-[3%]",
    "w-[4%]",
    "w-[5%]",
    "w-[6%]",
    "w-[7%]",
    "w-[8%]",
    "w-[9%]",
    "w-[10%]",
    "w-[11%]",
    "w-[12%]",
    "w-[13%]",
    "w-[14%]",
    "w-[15%]",
    "w-[16%]",
    "w-[17%]",
    "w-[18%]",
    "w-[19%]",
    "w-[20%]",
    "w-[21%]",
    "w-[22%]",
    "w-[23%]",
    "w-[24%]",
    "w-[25%]",
    "w-[26%]",
    "w-[27%]",
    "w-[28%]",
    "w-[29%]",
    "w-[30%]",
    "w-[31%]",
    "w-[32%]",
    "w-[33%]",
    "w-[34%]",
    "w-[35%]",
    "w-[36%]",
    "w-[37%]",
    "w-[38%]",
    "w-[39%]",
    "w-[40%]",
    "w-[41%]",
    "w-[42%]",
    "w-[43%]",
    "w-[44%]",
    "w-[45%]",
    "w-[46%]",
    "w-[47%]",
    "w-[48%]",
    "w-[49%]",
    "w-[50%]",
    "w-[51%]",
    "w-[52%]",
    "w-[53%]",
    "w-[54%]",
    "w-[55%]",
    "w-[56%]",
    "w-[57%]",
    "w-[58%]",
    "w-[59%]",
    "w-[60%]",
    "w-[61%]",
    "w-[62%]",
    "w-[63%]",
    "w-[64%]",
    "w-[65%]",
    "w-[66%]",
    "w-[67%]",
    "w-[68%]",
    "w-[69%]",
    "w-[70%]",
    "w-[71%]",
    "w-[72%]",
    "w-[73%]",
    "w-[74%]",
    "w-[75%]",
    "w-[76%]",
    "w-[77%]",
    "w-[78%]",
    "w-[79%]",
    "w-[80%]",
    "w-[81%]",
    "w-[82%]",
    "w-[83%]",
    "w-[84%]",
    "w-[85%]",
    "w-[86%]",
    "w-[87%]",
    "w-[88%]",
    "w-[89%]",
    "w-[90%]",
    "w-[91%]",
    "w-[92%]",
    "w-[93%]",
    "w-[94%]",
    "w-[95%]",
    "w-[96%]",
    "w-[97%]",
    "w-[98%]",
    "w-[99%]",
    "w-[100%]",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, 250);

    if (status === "Done!") {
      clearInterval(timer);
      setProgress(100);
    }

    return () => {
      clearInterval(timer);
    };
  }, [progress, status]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-72 h-4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`h-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-[40000ms] ease-linear ${
            progress === 100 ? "w-full" : `w-[${progress}%]`
          }`}
        />
      </div>

      {status && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{status}</p>
      )}
    </div>
  );
}
