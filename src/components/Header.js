import '../styles/Header.scss';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className='header'>
            <Link className='app-name' to={"/"}>Experiment&nbsp;IQ</Link>
            {/* {props.activeNode && <h2 style={{ backgroundColor: "red" }}>{props.activeNode}</h2>} */}
            <nav>
                <Link to={"/tree"}>Tree</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to={"/tree2"}>Tree Two</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to={"/roadmap"}>Roadmap</Link>
            </nav>
        </header>
    )
}