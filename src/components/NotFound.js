import { Link } from 'react-router-dom';
import '../styles/notfound.css';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <div>
            <h2>Sorry :(</h2>
                Hello
                <p>That page cannot be found</p>
                <Link to="/">Back to the homepage...</Link>

            </div>

            {/* <img alt="noreferer" src="1be5f039-810f-41e6-9449-89b9d7de14ef.webp"></img> */}
        </div>
     );
}
 
export default NotFound;