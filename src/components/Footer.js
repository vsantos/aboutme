import '../styles/footer.css';

import happy from './happy.png';
import surprised from './surprised.png';
import cool from './cool.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

const Footer = () => {

    // const [count, setCount] = useState(0);
    const [img, setImage] = useState(happy);
    function handleMiniCharacterHover(imgPath){
        console.log("path", imgPath.surprised)
        setImage(imgPath)
    }

    return ( 

        <div className="footer-container">
            <div className="footer-links">
            <a href="http://code.vsantos.cc" target="_blank" rel='noreferrer'><FontAwesomeIcon className="footer-link-github" icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/jvictorssouza/" target="_blank" rel='noreferrer'><FontAwesomeIcon className="footer-link-linkedin" icon={faLinkedinIn} /></a>
            </div>

            <div className="footer-mini-character">
                <img 
                    onMouseOver={() => handleMiniCharacterHover(cool)}
                    onMouseOut={() => handleMiniCharacterHover(happy)}
                    onMouseUp={() => handleMiniCharacterHover(cool)}
                    onMouseDown={() => handleMiniCharacterHover(surprised)}
                    src={img} alt="Happy" width="128" height="128"
                />
            </div>
            
        </div>
     );
}
 
export default Footer;