import { twMerge } from 'tailwind-merge';

type SectionProps = Readonly<{
    children: React.ReactNode;
    className?: string;
    id?: string;
}>;

export default function Section({ children, className, id }: SectionProps) {
    return (
        <section
            className={twMerge(
                'w-full px-20 py-16 flex flex-col justify-center min-h-screen',
                className,
            )}
            id={id}
        >
            {children}
        </section>
    );
}
