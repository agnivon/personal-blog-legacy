import { ReactNode } from "react";
import Navbar from "../Navbar";

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="p-10 flex flex-col flex-grow">{children}</main>
    </div>
  );
}
