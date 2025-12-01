import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeCodeForToken } from "../api/auth";
import useAuth from "../hooks/useAuth";

export default function Callback() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");

    if (code) {
      exchangeCodeForToken(code).then((data) => {
        login(data);
        navigate("/");
      });
    }
  }, []);

  return <div className="p-10 text-center">Authenticating...</div>;
}
