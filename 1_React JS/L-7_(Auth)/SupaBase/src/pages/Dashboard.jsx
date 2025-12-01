import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome Back 🎉</h1>
      <p className="text-lg mt-2">Logged in as: {user.email}</p>
    </div>
  );
}
