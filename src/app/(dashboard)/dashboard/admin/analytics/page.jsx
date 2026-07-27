import AnalyticsDashboard from "@/components/dashboard/admin/Anaticis";
import DashboardHeading from "@/components/dashboard/DashboardHeading";
import EmptyState from "@/components/Empty-Page";
import { getAnalytics } from "@/lib/api/admin/data";

const Analitics = async () => {
    const analitics = await getAnalytics();
    console.log("analitics main", analitics);
    return (
        <div>
            <DashboardHeading title={"Overview"}></DashboardHeading>
            <AnalyticsDashboard analytics={analitics} />
            {analitics.length === 0 ? (
                <EmptyState></EmptyState>
            ) : (
                <AnalyticsDashboard analytics={analitics} />
            )}
        </div>
    );
};

export default Analitics;
