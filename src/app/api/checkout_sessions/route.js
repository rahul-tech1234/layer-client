import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";
import { getUser } from "@/lib/api/session";

export async function POST(req) {
    try {
        const headersList = await headers();
        const origin = headersList.get("origin");
        const body = await req.json();
        const { type } = body;
        //console.log(body);

        const user = await getUser();
        let lineObj;
        let metaObj;
        if (type == "subscription") {
            lineObj = {
                // Provide the exact Price ID (for example, price_1234) of the product you want to sell
                price: "price_1Tvl7p0RexUWmorCpYLwoSLP",
                quantity: 1,
            };
        } else {
            lineObj = {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: body?.serviceTitle,
                    },
                    unit_amount: Math.round(body.consultationFee * 100),
                },
                quantity: 1,
            };
            metaObj = {
                clientEmail: body?.clientEmail || "",
                clientName: body?.clientName || "",
                clientId: body?.clientId || "",
                serviceEmail: body?.serviceEmail || "",
                serviceId: body?.serviceId || "",
                serviceTitle: body?.serviceTitle || "",
                consultationFee: String(body?.consultationFee || ""),
            };
        }
        const successUrl =
            type == "subscription"
                ? `${origin}/dashboard/lawyer/premium-success?session_id={CHECKOUT_SESSION_ID}`
                : `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`;
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            customer_email: user?.user?.email,
            line_items: [lineObj],
            metadata: metaObj,
            mode: type === "subscription" ? "subscription" : "payment",
            success_url: successUrl,
            cancel_url: `${origin}/dashboard/lawyer/premium-success?session_id={CHECKOUT_SESSION_ID}`,
        });
        //console.log("session", session);
        return NextResponse.json({ url: session.url });
    } catch (err) {
        //console.log("err", err);
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 },
        );
    }
}
