import React from "react";
import { AccodionItem } from "./AccodionItem";
export const Accordian = () => {
  let count = 0;
  const faqs = [
    {
      question: "What is Cyber Tronic?",
      answer:
        "An Workshop organized by IO Dump Technical Club from Zeal College of Engineering and Research which will focuses on creating awareness about our privacy and security.",
    },
    {
      question: "Who can participate in this Workshop? Is there any fee?",
      answer:
        "Anyone who will register for this Workshop can participate in this Workshop. This Workshop is totaly free of cost.",
    },
    {
      question: "What games will be played? What are the rewards?",
      answer:
        "As this Workshop is meant for interactive awareness . We'll be organizing some fun and learn games related to Cyber Space. Rewards will be given to the winner at the end of the Workshop. Rewards will be disclosed at that time only.",
    },
  ];
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {faqs.map((faq) => {
        return <AccodionItem faq={faq} index={count++} key={count} />;
      })}
    </div>
  );
};
