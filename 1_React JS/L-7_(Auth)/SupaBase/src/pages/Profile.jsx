import { useAuth } from "../context/AuthContext";
import Logout from "../components/Auth/Logout";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {user.email}</p>
      <Logout />
    </div>
  );
}
