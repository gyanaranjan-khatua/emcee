
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of events does Trupti Shah host?",
      answer:
        "Trupti Shah hosts a wide range of events including corporate events, weddings, awards and gala nights, dinner and dance events, product launches, opening ceremonies, family days, community events, special occasions and virtual events.",
    },
    {
      question: "Can I book Trupti Shah for a corporate event?",
      answer:
        "Yes. Trupti Shah provides professional emcee and event hosting services for corporate conferences, annual celebrations, award ceremonies, launches, team events and other corporate gatherings.",
    },
    {
      question: "Do you host weddings and private celebrations?",
      answer:
        "Absolutely. Wedding celebrations, receptions, sangeet nights, engagement ceremonies and other private occasions can be hosted with a personalized approach that matches the style and energy of your event.",
    },
    {
      question: "Can the hosting style be customized for my event?",
      answer:
        "Yes. The hosting approach can be adapted according to your event, audience, theme and overall atmosphere. The aim is to keep the audience engaged while maintaining the right tone throughout the event.",
    },
    {
      question: "Do you host events outside Mumbai?",
      answer:
        "Yes. Event hosting can be arranged at different locations depending on the event requirements, schedule and availability.",
    },
    {
      question: "Do you provide virtual or video hosting?",
      answer:
        "Yes. Virtual and video hosting services are available for online events, digital programs, webinars, virtual celebrations and other video-based events.",
    },
    {
      question: "How far in advance should I book an emcee?",
      answer:
        "It is recommended to enquire as early as possible, especially for weddings, large corporate events and dates during busy event seasons. Availability depends on the event date and schedule.",
    },
    {
      question: "How can I enquire about booking?",
      answer:
        "You can get in touch through the contact details provided on the website. Share your event date, venue, event type and basic requirements, and the booking process can be discussed further.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#fffafc] py-20 text-slate-900 sm:py-24 lg:py-28">
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-red-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c2185b]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c2185b] sm:text-sm">
              Frequently Asked Questions
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c2185b]" />
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-[#260d16] sm:text-4xl lg:text-5xl">
            Everything You Need{" "}
            <span className="bg-gradient-to-r from-[#c2185b] to-[#e11d48] bg-clip-text text-transparent">
              to Know
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
            Find answers to some of the most common questions about Trupti
            Shah&apos;s emcee and event hosting services.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mx-auto max-w-4xl"
        >
          <div className="overflow-hidden rounded-2xl border border-[#eadde2] bg-white/80 shadow-[0_20px_60px_rgba(38,13,22,0.06)] backdrop-blur-sm">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  className={`border-b border-[#eee3e7] last:border-b-0 ${
                    isOpen ? "bg-[#fff8fa]" : "bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="group flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-all duration-300 sm:px-7 sm:py-6"
                  >
                    <span
                      className={`text-sm font-medium leading-6 transition-colors duration-300 sm:text-base ${
                        isOpen
                          ? "text-[#c2185b]"
                          : "text-[#3b2930] group-hover:text-[#c2185b]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#c2185b] bg-[#c2185b] text-white shadow-[0_6px_18px_rgba(194,24,91,0.22)]"
                          : "border-[#e5d9de] bg-white text-slate-500 group-hover:border-[#c2185b] group-hover:text-[#c2185b]"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-6 sm:px-7">
                        <div className="flex gap-3 border-l-2 border-[#c2185b]/30 pl-4">
                          <HelpCircle
                            size={17}
                            className="mt-1 shrink-0 text-[#c2185b]"
                          />

                          <p className="max-w-3xl text-sm leading-7 text-slate-500">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-10 h-px max-w-24 bg-gradient-to-r from-[#c2185b] to-[#e11d48]"
        />
      </div>
    </section>
  );
}

export default Faq;
