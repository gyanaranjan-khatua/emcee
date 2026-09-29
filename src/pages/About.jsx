
import React from "react";
import { motion } from "framer-motion";
import {
  Mic2,
  Sparkles,
  Users,
  Heart,
  Trophy,
  BriefcaseBusiness,
  MessageCircle,
  Zap,
  ShieldCheck,
  WandSparkles,
  Radio,
  Target,
  ArrowUpRight,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import pic4 from "../assets/pic4.jpeg";
import trupti from "../assets/truptiemcee.jpeg";
import pic2 from "../assets/gallery/g1.webp";

function About() {
  const expertise = [
    {
      icon: BriefcaseBusiness,
      title: "Corporate Events",
      text: "Professional hosting that keeps business events engaging, polished and on schedule.",
    },
    {
      icon: Heart,
      title: "Weddings",
      text: "Warm, energetic and personal hosting that brings every celebration to life.",
    },
    {
      icon: Trophy,
      title: "Awards & Gala",
      text: "Elegant stage presence and seamless transitions for prestigious occasions.",
    },
    {
      icon: Sparkles,
      title: "Product Launches",
      text: "Creating excitement and maintaining audience energy around important launches.",
    },
    {
      icon: Users,
      title: "Social Celebrations",
      text: "Interactive hosting designed to make guests feel involved and connected.",
    },
    {
      icon: Mic2,
      title: "Public Events",
      text: "Confident communication and audience engagement across large-scale events.",
    },
  ];

  const philosophy = [
    {
      number: "01",
      title: "Connect",
      text: "Understanding the audience and creating a genuine connection from the very beginning.",
    },
    {
      number: "02",
      title: "Energize",
      text: "Bringing the right energy to the stage while adapting naturally to every event.",
    },
    {
      number: "03",
      title: "Engage",
      text: "Turning audiences from passive spectators into an active part of the experience.",
    },
    {
      number: "04",
      title: "Remember",
      text: "Creating moments that stay with guests long after the event comes to an end.",
    },
  ];

  const qualities = [
    {
      icon: Radio,
      title: "Confident Stage Presence",
      text: "A composed and engaging presence that commands attention without overpowering the event.",
    },
    {
      icon: MessageCircle,
      title: "Audience Engagement",
      text: "Interactive hosting that keeps audiences connected, involved and entertained.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Communication",
      text: "Clear, polished communication designed for both intimate celebrations and corporate stages.",
    },
    {
      icon: WandSparkles,
      title: "Personalized Hosting",
      text: "Every event receives a hosting approach tailored to its people, purpose and personality.",
    },
    {
      icon: Target,
      title: "Smooth Event Flow",
      text: "Helping transitions, announcements and stage moments feel natural and well coordinated.",
    },
    {
      icon: Zap,
      title: "Adaptable Energy",
      text: "Knowing when to elevate the energy, when to slow down and when to simply let the moment breathe.",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Events Hosted" },
    { number: "50K+", label: "Guests Entertained" },
    { number: "5.0", label: "Client Experience" },
  ];

  return (
    <main className="overflow-hidden bg-[#fff9fb] text-slate-900">
      {/* =====================================================
          ABOUT HERO
      ===================================================== */}
      <section className="relative min-h-[75vh] overflow-hidden bg-[#16080d]">
        {/* Glows */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-pink-600/20 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-red-600/20 blur-[140px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto grid min-h-[75vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-pink-400">
              <span className="h-px w-8 bg-pink-500" />
              About Trupti Shah
            </span>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              The Voice Behind
              <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-red-500 bg-clip-text text-transparent">
                Your Moments.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Trupti Shah is a professional emcee and event host who brings
              confidence, warmth and energy to every stage. From corporate
              gatherings and awards to weddings and celebrations, her approach
              is built around creating an experience that feels natural,
              engaging and memorable.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-900/20 transition-all hover:scale-[1.03]"
              >
                Book Trupti
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-pink-500/30 to-red-600/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
              <img
                src={pic4}
                alt="Trupti Shah - Professional Emcee"
                className="h-[430px] w-full rounded-[1.5rem] object-cover object-top sm:h-[500px]"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-red-600 text-white">
                    <Mic2 size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Professional Emcee
                    </p>
                    <p className="text-xs text-white/50">
                      Connecting people through moments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          ABOUT TRUPTI
      ===================================================== */}
      <section className="relative bg-[#fff9fb] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-pink-200/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-pink-100 bg-white p-2 shadow-[0_25px_70px_rgba(190,24,93,0.10)]">
              <img
                src={pic2}
                alt="Trupti Shah"
                className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[500px]"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-pink-600">
              About The Host
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              More Than A Microphone.
              <span className="block bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                It's About The Moment.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                Great hosting is not simply about speaking on stage. It is
                about understanding people, reading the room and knowing how
                to make every moment feel effortless.
              </p>

              <p>
                Trupti brings a natural combination of professionalism,
                personality and audience connection to every event. Whether
                the atmosphere calls for elegance, excitement, warmth or
                energy, her hosting style adapts to the occasion.
              </p>

              <p>
                From the first introduction to the final goodbye, the goal is
                simple — help create an event that people genuinely enjoy and
                remember.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-pink-500 to-red-500" />
              <p className="text-sm font-semibold text-slate-800">
                Trupti Shah
              </p>
              <span className="text-xs text-slate-400">
                Professional Emcee
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          HOSTING PHILOSOPHY
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#16080d] px-6 py-20 sm:py-24 lg:px-8">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-pink-600/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-red-600/15 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
              Hosting Philosophy
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Every Audience Is{" "}
              <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
                Different.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55 sm:text-base">
              The best hosting experience comes from understanding the room,
              adapting to the occasion and making people feel part of the
              story.
            </p>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white/[0.035] p-7 transition-all duration-300 hover:bg-white/[0.07]"
              >
                <span className="text-xs font-bold tracking-widest text-pink-500">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {item.text}
                </p>

                <div className="mt-6 h-[2px] w-7 bg-gradient-to-r from-pink-500 to-red-500 transition-all duration-300 group-hover:w-14" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE & EXPERTISE
      ===================================================== */}
      <section className="bg-[#fff9fb] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-600">
              Experience & Expertise
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Comfortable On{" "}
              <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                Every Stage
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base">
              From professional corporate environments to vibrant personal
              celebrations, every event gets a thoughtful hosting experience.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-pink-100 bg-white p-7 shadow-[0_10px_40px_rgba(190,24,93,0.04)] transition-all duration-300 hover:border-pink-200 hover:shadow-[0_18px_50px_rgba(190,24,93,0.10)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-red-100 text-pink-600 transition-transform group-hover:scale-105">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT MAKES THE EXPERIENCE DIFFERENT
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#f8eef2] px-6 py-20 sm:py-24 lg:px-8">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-pink-300/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-600">
                The Difference
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                What Makes The
                <span className="block bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                  Experience Different?
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                A great emcee does more than follow a script. The role is to
                understand the atmosphere, connect the audience and help every
                part of the event flow naturally.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {qualities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="rounded-2xl border border-white bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-100"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-600 to-red-600 text-white">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-4 text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#16080d] px-6 py-12 sm:py-14 lg:px-8">
        <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-pink-600/20 blur-[100px]" />
        <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-red-600/20 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-xl lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`px-5 py-7 text-center sm:py-8 ${
                  index !== 3
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                } ${index === 1 ? "border-r border-white/10" : ""}`}
              >
                <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                  {stat.number}
                </div>

                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.12em] text-white/50 sm:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PERSONAL / BEHIND THE MIC
      ===================================================== */}
      <section className="bg-[#fff9fb] px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-pink-100 bg-white p-2 shadow-xl shadow-pink-100/40">
              <img
                src={trupti}
                alt="Trupti Shah behind the microphone"
                className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[500px]"
              />
            </div>

            <div className="absolute -bottom-5 right-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-[#16080d]/90 px-5 py-4 text-white shadow-xl backdrop-blur-xl">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-red-600">
                <Mic2 size={17} />
              </div>

              <div>
                <p className="text-xs font-semibold">Behind The Mic</p>
                <p className="text-[10px] text-white/50">
                  Where every story begins
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-600">
              Beyond The Stage
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              The Person Behind{" "}
              <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                The Mic
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
              Every event is different, and that is what makes hosting so
              exciting. The conversations, the people, the unexpected moments
              and the energy of a live audience are what make every stage
              unique.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Behind the microphone is a host who believes that professionalism
              and personality can exist together — creating an atmosphere that
              feels polished while still being genuinely human.
            </p>

            <div className="mt-8 flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={17}
                  fill="currentColor"
                  className="text-pink-500"
                />
              ))}

              <span className="ml-2 text-sm font-medium text-slate-600">
                Creating memorable moments
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#16080d] px-6 py-20 sm:py-24 lg:px-8">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-600/20 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-400">
              Let's Create Something Memorable
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Event Deserves More
              <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-red-500 bg-clip-text text-transparent">
                Than Just A Host.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Let's create an atmosphere where your audience feels connected,
              your event flows naturally and every moment has a voice.
            </p>

            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-pink-950/30 transition-all duration-300 hover:scale-[1.03]"
            >
              Book Trupti
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default About;

