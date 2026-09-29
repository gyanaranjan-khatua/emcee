
import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Utensils,
  Trophy,
  PartyPopper,
  Medal,
  Users,
  Sparkles,
  Heart,
  Video,
  Music2,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function ServiceSection() {
  const services = [
    {
      title: "Sangeet Anchor",
      description:
        "Keep the music, dance and celebration flowing with lively hosting for your Sangeet night.",
      icon: Music2,
      path: "/services/sangeet-anchor-mumbai",
    },
    {
      title: "Outdoor Sports Emcee",
      description:
        "Keep outdoor celebrations energetic and interactive with engaging hosting for teams, families and audiences.",
      icon: Medal,
      path: "/services/outdoor-sports-emcee",
    },
    {
      title: "Haldi & Mehendi Anchor",
      description:
        "Bring warmth, fun and lively moments to your Haldi and Mehendi celebrations.",
      icon: Sparkles,
      path: "/services/haldi-mehendi-anchoring-mumbai",
    },
    {
      title: "Mameru Ceremony Anchor",
      description:
        "Thoughtful, engaging hosting for the traditions and joyful moments of your Mameru ceremony.",
      icon: Heart,
      path: "/services/mameru-ceremony-hosting",
    },
    {
      title: "Anniversary Party Emcee",
      description:
        "Celebrate your milestones with warm, engaging hosting that brings family and friends together.",
      icon: Heart,
      path: "/services/anniversary-party-emcee",
    },
    {
      title: "Birthday Party Anchor",
      description:
        "Make birthdays memorable with a lively host who keeps guests entertained and celebrations flowing.",
      icon: PartyPopper,
      path: "/services/birthday-party-hostess",
    },
    {
      title: "Corporate Event Emcee",
      description:
        "Polished hosting for conferences, annual days and town halls across Mumbai's business venues",
      icon: Building2,
      path: "/services/corporate-event-emcee",
    },
 
    {
      title: "Awards Night & Gala Host",
      description:
        "Confident, elegant hosting for award ceremonies and gala dinners with smooth stage flow.",
      icon: Trophy,
      path: "/services/awards-gala-hostess",
    },
    // {
    //   title: "Product Launch Emcee",
    //   description:
    //     "A charismatic host who makes a strong first impression at launches and inaugurations.",
    //   icon: PartyPopper,
    //   path: "/services/product-launch-emcee",
    // },
    {
      title: "Wedding Emcee",
      description:
        "Warm, witty hosting for receptions, pheras, varmala and the full celebration, with perfect timing.",
      icon: Heart,
      path: "/services/wedding-emcee-mumbai",
    },
   
  ];

  return (
    <section className="relative overflow-hidden bg-[#fffafc] text-slate-900 py-2 sm:py-6 lg:py-10">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Pink Glow */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-pink-200/35 blur-[100px]"
        />

        {/* Red Glow */}
        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-red-200/25 blur-[110px]"
        />

        {/* Small Decorative Dots */}
        <div className="absolute top-28 right-[12%] w-2 h-2 rounded-full bg-pink-400/50" />
        <div className="absolute top-[45%] left-[8%] w-1.5 h-1.5 rounded-full bg-red-400/50" />
        <div className="absolute bottom-28 right-[18%] w-2 h-2 rounded-full bg-rose-400/40" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-7 lg:mb-10">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-pink-500" />

            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-pink-600">
              What We Do
            </span>

            <span className="w-8 h-px bg-gradient-to-l from-transparent to-red-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-tight"
          >
           Anchoring & Emcee Services 
            <span className="block mt-1 bg-gradient-to-r from-pink-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
            in Mumbai
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-sm sm:text-base leading-7 text-slate-500 max-w-2xl mx-auto"
          >
            From corporate stages to intimate celebrations, Trupti Shah brings
            confidence, warmth and vibrant energy to every event she hosts.
          </motion.p>
        </div>

        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                  transition: { duration: 0.25 },
                }}
              >
                <Link
                  to={service.path}
                  className="group relative block h-full"
                >
                  {/* Gradient Border */}
                  <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-pink-400/50 via-red-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Card */}
                  <div className="relative h-full rounded-[21px] bg-white border border-slate-200/80 p-6 sm:p-7 shadow-[0_10px_35px_rgba(15,23,42,0.04)] group-hover:shadow-[0_20px_45px_rgba(225,29,72,0.10)] transition-all duration-500">

                    {/* Icon + Arrow */}
                    <div className="flex items-start justify-between">

                      <div className="relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 text-white flex items-center justify-center shadow-lg shadow-pink-500/20">
                          <Icon size={21} strokeWidth={1.8} />
                        </div>

                        <div className="absolute -inset-2 rounded-2xl bg-pink-400/10 blur-lg -z-10" />
                      </div>

                      <div className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                        <ArrowUpRight size={17} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-rose-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-7 right-7 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        {/* <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 lg:mt-16 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore All Services
            <ArrowUpRight size={17} />
          </Link>
        </motion.div> */}

      </div>
    </section>
  );
}

export default ServiceSection;

