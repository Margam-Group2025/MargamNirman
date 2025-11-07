import React, { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri";

const FaqItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b">
      <div className="flex items-center justify-between py-6">
        <h2 className="h4 max-w-[300px] sm:max-w-max">{title}</h2>
        <button
          className="flex w-[44px] h-[44px] bg-accent items-center justify-center rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <RiSubtractFill
              className={`text-primary text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <RiAddFill
              className={`text-primary text-2xl transition-opacity duration-700 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
        </button>
      </div>

      {/* description */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? "max-h-[200px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-8 flex items-center max-w-[860px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
