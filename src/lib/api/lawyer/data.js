import { baseUrl } from "../baseUrl";

export const myProfile = async (email) => {
    // console.log("email", email);
    const data = await fetch(`${baseUrl}api/lawyerProfile/${email}`);
    return await data.json();
};
export const manLegPro = async (email) => {
    // console.log("email", email);
    const data = await fetch(`${baseUrl}api/lawyer/${email}`);
    return await data.json();
};
export const allService = async (query) => {
    const data = await fetch(`${baseUrl}api/lawyers?${query}`);
    return await data.json();
};
export const LawyerServiceDetails = async (id) => {
    const data = await fetch(`${baseUrl}api/lawyers/${id}`);
    return await data.json();
};
export const hireHistory = async (email) => {
    const result = await fetch(`${baseUrl}api/hirings/lawyer/${email}`);
    return await result.json();
};
