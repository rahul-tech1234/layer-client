"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaGavel,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [chkpassword, setChkPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log(errors);
    const handleSignUp = async (data) => {
        if (data?.confirmPassword !== data?.password) {
            setChkPassword(true);
            return;
        }
        setChkPassword(false);
        setLoading(true);
        try {
            const { data: registerData, error: registerError } =
                await authClient.signUp.email({
                    ...data,
                });
            if (registerData) {
                toast.success("Welcome! Your account has been created.");
                router.push("/registration/role");
                return;
            }
            if (registerError) {
                toast.error(
                    registerError?.message ||
                        "Registration failed. Please try again.",
                );
            }
            console.log(
                registerData,
                "registerData",
                registerError,
                "registerError",
            );
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    //     const { name, value, type, checked } = e.target;

    //     setForm({
    //         ...form,
    //         [name]: type === "checkbox" ? checked : value,
    //     });
    // };

    // const handleImage = (e) => {
    //     const file = e.target.files[0];

    //     if (file) {
    //         setForm({
    //             ...form,
    //             image: file,
    //         });

    //         setPreview(URL.createObjectURL(file));
    //     }
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     setLoading(true);

    //     setTimeout(() => {
    //         console.log("Mock Register Data", form);

    //         alert("Registration Successful!");

    //         setLoading(false);
    //     }, 2000);
    // };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-black flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                {/* Left */}

                <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-blue-700 to-indigo-900 text-white">
                    <FaGavel size={70} className="mb-6" />

                    <h1 className="text-5xl font-bold mb-5">
                        Join Our Legal Platform
                    </h1>

                    <p className="text-white/80 leading-8">
                        Connect with professional lawyers and trusted legal
                        services. Create your account today and access legal
                        assistance anytime.
                    </p>

                    <div className="mt-10 space-y-3 text-white/90">
                        <p>✔ Verified Lawyers</p>
                        <p>✔ Secure Account</p>
                        <p>✔ Easy Consultation</p>
                        <p>✔ Fast Registration</p>
                    </div>
                </div>

                {/* Right */}

                <div className="p-8 md:p-10">
                    <h2 className="text-4xl text-center font-bold text-white mb-8">
                        Create Account
                    </h2>

                    <form
                        onSubmit={handleSubmit(handleSignUp)}
                        className="space-y-5"
                    >
                        {/* Name */}

                        <div className="relative">
                            <FaUser className="absolute left-4 top-4 text-gray-400" />

                            <input
                                {...register("name", {
                                    required: "Please enter your name",
                                })}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                required
                            />
                            {errors && errors?.name && (
                                <span className="text-red-500">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        {/* Email */}

                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                            <input
                                {...register("email", {
                                    required: "Please enter your email",
                                })}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                required
                            />
                            {/* {errors && errors?.email && (
                                <span className="text-red-500">
                                    {errors.email.message}
                                </span>
                            )} */}
                        </div>

                        {/* Password */}

                        <div className="relative">
                            <FaLock className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                {...register("password", {
                                    required: "Please enter password",
                                    minLength: {
                                        value: 8,
                                        message:
                                            "Password must be at least 8 characters",
                                    },
                                    validate: {
                                        hasUppercase: (value) =>
                                            /[A-Z]/.test(value) ||
                                            "Password must contain at least one uppercase letter",

                                        hasNumber: (value) =>
                                            /[0-9]/.test(value) ||
                                            "Password must contain at least one number",
                                    },
                                })}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 text-gray-400"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {errors && errors?.password && (
                                <span className="text-red-500">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>
                        {/* corfitm password */}
                        <div className="relative">
                            <FaLock className="absolute left-4 top-4 text-gray-400" />

                            <input
                                {...register("confirmPassword", {
                                    required: "Enter password again",
                                })}
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Corfirm Password"
                                className="w-full pl-12 pr-12 py-3 rounded-xl bg-white/10 border border-white/20 text-white outline-none"
                                required
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                className="absolute right-4 top-4 text-gray-400"
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </button>
                            {/* {errors && errors?.confirmPassword && (
                                <span className="text-red-500">
                                    {errors?.confirmPassword.message}
                                </span>
                            )} */}
                            {chkpassword && (
                                <span className="text-red-500">
                                    Enter password again
                                </span>
                            )}
                        </div>

                        {/* Terms */}

                        {/* <label className="flex items-center gap-3 text-gray-300">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={form.agree}
                                onChange={handleChange}
                                required
                            />
                            I agree to the Terms & Conditions
                        </label> */}

                        {/* Submit */}

                        <button
                            disabled={loading}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-105 transition duration-300"
                        >
                            {loading ? "Creating Account..." : "Register"}
                        </button>
                    </form>

                    <p className="text-center text-gray-300 mt-6">
                        Already have an account?
                        <Link
                            href="/login"
                            className="text-blue-400 cursor-pointer ml-2"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
