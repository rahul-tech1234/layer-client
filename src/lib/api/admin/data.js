import { baseUrl } from "../baseUrl";
import { getTokenServer } from "../getTokenServer";

export const allUser = async () => {
    const token = await getTokenServer();
    const users = await fetch(`${baseUrl}api/find/allusers`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await users.json();
    return data;
};
export const allUserTransaction = async () => {
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}api/all-transactions`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data;
};
export const getAnalytics = async () => {
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}api/admin/analytics`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return await res.json();
};
