import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {signInWithEmail} = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const validateTypedCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;

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
        console.log(user);
    })
    .catch(error => {
        console.log(error.message);
    })
  };

  return (
    <div>
      <Helmet>
        <title>MZ Boss | Log-In</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-lg">
            <form className="card-body" onSubmit={handleLoginWithEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Provide your Email"
                  className="input input-bordered"
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
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Type the captcha of above"
                  className="input input-bordered"
                  required
                />

                <button onClick={validateTypedCaptcha} className="btn btn-outline btn-xs mt-3">Validate</button>
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

            <p className="text-[#D1A054] md:text-xl text-lg font-semibold text-center px-4 pb-4"><small>New Here? <Link to="/sign-up" className="font-bold">Create an Account</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
