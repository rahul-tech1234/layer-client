import { baseUrl } from "../baseUrl";

export const myProfile = async (email) => {
    // console.log("email", email);
    const data = await fetch(`${baseUrl}api/lawyerProfile/${email}`);
    return data.json();
};
export const manLegPro = async (email) => {
    // console.log("email", email);
    const data = await fetch(`${baseUrl}api/lawyer/${email}`);
    return data.json();
};
