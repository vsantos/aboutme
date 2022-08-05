import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"> <h1>vsantos.cloud_</h1></Link>
            <div className="links">
                <a href="http://code.vsantos.cloud" target="_blank" rel='noreferrer'>Code <FontAwesomeIcon size={"xs"} icon={faExternalLinkAlt}/></a>
                <a href="http://blog.vsantos.cloud" target="_blank" rel='noreferrer'>Blog <FontAwesomeIcon size={"xs"} icon={faExternalLinkAlt}/></a>
                <b><Link to="/skills" className="link-skills">Skills</Link></b>
            </div>
        </nav>
     );
}
 
export default Navbar;