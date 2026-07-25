import { baseUrl } from "../baseUrl";

export const ClienthireHistory = async (email) => {
    const result = await fetch(`${baseUrl}api/hirings/client/${email}`);

    return await result.json();
};
export const getCmt = async (id) => {
    const res = fetch(`${baseUrl}/api/get/cmt/hireing/${id}`);
    const data= await res.json();
    return data;
};
