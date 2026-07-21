"use client";
import { useSession } from "../auth-client";

export const FindUser = () => {
    const { data: session } = useSession();
    return session?.user;;
};
