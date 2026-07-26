import LawyerDetails from "@/components/LawyerDetails";
import { getCmt } from "@/lib/api/client/data";
import { LawyerServiceDetails } from "@/lib/api/lawyer/data";
import { user } from "@/lib/api/session";

import { redirect } from "next/navigation";

const Details = async ({ params }) => {
    const isUser = await user();
    //  const user = session?.user;
    console.log("isUser:", isUser);
    // if (isPending) {
    //     return <span>Loadiing...</span>;
    // }
    if (!isUser) {
        redirect("/auth/login");
    }

    const { id } = await params;

    const details = await LawyerServiceDetails(id);
    console.log(`ID: ${id} Details ${details}`);
    const cmt = await getCmt(details?._id);
    //console.log("cmt page", cmt);

    return (
        <>
            <LawyerDetails
                service={details}
                user={isUser}
                cmt={cmt}
            ></LawyerDetails>
        </>
    );
};

export default Details;
("");
