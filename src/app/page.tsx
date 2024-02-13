import AboutUs from '~/components/sections/AboutUs';
import Contact from '~/components/sections/Contact';
import HeroSection from '~/components/sections/HeroSection';
import Projects from '~/components/sections/Projects';
import Services from '~/components/sections/Services';
import Tools from '~/components/sections/Tools';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background text-highlight">
            <HeroSection />
            <Services />
            <Tools />
            <Projects />
            <AboutUs />
            <Contact />
        </main>
    );
}
