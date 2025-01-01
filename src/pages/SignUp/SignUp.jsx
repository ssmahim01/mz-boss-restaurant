import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {createUser} = useContext(AuthContext);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
        })
    };
    
  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>MZ Boss | Sign-Up</title>
      </Helmet>

      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", {required: true})}
                placeholder="Type your Name"
                className="input input-bordered"
                />
                {errors.name && <span className="text-rose-500 font-semibold mt-2">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", {required: true})}
                placeholder="Type your Email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-rose-500 font-semibold mt-2">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", {required: true, minLength: 6, maxLength: 12, pattern: /(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z])/})}
                placeholder="Type your Password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && <p className="text-rose-500 font-semibold mt-2">Password is required</p>}

              {errors.password?.type === 'minLength' && <p className="text-rose-500 font-semibold mt-2">Password must be 6 character</p>}

              {errors.password?.type === 'maxLength' && <p className="text-rose-500 font-semibold mt-2">Password limit is 12 character</p>}

              {errors.password?.type === 'pattern' && <p className="text-rose-500 font-semibold mt-2">Password must have one uppercase, one lowercase, one number and one special character</p>}
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Sign Up" className="btn bg-[#D1A054] text-lg text-white font-bold" />
            </div>
          </form>

          <p className="text-[#D1A054] md:text-xl text-lg font-semibold text-center px-4 pb-4"><small>Already Have An Account? <Link to="/log-in" className="underline font-bold">Go to Log in</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
