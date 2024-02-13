import Image from "next/image";
import Section from "~/components/layout/Section";
import HeroSection from "~/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-highlight">
      <HeroSection />
      <Section>
        <h1 className="text-4xl font-bold">Learn More</h1>
        <p className="mt-4 text-xl">
          ℵ
          Visit our social media pages to learn more about us and our projects.
        </p>
      </Section>
    </main>
  );
}
