import { baseUrl } from "@/lib/api/baseUrl";
import { stripe } from "@/lib/stripe";
import PaymentSuccess from "./PyamentSuccess";

const PaymentSuccessPage = async ({ searchParams }) => {
    const { session_id } = await searchParams;
    if (!session_id)
        throw new Error("Please provide a valid session_id (`cs_test_...`)");

    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ["line_items", "payment_intent"],
    });
    //console.log("session metadata", session);

    const paymentData = {
        consultationFee: session?.metadata?.consultationFee,
        clientEmail: session?.metadata?.clientEmail,
        serviceId: session?.metadata?.serviceId,
        serviceEmail: session?.metadata?.serviceEmail,
        serviceTitle: session?.metadata?.serviceTitle,
        clientId: session?.metadata?.clientId,
        paymentType: session?.metadata?.type,
        transactionId: session?.payment_intent?.id,
        paymentStatus: session?.payment_status,
    };
    console.log("meta", paymentData);
    const res = await fetch(`${baseUrl}api/hirings`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(paymentData),
    });
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <PaymentSuccess></PaymentSuccess>
        </div>
    );
};

export default PaymentSuccessPage;
