import AllTransiction from "@/components/dashboard/admin/AllTransiction";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import { allUserTransaction } from "@/lib/api/admin/data";

const page = async () => {
    const usersTrans = await allUserTransaction();
    console.log(usersTrans);
    return (
        <div>
            <DashboardHeading
                title={"All Transaction"}
                dec={"All transactionId user name email ect"}
            ></DashboardHeading>
            <AllTransiction transactions={usersTrans}/>
        </div>
    );
};

export default page;
