import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to="/"> <h1>vsantos.cloud_</h1></Link>
           {/* <a href="/"> <h1>vsantos.cloud<o>_</o></h1></a> */}
            <div className="links">
                {/* <Link to="/skills">Skills</Link> */}
                <a href="http://code.vsantos.cloud" target="_blank" rel='noreferrer'>Code <FontAwesomeIcon size={12} icon={faExternalLinkAlt}/></a>
                <a href="http://blog.vsantos.cloud" target="_blank" rel='noreferrer'>Blog <FontAwesomeIcon size={12} icon={faExternalLinkAlt}/></a>
                <b><Link to="/skills" style={{
                    color: '#14213d',
                    backgroundColor: '#dda15e',
                    borderRadius: '6px'
                }}>Skills</Link></b>
            </div>
        </nav>
     );
}
 
export default Navbar;