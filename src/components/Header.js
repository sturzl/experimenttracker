import { Link } from "react-router-dom";


export default function Header() {
    return (
    <nav>
        <Link to={"/"}>Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to={"/experiment"}>Create Experiment</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to={"/tree"}>Tree</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to={"/roadmap"}>Roadmap</Link>
    </nav>
    )
}