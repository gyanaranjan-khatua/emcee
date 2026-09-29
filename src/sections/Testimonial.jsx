
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";

function Testimonial() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Corporate Event Organizer",
      text: "Trupti brought an incredible amount of energy and professionalism to our event. She kept the audience engaged throughout and handled every moment with confidence.",
    },
    {
      name: "Neha Kapoor",
      role: "Wedding Client",
      text: "From the very first interaction, Trupti was warm, professional and extremely easy to work with. She made our celebration feel effortless and truly memorable.",
    },
    {
      name: "Amit Sharma",
      role: "Event Manager",
      text: "A fantastic emcee who knows exactly how to connect with an audience. Her stage presence, communication and ability to manage the flow of the event were impressive.",
    },
  ];

  const particles = Array.from({ length: 28 });

  return (
    <section className="relative overflow-hidden bg-[#12080c] text-white py-20 sm:py-24 lg:py-28">

      {/* =====================================================
          BACKGROUND GRADIENT GLOW
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Pink Glow */}
        <motion.div
          animate={{
            x: [0, 80, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-pink-600/20 blur-[110px]"
        />

        {/* Red Glow */}
        <motion.div
          animate={{
            x: [0, -70, 30, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-red-600/20 blur-[120px]"
        />

        {/* Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] rounded-full bg-fuchsia-600/10 blur-[100px]"
        />

        {/* Particles */}
        {particles.map((_, index) => (
          <motion.span
            key={index}
            className="absolute w-[3px] h-[3px] rounded-full bg-pink-300/50"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
            }}
            animate={{
              y: [0, -25, 0, 20, 0],
              x: [0, index % 2 === 0 ? 15 : -15, 0],
              opacity: [0.15, 0.7, 0.2, 0.55, 0.15],
              scale: [0.7, 1.3, 0.8, 1.1, 0.7],
            }}
            transition={{
              duration: 5 + (index % 5),
              repeat: Infinity,
              delay: index * 0.18,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">

          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5"
          >
            <Sparkles size={14} className="text-pink-400" />

            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-pink-300">
              Client Experiences
            </span>

            <Sparkles size={14} className="text-red-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight"
          >
            Words From the People
            <span className="block mt-2 bg-gradient-to-r from-pink-300 via-rose-400 to-red-400 bg-clip-text text-transparent">
              Behind the Celebrations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base leading-7 text-slate-400 max-w-2xl mx-auto"
          >
            Every event has a story. Here is what clients and event
            professionals have to say about their experience with
            Trupti Shah.
          </motion.p>
        </div>

        {/* =====================================================
            TESTIMONIAL CARDS
        ====================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="group relative"
            >

              {/* Gradient Border */}
              <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-pink-500/50 via-red-500/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative h-full rounded-[21px] bg-white/[0.96] text-slate-900 p-7 sm:p-8 backdrop-blur-xl">

                {/* Top */}
                <div className="flex items-center justify-between mb-7">

                  {/* Quote */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 text-white flex items-center justify-center shadow-lg shadow-pink-500/20">
                      <Quote size={20} />
                    </div>

                    <div className="absolute -inset-2 rounded-2xl bg-pink-500/10 blur-md -z-10" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={14}
                        className="text-rose-500"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-sm sm:text-[15px] leading-7 text-slate-600">
                  “{testimonial.text}”
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-pink-200 via-red-100 to-transparent my-7" />

                {/* Client */}
                <div className="flex items-center gap-3">

                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center text-white text-sm font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 lg:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4">

            <span className="w-10 sm:w-16 h-px bg-gradient-to-r from-transparent to-pink-500/50" />

            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-pink-200/60">
              Memorable Events · Meaningful Experiences
            </span>

            <span className="w-10 sm:w-16 h-px bg-gradient-to-l from-transparent to-red-500/50" />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonial;

