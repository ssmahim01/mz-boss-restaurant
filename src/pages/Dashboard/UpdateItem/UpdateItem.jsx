import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useAxiosSecure } from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { usePublicAxios } from "../../../hooks/usePublicAxios";

const UpdateItem = () => {
  const {name, category, price, recipe, _id} = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = usePublicAxios();
  const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

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

      const menuResponse = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuResponse.data);

      if (menuResponse.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} is updated to the menu`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    }

    console.log(res.data.data.display_url);
  };

  return (
    <div>
      <SectionTitle
        heading={"Update The Item Info"}
        subHeading={`${name}`}
      />

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              defaultValue={name}
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
                defaultValue={price}
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
                defaultValue={category}
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
            defaultValue={recipe}
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
            Update Menu Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
