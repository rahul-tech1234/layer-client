import { baseUrl } from "../baseUrl";

export const ClienthireHistory = async (email) => {
    const result = await fetch(`${baseUrl}api/hirings/client/${email}`);
    const data = await result.json();
    return data;
};
export const getCmt = async (id) => {
    const res = await fetch(`${baseUrl}api/get/cmt/hireing/${id}`);
    const data = await res.json();
    return data;
};
export const getMyAllcmt = async (email) => {
    const res = await fetch(`${baseUrl}api/all/cmt/hireing/${email}`);
    const data = await res.json();
    return data;
};
export const findUserProfile=async (id)=>{
    const user=await fetch(`${baseUrl}api/user/${id}`);
    const data=await user.json();
    return data;
} 
