import AddService from "@/components/dashboard/AddService";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import {  roleValidation } from "@/lib/api/session";

const AddServicePage = async () => {
   
       await roleValidation("lawyer");
    return (
        <div className="w-full">
            <DashboardHeading
                title={" Add New Legal Service"}
                des={"Publish a legal service that clients can hire."}
            />
            <AddService />
        </div>
    );
};

export default AddServicePage;
