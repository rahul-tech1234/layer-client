import Image from "next/image";
import {
    FaBalanceScale,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaGlobe,
} from "react-icons/fa";

const LawyerProfileCard = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-lg">
            {/* Banner */}
            <Image
                width={56}
                height={56}
                src={banner}
                alt={title}
                className="h-56 w-full object-cover"
            />

            {/* Content */}
            <div className="space-y-5 p-6">
                <div>
                    <h2 className="text-2xl font-bold text-white">{title}</h2>

                    <div className="mt-2 inline-flex items-center rounded-full bg-indigo-500/15 px-3 py-1 text-sm font-medium text-indigo-300">
                        <FaBalanceScale className="mr-2" />
                        {category}
                    </div>
                </div>

                <div className="space-y-3 text-gray-300">
                    <div className="flex items-center gap-3">
                        <FaMoneyBillWave className="text-green-400" />
                        <span>
                            Consultation Fee:
                            <strong className="ml-1 text-white">
                                ৳{conFee}
                            </strong>
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaGlobe className="text-blue-400" />
                        <span>{serviceName}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-red-400" />
                        <span>{location}</span>
                    </div>
                </div>

                <button className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
                    Book Consultation
                </button>
            </div>
        </div>
    );
};

export default LawyerProfileCard;
