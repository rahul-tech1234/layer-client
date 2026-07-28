import { baseUrl } from "../baseUrl";
import { getTokenServer } from "../getTokenServer";
import { serverMutation } from "../server";

export const addCmt = async (id, data) => {
    const res = await serverMutation(`api/cmt/hireing/${id}`, "PATCH", data);
    return await res;
};

export const cmtDelete = async (id) => {
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}api/cmt/delete/${id}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return await res.json();
};
export const cmtEdit = async (id, data) => {
    const res = await serverMutation(`api/cmt/update/${id}`, "PATCH", data);
    return res;
};
export const userProfileUpdate = async (id, data) => {
    const user = await serverMutation(`api/user/${id}`, "PATCH", data);
    return user;
};
