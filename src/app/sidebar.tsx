"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiBarChart2, FiSettings, FiHelpCircle } from "react-icons/fi";
import { useUser } from "@clerk/nextjs";

const allLinks = [
  { href: "/", label: "Home", icon: FiHome },
  { href: "/dashboard", label: "Dashboard", icon: FiBarChart2 },
  { href: "/settings", label: "Settings", icon: FiSettings },
  { href: "/help-support", label: "Help & Support", icon: FiHelpCircle },
];

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const pathname = usePathname();
  const { isSignedIn } = useUser();

  const links = isSignedIn
    ? allLinks
    : allLinks.filter((link) => link.href === "/");

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out bg-white text-gray-800 shadow-lg w-64 z-40 lg:z-auto`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Menu</h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-md hover:bg-gray-200 text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center p-4 text-gray-800 hover:bg-gray-100 ${
                    pathname === link.href ? "bg-gray-200" : ""
                  }`}
                  onClick={toggleSidebar}
                >
                  {link.icon && <link.icon className="mr-4 text-xl" />}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
