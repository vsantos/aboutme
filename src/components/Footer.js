import happy from './happy.png'; // Tell webpack this JS file uses this image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css';

const Footer = () => {
    return ( 
        <div className="footer-container">
            {/* <img src={happy} alt="Happy" width="128" height="128" /> */}
            <div className="footer-links">
            <a href="http://code.vsantos.cloud" target="_blank" rel='noreferrer'><FontAwesomeIcon className="footer-link-github" icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/jvictorssouza/" target="_blank" rel='noreferrer'><FontAwesomeIcon className="footer-link-linkedin" icon={faLinkedinIn} /></a>
            </div>
            <div className="footer-mini-character">
                <img src={happy} alt="Happy" width="128" height="128"/>
            </div>
            
        </div>
     );
}
 
export default Footer;