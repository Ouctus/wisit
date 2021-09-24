import React,{Component} from "react";
import { Dropdheader } from "./dropdheader";

export class Application_service extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h2>Application Service Providing (ASP)</h2>
                        <h5>Warum ein Taxi kaufen, wenn man es mieten kann?</h5>
                        <p>Entsprechend Ihrer Bedürfnisse stellen wir Ihnen passend zugeschnittene Lösungen zur Verfügung. Im Bereich des Application Service Providing sorgen wir für den reibungslosen Einsatz Ihrer Software und aller benötigten Hardware/Server-Komponenten.</p>
                        <h6>Your advantages:</h6>
                        <ul>
                        <li>no administrative overhead,</li>
                        <li>calculable costs,</li>
                        <li>Focus on your core business,</li>
                        <li>low "total cost of ownership",</li>
                        <li>low investment,</li>
                        <li>Rent payments are directly deductible as business expenses,</li>
                        <li>fast implementation.</li>
                        </ul>
                        <p>Our customers appreciate the fact that we get applications up and running faster, improve service quality and reduce costs.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div>
                            <img src="images/serviceimg.jpg" />
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
                <div className="mt-4">
                    <h3>We do for you:</h3>
                    <ul>
                        <li>Hardware / software provision.</li>
                       <li> Update and maintenance of the applications.</li>
                        <li>Monitoring the content.</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
}