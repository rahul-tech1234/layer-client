import { baseUrl } from "../baseUrl";
import { serverMutation } from "../server";

export const addCmt = async (id, data) => {
    const res = await serverMutation(`api/cmt/hireing/${id}`, "PATCH", data);
    return await res;
};
export const updateLawyerStatus = async (id, data) => {
    const res = await serverMutation(
        `api/updateLawyerStatus/${id}`,
        "PATCH",
        data,
    );
    return res;
};
export const cmtDelete = async (id) => {
    const res = await fetch(`${baseUrl}api/cmt/delete/${id}`, {
        method: "PATCH",
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
