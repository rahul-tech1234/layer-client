import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export const getUser = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return session;
};
export const user = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return session?.user;
};
export const roleValidation = async (role) => {
    const logInUser = await user();
    if (!logInUser || logInUser?.role !== role) {
        return redirect("/auth/login");
    }
    return logInUser;
};
