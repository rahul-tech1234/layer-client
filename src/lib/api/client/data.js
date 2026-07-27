import { baseUrl } from "../baseUrl";
import { getTokenServer } from "../getTokenServer";

export const ClienthireHistory = async (email) => {
    const token = await getTokenServer();
    const result = await fetch(`${baseUrl}api/hirings/client/${email}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await result.json();
    return data;
};
export const getCmt = async (id) => {
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}api/get/cmt/hireing/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data;
};
export const getMyAllcmt = async (email) => {
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}api/all/cmt/hireing/${email}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data;
};
export const findUserProfile = async (id) => {
    const token = await getTokenServer();
    const user = await fetch(`${baseUrl}api/user/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await user.json();
    return data;
};
