"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" fixed flex flex-col justify-center items-center bg-red-500 w-[800px] h-[400px] p-5 rounded-md shadow-lg text-center text-gray-100 font-semibold">
      <h2 className="">Something went wrong!</h2>
      <h2>{error?.message}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-yellow-300 text-red-700 px-2 py-1 rounded-md shadow-sm mt-10"
      >
        Try again
      </button>
    </div>
  );
}
