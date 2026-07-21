import LawyerTable from "@/components/dashboard/LawyerTable";
import { Button, Input } from "@heroui/react";
import { FiSearch } from "react-icons/fi";
const HiringHistry = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold">Developer Management</h2>

                    <p className="text-default-500 text-sm mt-1">
                        Manage your development team and project members.
                    </p>
                </div>

                <div className="flex gap-3">
                    <Input
                        size="md"
                        radius="lg"
                        placeholder="Search developer..."
                        startContent={<FiSearch />}
                        className="w-full md:w-72"
                    />

                    <Button
                        color="primary"
                        radius="lg"
                        className="font-semibold px-6"
                    >
                        Add Developer
                    </Button>
                </div>
            </div>
            <LawyerTable></LawyerTable>
        </div>
    );
};

export default HiringHistry;
