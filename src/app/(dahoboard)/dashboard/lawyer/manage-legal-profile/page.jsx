import DashboardHeading from "@/components/dashboard/DashboardHeading";
import LawyerTable from "@/components/dashboard/LawyerTable";
import { manLegPro } from "@/lib/api/lawyer/data";
import { getUser } from "@/lib/api/session";

const ManageLegalProfile = async () => {
    const session = await getUser();
    const user = session?.user;
    const email = user?.email;

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
