import React,{Component} from "react";
import { Dropdheader } from "./dropdheader";

export class Babbov extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
               <div className="bg-theme  pb-4 pt-4 row">
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
                <div className="mt-4">
                    <h3>How we support you:</h3>
                    <ul>
                        <li>We offer you 24/7 care and support.</li>
                        <li>We enable you to rent software on a trial basis and only buy it later.</li>
                        <li>We offer consulting and implementation services for the design, development and integration of applications.</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
}