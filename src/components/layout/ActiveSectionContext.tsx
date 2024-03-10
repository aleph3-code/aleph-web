import { Map } from 'immutable';
import { createContext, useCallback, useMemo, useState } from 'react';

export type SectionID =
    | 'hero'
    | 'services'
    | 'tools'
    | 'projects'
    | 'about-us'
    | 'contact';

type ActiveSectionContextValue = {
    activeSection: SectionID;
    setViewed: (section: SectionID, viewed: boolean) => void;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextValue | null>(null);

export function ActiveSectionProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [viewedMap, setViewedMap] = useState<Map<SectionID, boolean>>(
        Map([
            ['hero', false],
            ['services', false],
            ['projects', false],
            ['about-us', false],
            ['contact', false],
        ] as [SectionID, boolean][]),
    );

    const activeSection = useMemo(
        () => viewedMap.findKey((viewed) => viewed) ?? 'hero',
        [viewedMap],
    );

    const setViewed = useCallback((section: SectionID, viewed: boolean) => {
        setViewedMap((viewedMap) => viewedMap.set(section, viewed));

        // When entering a new section, update the URL to reflect the current section
        if (viewed) {
            window.history.replaceState(
                null,
                '',
                section === 'hero' ? '/' : `/#${section}`,
            );
        }
    }, []);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setViewed }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}
