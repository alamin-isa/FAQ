import star from "../assets/images/icon-star.svg";
import data from "../../data.js";
import { useState, useRef } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const buttonRef = useRef([]);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (event, index) => {
    console.log(event);
    console.log(index);
    const total = data.length;
    switch (event.key) {
      case "ArrowUp":
        event.preventDefault();
        buttonRef.current[(index - 1 + total) % total]?.focus();

        break;
      case "ArrowDown":
        event.preventDefault();
        buttonRef.current[(index + 1 + total) % total]?.focus();
        break;
      case "End":
        event.preventDefault();
        buttonRef.current[total - 1]?.focus();
        break;
      case "Home":
        event.preventDefault();
        buttonRef.current[0]?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="z-50 max-w-md shadow-2xl mx-auto p-6 rounded-2xl"
      role="region"
      aria-labelledby="faq-heading"
    >
      <header className="flex gap-3 mb-3 items-center">
        <img src={star} alt="star" aria-hidden="true" />
        <h1 className="font-bold text-black text-4xl">FAQs</h1>
      </header>

      <main>
        {data.map(({ question, answer }, index) => {
          const isOpen = openIndex === index;
          const buttonId = `faq-button-${index}`;
          const panelId = `faq-panel-${index}`;
          return (
            <div className="py-2 grid" key={index}>
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between gap-4 py-1.5 cursor-pointer"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onKeyDown={(event) => handleKeyDown(event, index)}
                ref={(element) => (buttonRef.current[index] = element)}
              >
                <h4 className="font-bold text-sm">{question}</h4>
                <span
                  className={` w-6 h-6 rounded-full text-white flex justify-center items-center ${
                    openIndex === index ? "bg-black" : "bg-purple-600"
                  }`}
                  aria-hidden="true"
                >
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <p
                className="text-gray-400 text-sm text-justify border-b pb-1 border-gray-200"
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
              >
                {openIndex === index && answer}
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Faq;

// frontendmentor faq
