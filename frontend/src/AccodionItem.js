import React from "react";

export const AccodionItem = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${props.index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${props.index}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${props.index}`}
        >
          {props.faq.question}
        </button>
      </h2>
      <div
        id={`flush-collapse${props.index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${props.index}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">{props.faq.answer}</div>
      </div>
    </div>
  );
};
