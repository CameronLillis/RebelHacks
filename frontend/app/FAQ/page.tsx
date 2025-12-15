'use client'
import styles from './faq.module.css'
import { useState } from 'react'



// TODO:
// - Move the accordion logic/structure into a separate component
// - Simplify the logic of the toggle function make it adaptable/easily changeable
// - Fill out the faq.module.css to deal with more custom stuff related to my page
// - Reduce the logic in the page mostly simple tailwind and html


interface Question {
  question: string;
  answer: string;
}


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

      <div className={`w-full max-w-2xl bg-[#111435] border border-[#FEA70A]/40 rounded-xl overflow-hidden`}>

        <div className="text-4xl text-center text-[#FEA70A] border-[#FEA70A]/20 font-bold py-6 border-b">
          Frequently Asked Questions
        </div>

        {faqQuestions.map((q, i) => (
          <div key={q.question} className="border-b border-[#FEA70A]/20 ">

            <button
              onClick={() => handleToggle(i)}
              className="flex items-center w-full text-left hover:bg-[#1a1f4d] p-4 "
            >
              <div className="flex-1 font-bold text-[#FEA70A]">
                {q.question}
              </div>

              <div className="w-4 h-4 shrink-0">
                {openIndex === i ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} viewBox="0 0 512 512"><path d="M112 328l144-144 144 144"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className={styles.chevronIcon} viewBox="0 0 512 512"><path d="M112 184l144 144 144-144"/></svg>
                )}
              </div>
            </button>

            {openIndex === i && (
              <p className="p-4 pt-0">
                {q.answer}
              </p>
            )}

          </div>
        ))}
        
      </div>
    </div>
  );
}