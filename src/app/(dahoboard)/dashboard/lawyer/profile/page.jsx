"use client";

import { useEffect, useState } from "react";
import {
    User,
    Mail,
    Phone,
    Briefcase,
    DollarSign,
    ImagePlus,
    FileText,
    Save,
} from "lucide-react";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import { useForm } from "react-hook-form";
import { uploadImage } from "@/utils/uploadimage";

import { useSession } from "@/lib/auth-client";
import { FaUserTie } from "react-icons/fa";
import Image from "next/image";
import toast from "react-hot-toast";
import { creatLawPro, updateProfile } from "@/lib/api/lawyer/action";
import { myProfile } from "@/lib/api/lawyer/data";

const specializations = [
    "Criminal Law",
    "Corporate Law",
    "Family Law",
    "Civil Law",
    "Property Law",
    "Tax Law",
    "Business Law",
    "Immigration Law",
];

const LawyerProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { data: session } = useSession();
    const user = session?.user;
    const email = user?.email;

    const [myPro, setMyPro] = useState(null);
   
    const [loading, setLoading] = useState(true);
    //  const [isPro, setIsPro] = useState(false);
    useEffect(() => {
        const setProData = async () => {
            const Pro = await myProfile(email);
            setMyPro(Pro);
            setLoading(false);
        };

        setProData();
    }, [email]);

    const handleMyProfile = async (data) => {
        const image = data.profile[0];
        const imageUrl = await uploadImage(image);
        setLoading(true);
        const profileData = {
            ...data,
            profile: imageUrl,
            lawyerEmail: user?.email,
        };

        if (!myPro) {
            const creatProfile = await creatLawPro(profileData);
           
            setLoading(false);

            if (creatProfile?.insertedId) {
                toast.success("Lawyer profile add");
            }
        } else {
            const updatedRes = await updateProfile(
                profileData,
                myPro?.lawyerEmail,
            );
            console.log("updatedata", updatedRes);
            if (updatedRes.modifiedCount > 0) {
                toast.success("Lawyer Profile updated");
            }
        }
    };

    return (
        <section className="bg-black py-10">
            <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-lg">
                {/* Heading */}
                <DashboardHeading
                    title={"Manage Legal Profile"}
                    des={
                        " your legal profile updated so clients can easily find and hire you."
                    }
                />

                <form
                    className="space-y-8"
                    onSubmit={handleSubmit(handleMyProfile)}
                >
                    {/* Profile Image */}

                    <div className="flex flex-col items-center">
                        {!myPro?.profile ? (
                            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-blue-600">
                                <FaUserTie className="text-6xl text-gray-500" />
                            </div>
                        ) : (
                            <Image
                                width={128}
                                height={128}
                                src={myPro.profile}
                                alt="Profile"
                                className="h-32 w-32 rounded-full border-4 border-blue-600 object-cover"
                            />
                        )}

                        {/* Hidden File Input */}
                        <input
                            id="profile"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            {...register("profile", {
                                required: !myPro && "Profile image is required",
                            })}
                        />

                        {/* Upload Button */}
                        <label
                            htmlFor="profile"
                            className="mt-5 flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            <ImagePlus size={18} />
                            {myPro ? "Change Image" : "Upload Image"}
                        </label>

                        {errors?.profile && (
                            <p className="mt-2 text-sm text-red-500">
                                {errors.profile.message}
                            </p>
                        )}
                    </div>

                    {/* Name + Email */}

                    <div className="grid gap-6 md:grid-cols-2 text-gray-700">
                        <div>
                            <label className="mb-2 block font-medium">
                                Full Name
                            </label>

                            <div className="relative ">
                                <User
                                    className="absolute left-4 top-4 text-gray-400"
                                    size={18}
                                />

                                {myPro ? (
                                    <>
                                        <input
                                            {...register("name", {
                                                required: "Name is requred",
                                            })}
                                            type="text"
                                            id="name"
                                            defaultValue={myPro?.name}
                                            placeholder="Jhon Doe"
                                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <input
                                            {...register("name", {
                                                required: "Name is requred",
                                            })}
                                            type="text"
                                            id="name"
                                            placeholder="Jhon Doe"
                                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                        />
                                        {errors && errors?.name && (
                                            <span className="text-red-500">
                                                {errors?.name?.message}
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="text-gray-700">
                            <label className="mb-2 block font-medium">
                                Email
                            </label>

                            <div className="relative">
                                <Mail
                                    className="absolute left-4 top-4 text-gray-400"
                                    size={18}
                                />

                                <input
                                    {...register("email", {
                                        required: "Email is requred",
                                    })}
                                    id="email"
                                    type="email"
                                    defaultValue={email}
                                    readOnly
                                    className="w-full cursor-not-allowed rounded-xl border bg-gray-100 py-3 pl-11 pr-4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Phone + Fee */}

                    <div className="grid gap-6 md:grid-cols-2 text-gray-700">
                        <div>
                            <label className="mb-2 block font-medium">
                                Phone Number
                            </label>

                            <div className="relative">
                                <Phone
                                    className="absolute left-4 top-4 text-gray-400"
                                    size={18}
                                />

                                {myPro ? (
                                    <>
                                        {" "}
                                        <input
                                            {...register("phone", {
                                                required:
                                                    "Phonme number is requred",
                                                pattern: {
                                                    value: /^[0-9]{11}$/,
                                                    message:
                                                        "Phone number must contain exactly 11 digits",
                                                },
                                            })}
                                            type="tel"
                                            defaultValue={myPro?.phone}
                                            id="phone"
                                            placeholder="+8801XXXXXXXXX"
                                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                        />
                                        {errors && errors?.phone && (
                                            <span className="text-red-500">
                                                {errors?.phone?.message}
                                            </span>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {" "}
                                        <input
                                            {...register("phone", {
                                                required:
                                                    "Phonme number is requred",
                                                pattern: {
                                                    value: /^[0-9]{11}$/,
                                                    message:
                                                        "Phone number must contain exactly 11 digits",
                                                },
                                            })}
                                            type="tel"
                                            id="phone"
                                            placeholder="+8801XXXXXXXXX"
                                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                        />
                                        {errors && errors?.phone && (
                                            <span className="text-red-500">
                                                {errors?.phone?.message}
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-gray-700">
                                Consultation Fee ($)
                            </label>

                            <div className="relative">
                                <DollarSign
                                    className="absolute left-4 top-4 text-gray-400"
                                    size={18}
                                />

                                {myPro ? (
                                    <>
                                        <input
                                            {...register("fee", {
                                                required: "Fee is requred",
                                            })}
                                            id="fee"
                                            type="number"
                                            defaultValue={myPro?.fee}
                                            placeholder="80"
                                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                        />
                                        {errors && errors?.fee && (
                                            <span className="text-red-500">
                                                {errors?.fee?.message}
                                            </span>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <input
                                            {...register("fee", {
                                                required: "Fee is requred",
                                            })}
                                            id="fee"
                                            type="number"
                                            placeholder="80"
                                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                        />
                                        {errors && errors?.fee && (
                                            <span className="text-red-500">
                                                {errors?.fee?.message}
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Experience + Specialization */}

                    <div className="grid gap-6 md:grid-cols-2 text-gray-700">
                        <div>
                            <label className="mb-2 block font-medium">
                                Years of Experience
                            </label>

                            <div className="relative">
                                <Briefcase
                                    className="absolute left-4 top-4 text-gray-400"
                                    size={18}
                                />

                                {myPro ? (
                                    <>
                                        <input
                                            {...register("exp", {
                                                required:
                                                    "Experence is requred",
                                            })}
                                            id="exp"
                                            type="number"
                                            placeholder="10"
                                            defaultValue={myPro?.exp}
                                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                        />
                                        {errors && errors?.exp && (
                                            <span className="text-red-500">
                                                {errors?.exp?.message}
                                            </span>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <input
                                            {...register("exp", {
                                                required:
                                                    "Experence is requred",
                                            })}
                                            id="exp"
                                            type="number"
                                            placeholder="10"
                                            className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                        />
                                        {errors && errors?.exp && (
                                            <span className="text-red-500">
                                                {errors?.exp?.message}
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">
                                Specialization
                            </label>

                            {myPro ? (
                                <>
                                    {" "}
                                    <select
                                        defaultValue={myPro?.specialize}
                                        {...register("specialize", {
                                            required: "Specialize is requred",
                                        })}
                                        id="specialize"
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                                    >
                                        <option>Select Specialization</option>

                                        {specializations.map((item) => (
                                            <option key={item}>{item}</option>
                                        ))}
                                    </select>
                                    {errors && errors?.specialize && (
                                        <span className="text-red-500"></span>
                                    )}
                                </>
                            ) : (
                                <>
                                    {" "}
                                    <select
                                        {...register("specialize", {
                                            required: "Specialize is requred",
                                        })}
                                        id="specialize"
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
                                    >
                                        <option>Select Specialization</option>

                                        {specializations.map((item) => (
                                            <option key={item}>{item}</option>
                                        ))}
                                    </select>
                                    {errors && errors?.specialize && (
                                        <span className="text-red-500"></span>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Bio */}

                    <div className="text-gray-700">
                        <label className="mb-2 block font-medium">
                            Biography
                        </label>

                        <div className="relative">
                            <FileText
                                className="absolute left-4 top-4 text-gray-400"
                                size={18}
                            />

                            {myPro ? (
                                <>
                                    {" "}
                                    <textarea
                                        {...register("des", {
                                            required: "Description is requred",
                                        })}
                                        id="des"
                                        rows={6}
                                        defaultValue={myPro?.des}
                                        placeholder="Write a short professional biography..."
                                        className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                    />
                                    {errors && errors?.des && (
                                        <span className="text-red-500">
                                            {errors?.des?.message}
                                        </span>
                                    )}
                                </>
                            ) : (
                                <>
                                    {" "}
                                    <textarea
                                        {...register("des", {
                                            required: "Description is requred",
                                        })}
                                        id="des"
                                        rows={6}
                                        placeholder="Write a short professional biography..."
                                        className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 outline-none focus:border-blue-600"
                                    />
                                    {errors && errors?.des && (
                                        <span className="text-red-500">
                                            {errors?.des?.message}
                                        </span>
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Save */}
                    {myPro?._id ? (
                        <>
                            {" "}
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                            >
                                <Save size={20} />
                                Update Profile
                            </button>
                        </>
                    ) : (
                        <>
                            {" "}
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                            >
                                <Save size={20} />
                                {!loading
                                    ? "Save Profile"
                                    : "Creating Profile..."}
                            </button>
                        </>
                    )}
                </form>
            </div>
        </section>
    );
};

export default LawyerProfile;
