"use client";

import { ChevronLeftIcon } from "../Icons/ChevronLeftIcon";

export function BackButton() {
  const handleClick = () => {
    history.back();
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center mt-8 mb-2 -ml-2 hover:text-gray-600"
    >
      <ChevronLeftIcon /> Go back
    </button>
  );
}
