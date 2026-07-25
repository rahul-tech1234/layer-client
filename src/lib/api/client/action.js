import { serverMutation } from "../server";

export const addCmt = async (id, data) => {
    const res = await serverMutation(`api/cmt/hireing/${id}`, "PATCH", data);
    return await res;
};
