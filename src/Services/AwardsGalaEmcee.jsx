
import React from "react";
import { motion } from "framer-motion";
import {
  Mic2,
  Trophy,
  Star,
  Sparkles,
  Users,
  Award,
  ArrowUpRight,
  CheckCircle2,
  CalendarDays,
  Crown,
} from "lucide-react";
import { Link } from "react-router-dom";
import awardsimg from "./../assets/gallery/g7.webp"
function AwardsGalaEmcee() {
  const highlights = [
    {
      icon: Trophy,
      title: "Prestigious Presentations",
      text: "Create the right sense of anticipation and excitement around every award, recognition and special presentation.",
    },
    {
      icon: Star,
      title: "Elegant Stage Presence",
      text: "A polished and confident hosting style designed to complement the prestige and atmosphere of your gala event.",
    },
    {
      icon: Users,
      title: "Audience Engagement",
      text: "Keep guests connected and involved while maintaining the perfect balance between entertainment and ceremony.",
    },
  ];

  const eventTypes = [
    "Corporate Awards Nights",
    "Gala & Recognition Events",
    "Employee Appreciation Events",
    "Industry Awards",
    "Achievement Ceremonies",
    "Luxury Gala Evenings",
  ];

  return (
    <div className="bg-[#fff9fb] text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[88vh] flex items-center px-6 sm:px-10 lg:px-20 py-20 overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-32 w-[440px] h-[440px] bg-pink-300/25 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-red-300/20 rounded-full blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#991b1b 1px, transparent 1px), linear-gradient(90deg, #991b1b 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pink-100 shadow-sm mb-7">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-red-600" />

              <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-slate-600">
                Awards & Gala Emcee
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
              <span className="block text-slate-900">
                Celebrate
              </span>

              <span className="block bg-gradient-to-r from-pink-600 via-rose-600 to-red-700 bg-clip-text text-transparent">
                Every Achievement.
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              Give every award, achievement and unforgettable moment the
              stage presence it deserves with a polished and engaging gala
              emcee.
            </p>

            <p className="mt-4 text-slate-500 leading-relaxed max-w-xl">
              Trupti Shah brings elegance, energy and confident stage
              communication to awards nights, recognition ceremonies and
              prestigious gala events.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-600 to-red-700 text-white font-semibold shadow-lg shadow-pink-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Book Trupti

                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>

              <a
                href="#awards-experience"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-200 bg-white/80 text-slate-700 font-semibold hover:border-pink-200 hover:text-pink-600 transition-all"
              >
                Explore Service
              </a>

            </div>

            {/* Trust line */}
            <div className="flex items-center gap-4 mt-9">

              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-pink-100 border-2 border-white flex items-center justify-center text-xs font-bold text-pink-700">
                  A
                </div>

                <div className="w-9 h-9 rounded-full bg-red-100 border-2 border-white flex items-center justify-center text-xs font-bold text-red-700">
                  G
                </div>

                <div className="w-9 h-9 rounded-full bg-rose-100 border-2 border-white flex items-center justify-center text-xs font-bold text-rose-700">
                  E
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Elegance. Recognition. Celebration.
                </p>

                <p className="text-xs text-slate-500">
                  Making every award moment feel extraordinary
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-pink-500/20 via-transparent to-red-600/20 blur-2xl" />

            <div className="relative max-w-[540px] mx-auto">

              {/* Decorative frames */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-pink-200/70 rotate-2" />

              <div className="absolute -inset-6 rounded-[3rem] border border-red-100/70 -rotate-2" />

              <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-2xl shadow-pink-900/10">

                <img
                  src={awardsimg}
                  alt="Trupti Shah - Awards and Gala Emcee"
                  className="w-full h-[520px] sm:h-[600px] object-cover rounded-[2.1rem]"
                />

                {/* Floating profile card */}
                <div className="absolute inset-x-7 bottom-7">

                  <div className="bg-white/90 backdrop-blur-xl border border-white/70 rounded-2xl p-4 shadow-xl flex items-center gap-4">

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600 to-red-700 flex items-center justify-center text-white shrink-0">
                      <Trophy size={23} />
                    </div>

                    <div>
                      <p className="font-bold text-slate-900">
                        Trupti Shah
                      </p>

                      <p className="text-sm text-slate-500">
                        Awards & Gala Emcee
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        id="awards-experience"
        className="relative py-20 sm:py-24 px-6 sm:px-10 lg:px-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mx-auto text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
              The Awards Experience
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Every Winner Has A Story.
              <span className="block bg-gradient-to-r from-pink-600 to-red-700 bg-clip-text text-transparent">
                Make The Moment Count.
              </span>
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Awards and gala events are about recognizing people,
              achievements and milestones. The right emcee ensures every
              announcement, introduction and celebration receives the
              attention it deserves.
            </p>

          </div>

          {/* Highlight cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-pink-100 to-red-100 hover:from-pink-400 hover:to-red-500 transition-all"
                >
                  <div className="h-full rounded-[1.45rem] bg-white p-7">

                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-500 leading-relaxed">
                      {item.text}
                    </p>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= EVENT TYPES ================= */}
      <section className="relative py-20 sm:py-24 px-6 sm:px-10 lg:px-20 bg-[#fff7fa] overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/20 blur-[100px] rounded-full" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
              Perfect For
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
              Events Worth
              <span className="block bg-gradient-to-r from-pink-600 to-red-700 bg-clip-text text-transparent">
                Celebrating.
              </span>
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              Whether you're recognizing outstanding employees, celebrating
              industry achievements or hosting an elegant gala evening,
              every part of the experience deserves a confident voice.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 text-pink-600 font-semibold group"
            >
              Plan Your Event

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>

          </div>

          <div className="grid sm:grid-cols-2 gap-4">

            {eventTypes.map((event, index) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
                className="group bg-white border border-pink-100 rounded-2xl p-5 flex items-center gap-4 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-100/50 transition-all"
              >

                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center text-pink-600 shrink-0">
                  <CheckCircle2 size={19} />
                </div>

                <span className="font-semibold text-slate-800">
                  {event}
                </span>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= HOSTING APPROACH ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-20 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
              The Hosting Approach
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900">
              Every Award.
              <span className="block text-pink-600">
                Every Applause. Every Moment.
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {/* Step 1 */}
            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center">
                <Crown size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Set The Stage
              </h3>

              <p className="mt-3 text-slate-500 leading-relaxed">
                Establish the right tone and anticipation before every major
                announcement, presentation and award.
              </p>

            </div>

            {/* Step 2 */}
            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                <Award size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Celebrate Excellence
              </h3>

              <p className="mt-3 text-slate-500 leading-relaxed">
                Give nominees, winners and special guests the recognition
                they deserve with engaging stage presentation.
              </p>

            </div>

            {/* Step 3 */}
            <div className="text-center">

              <div className="mx-auto w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Sparkles size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Create The Moment
              </h3>

              <p className="mt-3 text-slate-500 leading-relaxed">
                Build excitement, encourage applause and turn each
                recognition into a memorable experience.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative px-6 sm:px-10 lg:px-20 py-20 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#210b12] via-[#3a101c] to-[#16080d]" />

        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-pink-500/20 blur-[120px]" />

        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-red-500/20 blur-[120px]" />

        <div className="relative max-w-5xl mx-auto text-center text-white">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-pink-200 text-sm font-semibold">
            <CalendarDays size={16} />
            Let's Celebrate Excellence
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Give Every Achievement
            <span className="block text-pink-300">
              Its Moment In The Spotlight.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/70 text-lg leading-relaxed">
            From the first announcement to the final applause, let Trupti
            create an elegant and engaging awards experience for your guests.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-9 px-8 py-4 rounded-full bg-white text-[#3a101c] font-bold hover:bg-pink-50 transition-colors shadow-xl"
          >
            Book Trupti Shah
            <ArrowUpRight size={19} />
          </Link>

        </div>
      </section>

    </div>
  );
}

export default AwardsGalaEmcee;
