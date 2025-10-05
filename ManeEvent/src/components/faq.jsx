import React, { useState } from "react";
import Footer from "./footer";

const Navbar = () => {
  return (
    <nav>
      <div className="">
        <div className="flex justify-evenly">
          <a href="/" className="hover:text-pink-600">
            Home
          </a>
          <a href="page1" className="hover:text-green-800">
            Page1
          </a>
          <a href="page2" className="hover:text-blue-600">
            Page2
          </a>
          <a href="page3" className="hover:text-red-600">
            Page3
          </a>
        </div>
      </div>
    </nav>
  );
};

const FAQItem = ({ title, answer, isOpen, onClick, index }) => {
  return (
    <div className="border">
      <button
        onClick={onClick}
        className={`flex justify-between w-full ${
          isOpen ? "bg-blue-600 text-white" : "bg-blue-50 text-slate-800"
        }`}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? "-" : "+"}</span>
      </button>

      <div
        id={`faq-answer-${index}`}
        className={`grid transition-all ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
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
      <Navbar />
      <div>
        <h1>FAQ</h1>
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
