import React from 'react';
import Title from './Title';
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  const policies = [
    {
      icon: <RiExchangeFundsLine className="text-4xl md:text-5xl text-blue-300" />,
      title: "Easy Exchange Policy",
      description: "Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.",
    },
    {
      icon: <TbRosetteDiscountCheckFilled className="text-4xl md:text-5xl text-blue-300" />,
      title: "7 Days Return Policy",
      description: "Shop with Confidence – 7 Days Easy Return Guarantee.",
    },
    {
      icon: <BiSupport className="text-4xl md:text-5xl text-blue-300" />,
      title: "Best Customer Support",
      description: "Trusted Customer Support – Your Satisfaction Is Our Priority.",
    },
  ];

  return (
    <section className="w-full min-h-screen md:min-h-[70vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center py-16 px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <Title text1="OUR" text2="POLICY" />
        <p className="text-sm md:text-lg text-blue-100 mt-2">
          Customer-Friendly Policies – Committed to Your Satisfaction and Safety.
        </p>
      </div>

      {/* Policy Cards */}
      <div className="w-full flex flex-wrap justify-center items-stretch gap-8 max-w-7xl">
        {policies.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffffff0d] backdrop-blur-md border border-[#2a2a2a] rounded-xl shadow-lg p-6 w-full sm:w-[80%] md:w-[300px] flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-blue-500/30 duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-[#a5e8f7] mb-2">{item.title}</h3>
            <p className="text-sm md:text-base text-blue-100">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurPolicy;
