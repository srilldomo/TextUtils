import React,{useEffect} from 'react'
import PropTypes from 'prop-types';
import { Link,useLocation } from 'react-router-dom';
export default function Navbar(props) {

    let location = useLocation();
    useEffect(() => {
     console.log(location)
    }, [location]);

    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.name}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={ `nav-link  ${location.pathname === "/"?"active":""}`}  aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about"?"active":""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === "light" ? " dark" : " light"} `}>
                            <input className="form-check-input" type="checkbox" onClick={props.switchmode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                        </div>
 
                    </div>
                </div>
            </nav>
        </div>
    )
}
// when u passed props is a type of string and or number and give permission on protypes only name is a type of string then if u enter name inside is a type of number this should be throw a error and isRequired use when if u will not pass the props this will be throw a erorr in console
Navbar.propTypes = {
    name: PropTypes.string.isRequired,

}