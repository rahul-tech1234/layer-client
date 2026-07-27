import ServiceCard from "@/components/ServiceCard";
import Hero from "@/components/Hero";
import TopLegalExperts from "@/components/TopLegalExperts";
import { letestLawyers, topLayers } from "@/lib/api/lawyer/data";

export default async function HomePage() {
    const services = await letestLawyers();
    const topThreeLawyers = await topLayers()
    return (
        <div className="space-y-5">
            <Hero />
            <ServiceCard data={services} />
            <TopLegalExperts lawyers={topThreeLawyers} />
        </div>
    );
}
