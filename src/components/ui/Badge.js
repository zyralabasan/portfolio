// src/components/ui/Badge.js
import React from "react";
import { cn } from "../../lib/utils";

const Badge = ({ variant = "default", className, ...props }) => {
  const styles = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-blue-500 text-white",
    destructive: "bg-red-500 text-white",
    outline: "border border-gray-300 text-gray-800",
  };
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium", styles[variant], className)}
      {...props}
    />
  );
};

export { Badge };
