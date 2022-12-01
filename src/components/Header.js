import './Header.scss';
import { Link } from "react-router-dom";


export default function Header() {
    return (
    <header className='header'>
        <Link className='app-name' to={"/"}>Trackmeister</Link>
        <nav>
            
            <Link to={"/tree"}>Tree</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to={"/roadmap"}>Roadmap</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to={"/experiment"}>Create Experiment</Link>
        </nav>
    </header>
    )
}