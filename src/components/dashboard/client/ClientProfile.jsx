"use client";

import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";

const UpdateProfileForm = ({ user, onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            name: user?.name || "",
            image: user?.image || "",
        },
    });

    return (
        <div className="mx-auto max-w-2xl rounded-3xl border border-default-200 bg-content1 p-8 shadow-medium">
    <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground">
            Update Profile
        </h2>
        <p className="mt-2 text-default-500">
            Update your full name and profile picture.
        </p>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-center">
            <div className="relative">
                <img
                    src={user?.image}
                    alt={user?.name}
                    className="h-32 w-32 rounded-full border-4 border-primary object-cover shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-content1 bg-primary text-white">
                    ✎
                </div>
            </div>
        </div>

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

        <Button
            type="submit"
            color="primary"
            size="lg"
            className="w-full font-semibold"
            isLoading={isSubmitting}
        >
            Update Profile
        </Button>
    </form>
</div>
    );
};

export default UpdateProfileForm;
