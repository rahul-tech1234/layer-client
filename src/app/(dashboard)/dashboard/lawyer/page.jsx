import Subscription from "@/components/Subscription";
import SubscriptionWelcome from "@/components/Welcome";
import { getUser } from "@/lib/api/session";

const LayerDashboard = async () => {
    const user = await getUser();
    const isPremium = user?.user?.isPremium;

    return (
        <div>
            {isPremium ? (
                <>
                    <SubscriptionWelcome />
                </>
            ) : (
                <>
                    <Subscription />
                </>
            )}
        </div>
    );
};

export default LayerDashboard;
