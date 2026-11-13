import { Box, Title } from "@mantine/core";
import { ClockIcon } from "@phosphor-icons/react";
import post1 from "../assets/home/post-1.png";
import post2 from "../assets/home/post-2.png";
import post3 from "../assets/home/post-3.png";

const posts = [
  {
    image: post1,
    title: "My trip to Athens",
    excerpt:
      "It would seem that in a city where Theseus, Plato and Epicurus once walked, the very idea of the subway is alien to the city, but already...",
    date: "May 23, 2022",
    readTime: "5 minutes",
  },
  {
    image: post2,
    title: "Vilnius resorts",
    excerpt:
      "I haven't seen any resorts in Vilnius, but there are wonderful people and pubs",
    date: "May 22, 2022",
    readTime: "1 minute",
  },
  {
    image: post3,
    title: "Tips for flying on a plane",
    excerpt:
      "If you have a fear of flying, here's a helpful tip: bring your co-pilot so you can take a nap while he steers the plane for you",
    date: "May 20, 2022",
    readTime: "15 minutes",
  },
];

export default function RecentPosts() {
  return (
    <Box className="mx-auto w-full max-w-[1170px] px-4 py-16 sm:py-20">
      <Title
        order={2}
        className="text-center text-[28px] font-semibold text-[#262729] sm:text-[40px]"
      >
        Recent posts
      </Title>
      <Box className="mt-10 grid grid-cols-1 gap-[30px] md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title}>
            <img
              src={post.image}
              alt=""
              className="h-[250px] w-full rounded-[15px] object-cover"
            />
            <div className="mt-5 flex items-center justify-between text-sm leading-5">
              <time className="text-[#262729]">{post.date}</time>
              <span className="flex items-center gap-1.5 font-medium text-[#2a90d9]">
                <ClockIcon size={20} />
                {post.readTime}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-[#262729]">
              {post.title}
            </h3>
            <p className="mt-4 text-base leading-[22px] text-[#262729]">
              {post.excerpt}
            </p>
          </article>
        ))}
      </Box>
    </Box>
  );
}
