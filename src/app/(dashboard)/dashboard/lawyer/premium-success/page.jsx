import PaymentSuccessPage from "@/components/PremiumSuccess";
import { baseUrl } from "@/lib/api/baseUrl";
import { getUser } from "@/lib/api/session";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

export default async function PremiumSuccess({ searchParams }) {
    const { session_id } = await searchParams;
    const isUser = await getUser();
    const user = isUser?.user;
    console.log("user", user, user?.isPremium);

    if (!session_id)
        throw new Error("Please provide a valid session_id (`cs_test_...`)");

    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items", "payment_intent"],
    });
    // console.log(session);
    // console.log(session.customer_email);
    // console.log(session.status);
    // console.log(session.payment_status);
    // console.log(session.amount_total);
    // console.log(session.metadata);
    const payment = {
        lawyer: session.customer_email,
        amount: session.amount_total,
        status: session.payment_status,
        date: new Date().toLocaleDateString(),
    };

    const res = await fetch(
        `${baseUrl}api/users/update-premium/${session.customer_email}`,
        {
            method: "PATCH",
            cache: "no-store",
        },
    );

    const data = await res.json();
    // console.log("data", data);

    if (user?.isPremium) {
        redirect("/dashboard/lawyer/premium-success");
    }

    return <PaymentSuccessPage payment={payment} />;
}
