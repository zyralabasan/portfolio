// src/components/ui/Progress.js
import React from "react";
import { cn } from "../../lib/utils";

const Progress = ({ value, className }) => (
  <div className={cn("h-2 w-full rounded bg-gray-200", className)}>
    <div
      className="h-full rounded bg-blue-500 transition-all duration-500"
      style={{ width: `${value}%` }}
    />
  </div>
);

export { Progress };
