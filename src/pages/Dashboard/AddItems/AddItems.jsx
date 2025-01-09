import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { usePublicAxios } from "../../../hooks/usePublicAxios";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = () => {
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  const axiosPublic = usePublicAxios();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingAPI, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuResponse = await axiosSecure.post("/menu", menuItem);
      console.log(menuResponse.data);

      if (menuResponse.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }

    console.log(res.data.data.display_url);
  };

  return (
    <div>
      <div>
        <SectionTitle heading={"Add an Item"} subHeading={"What's new"} />

        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                type="text"
                placeholder="Recipe Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full"
              />
            </label>

            <div className="flex gap-6">
              {/* Price */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full"
                />
              </label>

              {/* Category */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                  <option></option>
                </select>
              </label>
            </div>

            {/* Recipe Details */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Recipe Details</span>
              </label>
              <textarea
                {...register("recipe")}
                placeholder="Recipe Details"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>

            <div className="form-control w-full my-6">
              <input
                type="file"
                {...register("image", { required: true })}
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>

            <button className="btn bg-orange-400 border-none rounded-none text-white font-bold">
              Add Item <FaUtensils className="text-lg ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
