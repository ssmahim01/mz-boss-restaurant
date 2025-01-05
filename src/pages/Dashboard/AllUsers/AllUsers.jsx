import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
      const updatedData = res.data;

      if (updatedData.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Success!",
          text: `${user?.name} is an admin now`,
          icon: "success",
          timer: 3000,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user?._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
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
      <div>
        <h2 className="text-4xl font-bold mb-6">Total Users: {users.length}</h2>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg">
        <table className="table w-full">
          <thead>
            <tr className="bg-[#D1A054] *:uppercase *:text-white *:font-bold p-4">
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user?._id}>
                <th>{index + 1}</th>
                <td className="text-gray-600 font-semibold">{user?.name}</td>
                <td className="text-gray-600 font-semibold">{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    <button className="badge badge-success text-white font-bold">
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-[#D1A054] btn-md"
                    >
                      <FaUsers className="text-white/90 text-lg" />
                    </button>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
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

export default AllUsers;
