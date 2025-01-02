import useCart from "../../../hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
              timer: 2500,
              showConfirmButton: false,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitle subHeading={"My Cart"} heading={"Wanna Add More?"} />

      <div className="flex justify-evenly mt-8">
        <h2 className="text-4xl font-bold text-center uppercase">
          Total Orders: {cart.length}
        </h2>

        <h2 className="text-4xl font-bold text-center">
          Total Price: ${totalPrice}
        </h2>

        <button className="uppercase btn bg-[#D1A054] text-white font-bold">
          Pay
        </button>
      </div>

      <div className="overflow-x-auto mt-5 bg-white rounded-lg">
        <table className="table">
          <thead>
            <tr className="bg-[#D1A054] *:uppercase *:text-white *:font-bold p-4">
              <th>Serial</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item?.image} alt={item?.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="text-gray-700 font-bold">{item?.name}</span>
                </td>
                <td>
                  {" "}
                  <span className="text-gray-700 font-bold">
                    ${item?.price}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn text-rose-500 btn-ghost btn-md"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
