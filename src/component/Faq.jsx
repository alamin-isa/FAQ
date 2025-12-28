import star from "../assets/images/icon-star.svg";
import data from "../../data.js";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="z-50 max-w-md shadow-2xl mx-auto p-6 rounded-2xl">
      <header className="flex gap-3 mb-3 items-center">
        <img src={star} alt="star" />
        <h1 className="font-bold text-black text-4xl">FAQs</h1>
      </header>

      <main>
        {data.map(({ question, answer }, index) => (
          <div className="py-2 grid" key={index}>
            <button
              onClick={() => handleToggle(index)}
              className=" flex justify-between gap-4 py-1.5 cursor-pointer"
            >
              <h4 className="font-bold text-sm">{question}</h4>
              <span
                className={` w-6 h-6 rounded-full text-white flex justify-center items-center ${
                  openIndex === index ? "bg-black" : "bg-purple-600"
                }`}
              >
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            <p className="text-gray-400 text-sm text-justify border-b pb-1 border-gray-200">
              {openIndex === index && answer}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Faq;
