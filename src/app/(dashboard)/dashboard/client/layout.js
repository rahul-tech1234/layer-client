import { roleValidation } from "@/lib/api/session";


const ClientLayout = async ({ children }) => {
    //await roleValidation("client");
    return children;
};

export default ClientLayout;
