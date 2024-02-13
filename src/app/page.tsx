import Image from "next/image";
import { Section } from "~/components/layout/Section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background text-highlight">
      <Section>
        <h1 className="text-4xl font-bold">This is Aleph Code</h1>
        <p className="mt-4 text-xl">
          We are a team of developers who love to code and build amazing
          applications.
        </p>
      </Section>
      <Section>
        <h1 className="text-4xl font-bold">Learn More</h1>
        <p className="mt-4 text-xl">
          Visit our social media pages to learn more about us and our projects.
        </p>
      </Section>
    </main>
  );
}
