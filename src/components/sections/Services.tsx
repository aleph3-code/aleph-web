import Section from '../layout/Section';

function ServiceCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="glass w-80 flex flex-col gap-5 p-5 rounded-lg">
            <h2 className="text-3xl">{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default function Services() {
    return (
        <Section
            id="services"
            className="items-center gap-20 bg-services bg-no-repeat bg-center bg-cover"
        >
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">Services</h1>
                <p className="mt-4 text-xl">
                    We offer a variety of services to help you achieve your
                    goals.
                </p>
            </div>
            <div className="flex justify-center gap-20">
                <ServiceCard
                    title="Website"
                    description="We can help you build a website that will help you stand out."
                />
                <ServiceCard
                    title="SEO"
                    description="We can help you optimize your website for search engines."
                />
                <ServiceCard
                    title="E-commerce"
                    description="We can help you build an online store to sell your products."
                />
            </div>
        </Section>
    );
}
