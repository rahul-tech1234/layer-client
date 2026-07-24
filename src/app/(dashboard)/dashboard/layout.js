import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-black">
            {/* Sidebar */}
            <aside className="h-screen shrink-0 border-r border-white">
                <DashboardSidebar />
            </aside>

            {/* Dynamic Content Area */}
            <main className="flex-1 min-w-0 overflow-x-hidden">{children}</main>
        </div>
    );
};

export default DashboardLayout;
