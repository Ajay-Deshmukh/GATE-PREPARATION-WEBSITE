import React, { useState } from "react";

export const Accordion = ({ question, answer, index }) => {
  const [show, setShow] = useState(false);
  // const [activeIndex,setactiveIndex]=useState(false)
  // const [show,setShow] = useState(activeIndex == index )
  return (
    <div>
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
          onClick={
            () => setShow(!show)
            // &&  setactiveIndex(show ? null : index)
          }
        >
          <span class="flex items-center">
            <svg
              class="w-5 h-5 me-2 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>{" "}
            {question}
          </span>
          {show && (
            <svg
              data-accordion-icon
              class="w-3 h-3 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          )}
          {!show && (
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          )}
        </button>
      </h2>
      <div
        id="accordion-open-body-1"
        class={
          // !activeIndex == index
          !show ? "hidden" : ""
        }
        aria-labelledby="accordion-open-heading-1"
      >
        <div class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p class="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
        </div>
      </div>
    </div>
  );
};
