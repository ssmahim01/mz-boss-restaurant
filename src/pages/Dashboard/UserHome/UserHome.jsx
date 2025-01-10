import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Hi, Welcome{" "}
        <span className="text-amber-500 font-bold">
          {user?.displayName ? user?.displayName : "Back"}
        </span>
      </h2>
    </div>
  );
};

export default UserHome;
