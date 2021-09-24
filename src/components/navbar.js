import React,{Component} from "react";
import { Link } from "react-router-dom";




export class Navbar extends Component{
    render(){
        return(
            <div>
            <header>
            <nav className="bg-theme navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <a className="navbar-brand" href="/"><img src="/images/logo.jpg" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-lg-end" id="navbarTogglerDemo02">
                <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link  className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link  className="nav-link" to="/Dataproction">Dataproction</Link>
                    </li>
                    <li className="nav-item">
                    <Link  className="nav-link" to="/Contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link  className="nav-link" to="/Imprint">Imprint</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
         

         
         
            </div>
            
        )
    }
}