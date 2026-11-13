import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Hotels", to: "/hotels" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function LinksComp() {
  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => (
        <NavLink
          viewTransition
          key={link.to}
          to={link.to}
          end={link.to === "/"}
          className={({ isActive }) =>
            `relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300
            after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-amber-500
            after:transition-all after:duration-300
            ${
              isActive
                ? "text-[#10294B] after:w-full"
                : "text-gray-500 after:w-0 hover:text-[#10294B] hover:after:w-full"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
