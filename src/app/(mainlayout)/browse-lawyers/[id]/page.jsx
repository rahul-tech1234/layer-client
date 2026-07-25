import LawyerDetails from "@/components/LawyerDetails";
import { getCmt } from "@/lib/api/client/data";
import { LawyerServiceDetails } from "@/lib/api/lawyer/data";
import { getUser } from "@/lib/api/session";

const Details = async ({ params }) => {
    const user = await getUser();
    console.log(user);
    const { id } = await params;
    //const serId = details?._id;
    //const data = await getCmt(serId);
    //console.log(data);
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
