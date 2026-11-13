import { useState } from "react";
import { Box, Text, Title } from "@mantine/core";
import {
  BedIcon,
  HeartIcon,
  RulerIcon,
  StarIcon,
  UsersIcon,
} from "@phosphor-icons/react";
import hotel1 from "../assets/home/hotel-1.png";
import hotel2 from "../assets/home/hotel-2.png";
import hotel3 from "../assets/home/hotel-3.png";

const offers = [
  { id: 1, image: hotel1 },
  { id: 2, image: hotel2 },
  { id: 3, image: hotel3 },
];

const details = [
  { icon: BedIcon, label: "4 Beds" },
  { icon: UsersIcon, label: "8 Sleeps" },
  { icon: RulerIcon, label: "1,350 Sq Ft" },
];

function OfferCard({ image }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="overflow-hidden rounded-xl border border-[#e7e6eb] bg-white">
      <div className="relative m-2.5">
        <img
          src={image}
          alt="Wilderness Club at Big Ceddar"
          className="h-[220px] w-full rounded-xl object-cover"
        />
        <span className="absolute top-2.5 left-2.5 flex h-8 items-center gap-1 rounded-lg bg-white/80 px-2.5 text-base text-[#262729]">
          <StarIcon size={16} weight="fill" color="#f5b942" />
          4.8
        </span>
        <button
          type="button"
          aria-label={saved ? "Remove from favorites" : "Save hotel"}
          aria-pressed={saved}
          onClick={() => setSaved((value) => !value)}
          className="absolute top-2.5 right-2.5 grid size-8 place-items-center rounded-full bg-white"
        >
          <HeartIcon
            size={18}
            weight={saved ? "fill" : "regular"}
            color="#ee685f"
          />
        </button>
      </div>

      <div className="flex flex-col gap-[15px] px-2.5 pt-1 pb-5">
        <div>
          <h3 className="text-[22px] font-medium text-[#262729]">
            Wilderness Club at Big Ceddar
          </h3>
          <p className="mt-1 text-base leading-6 text-[#858585]">
            2 Bedroom Combined Lodge
          </p>
          <p className="mt-1 text-lg leading-6 text-[#262729]">
            28 October — 1 November
          </p>
        </div>
        <p className="text-[#2a90d9]">
          <span className="text-[30px] leading-10 font-medium">$2016</span>
          <span className="ml-2 text-lg">/6 night</span>
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <li
                key={detail.label}
                className="flex items-center gap-2 text-base text-[#858585]"
              >
                <Icon size={22} color="#2a90d9" />
                {detail.label}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}

export default function SpecialOffers() {
  return (
    <Box className="mx-auto w-full max-w-[1170px] px-4 py-16 sm:py-24">
      <Title
        order={2}
        className="text-center text-[28px] font-semibold text-[#262729] sm:text-[40px]"
      >
        Special offers
      </Title>
      <Box className="mt-10 grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
        {offers.map((offer) => (
          <OfferCard key={offer.id} image={offer.image} />
        ))}
      </Box>
    </Box>
  );
}
