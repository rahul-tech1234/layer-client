import { serverDltMutation, serverMutation } from "../server"

export const userDelete=async(id)=>{
    const res=await serverDltMutation(`api/delete/user/${id}`,"DELETE");
    return res;
}
export const updateUserRole=async(id,data)=>{
    const res=await serverMutation(`api/update/user/${id}`,"PATCH",data);
    return res;
}