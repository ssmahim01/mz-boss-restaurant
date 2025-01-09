import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: Add publishable key from stripe
const stripePromise = loadStripe();

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"} />

            <div>
                <Elements stripe={stripePromise}>
                    {/* Payment Form */}
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;