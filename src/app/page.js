import ServiceCard from "@/components/ServiceCard";
import Hero from "@/components/Hero";
import TopLegalExperts from "@/components/TopLegalExperts";
import FilterCat from "@/components/FilterCat";

export default function HomePage() {
    return (
        <div className="space-y-5">
            <FilterCat />
            <Hero />
            <ServiceCard />
            <TopLegalExperts />
        </div>
    );
}
