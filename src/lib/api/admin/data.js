import { baseUrl } from "../baseUrl";

export const allUser = async () => {
    const users = await fetch(`${baseUrl}api/find/allusers`);
    const data = await users.json();
    return data;
};
