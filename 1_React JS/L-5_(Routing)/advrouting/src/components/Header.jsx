import { Link} from "react-router-dom";

export default function Header() {
return (
    <div>
        <nav style={{ padding: "1rem", background: "#f2f2f2" }}>
        <Link to="/"> Home</Link>
      </nav>
    </div>
)
}