import { baseUrl } from "../baseUrl";

export const ClienthireHistory = async (email) => {

    const result = await fetch(`${baseUrl}api/hirings/client/${email}`);

    return await result.json();
};
