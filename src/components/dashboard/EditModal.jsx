"use client";

import { updateService } from "@/lib/api/lawyer/action";
import { Modal, Button } from "@heroui/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiEditAlt } from "react-icons/bi";

export function EditModal({ service }) {
    const categories = [
        "Criminal Law",
        "Family Law",
        "Property Law",
        "Immigration Law",
        "Civil Law",
        "Cyber Law",
        "Tax Law",
    ];
    const {_id, title, category, conFee, serviceName, location, lawyerEmail } =
        service;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleUpdateService = async(data) => {
        const sevice = await updateService(data, _id); 
       // console.log(sevice);
        if (sevice?.modifiedCount > 0) {
            toast.success("Update success");
        }
    };

    return (
        <Modal>
            <Button variant="secondary" isIconOnly>
                <BiEditAlt className="text-lg" />
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="w-[95vw] max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl rounded-xl">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Heading>Edit Service</Modal.Heading>
                        </Modal.Header>

                        <Modal.Body>
                            <form
                                id="editServiceForm"
                                onSubmit={handleSubmit(handleUpdateService)}
                                className="space-y-5"
                            >
                                {/* Title & Category */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Title
                                        </label>

                                        <input
                                            type="text"
                                            {...register("title")}
                                            defaultValue={title}
                                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 outline-none"
                                            placeholder="Service Title"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Category
                                        </label>

                                        <select
                                            {...register("category")}
                                            id="category"
                                            defaultValue={category}
                                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 outline-none"
                                        >
                                            {categories.map((cat) => (
                                                <option key={cat} value={cat}>
                                                    {cat}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Email & Fee */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            {...register("lawyerEmail")}
                                            readOnly
                                            id="lawyerEmail"
                                            value={lawyerEmail}
                                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-4 py-3 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Consultation Fee
                                        </label>

                                        <input
                                            type="number"
                                            {...register("conFee")}
                                            id="conFee"
                                            defaultValue={conFee}
                                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 outline-none"
                                            placeholder="Consultation Fee"
                                        />
                                    </div>
                                </div>

                                {/* Service Type & Location */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Consultation Type
                                        </label>

                                        <select
                                            {...register("serviceName")}
                                            id="serviceName"
                                            defaultValue={serviceName}
                                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 outline-none"
                                        >
                                            <option value="Online">
                                                Online
                                            </option>
                                            <option value="Offline">
                                                Offline
                                            </option>
                                            <option value="Both">Both</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block mb-2 font-medium">
                                            Location
                                        </label>

                                        <input
                                            type="text"
                                            id="location"
                                            defaultValue={location}
                                            {...register("location")}
                                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-3 outline-none"
                                            placeholder="Location"
                                        />
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>

                            <Button type="submit" form="editServiceForm">
                                Update Service
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
