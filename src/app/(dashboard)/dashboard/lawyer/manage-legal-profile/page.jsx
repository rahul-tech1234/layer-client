import DashboardHeading from "@/components/dashboard/DashboardHeading";
import LawyerTable from "@/components/dashboard/LawyerTable";
import { manLegPro } from "@/lib/api/lawyer/data";
import { roleValidation, user } from "@/lib/api/session";

const ManageLegalProfile = async () => {
    const isUser = await user();
    const email = isUser?.email;
   

    await roleValidation("lawyer");

    const manageData = await manLegPro(email);


    return (
        <div>
            <DashboardHeading
                title={"Legal Profile Manage"}
                des={"jldgsj uglkszm usdj jsd"}
            ></DashboardHeading>
            <LawyerTable manageData={manageData}></LawyerTable>
        </div>
    );
};

export default ManageLegalProfile;
