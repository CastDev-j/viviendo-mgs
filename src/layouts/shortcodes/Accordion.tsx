import React, { useState } from "react";

const Accordion = ({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`border border-border rounded-lg overflow-hidden ${className}`}
    >
      <button
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left font-medium hover:bg-theme-light/40 transition-colors"
        onClick={() => setShow((s) => !s)}
        aria-expanded={show}
      >
        <span>{title}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-300 ${
            show ? "rotate-180" : "rotate-0"
          }`}
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
          ></path>
        </svg>
      </button>
      <div
        className={`px-4 transition-[max-height,opacity] duration-300 ease-out ${show ? "opacity-100 py-3" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
