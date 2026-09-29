
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mic2, Users, CalendarDays, Star } from "lucide-react";

function CountUp({ end, duration = 1800, decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out effect
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = easeOut * end;
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
    </span>
  );
}

function Stats() {
  const stats = [
    {
      value: 10,
      suffix: "+",
      label: "Years Experience",
      icon: CalendarDays,
    },
    {
      value: 500,
      suffix: "+",
      label: "Events Hosted",
      icon: Mic2,
    },
    {
      value: 50,
      suffix: "K+",
      label: "Guests Entertained",
      icon: Users,
    },
    {
      value: 5,
      suffix: ".0",
      label: "Client Rating",
      icon: Star,
      decimals: 0,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#16080d] py-10 sm:py-12">
      {/* Soft Pink / Red Glows */}
      <div className="absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-pink-600/20 blur-[100px]" />

      <div className="absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-red-600/20 blur-[100px]" />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-7 text-center"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-pink-400 sm:text-xs">
            Experience That Speaks
          </span>

          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Creating Moments That{" "}
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-500 bg-clip-text text-transparent">
              Matter
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] shadow-[0_15px_50px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                  }}
                  className={`group flex items-center justify-center gap-4 px-5 py-7 transition-all duration-300 sm:py-8 ${
                    index !== 3
                      ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                      : ""
                  } ${
                    index === 1
                      ? "border-r border-white/10"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-pink-400/20 bg-gradient-to-br from-pink-500/15 to-red-500/15 text-pink-400 transition-all duration-300 group-hover:scale-105 group-hover:border-pink-400/40">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="text-left">
                    <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-500 bg-clip-text text-2xl font-bold leading-none text-transparent sm:text-3xl">
                      <CountUp
                        end={stat.value}
                        decimals={stat.decimals || 0}
                      />
                      {stat.suffix}
                    </div>

                    <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/50 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;

