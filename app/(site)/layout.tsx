import React from "react";

import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main className="flex w-full grow flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}
