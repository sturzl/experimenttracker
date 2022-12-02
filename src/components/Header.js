import '../styles/Header.scss';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className='header'>
            <Link className='app-name' to={"/"}>Experiment&nbsp;IQ</Link>
            <nav>
                <Link to={"/tree"}>Tree View</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to={"/tree"}>New View</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to={"/roadmap"}>Roadmap View</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to={"/tree2"}>Filter Experiments</Link>
            </nav>
        </header>
    )
}