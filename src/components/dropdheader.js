import React, {Component} from "react";
import { Link } from "react-router-dom";

export class Dropdheader extends Component{
    render(){
        return(
            <div>
                <div><img src="images/banner3-small.jpg" className="w-100" /> </div>
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar2" aria-controls="navbar2" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar2">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item dropdown">
                          <Link  className="nav-link dropdown-toggle" to="/Services"> Services</Link>
                          <ul className="dropdown-menu shadow" aria-labelledby="navbarScrollingDropdown">            
                            <Link className="dropdown-item" to="/Appco">App and co.</Link>
                            <Link className="dropdown-item" to="/Implement">Implement business models</Link>
                            <Link className="dropdown-item" to="/Project_mgnt">Project Management</Link>
                            
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          
                          <Link  className="nav-link dropdown-toggle" to="/Solution"> Solutions / Concepts</Link>
                          <ul className="dropdown-menu shadow" aria-labelledby="navbarScrollingDropdown">            
                            
                            <Link className="dropdown-item" to="/Dors">dors.today</Link>
                            <Link className="dropdown-item" to="/Sumak">Sumak Kawsay</Link>
                            <Link className="dropdown-item" to="/Portal_solution">Portal solutions</Link>
                            <Link className="dropdown-item" to="/knowledge_mgnt">Knowledge management</Link>
                            <Link className="dropdown-item" to="/Seminars">SEMINRS: Web-based seminar management software</Link>
                            
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          
                          <Link  className="nav-link dropdown-toggle" to="/Software"> Software</Link>
                          <ul className="dropdown-menu shadow" aria-labelledby="navbarScrollingDropdown">
                            <Link className="dropdown-item" to="/Wisit_erp">wisit ERP software solution</Link>
                            <Link className="dropdown-item" to="/knowledge_mgnt">Knodge - the network innovation</Link>
                            <Link className="dropdown-item" to="/Dors">CRM</Link>
                            <Link className="dropdown-item" to="/Agenda">Agenda - business software</Link>
                            <Link className="dropdown-item" to="/Gsa">GSA Search</Link> 
                          </ul>
                        </li>
                        <li className="nav-item dropdown">
                          
                          <Link  className="nav-link dropdown-toggle" to="/Service"> Service</Link>
                          <ul className="dropdown-menu shadow" aria-labelledby="navbarScrollingDropdown"> 
                            <Link  className="dropdown-item" to="/Application_service">Application Services</Link>
                            <Link  className="dropdown-item" to="/Babbov">Babbovoco.de - for partners and publishing cooperations</Link>
                            
                            
                          </ul>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </nav>
            </div>
        )
    }
}