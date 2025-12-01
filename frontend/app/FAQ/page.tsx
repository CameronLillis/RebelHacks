'use client'
import styles from './faq.module.css'
import { useState } from 'react'

interface Question {
  question: string;
  answer: string;
}

// TODO:
// - Move the accordion logic/structure into a separate component
// - Simplify the logic of the toggle function make it adaptable/easily changeable
// - Fill out the faq.module.css to deal with more custom stuff related to my page
// - Reduce the logic in the page mostly simple tailwind and html


const faqQuestions: Question[] = [
  {
    question: "What is a hackathon?",
    answer: "A hackathon is an event where individuals come together to collaborate on software or hardware projects within a set time frame."
  },
  {
    question: "Is there a theme?",
    answer: "Yes, each hackathon may have a specific theme or focus area, such as healthcare, education, or sustainability."
  },
  {
    question: "How many people can be in a group?",
    answer: "Group sizes can vary, but typically teams consist of 2 to 5 members."
  },
  {
    question: "Who can join?",
    answer: "Any UNLV and CSN student enrolled during the spring semester can attend. All majors are welcome."
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);  // null indicates no question is open

  // If the prevIndex is the index selected, close it; otherwise, open the selected index
  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex min-h-screen items-start justify-center w-full bg-[#111435] p-4 pt-24">

      <div className={`w-full max-w-2xl bg-[#111435]/70 border border-[#FEA70A]/40 rounded-xl ${styles['shadow-border']} overflow-hidden`}>

        <div className="md:text-5xl md:py-8 text-center text-[#FEA70A] border-[#FEA70A]/20 text-3xl font-extrabold py-6 border-b drop-shadow-[0_0_10px_#FEA70A80]">
          Frequently Asked Questions
        </div>

        {faqQuestions.map((q, i) => (
          <div key={q.question} className="border-b border-[#FEA70A]/20 ">

            <button
              onClick={() => handleToggle(i)}
              className="flex items-center w-full text-left hover:bg-[#1a1f4d]/60 p-4 "
            >
              <div className="flex-1 font-bold text-[#FEA70A]">
                {q.question}
              </div>

              <div
                className={`transform rotate-45 shrink-0 border-[#FEA70A] w-4 h-4 ${
                  openIndex === i
                    ? "bg-[#FEA70A]/10 border-2"
                    : "border-r-2 border-b-2 -translate-y-1"
                }`}
              />
            </button>

            {openIndex === i && (
              <p className="text-[#e8e8e8] p-4 pt-0">
                {q.answer}
              </p>
            )}

          </div>
        ))}
        
      </div>
    </div>
  );
}