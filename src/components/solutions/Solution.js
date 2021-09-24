import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";

export class Solution extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row appco">
                    <div className="col-12 col-md-5">
                        <h2>Solutions and concepts</h2>
                        <p>We create ideas and concepts with a holistic approach. We don't always have to reinvent the wheel to create connections and links for new solutions.</p>
                        <p>Not only new information technologies are our ideas, but also structures of everyday life or science and research - we think outside the box.</p>

                        <h5>" The more we engage, the more we learn and the better we can do for our customers."</h5>
                        <p><strong>Michael Dell</strong></p>
                    </div>
                    <div className="col-12 col-md-3">
                        <div>
                            <div>
                                <img src="images/solutionimg.jpg" alt="" />
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card card-body bg-light">
                            <h5>How we support you</h5>
                                <p>We bring interdisciplinary information together.</p>

 

                                <p>We develop ideas and ensure cooperation.</p>

                                

                               <p> We bring the right partners together.</p>
                        </div>
                    </div>
                </div>
                <div className="bg-theme mt-4 pb-4 pt-4 row">
                    <div className="col-12 col-md-3">
                        <div className="card p-2">
                            <h5>Ideen und Geschäftsmodelle</h5>
                            <p><strong>Fehlende Kapazitäten und unzureichendes (beschränktes, begrenztes, unzulängliches) Know-how hemmen das Wachstum vieler Unternehmen. </strong></p>
                            <p>Dabei ist die wirkkräftige Umsetzung neuer Ideen, von Geschäftsmodellen, Prozessen oder Dienstleistungen sowohl für die Etablierung neuer Unternehmen als auch für die nachhaltige Entwicklung bestehender Firmen von essentieller Wichtigkeit.</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card p-2">
                            <h5>Knodge V0.591 - for networks that work</h5>
                            <p><strong>Knowledge management for clubs, funding agencies and associations </strong></p>
                            <p>As a mixture of a document management system and an interaction platform, Knodge enables the collected knowledge from the most varied of areas to be managed centrally and comprehensively.</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card p-2">
                            <h5>Application Service</h5>
                            <p><strong>Use solutions without ballast - whether individual or standard software.</strong></p>
                            <p>Wisit solutions GmbH offers flexible usage options for software solutions tailored to your needs. Whether CMS, community or ERP solutions - this enables a smooth transition for you.</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card p-2">
                            <h5>wisit V3.3</h5>
                            <p><strong>(w) ebbased (i) nformation - (s) ystem (i) ntegrating (t) echnology</strong></p>
                            <p>is a web-based ERP solution that enables you to completely map and coordinate complex service processes across the entire value chain.</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}