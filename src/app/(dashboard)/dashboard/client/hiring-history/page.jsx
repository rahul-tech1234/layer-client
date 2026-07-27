import ClientHiringHistoryTable from "@/components/dashboard/client/ClientHiringHistoryTable";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import EmptyState from "@/components/Empty-Page";
import { ClienthireHistory } from "@/lib/api/client/data";
import { roleValidation, user } from "@/lib/api/session";

const HiringHistory = async () => {
    const isUser = await user();

    const userEmail = isUser?.email;

    const clientHire = await ClienthireHistory(userEmail);

    await roleValidation("client");
    console.log(roleValidation("client"));

    return (
        <div>
            <DashboardHeading
                title={"My Lawyer Requests"}
                des={"After lawyer accept this pay button show"}
            ></DashboardHeading>
            {clientHire.length === 0 ? (
                <EmptyState></EmptyState>
            ) : (
                <ClientHiringHistoryTable hiringHistory={clientHire} />
            )}
        </div>
    );
};

export default HiringHistory;
