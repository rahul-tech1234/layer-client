import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export const getUser = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return session;
};
export const roleValidation = async (role) => {
    const user = getUser();
    const logInUser = user?.user;
    if (!logInUser || logInUser !== role) {
        return redirect("/Unauthorized");
    }
};
