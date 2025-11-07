import React from "react";
import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";

const faqItemsData = [
  {
    title: "What is your return policy?",
    content:
      "Our return policy allows returns within 30 days of purchase with a valid receipt.",
  },
  {
    title: "How to Visit Our Project?",
    content:
      "You can visit our project by scheduling a tour through our website or contacting our support team.",
  },
  {
    title: "Do you offer customer support?",
    content:
      "Yes, we offer 24/7 customer support through various channels including phone, email, and live chat.",
  },
  {
    title: "Where are you located?",
    content:
      "We are located in San Francisco, California, with offices worldwide.",
  },
  {
    title: "What payment methods do you accept?",
    content:
      "We accept various payment methods including credit cards, PayPal, and bank transfers.",
  },
];

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center max-w-[540px] mx-auto xl:mb-20">
          <Pretitle text="FAQ" center />
          <h2 className="h2 mb-3">
            Got Questions? We've Got You Covered
          </h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From project planning to final touches, we've answered the most
            common questions to help you make informed decisions.
          </p>
        </div>

        {/* FAQ items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => (
            <li key={index}>
              <FaqItem title={item.title} description={item.content} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
