import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import signUpBg from "../../assets/others/authentication2.png";
import authenticationBg from "../../assets/others/authentication.png";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${loggedUser?.displayName} is successfully created an account`,
            showConfirmButton: false,
            timer: 2500,
          });

          navigate("/");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    });
  };

  return (
    <div className="py-10 hero min-h-screen bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url('${authenticationBg}')`
    }}>
      <Helmet>
        <title>MZ Boss | Sign-Up</title>
      </Helmet>

      <div className="hero-content lg:justify-between lg:w-full w-11/12 mx-auto flex-col lg:flex-row-reverse md:p-8" style={{
            boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)"
        }}>
       <figure>
          <img className="w-full h-full rounded-lg" src={signUpBg} alt="Sign Up Image" />
        </figure>
        <div className="card w-full max-w-sm">
        <h1 className="md:text-4xl text-3xl text-center font-bold">Sign Up</h1>

          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Type your Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-rose-500 font-semibold mt-2">
                  Name is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                {...register("photoURL", { required: true })}
                placeholder="Provide your Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-rose-500 font-semibold mt-2">
                  PhotoURL is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Type your Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-rose-500 font-semibold mt-2">
                  Email is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="Type your Password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-rose-500 font-semibold mt-2">
                  Password is required
                </p>
              )}

              {errors.password?.type === "minLength" && (
                <p className="text-rose-500 font-semibold mt-2">
                  Password must be 6 character
                </p>
              )}

              {errors.password?.type === "maxLength" && (
                <p className="text-rose-500 font-semibold mt-2">
                  Password limit is 12 character
                </p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-rose-500 font-semibold mt-2">
                  Password must have one uppercase, one lowercase, one number
                  and one special character
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-[#D1A054] text-lg text-white font-bold"
              />
            </div>
          </form>

          <p className="text-[#D1A054] md:text-xl text-lg font-semibold text-center px-4 pb-4">
            <small>
              Already Have An Account?{" "}
              <Link to="/log-in" className="underline font-bold">
                Go to Log in
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
