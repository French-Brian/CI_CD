import React, { useState } from "react";
import Footer from "./footer";
import CheckHeader from "./checkHeader";

const FAQItem = ({ title, answer, isOpen, onClick, index }) => {
  return (
    <div className="border button">
      <button
        onClick={onClick}
        className={`buttonText ${
          isOpen ? "bg-green text-black" : "bg-[#2b6150] text-white "
        }`}
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
      </button>

      <div
        id={`faq-answer-${index}`}
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 text-left">{answer}</div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [dropDown, setDropDown] = useState(null);

  const faqs = [
    {
      title: "Is Mane Event free to use?",
      answer:
        "Yes. Creating an account and browsing services is completely free.",
    },
    {
      title: "How do I book an appointment?",
      answer:
        "After creating an account, you can search for providers, view their availability, select your preferred service, and complete the booking through our secure checkout process.",
    },
    {
      title: "What happens if a provider cancels my appointment?",
      answer:
        "If a provider cancels, you’ll receive an automatic notification and refund. You can then rebook with the same or another professional.",
    },
    {
      title: "What payment methods are accepted?",
      answer:
        "Mane Event accepts major credit/debit cards and digital payments through our secure payment processor.",
    },
    {
      title: "Do I need to confirm my email before booking?",
      answer:
        "Yes, all users must verify their email to ensure security and receive booking confirmations and reminders.",
    },
  ];

  return (
    <>
      <CheckHeader />
      <div className="mt-32">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-900">
          FAQ
        </h1>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            title={faq.title}
            answer={faq.answer}
            isOpen={dropDown === index}
            onClick={() => setDropDown(dropDown === index ? null : index)}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
