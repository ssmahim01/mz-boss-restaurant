import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { usePublicAxios } from "../../hooks/usePublicAxios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { logInWithGoogle } = useAuth();
  const axiosPublic = usePublicAxios();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then((result) => {
        const user = result.user;

        const userInfo = {
          name: user?.displayName,
          email: user?.email,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user?.displayName} is successfully logged in with Google`,
            showConfirmButton: false,
            timer: 3000,
          });
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div className="block mx-auto py-4">
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline text-lg font-bold px-6 flex gap-2 items-center"
        >
          <FaGoogle className="text-xl" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
