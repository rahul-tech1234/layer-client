import UpdateProfileForm from "@/components/dashboard/client/ClientProfile";
import { roleValidation } from "@/lib/api/session";

const UpdateProfile = async () => {
    await roleValidation("client");
    return (
        <div>
            {" "}
            <UpdateProfileForm />
        </div>
    );
};

export default UpdateProfile;
