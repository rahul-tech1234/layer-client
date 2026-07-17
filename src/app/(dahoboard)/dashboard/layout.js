import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import Logo from "@/components/Logo";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-black">
            <aside className="w-64 h-screen border-r border-white">
                <DashboardSidebar />
            </aside>
            <div>{children}</div>
        </div>
    );
};

export default DashboardLayout;
