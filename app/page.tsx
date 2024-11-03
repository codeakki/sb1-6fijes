"use client";

import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { FAQ } from "@/components/sections/faq";
import { SDKGuide } from "@/components/sections/sdk-guide";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Hero />
        <Features />
        <SDKGuide />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}