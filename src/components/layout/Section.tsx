import { twMerge } from "tailwind-merge";

type SectionProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={twMerge(
        "w-full px-20 py-16 flex flex-col justify-center",
        className
      )}
    >
      {children}
    </section>
  );
}
