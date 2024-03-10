'use client';
import { ActiveSectionProvider } from './layout/ActiveSectionContext';

export function ContextProviders({ children }: { children: React.ReactNode }) {
    return <ActiveSectionProvider>{children}</ActiveSectionProvider>;
}
