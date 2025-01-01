import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAxiosSecure } from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const location = useLocation();
  const navigate = useNavigate();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    // console.log(food);
    if (user && user?.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} is added to your cart`,
            showConfirmButton: false,
            timer: 2500,
          });

          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/log-in", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="relative card bg-base-100 border border-gray-300 shadow-md">
      <figure>
        <img className="w-full" src={image} alt="Card Image" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 py-1 rounded-full bg-slate-900 text-white font-medium">
        ${price}
      </p>
      <div className="card-body w-full flex flex-col text-center items-center">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-gray-600 font-medium">{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="mt-3 bg-slate-100 btn border-0 border-b-4 btn-outline border-amber-500 uppercase text-amber-500 block mx-auto px-8"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
