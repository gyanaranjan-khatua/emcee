"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

// Automatically import g1 -> g48 from assets
const imageModules = import.meta.glob(
  "../assets/gallery/g*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Sort images numerically: g1, g2, g3 ... g48
const images = Object.entries(imageModules)
  .map(([path, image]) => {
    const fileName = path.split("/").pop();
    const match = fileName.match(/^g(\d+)\./i);

    return {
      number: match ? Number(match[1]) : 999,
      image,
    };
  })
  .filter((item) => item.number >= 1 && item.number <= 48)
  .sort((a, b) => a.number - b.number)
  .map((item) => item.image);


const Slider = () => {
  return (
    <section className="bg-[#fffafb] py-16 md:py-20">

      <div className="container mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}

        <div className="mb-10 text-center">

          <div className="mb-3 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-[#c2185b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b1538]">
              Our Wedding & Events Gallery
            </span>

            <span className="h-px w-8 bg-[#c2185b]" />

          </div>

          <h2 className="font-serif text-3xl font-medium text-[#260d16] sm:text-4xl md:text-5xl">
            Moments That
            <span className="text-[#c2185b]"> Speak For Us</span>
          </h2>

        </div>


        {/* Slider */}

        <div className="relative h-[45vh] min-h-[300px] w-full overflow-hidden rounded-[28px] border border-[#eadde2] bg-white p-2 shadow-[0_20px_60px_rgba(80,20,35,0.08)] sm:h-[50vh] sm:p-3">

          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={1}
            spaceBetween={14}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            allowTouchMove={true}
            className="h-full w-full"
          >

            {/* Repeat images for continuous loop */}

            {Array(4)
              .fill(images)
              .flat()
              .map((imgSrc, index) => (

                <SwiperSlide key={index}>

                  <div className="group relative h-full w-full overflow-hidden rounded-[20px]">

                    {/* Image */}

                    <img
                      src={imgSrc}
                      alt={`Exotic Wedding Planner ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />


                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#260d16]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                    {/* Content */}

                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                      <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70">
                        Exotic Wedding Planner
                      </p>

                      <p className="mt-1 font-serif text-xl text-white">
                        Beautiful Memories
                      </p>

                    </div>


                    {/* Number */}

                    <div className="absolute right-4 top-4 flex h-8 min-w-8 items-center justify-center rounded-full border border-white/20 bg-black/20 px-2 text-[10px] font-semibold text-white opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100">
                      {String((index % images.length) + 1).padStart(2, "0")}
                    </div>

                  </div>

                </SwiperSlide>

              ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default Slider;