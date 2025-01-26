import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SSLCommerzForm from "./SSLCommerzForm";

// TODO: Add publishable key from stripe
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div>
      <div className="bg-white p-8 rounded-box shadow-md">
        <Tabs>
          <TabList>
            <Tab>Stripe</Tab>
            <Tab>SSL Commerz</Tab>
          </TabList>

          <TabPanel>
            <Elements stripe={stripePromise}>
              {/* Payment Form */}
              <CheckoutForm />
            </Elements>
          </TabPanel>

          <TabPanel>
            <SSLCommerzForm />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Payment;
