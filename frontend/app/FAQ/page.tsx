'use client'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

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
    }
  ];

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setIsOpen(true); 
          setIndex(0);
        }}
      >
        {
          1
        }
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setIsOpen(true); 
          setIndex(1);
        }}
      >
        {
          2
        }
      </button>
      
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setIsOpen(true); 
          setIndex(2);
        }}
      >
        {
          3
        }
      </button>

      <div className="flex flex-col border border-white-500 p-4 rounded-lg">
        <div className="flex flex-col font-bold border-t border-gray-500 p-4 m-2">
          What is a hackathon? 
        </div>
        {isOpen && index === 0 && faqQuestions.at(index)?.answer}

        <div className="flex flex-col font-bold border-t border-gray-500 p-4 m-2">
          Is there a theme?
        </div>
          {isOpen && index === 1 && faqQuestions.at(index)?.answer}
        <div className="flex flex-col font-bold border-t border-gray-500 p-4 m-2">
          How many people can be in a group?
        </div>
        {isOpen && index === 2 && faqQuestions.at(index)?.answer}
      </div>
    </>
  );
}