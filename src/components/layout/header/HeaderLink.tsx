'use client';

import Link from 'next/link';
import { ActiveSectionContext, SectionID } from '../ActiveSectionContext';
import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';

export type HeaderLinkProps = { id: SectionID; text: string };

export function HeaderLink({ id, text }: HeaderLinkProps) {
    const { activeSection } = useContext(ActiveSectionContext)!;
    const isActive = activeSection === id;

    return (
        <Link href={`#${id}`}>
            <span
                className={twMerge(
                    'cursor-pointer underline-animation relative',
                    isActive && 'active',
                )}
            >
                {text}
            </span>
        </Link>
    );
}
