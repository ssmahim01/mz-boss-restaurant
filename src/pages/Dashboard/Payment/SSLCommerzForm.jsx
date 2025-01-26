import { MdPayment } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";

const SSLCommerzForm = () => {
  const [cart] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  //   console.log(cart, totalPrice);

  const handlePayment = async (e) => {
    e.preventDefault();

    const paymentInfo = {
        transactionId: "",
        email: user?.email,
        price: totalPrice,
        date: new Date(),
        cartIds: cart.map((item) => item?._id),
        menuItemIds: cart.map((item) => item?.menuId),
        status: "Pending",
      };

     const response = await axiosSecure.post("/ssl-commerz-payments", paymentInfo);
     console.log(response.data);
     
             if (response.data?.gatewayUrl) {     
               window.location.replace(response.data?.gatewayUrl);
             }
  };

  return (
    <div>
      <SectionTitle heading={"SSL Commerz"} subHeading={"Local payment"} />

      <div>
        <form onSubmit={handlePayment}>
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col justify-between items-center gap-2">
              <div className="md:w-1/2 form-control flex-row gap-2">
                <label className="label">
                  <span className="label-text text-lg font-bold">Email: </span>
                </label>
                <input
                  type="email"
                  name="Email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered input-primary w-full"
                />
              </div>

              <div className="form-control">
                <p className="text-gray-800 text-lg font-bold flex gap-2 items-center">
                  <span>Total Price: </span>
                  <span className="text-gray-600">${totalPrice}</span>
                </p>
              </div>
            </div>

            <div className="form-control pt-4 items-center">
              <button
                type="submit"
                className="md:w-2/5 text-lg btn bg-indigo-500 border-none rounded-md text-white font-bold flex gap-2 items-center"
              >
                <MdPayment className="text-2xl" /> <span>Pay Now</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SSLCommerzForm;
