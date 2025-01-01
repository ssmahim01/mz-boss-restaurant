import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import LoginBg from "../../assets/others/authentication2.png";
import "./Login.css";
import Swal from "sweetalert2";

const Login = () => {
    const {signInWithEmail} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const validateTypedCaptcha = (e) => {
        const user_captcha_value = e.target.value;

        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
        // console.log(value);
    };

  const handleLoginWithEmail = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInWithEmail(email, password)
    .then(userCredential => {
        const user = userCredential?.user;
        // console.log(user);

        Swal.fire({
          icon: "success",
          title: "Successful",
          text: `${user?.displayName} is successfully logged in`,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });

        navigate("/");
    })
    .catch(error => {
        // console.log(error.message);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
    })
  };

  return (
    <div>
      <Helmet>
        <title>MZ Boss | Log-In</title>
      </Helmet>
      <div className="hero bg-login min-h-screen py-10">
        <div className="hero-content rounded-lg lg:w-full w-11/12 mx-auto md:p-7 flex-col md:flex-row" style={{
            boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)"
        }}>
         <figure>
          <img className="w-full h-full" src={LoginBg} alt="Background image of Login" />
         </figure>
          <div className="card md:w-1/2 max-w-sm">
          <h1 className="md:text-4xl text-3xl text-center font-bold">Login</h1>
            <form className="card-body space-y-3" onSubmit={handleLoginWithEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Provide your Email"
                  className="input input-bordered md:w-full w-72"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Provide your Password"
                  className="input input-bordered md:w-full w-72"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  onBlur={validateTypedCaptcha}
                  name="captcha"
                  placeholder="Type the captcha of above"
                  className="input input-bordered md:w-full w-72"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054] text-lg text-white font-bold"
                  type="submit"
                  value="Log In"
                  disabled={disabled}
                />
              </div>
            </form>

            <p className="text-[#D1A054] md:text-xl text-lg font-semibold text-center px-4 pb-4"><small>New Here? <Link to="/sign-up" className="underline font-bold">Create a New Account</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
