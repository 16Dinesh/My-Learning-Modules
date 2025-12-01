import { getAuthUrl } from "../api/auth";

export default function Login() {
  const login = () => {
    window.location.href = getAuthUrl();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
        onClick={login}
      >
        Login with OAuth2.0
      </button>
    </div>
  );
}
