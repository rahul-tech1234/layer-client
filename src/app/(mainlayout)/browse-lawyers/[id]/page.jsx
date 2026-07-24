import LawyerDetails from "@/components/LawyerDetails";
import { LawyerServiceDetails } from "@/lib/api/lawyer/data";
import { getUser } from "@/lib/api/session";

const Details = async ({ params }) => {
    const user = await getUser();
    const { id } = await params;

    const details = await LawyerServiceDetails(id);
    //console.log("Details page", details);
    return (
        <>
            <LawyerDetails service={details} user={user?.user}></LawyerDetails>
        </>
    );
};

export default Details;
("");
