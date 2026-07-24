import ServiceCard from "@/components/ServiceCard";
import Hero from "@/components/Hero";
import TopLegalExperts from "@/components/TopLegalExperts";

export default function HomePage() {
    const services = [
        {
            _id: "6a5ce0bfe8eaaa2328bdae2e",
            title: "ete",
            category: "Corporate Law",
            conFee: "080",
            serviceName: "Online",
            addDate: "2026-07-19",
            location: "Dhaka, Bangladesh",
            banner: "https://i.ibb.co/GvLh5NNJ/tech.avif",
            status: "active",
            lawyerEmail: "jogu@gmail.com",
        },
        {
            _id: "6a5d0c2bcb4494ce5f9a3a5d",
            title: "Devorce",
            category: "Family Law",
            conFee: "5000",
            serviceName: "Online",
            addDate: "2026-07-19",
            location: "Sylhet Bangladesh",
            banner: "https://i.ibb.co/hxJs2QsD/music.avif",
            status: "active",
            lawyerEmail: "jogu@gmail.com",
        },
        {
            _id: "6a5d0d2fcb4494ce5f9a3a5e",
            title: "law",
            category: "Corporate Law",
            conFee: "1000",
            serviceName: "Online",
            addDate: "2026-07-19",
            location: "Bogura, Bangladesh",
            banner: "https://i.ibb.co/k6yp0MQx/others.avif",
            status: "active",
            lawyerEmail: "jogu@gmail.com",
        },
        {
            _id: "6a5d0da3cb4494ce5f9a3a5f",
            title: "land",
            category: "Corporate Law",
            conFee: "6000",
            serviceName: "Online",
            addDate: "2026-07-19",
            location: "Khulna, Bangladesh",
            banner: "https://i.ibb.co/j9tvTr63/bussiness.avif",
            status: "active",
            lawyerEmail: "jogu@gmail.com",
        },
    ];
    return (
        <div className="space-y-5">
            <Hero />
            <ServiceCard services={services} />
            <TopLegalExperts />
        </div>
    );
}
