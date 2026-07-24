import ClientHiringHistoryTable from "@/components/dashboard/client/ClientHiringHistoryTable";
import { ClienthireHistory } from "@/lib/api/client/data";

import { getUser } from "@/lib/api/session";

const HiringHistory = async () => {
    const { user, isPending } = await getUser();
    const userEmail = user?.email;
    // console.log("userEmail", userEmail);
    const clientHire = await ClienthireHistory(userEmail);

    if (isPending) {
        return <span>Loading</span>;
    }
    return (
        <div>
            <ClientHiringHistoryTable const hiringHistory={clientHire} />
        </div>
    );
};

export default HiringHistory;
