"use client";
import { Header } from "@/ui/components/common/Header/Header";
import { Menu } from "@/ui/components/common/Menu/Menu";
import { Logo } from "@/ui/components/common/Logo/Logo";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_SOME_KEY);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Logo />
      <Menu />
    </main>
  );
}
