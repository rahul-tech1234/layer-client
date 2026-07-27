import ManageUsersTable from "@/components/dashboard/admin/UserTable";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import EmptyState from "@/components/Empty-Page";
import { allUser } from "@/lib/api/admin/data";

const ManageUsers = async () => {
    const users = await allUser();
    // console.log(users);
    return (
        <>
            <div>
                <DashboardHeading
                    title={"All Users"}
                    des={"all role base users admin can also delete user"}
                ></DashboardHeading>
                {users.lenght === 0 ? (
                    EmptyState
                ) : (
                    <ManageUsersTable users={users} />
                )}
            </div>
        </>
    );
};

export default ManageUsers;
