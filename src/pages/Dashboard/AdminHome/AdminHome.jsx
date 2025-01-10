import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-4xl font-bold">
        <span>Hi, Welcome</span>
        {user?.displayName ? user?.displayName : 'Back'}
      </h2>
    </div>
  );
};

export default AdminHome;
