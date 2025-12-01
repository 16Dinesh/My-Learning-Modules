import { supabase } from "../services/supabaseClient";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 shadow">
      <Link to="/" className="text-xl font-bold">My Supabase App</Link>

      {user ? (
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => supabase.auth.signOut()}
        >
          Logout
        </button>
      ) : (
        <div className="flex gap-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}
