import { serverMutation } from "@/lib/api/server"

export const addUserRole=async(role,id)=>{
    const res=await serverMutation(`/api/user/${id}`,"PATCH",{role}) 
    return await res;
}