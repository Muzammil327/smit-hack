"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Error",
  description: "Error",
};
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="errorpage ">
      <h1 className="error">Global Error</h1>
      <div className="page">Something went wrong!</div>
      <button
        className="py-2 px-6 bg-blue-400 text-white text-base"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
