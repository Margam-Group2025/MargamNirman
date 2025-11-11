import React from "react";
import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";

const faqItemsData = [
  {
    title: "What kind of projects does Margam Nirman handle?",
    content:
      "We specialize in residential, commercial, and farm-based projects, offering complete construction and interior solutions.",
  },
  {
    title: "Do you provide turnkey construction services?",
    content:
      "Yes, we manage everything from design to handover — including materials, labor, and supervision.",
  },
  {
    title: "Do you offer customer support?",
    content:
      "Yes, we offer 24/7 customer support through various channels including phone, email, and live chat.",
  },
  {
    title: "Can Margam Nirman handle pan-India projects?",
    content:
      "Absolutely. We’re headquartered in Odisha with an expansion plan for all major Indian cities.",
  },
  {
    title: "Do you offer interior design for existing homes?",
    content:
      "Yes, our design team provides full interior renovation and customization for new or existing homes.",
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
