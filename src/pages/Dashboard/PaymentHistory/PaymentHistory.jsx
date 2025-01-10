import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading={"Payment History"}
        subHeading={"Check your Payments"}
      />

      <div className="overflow-x-auto bg-base-100 rounded-lg">
        <table className="table w-full">
          <thead>
            <tr className="bg-[#D1A054] *:uppercase *:text-white *:font-bold p-4">
              <th>#</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Price</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment?._id}>
                <th>{index + 1}</th>
                <td className="text-gray-600 font-semibold">
                  {payment?.email}
                </td>
                <td className="text-gray-600 font-semibold">
                  {payment?.transactionId}
                </td>
                <td className="text-gray-600 font-semibold">
                  ${payment?.price}
                </td>
                <td className="text-gray-600 font-semibold">
                  {new Date(payment?.date).toLocaleDateString()}
                </td>
                <td>
                  <p
                    className={`font-semibold text-white ${
                      payment?.status === "Pending"
                        ? "badge badge-warning"
                        : "badge badge-success"
                    }`}
                  >
                    {payment?.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
