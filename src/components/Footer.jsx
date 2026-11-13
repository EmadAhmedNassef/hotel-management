import { useState } from "react";
import { Box } from "@mantine/core";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  PaperPlaneTiltIcon,
  PhoneIcon,
  TelegramLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";

const columns = [
  ["Page title", "Page title", "Page title"],
  ["Page title", "Page title", "Page title"],
  ["Page title", "Page title", "Page title"],
];

const socials = [
  { label: "Phone", icon: PhoneIcon },
  { label: "Facebook", icon: FacebookLogoIcon },
  { label: "YouTube", icon: YoutubeLogoIcon },
  { label: "Instagram", icon: InstagramLogoIcon },
  { label: "Telegram", icon: TelegramLogoIcon },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(event) {
    event.preventDefault();
    setEmail("");
  }

  return (
    <Box className="bg-[#f3f2f0]">
      <Box className="mx-auto grid  max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((links, index) => (
          <div key={index}>
            <p className="text-base font-semibold text-[#262729]">
              Title of section
            </p>
            <ul className="mt-5 flex flex-col gap-5 text-sm text-[#262729]">
              {links.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
          </div>
        ))}

        <form onSubmit={handleSubscribe}>
          <p className="text-base font-semibold text-[#262729]">
            Subscribe to Newsletter
          </p>
          <label className="mt-5 flex h-10 overflow-hidden rounded-[10px] border border-[#ee685f] bg-white">
            <span className="sr-only">Your email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
              className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#262729] outline-none placeholder:text-[#262729]"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="grid w-10 place-items-center bg-[#ee685f] text-white"
            >
              <PaperPlaneTiltIcon size={18} />
            </button>
          </label>
        </form>
      </Box>

      <Box className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-[#e4e2de] px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[32px] leading-none font-bold text-[#2a90d9]">
          Your<span className="text-[#ee685f]">.logo</span>
        </p>
        <p className="text-sm text-[#262729]">
          Design by{" "}
          <a
            href="https://delvig.me/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#2a90d9] underline"
          >
            Delvig
          </a>
        </p>
        <div className="flex gap-3 text-[#262729]">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href="#" aria-label={item.label}>
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </Box>
    </Box>
  );
}
