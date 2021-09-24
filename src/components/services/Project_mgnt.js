import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";

export class Project_mgnt extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row appco">
                    <div className="col-12 col-md-8">
                        <h2>Project management</h2>
                        <p>If it is essential that projects have to be evaluated and processed, then none of your resources should be tied up by the project management: We are happy to provide you with our experience!</p>
                        <p>We manage the implementation of your wishes - within your time frame, according to your budget and according to your quality specifications.</p>
                        <p>We communicate your wishes in the technical language of the respective industries and coordinate agencies, directors, graphic artists, printers, producers, programmers, suppliers and providers. You have a central responsible contact person in us.</p>

                        <h5>"We make sure that your wishes come true."</h5>
                        <p>wisit gmbh</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div>
                            <div>
                                <img src="images/proimg.jpg" alt="" />
                            </div>
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