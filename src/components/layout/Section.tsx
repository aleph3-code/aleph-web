'use client';

import { twMerge } from 'tailwind-merge';
import { ActiveSectionContext, SectionID } from './ActiveSectionContext';
import { useInView } from 'react-intersection-observer';
import { useContext, useEffect } from 'react';

type SectionProps = Readonly<{
    children: React.ReactNode;
    className?: string;
    id: SectionID;
}>;

export default function Section({ children, className, id }: SectionProps) {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    const { setViewed } = useContext(ActiveSectionContext)!;
    useEffect(() => setViewed(id, inView), [id, inView, setViewed]);

    return (
        <section
            className={twMerge(
                'w-full px-20 py-16 flex flex-col justify-center min-h-screen',
                className,
            )}
            id={id}
            ref={ref}
        >
            {children}
        </section>
    );
}
