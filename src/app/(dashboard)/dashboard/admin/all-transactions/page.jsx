import AllTransiction from "@/components/dashboard/admin/AllTransiction";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import EmptyState from "@/components/Empty-Page";
import { allUserTransaction } from "@/lib/api/admin/data";

const page = async () => {
    const usersTrans = await allUserTransaction();
    // console.log(usersTrans);
    return (
        <div>
            <DashboardHeading
                title={"All Transaction"}
                des={"All transactionId user name email ect"}
            ></DashboardHeading>
            {usersTrans.length === 0 ? (
                <EmptyState></EmptyState>
            ) : (
                <AllTransiction transactions={usersTrans} />
            )}
        </div>
    );
};

export default page;
