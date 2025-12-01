import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to Supabase + Shadcn</h1>
      <p className="text-lg mt-2">
        Please{" "}
        <Link
          to="/login"
          className="underline-offset-4 hover:underline text-blue-600"
        >
          login
        </Link>{" "}
        or{" "}
        <Link
          to="/signup"
          className="underline-offset-4 hover:underline text-blue-600"
        >
          signup
        </Link>{" "}
        to continue.
      </p>
    </div>
  );
}
