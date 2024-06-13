import Hero from "@/components/UI/Hero";
import Features from "@/components/UI/Features";
import GetStarted from "@/components/UI/GetStarted";
import FAQ from "@/components/UI/FAQ";

export default async function Home() {
  return (
    <>
      <Hero />
      <Features />
      <GetStarted />
      <FAQ />
    </>
  );
}
