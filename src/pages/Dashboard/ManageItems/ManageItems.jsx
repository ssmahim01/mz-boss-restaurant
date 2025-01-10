import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  //   console.log(menu);

  const handleDeleteItem = (item) => {
    // console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res);
        if (res.data.deletedCount > 0) {
          refetch();

          Swal.fire({
            title: "Deleted!",
            text: `${item?.name} has been deleted`,
            icon: "success",
            timer: 2500,
            showConfirmButton: false,
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle heading={"Manage All Items"} subHeading={"Hurry Up"} />

      <div className="overflow-x-auto bg-base-100 rounded-lg">
        <table className="table w-full">
          <thead>
            <tr className="bg-[#D1A054] *:uppercase *:text-white *:font-bold p-4">
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>
                  <img
                    className="w-14 h-14 rounded-lg"
                    src={item?.image}
                    alt={item?.name}
                  />
                </td>

                <td className="text-gray-600 font-semibold">{item?.name}</td>
                <td className="text-gray-600 font-semibold">${item?.price}</td>
                <td>
                  <Link to={`/dashboard/update-item/${item?._id}`}>
                  <button
                    className="btn bg-[#D1A054] btn-sm"
                  >
                    <FaEdit className="text-white/90 text-xl" />
                  </button>
                  </Link>
                </td>

                <td>
                  <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn text-rose-500 text-lg btn-ghost btn-md"
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

export default ManageItems;
