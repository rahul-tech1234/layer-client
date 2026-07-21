import { serverDltMutation, serverMutation } from "../server";

export const creatLawPro = async (data) => {
    const res = await serverMutation("api/lawyerProfile", "POST", data);
    return res;
};
export const updateProfile = async (profileData, lawyerEmail) => {
    const res = await serverMutation(
        `api/lawyerProfile/${lawyerEmail}`,
        "PATCH",
        profileData,
    );
    return await res;
};
export const addService = async (data) => {
    const res = await serverMutation("api/lawyer", "POST", data);
    return res;
};
export const updateService = async (data, id) => {
    const res = await serverMutation(`api/lawyer/${id}`, "PATCH", data);
    return await res;
};
export const deleteService = async (id) => {
    const res = await serverDltMutation(`api/lawyer/${id}`, "DELETE");
    return await res;
};
