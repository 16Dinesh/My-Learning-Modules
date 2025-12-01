import useAuth from "../hooks/useAuth";

export default function Home() {
  const { logout } = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">Welcome!</h1>
      <button
        onClick={logout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
