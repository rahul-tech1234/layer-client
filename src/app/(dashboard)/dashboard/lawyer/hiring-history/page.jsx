import DashboardHeading from "@/components/dashboard/DashboardHeading";
import HiringHistoryTable from "@/components/dashboard/HiringHistoryTable";
import { hireHistory } from "@/lib/api/lawyer/data";
import { getUser } from "@/lib/api/session";

const HiringHistry = async () => {
    const { user, isPending } = await getUser();
    const email = user?.email;

    const data = await hireHistory(email);
    //console.log(data);
    if (isPending) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className="">
            <DashboardHeading
                title={"Lawyer hireing history"}
                des={
                    "View all clients who have hired your legal services in one place. Track hiring records, consultation fees, payment status, transaction details, and hiring dates to efficiently manage your legal engagements."
                }
            ></DashboardHeading>
            <HiringHistoryTable hirings={data} />
        </div>
    );
};

export default HiringHistry;
