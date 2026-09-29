
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mic2,
  Sparkles,
  ArrowUpRight,
  Play,
} from "lucide-react";

function ProfessionalEmcee() {
  return (
    <section className="relative overflow-hidden bg-[#fff9fb] py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-pink-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-red-200/20 blur-3xl" />

      {/* Decorative Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#260d16_1px,transparent_1px),linear-gradient(90deg,#260d16_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c2185b]" />

            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#c2185b] sm:text-sm">
              <Mic2 size={15} />
              Professional Event Hosting
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c2185b]" />
          </div>

          <h2 className="font-serif text-3xl font-medium leading-tight text-[#260d16] sm:text-4xl lg:text-5xl">
            Professional Emcee & Anchor in{" "}
            <span className="bg-gradient-to-r from-[#c2185b] to-[#e11d48] bg-clip-text text-transparent">
              Mumbai
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#74636a] sm:text-base">
            Meet <strong className="font-semibold text-[#260d16]">Trupti Shah</strong>,
            a professional emcee and anchor bringing confidence, energy and
            seamless stage presence to corporate events, weddings,
            celebrations and special occasions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Location Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ead5de] bg-white px-4 py-2 text-xs font-medium text-[#6b4d59] shadow-sm">
              <MapPin size={15} className="text-[#c2185b]" />
              Mumbai, Maharashtra
            </div>

            <h3 className="max-w-xl font-serif text-3xl font-medium leading-tight text-[#260d16] sm:text-4xl">
              A Voice That Brings
              <span className="block bg-gradient-to-r from-[#c2185b] to-[#e11d48] bg-clip-text text-transparent">
                Every Event To Life.
              </span>
            </h3>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#74636a] sm:text-base">
              Trupti Shah combines polished communication, natural audience
              interaction and an engaging stage presence to create memorable
              event experiences. From introducing distinguished guests to
              keeping the audience connected between performances and
              presentations, every moment is handled with confidence and
              professionalism.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#74636a] sm:text-base">
              Whether it is a corporate conference, award ceremony, product
              launch, wedding celebration, gala evening or special event,
              Trupti brings the right balance of energy, elegance and
              personality to the stage.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Mic2,
                  title: "Confident Stage Presence",
                  text: "Professional and engaging hosting.",
                },
                {
                  icon: Sparkles,
                  title: "Audience Engagement",
                  text: "Keeping every audience connected.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="group rounded-2xl border border-[#eadde2] bg-white p-5 shadow-[0_10px_35px_rgba(38,13,22,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9a8ba] hover:shadow-[0_15px_40px_rgba(194,24,91,0.10)]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0f5] text-[#c2185b] transition-colors duration-300 group-hover:bg-[#c2185b] group-hover:text-white">
                      <Icon size={19} />
                    </div>

                    <h4 className="text-sm font-semibold text-[#260d16]">
                      {item.title}
                    </h4>

                    <p className="mt-1.5 text-xs leading-5 text-[#7a6970]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#260d16] px-6 py-3.5 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#c2185b] hover:shadow-[0_12px_30px_rgba(194,24,91,0.25)]"
            >
              Enquire About Your Event
              <ArrowUpRight size={17} />
            </motion.a>
          </motion.div>

          {/* YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Frame */}
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[2rem] border-r border-t border-[#c2185b]/30 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-bl-[2rem] border-b border-l border-[#e11d48]/30 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-[#16080d] p-2 shadow-[0_25px_70px_rgba(38,13,22,0.18)] sm:p-3">
              {/* Video Label */}
              <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c2185b]">
                  <Play size={11} fill="currentColor" />
                </span>
                Watch Trupti In Action
              </div>

              {/* YouTube */}
              <div className="aspect-video overflow-hidden rounded-[1.25rem] bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/alGr-VgT4-0"
                  title="Trupti Shah - Professional Emcee & Anchor"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Floating Experience Card */}
         
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalEmcee;

