import DashboardHeading from "@/components/dashboard/DashboardHeading";
import HiringHistoryTable from "@/components/dashboard/HiringHistoryTable";
import EmptyState from "@/components/Empty-Page";
import { hireHistory } from "@/lib/api/lawyer/data";
import { roleValidation, user } from "@/lib/api/session";

const HiringHistry = async () => {
    const isUser = await user();
    console.log("isUser", isUser);

    const email = isUser?.email;

    const data = await hireHistory(email);
    //console.log(data);

    await roleValidation("lawyer");
    return (
        <div className="">
            <DashboardHeading
                title={"Lawyer hireing history"}
                des={
                    "View all clients who have hired your legal services in one place. Track hiring records, consultation fees, payment status, transaction details, and hiring dates to efficiently manage your legal engagements."
                }
            ></DashboardHeading>
            {data.length === 0 ? (
                <EmptyState></EmptyState>
            ) : (
                <HiringHistoryTable hirings={data} />
            )}
        </div>
    );
};

export default HiringHistry;
