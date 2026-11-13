import { Box, Text, Title } from "@mantine/core";
import {
  CatIcon,
  CreditCardIcon,
  HeadsetIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";

const advantages = [
  {
    icon: CreditCardIcon,
    title: "Payment methods",
    text: "We have a lot of them, from cryptocurrencies to barter for potatoes",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Simple search process",
    text: "We checked it out, even the kid did it, but it was my mom's friend's son",
  },
  {
    icon: HeadsetIcon,
    title: "24/7 Support",
    text: "Is there something you don't understand? Feel free to call us. Phone number in the footer",
  },
  {
    icon: CatIcon,
    title: "We are nice",
    text: "Fantasy is over, there will be something really convincing here",
  },
];

export default function WhyChooseUs() {
  return (
    <Box className="mt-16 bg-[#f7f7f7] py-16 sm:mt-24 sm:py-[70px]">
      <Box className="mx-auto w-full max-w-[1170px] px-4">
        <Title
          order={2}
          className="text-center text-[28px] font-semibold text-[#262729] sm:text-[40px]"
        >
          Why Choose Us
        </Title>
        <Text className="mx-auto mt-6 max-w-[570px] text-center text-base leading-7 text-[#333] sm:text-xl">
          The main reason is because our competitors have disgusting sites, but
          we can&apos; t write that here, so the text here will be different
        </Text>

        <Box className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[30px]">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <Box
                key={item.title}
                className="flex flex-col items-center gap-5 text-center"
              >
                <span className="grid size-[100px] place-items-center rounded-full bg-[#e8f4fc]">
                  <Icon size={42} color="#262729" />
                </span>
                <span>
                  <Text className="text-xl leading-5 font-semibold text-[#262729]">
                    {item.title}
                  </Text>
                  <Text className="mt-2.5 text-base leading-[22px] text-[#262729]">
                    {item.text}
                  </Text>
                </span>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
