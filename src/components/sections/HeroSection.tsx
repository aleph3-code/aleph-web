import Section from '~/components/layout/Section';

export default function HeroSection() {
    return (
        <Section className="min-h-screen bg-hero hero">
            <div className="px-20">
                <h1 className="text-8xl font-bold">We are Aleph</h1>
                <p className="mt-4 text-2xl max-w-2xl pl-4 font-light">
                    A team of developers who love to code and build amazing
                    applications.
                </p>
            </div>
        </Section>
    );
}
