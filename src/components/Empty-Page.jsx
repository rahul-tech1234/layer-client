import Link from "next/link";
import { FileSearch } from "lucide-react";

export default function EmptyState({
    title = "No Data Found",
    description = "There is nothing to display right now.",
    buttonText,
    buttonLink = "/",
    icon: Icon = FileSearch,
}) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-default-300 bg-content1 py-16 px-6 text-center">
            <div className="mb-5 rounded-full bg-default-100 p-5">
                <Icon className="h-12 w-12 text-default-500" />
            </div>

            <h2 className="text-2xl font-bold">{title}</h2>

            <p className="mt-2 max-w-md text-default-500">{description}</p>

            {buttonText && (
                <Link
                    href={buttonLink}
                    className="mt-6 rounded-xl bg-primary px-5 py-2 text-white transition hover:opacity-90"
                >
                    {buttonText}
                </Link>
            )}
        </div>
    );
}
