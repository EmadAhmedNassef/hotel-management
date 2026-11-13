import { useRef, useState } from "react";
import { Box, Title } from "@mantine/core";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import review1 from "../assets/home/review-1.png";
import review2 from "../assets/home/review-2.png";
import review3 from "../assets/home/review-3.png";

const reviews = [
  {
    name: "Jannike Borg",
    role: "Publisher",
    image: review1,
    text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
  },
  {
    name: "LeBron Durant",
    role: "Flight attendant",
    image: review2,
    text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
  },
  {
    name: "Kaarel Piho",
    role: "Chiropodist",
    image: review3,
    text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
  },
  {
    name: "John Doe",
    role: "Software Engineer",
    image: review1,
    text: "I quickly found the right tour for me, but I had a few questions about the hotel, I wrote to tech support and they answered all my questions within an hour. The vacation itself was perfect. Thank you very much. I will come back again and again.",
  },
];

function ArrowButton({ direction, disabled, onClick }) {
  const Icon = direction === "prev" ? CaretLeftIcon : CaretRightIcon;

  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous reviews" : "Next reviews"}
      disabled={disabled}
      onClick={onClick}
      className={`grid size-[50px] shrink-0 place-items-center rounded-full text-white transition-colors ${
        disabled ? "bg-[#c7c7c7]" : "bg-[#ee685f]"
      }`}
    >
      <Icon size={18} weight="bold" />
    </button>
  );
}

export default function Reviews() {
  const swiperRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function syncEdges(swiper) {
    setAtStart(swiper.isBeginning);
    setAtEnd(swiper.isEnd);
  }

  return (
    <Box className="mx-auto w-full max-w-[1280px] px-4 pb-8">
      <Title
        order={2}
        className="text-center text-[28px] font-semibold text-[#262729] sm:text-[40px]"
      >
        Reviews
      </Title>

      <Box className="mt-10 flex items-center gap-4 sm:gap-8">
        <ArrowButton
          direction="prev"
          disabled={atStart}
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <Swiper
          // loop={true}
          className="min-w-0 flex-1"
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1100: { slidesPerView: 3, spaceBetween: 30 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncEdges(swiper);
          }}
          onSlideChange={syncEdges}
          onResize={syncEdges}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name} className="!h-auto">
              <article className="flex h-full flex-col items-center text-center">
                <img
                  src={review.image}
                  alt=""
                  width={100}
                  height={100}
                  className="size-[100px] rounded-full object-cover"
                />
                <p className="mt-5 text-base leading-[22px] text-[#262729]">
                  {review.text}
                </p>
                <p className="mt-2.5 text-sm text-[#262729] italic">
                  <span className="font-semibold">{review.name}</span>
                  <span>, {review.role}</span>
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <ArrowButton
          direction="next"
          disabled={atEnd}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </Box>

      <Box className="mt-10 flex justify-center">
        <button
          type="button"
          className="h-[50px] rounded-[10px] bg-[#ee685f] px-10 text-base font-semibold text-white"
        >
          More reviews
        </button>
      </Box>
    </Box>
  );
}
