"use client";

import { Routes } from "@/constants/routes.constants";
import { Title1 } from "@fluentui/react-components";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-fit w-full">
      <div className="w-full flex items-center px-4 py-2 border-b border-gray-600">
        <div className="cursor-pointer">
          <Link href={Routes.home}>
            <Title1>Personal Blog</Title1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
