import MyComments from "@/components/dashboard/client/MyComments";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import { getMyAllcmt } from "@/lib/api/client/data";
import { user } from "@/lib/api/session";

const page = async () => {
    const isUser = await user();
    const email = isUser?.email;

    const cmt = await getMyAllcmt(email);
    // console.log("cmt:", cmt);
    return (
        <div>
            <DashboardHeading
                title={"My Comments "}
                des={"My all Commnets"}
            ></DashboardHeading>
            <MyComments comments={cmt}></MyComments>
        </div>
    );
};

export default page;
