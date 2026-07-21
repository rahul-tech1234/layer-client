"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaGoogle,
} from "react-icons/fa";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // const handleChange = (e) => {
    //     const { name, value, checked, type } = e.target;

    //     setForm({
    //         ...form,
    //         [name]: type === "checkbox" ? checked : value,
    //     });
    // };

    const handleLogIn = async (data) => {
        setLoading(true);
        try {
            const { data: signInData, error: signInError } =
                await authClient.signIn.email({
                    ...data,
                    callbackURL: "/",
                });
            if (signInData) {
                toast.success("Login Success");
            }
            if (signInError) {
                toast.error(signInError?.message);
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    const googleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center px-5 h-screen">
            <div className=" rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/10">
                {/* Left Side */}

                {/* <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-indigo-700 to-slate-900 text-white p-12">
                    <div>
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                <FaBalanceScale size={26} />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold">
                                    LegalConnect
                                </h2>

                                <p className="text-sm text-gray-300">
                                    Trusted Legal Platform
                                </p>
                            </div>
                        </div>

                        <h1 className="text-5xl font-bold leading-tight">
                            Professional Legal Services
                        </h1>

                        <p className="mt-6 text-gray-300 leading-8">
                            Connect with experienced lawyers, manage
                            consultations, track your legal cases, and access
                            trusted legal advice from anywhere.
                        </p>
                    </div>

                    <div className="space-y-3 text-gray-300">
                        <div>✔ Verified Lawyers</div>
                        <div>✔ Secure Authentication</div>
                        <div>✔ End-to-End Privacy</div>
                        <div>✔ Fast Consultation Booking</div>
                    </div>
                </div> *

                {/* Right */}

                <div className="bg-white p-8 lg:p-14">
                    <div className="max-w-md mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Welcome Back
                        </h2>

                        <p className="text-gray-500 mt-2 mb-8">
                            Sign in to access your legal dashboard.
                        </p>

                        <button
                            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-3 hover:bg-gray-100 transition text-gray-500"
                            onClick={googleSignIn}
                        >
                            <FaGoogle className="text-red-500" />
                            Continue with Google
                        </button>

                        <div className="flex items-center gap-4 my-8">
                            <div className="flex-1 h-px bg-gray-300"></div>

                            <span className="text-gray-500 text-sm">OR</span>

                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        <form
                            onSubmit={handleSubmit(handleLogIn)}
                            className="space-y-5"
                        >
                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                                <input
                                    {...register("email", {
                                        required: "Please enter your email",
                                    })}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email address"
                                    className="w-full pl-12 py-3 rounded-xl border focus:border-indigo-600 outline-none text-gray-400"
                                    required
                                />
                                {errors && errors?.email && (
                                    <span className="text-red-500">
                                        {errors?.email?.message}
                                    </span>
                                )}
                            </div>

                            <div className="relative text-gray-500">
                                <FaLock className="absolute left-4 top-4 text-gray-400" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    id="password"
                                    {...register("password", {
                                        required: "Please enter your password",
                                    })}
                                    className="w-full pl-12 pr-12 py-3 rounded-xl border focus:border-indigo-600 outline-none"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-4 text-gray-500"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                                {errors && errors?.password && (
                                    <span className="text-red-500">
                                        {errors?.password?.message}
                                    </span>
                                )}
                            </div>

                            {/* <div className="flex justify-between items-center">
                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        checked={form.remember}
                                        onChange={handleChange}
                                    />
                                    Remember me
                                </label>

                                <button
                                    type="button"
                                    className="text-indigo-600 text-sm hover:underline"
                                >
                                    Forgot password?
                                </button>
                            </div> */}

                            <button
                                disabled={loading}
                                className="w-full py-3 rounded-xl bg-indigo-700 hover:bg-indigo-800 text-white font-semibold transition"
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </button>
                        </form>

                        <p className="text-center text-gray-600 mt-8">
                            Don&apos;t have an account?
                            <Link
                                href="/registration"
                                className="ml-2 text-indigo-600 font-semibold hover:underline"
                            >
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
