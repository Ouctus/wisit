import React,{Component} from "react";
import { Link } from "react-router-dom";

export class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <ul>
                        <li><a href="">Fon +49 211 9098 0210</a></li>
                        <li><a href="">Fax +49 211 9098 2349</a></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Imprint">Imprint</Link></li>
                        <li><a href="">GF: Markus Schulte-Huermann</a></li>
                        
                    </ul>
                </div>
                <div className="copyright text-center">
                    <div className="container"><p>© 1999-2021 ® wisit GmbH</p></div>
                </div>
            </footer>
        )
    }
}