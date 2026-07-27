import { baseUrl } from "../baseUrl";
import { getTokenServer } from "../getTokenServer";

export const myProfile = async (email) => {
    const token = await getTokenServer();
    //console.log("Profile email", email);
    const data = await fetch(`${baseUrl}api/lawyerProfile/${email}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return await data.json();
};
export const manLegPro = async (email) => {
    const token = await getTokenServer();
    // console.log("email", email);
    const data = await fetch(`${baseUrl}api/lawyer/${email}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return await data.json();
};
export const allService = async (query) => {
    const data = await fetch(`${baseUrl}api/lawyers?${query}`);
    return await data.json();
};
export const LawyerServiceDetails = async (id) => {
    const token = await getTokenServer();
    const data = await fetch(`${baseUrl}api/lawyers/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return await data.json();
};
export const hireHistory = async (email) => {
    const token = await getTokenServer();
    const result = await fetch(`${baseUrl}api/hirings/lawyer/${email}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const data = result.json();
    return data;
};
export const letestLawyers = async () => {
    // console.log(`${baseUrl}api/newest/lawyers`);
    const result = await fetch(`${baseUrl}api/newest/lawyers`);
    const data = await result.json();
    // console.log(data);
    return data;
};
export const topLayers = async () => {
    const result = await fetch(`${baseUrl}api/top-lawyers`);
    return await result.json();
};
