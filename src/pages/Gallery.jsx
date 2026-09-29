import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
} from "lucide-react";


// =====================================================
// Load g1 -> g48 automatically from assets folder
// Supports jpg, jpeg, png and webp
// =====================================================

const imageModules = import.meta.glob(
  "../assets/gallery/g*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);


// Sort images numerically: g1, g2, g3 ... g48
const galleryImages = Object.entries(imageModules)
  .map(([path, image]) => {
    const fileName = path.split("/").pop();

    const match = fileName.match(/^g(\d+)\./i);

    return {
      number: match ? Number(match[1]) : 999,
      image,
      name: fileName,
    };
  })
  .filter((item) => item.number >= 1 && item.number <= 48)
  .sort((a, b) => a.number - b.number);


function Gallary() {
  const [selectedImage, setSelectedImage] = useState(null);


  // =====================================================
  // Lightbox navigation
  // =====================================================

  const currentIndex = selectedImage
    ? galleryImages.findIndex(
        (item) => item.number === selectedImage.number
      )
    : -1;


  const showNext = () => {
    if (!galleryImages.length) return;

    const nextIndex =
      currentIndex === galleryImages.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(galleryImages[nextIndex]);
  };


  const showPrevious = () => {
    if (!galleryImages.length) return;

    const previousIndex =
      currentIndex <= 0
        ? galleryImages.length - 1
        : currentIndex - 1;

    setSelectedImage(galleryImages[previousIndex]);
  };


  // =====================================================
  // Keyboard controls
  // =====================================================

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyboard = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyboard);
      document.body.style.overflow = "";
    };
  }, [selectedImage, currentIndex]);


  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffafb]">

      {/* =================================================
          Background Decorations
      ================================================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full border border-[#c2185b]/10" />

      <div className="pointer-events-none absolute -right-40 top-[30%] h-96 w-96 rounded-full bg-[#f9dce7]/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-20 left-[20%] h-64 w-64 rounded-full bg-[#fcecf2]/60 blur-3xl" />


      {/* =================================================
          Gallery Header
      ================================================= */}

      <section className="relative z-10 px-5 pb-14 pt-2 sm:px-8 sm:pb-16 sm:pt-4 lg:px-10 lg:pt-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* Eyebrow */}

          <div className="mb-2 flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-[#c2185b]" />

            <Sparkles
              size={14}
              className="text-[#c2185b]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#8b1538] sm:text-[11px]">
              Our Celebration Gallery
            </span>

            <Sparkles
              size={14}
              className="text-[#c2185b]"
            />

            <span className="h-px w-10 bg-[#c2185b]" />

          </div>


          {/* Heading */}
<h1 className="font-serif text-4xl font-medium leading-tight text-[#260d16] sm:text-5xl lg:text-6xl">
  Moments That
  <span className="block text-[#c2185b]">
    Deserve The Spotlight
  </span>
</h1>

<p className="mx-auto mt-1 max-w-2xl text-sm leading-7 text-[#74636a] sm:text-base">
  A glimpse into the energy, celebrations, emotions and unforgettable
  moments we've created on stages with our audiences and clients.
</p>



        </motion.div>

      </section>


      {/* =================================================
          Gallery
      ================================================= */}

      <section className="relative z-10 px-5 pb-24 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-7xl">

          {galleryImages.length === 0 ? (

            <div className="rounded-3xl border border-[#eadde2] bg-white py-20 text-center">
              <p className="text-sm text-[#74636a]">
                No gallery images found.
              </p>
            </div>

          ) : (

            /*
              Masonry-like CSS columns.

              This creates an editorial gallery feel
              without needing another library.
            */

            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">

              {galleryImages.map((item, index) => (

                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: Math.min(index * 0.035, 0.35),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-5 break-inside-avoid"
                >

                  <button
                    type="button"
                    onClick={() => setSelectedImage(item)}
                    className="group relative block w-full overflow-hidden rounded-[22px] bg-white p-1.5 text-left shadow-[0_15px_45px_rgba(80,20,35,0.07)] outline-none transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(80,20,35,0.14)] focus:ring-2 focus:ring-[#c2185b]"
                  >

                    <div className="relative overflow-hidden rounded-[17px]">

                      <img
                        src={item.image}
                        alt={`Exotic Wedding Planner Gallery ${item.number}`}
                        loading="lazy"
                        className="block h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                      />


                      {/* Dark hover overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-[#260d16]/65 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                      {/* Top number */}

                      <div className="absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/20 bg-black/20 px-2 text-[10px] font-semibold text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                        {String(item.number).padStart(2, "0")}
                      </div>


                      {/* Expand icon */}

                      <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#8b1538] opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                        <Maximize2
                          size={16}
                          strokeWidth={1.7}
                        />

                      </div>


                      {/* Bottom text */}

                      <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/70">
                          Trupti Shah Emcee
                        </p>

                        <p className="mt-1 font-serif text-lg text-white">
                          Beautiful Memories
                        </p>

                      </div>

                    </div>

                  </button>

                </motion.div>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* =================================================
          Bottom Decorative Quote
      ================================================= */}

      <motion.section
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-10 px-5 pb-20 sm:px-8 lg:px-10"
      >

        <div className="mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 h-px w-16 bg-[#c2185b]" />

          <p className="font-serif text-2xl italic leading-relaxed text-[#493a40] sm:text-3xl">
            "Every picture holds a moment,
            <span className="text-[#c2185b]">
              {" "}every moment holds a story.
            </span>
            "
          </p>

        </div>

      </motion.section>


      {/* =================================================
          FULLSCREEN LIGHTBOX
      ================================================= */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#16090e]/95 p-4 backdrop-blur-md sm:p-8"
            onClick={() => setSelectedImage(null)}
          >

            {/* ==========================================
                Close
            ========================================== */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#260d16] sm:right-8 sm:top-8"
              aria-label="Close gallery"
            >

              <X size={21} />

            </button>


            {/* ==========================================
                Image Counter
            ========================================== */}

            <div className="absolute left-5 top-5 z-30 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-md sm:left-8 sm:top-8">

              {String(currentIndex + 1).padStart(2, "0")}
              {" / "}
              {String(galleryImages.length).padStart(2, "0")}

            </div>


            {/* ==========================================
                Previous
            ========================================== */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#260d16] sm:left-7 sm:h-12 sm:w-12"
              aria-label="Previous image"
            >

              <ChevronLeft size={22} />

            </button>


            {/* ==========================================
                Next
            ========================================== */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#260d16] sm:right-7 sm:h-12 sm:w-12"
              aria-label="Next image"
            >

              <ChevronRight size={22} />

            </button>


            {/* ==========================================
                Large Image
            ========================================== */}

            <motion.div
              key={selectedImage.number}
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[88vh] max-w-[90vw] items-center justify-center sm:max-w-[85vw]"
            >

              <img
                src={selectedImage.image}
                alt={`Exotic Wedding Planner Gallery ${selectedImage.number}`}
                className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
              />

            </motion.div>


            {/* ==========================================
                Bottom Label
            ========================================== */}

            <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-center sm:bottom-7">

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Trupti Shah Emcee
              </p>

              <p className="mt-1 font-serif text-sm text-white/80">
                Beautiful Memories
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </main>
  );
}

export default Gallary;