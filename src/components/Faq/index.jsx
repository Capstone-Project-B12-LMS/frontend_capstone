import { useState } from "react";

const Faq = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <h3 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex justify-between items-center p-5 w-full font-medium text-left border-b border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 bg-white  text-gray-900"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
          onClick={() => setIsActive(!isActive)}
        >
          <span>{title}</span>
          {isActive ? (
            <svg
              data-accordion-icon=""
              className="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              data-accordion-icon=""
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </h3>
      {isActive && (
        <div
          id="accordion-collapse-body-1"
          className=""
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className="p-5 border-gray-200 ">
            <p className="mb-2 text-gray-500 ">{content}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Faq;
