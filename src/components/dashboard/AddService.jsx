"use client";
import { addService } from "@/lib/api/lawyer/action";

import { useSession } from "@/lib/auth-client";
import { uploadImage } from "@/utils/uploadimage";
import { router } from "better-auth/api";
import { span } from "framer-motion/client";
import { UploadCloud } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddService = () => {
    const { data: session } = useSession();
    const route = useRouter();
    const user = session?.user;
    const [uploading, setUploading] = useState(false);
    const [image, setImage] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleAddService = async (data) => {
        setUploading(true);
        const image = data.banner[0];
        //  console.log(`image ${image}`);
        const bannerUrl = await uploadImage(image);
        setImage(bannerUrl);
        const addData = {
            ...data,
            banner: bannerUrl,
            lawyerEmail: user?.email,
            status: "active"
        };
        setUploading(false);
        const result = await addService(addData);
        if (result?.insertedId) {
            toast.success("Service Added");
            route.push("/dashboard/lawyer/manage-legal-profile");
        } else {
            toast.error(result?.message || "Event not created...");
        }

        console.log("result", result);
    };
    const catagories = [
        "Criminal Law",
        "Family Law",
        "Property Law",
        "Immigration Law",
        "Civil Law",
        "Cyber Law",
        "Tax Law",
    ];

    return (
        <div className="w-full ">
            <div className="rounded-xl w-10/12 mx-auto  p-7 ">
                <form
                    onSubmit={handleSubmit(handleAddService)}
                    className="space-y-5"
                >
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-gray-300 text-sm block mb-2">
                                Service Title
                            </label>

                            <input
                                {...register("title", {
                                    required: "Tile  your service",
                                })}
                                name="title"
                                id="title"
                                placeholder="Contract Drafting"
                                required
                                className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white"
                            />
                            {errors && errors?.title && (
                                <span>{errors?.title?.message}</span>
                            )}
                        </div>

                        <div>
                            <label className="text-gray-300 text-sm block mb-2">
                                Practice Area
                            </label>

                            <select
                                {...register("category", {
                                    required: "Select  service category",
                                })}
                                name="category"
                                id="category"
                                required
                                className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white"
                            >
                                {catagories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                            {errors && errors?.category && (
                                <span>{errors?.category?.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-gray-300 text-sm block mb-2">
                                Consultation Fee ($)
                            </label>

                            <input
                                {...register("conFee", {
                                    required: "Enter Consulted fee ",
                                })}
                                type="number"
                                name="conFee"
                                id="conFee"
                                placeholder="50"
                                required
                                className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white"
                            />
                            {errors && errors?.conFee && (
                                <span>{errors?.conFee?.message}</span>
                            )}
                        </div>

                        <div>
                            <label className="text-gray-300 text-sm block mb-2">
                                Consultation Type
                            </label>

                            <select
                                {...register("serviceName", {
                                    required: "Enter  your service Type",
                                })}
                                id="serviceName"
                                name="serviceType"
                                className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white"
                            >
                                <option>Online</option>
                                <option>Offline</option>
                                <option>Both</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-gray-300 text-sm block mb-2">
                                Date
                            </label>

                            <input
                                type="date"
                                {...register("addDate", {
                                    required: "Date is required",
                                })}
                                id="addDate"
                                className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white"
                            />

                            {errors?.deliveryDate && (
                                <span className="text-red-500 text-sm">
                                    {errors.addDate.message}
                                </span>
                            )}
                        </div>

                        <div>
                            <label className="text-gray-300 text-sm block mb-2">
                                Service Location
                            </label>

                            <input
                                {...register("location", {
                                    required: "Enter  your location",
                                })}
                                id="location"
                                name="location"
                                placeholder="Dhaka, Bangladesh"
                                className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white"
                            />
                            {errors && errors?.location && (
                                <span>{errors?.location?.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <label className="text-gray-300 text-sm block mb-2">
                                What&apos;s Included
                            </label>

                            <input
                                name="includes"
                                placeholder="Consultation, Documentation..."
                                className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white"
                            />
                        </div>

                        <div>
                            <label className="text-gray-300 text-sm block mb-2">
                                Service Thumbnail
                            </label>

                            <label className="border border-dashed border-gray-600 rounded-lg h-28 bg-[#2A2A2A] flex flex-col justify-center items-center cursor-pointer">
                                <input
                                    type="file"
                                    id="banner"
                                    accept="image/*"
                                    className="hidden"
                                    {...register("banner", {
                                        required: "Enter service banner",
                                    })}
                                />
                                {uploading ? (
                                    <p className="text-gray-400">
                                        Uploading...
                                    </p>
                                ) : image ? (
                                    <Image
                                        src={image}
                                        width={30}
                                        height={30}
                                        className="h-full w-full object-cover rounded-lg"
                                        alt=""
                                    />
                                ) : (
                                    <>
                                        <UploadCloud
                                            className="text-gray-400"
                                            size={32}
                                        />
                                        <p className="text-gray-400 text-sm mt-2">
                                            Upload Image
                                        </p>
                                        <span className="text-xs text-gray-500">
                                            PNG, JPG up to 5MB
                                        </span>
                                    </>
                                )}
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="text-gray-300 text-sm block mb-2">
                            Service Description
                        </label>

                        <textarea
                            rows="5"
                            name="description"
                            required
                            placeholder="Describe your legal service..."
                            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white resize-none"
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            type="submit"
                            className="bg-white text-black px-6 py-2 rounded-lg font-semibold"
                        >
                            Publish Service
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;
