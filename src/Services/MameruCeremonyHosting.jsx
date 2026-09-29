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
} from "react-icons/fi";
import { Link } from "react-router-dom";

import mameru from "./../assets/mameru.webp";

function MameruCeremonyHosting() {
  const highlights = [
    {
      icon: FiHeart,
      title: "Warm & Traditional",
      text: "Celebrate the beautiful traditions of the Mameru ceremony with warmth, elegance and genuine connection between both families.",
    },
    {
      icon: FiGift,
      title: "Family-Centred Celebration",
      text: "Bring family members together through meaningful introductions, special moments, rituals and heartfelt interactions.",
    },
    {
      icon: FiSmile,
      title: "Fun & Engaging",
      text: "Add the right amount of laughter, interaction and entertainment while respecting the cultural significance of the ceremony.",
    },
  ];

  const eventTypes = [
    "Traditional Mameru Ceremony",
    "Family Welcomes",
    "Bride & Groom Moments",
    "Gift & Blessing Ceremonies",
    "Family Introductions",
    "Traditional Rituals",
    "Family Performances",
    "Interactive Family Games",
    "Special Announcements",
  ];

  const approach = [
    {
      number: "01",
      icon: FiHeart,
      title: "Welcome The Families",
      text: "Create a warm beginning by welcoming both families and setting the perfect atmosphere for this meaningful wedding tradition.",
    },
    {
      number: "02",
      icon: FiGift,
      title: "Celebrate The Tradition",
      text: "Guide guests through important rituals, blessings and special moments while keeping the ceremony natural and engaging.",
    },
    {
      number: "03",
      icon: FiUsers,
      title: "Bring Everyone Together",
      text: "Create opportunities for family interaction, laughter and memorable moments that celebrate the bond between both families.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fff9fb] text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">

        {/* Background */}
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
                <FiGift size={16} />
                Mameru Ceremony Anchor
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">

                Tradition.
                <br />

                <span className="bg-gradient-to-r from-pink-600 via-red-500 to-rose-700 bg-clip-text text-transparent">
                  Family.
                </span>

                <br />

                Beautiful Memories.
              </h1>

              <p className="mt-7 text-lg leading-8 text-slate-600 max-w-xl">
                The Mameru ceremony is a beautiful celebration of family,
                blessings and traditions. Trupti brings warmth, elegance and
                engaging hosting to make every ritual, family interaction and
                special moment feel meaningful and memorable.
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
                    src={mameru}
                    alt="Trupti Shah - Mameru Ceremony Anchor"
                    className="w-full h-[420px] sm:h-[500px] object-cover"
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
                          Mameru Ceremony Anchor
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

              Making Your Mameru Ceremony

              <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                {" "}
                Truly Meaningful
              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The Mameru ceremony brings families together through traditions,
              blessings and heartfelt moments. Trupti creates a beautifully
              balanced experience that respects the importance of the ceremony
              while keeping guests connected, comfortable and engaged.
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
              Mameru Celebrations
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Every Tradition. Every Family Moment.
            </h2>

            <p className="mt-5 text-slate-600 leading-7">
              From welcoming both families to celebrating blessings and
              special traditions, every part of your Mameru ceremony deserves
              to be beautifully hosted.
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
              The Mameru Experience
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">
              Welcome. Honour. Celebrate.
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
              <FiGift size={25} />
            </div>

            <h2 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">

              Your Mameru Ceremony Deserves

              <span className="block bg-gradient-to-r from-pink-300 to-red-300 bg-clip-text text-transparent">
                A Beautiful Celebration.
              </span>

            </h2>

            <p className="mt-6 text-white/70 text-lg leading-8 max-w-2xl mx-auto">
              Let Trupti bring warmth, elegance and engaging hosting to your
              Mameru ceremony, creating meaningful memories for the couple and
              their families.
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

export default MameruCeremonyHosting;