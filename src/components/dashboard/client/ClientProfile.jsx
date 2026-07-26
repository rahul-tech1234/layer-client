"use client";

import { userProfileUpdate } from "@/lib/api/client/action";
import { useSession } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DashboardHeading from "../DashboardHeading";

const UpdateProfileForm = () => {
    const { data: session, isPending } = useSession();
    const user = session?.user;
    //console.log("user:", user);
    console.log("id", user?.id);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    if (isPending) {
        return <span>Loading...</span>;
    }
    const updateprofile = async (data) => {
        const id = user?._id;
        const userData = {
            name: data?.name,
            image: data?.image,
        };
        const userUpdate = await userProfileUpdate(user?.id, userData);
        console.log(userUpdate);
        if (userUpdate.modifiedCount > 0) {
            toast.success("Update profile");
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <DashboardHeading
                title={"Update Profile"}
                des={"change user name and image "}
            ></DashboardHeading>{" "}
            <div className="mx-auto max-w-2xl rounded-3xl border border-default-200 bg-content1 p-8 shadow-medium ">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-foreground">
                        Update Profile
                    </h2>
                    <p className="mt-2 text-default-500">
                        Update your full name and profile picture.
                    </p>
                </div>

                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(updateprofile)}
                >
                    <div className="flex justify-center">
                        <div className="relative">
                            <Image
                                height={128}
                                width={128}
                                src={user?.image}
                                alt={user?.name}
                                className="h-32 w-32 rounded-full border-4 border-primary object-cover shadow-lg"
                            />
                            <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-content1 bg-primary text-white">
                                ✎
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            variant="bordered"
                            defaultValue={user?.name}
                            {...register("name", {
                                required: "Full name is required",
                            })}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message}
                        />

                        <Input
                            label="Profile Picture URL"
                            placeholder="https://i.ibb.co/xxxxx/profile.jpg"
                            variant="bordered"
                            defaultValue={user?.image}
                            {...register("image", {
                                required: "Profile picture is required",
                            })}
                            isInvalid={!!errors.image}
                            errorMessage={errors.image?.message}
                        />
                    </div>

                    <Button
                        type="submit"
                        color="primary"
                        size="lg"
                        className="w-full font-semibold"
                        //  isLoading={isSubmitting}
                    >
                        Update Profile
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfileForm;
