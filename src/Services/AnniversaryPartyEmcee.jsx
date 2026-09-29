import React from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiMic,
  FiStar,
  FiUsers,
  FiCheckCircle,
  FiArrowUpRight,
  FiSmile,
  FiGift,
  FiMusic,
  FiCamera,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import anniversary from "./../assets/anniversary.webp";

function AnniversaryPartyEmcee() {
  const highlights = [
    {
      icon: FiHeart,
      title: "Warm & Romantic",
      text: "Create a beautiful atmosphere filled with warmth, love and heartfelt moments that celebrate the couple's journey together.",
    },
    {
      icon: FiUsers,
      title: "Family & Friends",
      text: "Bring loved ones together through meaningful interactions, fun activities, memories and moments shared with the couple.",
    },
    {
      icon: FiStar,
      title: "Elegant Entertainment",
      text: "Balance heartfelt emotions with engaging entertainment, ensuring every part of the anniversary celebration feels special.",
    },
  ];

  const eventTypes = [
    "Wedding Anniversaries",
    "Silver Jubilee Celebrations",
    "Golden Jubilee Celebrations",
    "Milestone Anniversaries",
    "Couple Celebrations",
    "Family Anniversary Parties",
    "Vow Renewal Celebrations",
    "Surprise Anniversary Parties",
    "Romantic Anniversary Events",
  ];

  const approach = [
    {
      number: "01",
      icon: FiHeart,
      title: "Welcome & Connect",
      text: "Begin the celebration with a warm welcome that brings the couple, family and friends together to celebrate their beautiful journey.",
    },
    {
      number: "02",
      icon: FiCamera,
      title: "Relive The Memories",
      text: "Create opportunities to share stories, photographs, memories and heartfelt messages that celebrate the couple's years together.",
    },
    {
      number: "03",
      icon: FiStar,
      title: "Celebrate Their Journey",
      text: "Make the couple the centre of the celebration with meaningful introductions, special moments, entertainment and heartfelt wishes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff9fb] text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">

        {/* Background Glows */}
        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute top-10 left-[-8%] w-72 h-72 bg-pink-400/15 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-[-5%] w-80 h-80 bg-red-400/10 rounded-full blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#881337 1px, transparent 1px), linear-gradient(90deg, #881337 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100 text-pink-700 text-sm font-semibold mb-6">
                <FiHeart size={16} />
                Anniversary Party Emcee
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">

                Love.
                <br />

                <span className="bg-gradient-to-r from-pink-600 via-red-500 to-rose-700 bg-clip-text text-transparent">
                  Memories.
                </span>

                <br />

                A Lifetime Together.
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-600 max-w-xl">
                Every anniversary is a celebration of love, memories and the
                beautiful journey shared together. Trupti brings warmth,
                elegance and engaging hosting to make every anniversary
                celebration truly meaningful and unforgettable.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-9">

                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold shadow-lg shadow-pink-600/20 hover:shadow-xl hover:shadow-pink-600/30 transition-all duration-300"
                >
                  Book Trupti

                  <FiArrowUpRight
                    size={18}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>

                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold hover:border-pink-200 hover:text-pink-600 transition-all duration-300"
                >
                  Explore The Experience
                </a>

              </div>

            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >

              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-pink-500/20 via-red-400/10 to-transparent blur-2xl" />

              <div className="relative">

                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-pink-300/50" />

                <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full border border-red-300/40" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-2xl">

                  <img
                    src={anniversary}
                    alt="Trupti Shah - Anniversary Party Emcee"
                    className="w-full h-full sm:h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#210b12]/75 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">

                    <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">

                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-red-600 flex items-center justify-center text-white">
                        <FiMic size={19} />
                      </div>

                      <div>

                        <p className="text-sm font-bold text-slate-900">
                          Trupti Shah
                        </p>

                        <p className="text-xs text-slate-500">
                          Anniversary Party Emcee
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}
      <section className="relative py-20 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
              More Than Hosting
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">

              Celebrating A Beautiful Journey

              <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                {" "}
                Together
              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              An anniversary is a chance to pause, remember the beautiful
              moments and celebrate the journey that brought two people
              together. Trupti combines elegant hosting, heartfelt storytelling
              and engaging entertainment to make the celebration personal and
              memorable.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="relative py-20 lg:py-24 bg-[#fff9fb]">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid md:grid-cols-3 gap-6">

            {highlights.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative p-7 rounded-3xl bg-white border border-slate-200 hover:border-pink-200 shadow-sm hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300"
                >

                  <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-pink-600 to-red-600 flex items-center justify-center text-white shadow-lg shadow-pink-600/20">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">
                    {item.text}
                  </p>

                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiArrowUpRight
                      className="text-pink-600"
                      size={20}
                    />
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= EVENT TYPES ================= */}
      <section className="py-20 lg:py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
              Anniversary Celebrations
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Every Milestone, Beautifully Celebrated
            </h2>

            <p className="mt-5 text-slate-600 leading-7">
              From intimate anniversary gatherings to grand milestone
              celebrations, every occasion deserves a hosting experience that
              reflects the couple's unique journey.
            </p>

          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">

            {eventTypes.map((event, index) => (

              <motion.div
                key={event}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="flex items-center gap-3 p-5 rounded-2xl bg-[#fff9fb] border border-slate-200 hover:border-pink-200 hover:shadow-md transition-all duration-300"
              >

                <FiCheckCircle
                  size={20}
                  className="shrink-0 text-pink-600"
                />

                <span className="font-semibold text-slate-700">
                  {event}
                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="relative py-20 lg:py-24 bg-[#fff9fb] overflow-hidden"
      >

        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-14">

            <span className="text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
              The Anniversary Experience
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Remember. Relive. Celebrate.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {approach.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="relative p-7 rounded-3xl bg-white border border-slate-200 shadow-sm"
                >

                  <div className="flex items-center justify-between">

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-600 to-red-600 flex items-center justify-center text-white">
                      <Icon size={21} />
                    </div>

                    <span className="text-4xl font-bold text-pink-100">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">
                    {item.text}
                  </p>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 lg:py-24 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#210b12] via-[#3a101c] to-[#16080d]" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center shadow-xl shadow-pink-500/20">
              <FiHeart size={25} />
            </div>

            <h2 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">

              Celebrate The Love That Lasts

              <span className="block bg-gradient-to-r from-pink-300 to-red-300 bg-clip-text text-transparent">
                A Lifetime.
              </span>

            </h2>

            <p className="mt-6 text-white/70 text-lg leading-8 max-w-2xl mx-auto">
              Let Trupti bring warmth, elegance and personality to your
              anniversary celebration and turn your beautiful journey into a
              celebration everyone will remember.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-9 px-7 py-4 rounded-full bg-white text-[#3a101c] font-bold hover:bg-pink-50 transition-all duration-300 shadow-xl"
            >
              Enquire Now
              <FiArrowUpRight size={19} />
            </Link>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default AnniversaryPartyEmcee;