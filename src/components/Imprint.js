import React, {Component} from "react";
import { Dropdheader } from "./dropdheader";



export class Imprint extends Component{
    render(){
        return(
            <div>
                
               
                <Dropdheader />
                

                <div className="container ptb-50 dapcont">
                    <h2>Imprint</h2>
                    

                    <div className="row mt-4">
                        <div className="col-12 col-md-4">
                            <div className="card p-3">
                                <h3>Wisit solutions GmbH</h3>
                                <p>Burghofstrasse 30
                                40223 Düsseldorf</p>
                                <p>Phone: +49 211 9098 0210</p>
                                <p>Fax: +49 211 9098 2349</p>
                                <p><a href="">info (at) wisit.com</a></p>
                                <p>Managing directors: <strong>Dipl.-Ing. Markus Schulte-Huermann</strong></p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card p-3">
                                <p>Register court:  District Court Dusseldorf</p>
                                <p>Commercial register sheet: HRB 60042 </p>
                                <p>Sales tax identification: DE 263497908</p>
                                <p>DUNS®: 341330184</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card p-3">
                                <h3>Partner company</h3>
                                <p><strong>wisit communication GmbH</strong></p>
                                <p>Bahnerbredde 24 44229 Dortmund</p>
                                <p>Phone: +49 231 58035840</p>

                                <p>Fax: +49 231 58035729</p>

                                <p>info (at) wisit-communication.com</p>

                                <p>Managing directors: Gerhard Klöckener</p>
                            </div>
                        </div>
                        <div className="col-12 bg-theme p-3 mt-4">
                            <h3>Imprint</h3>
                            <p>Liability notice:</p>
                            <p>Despite careful control of the content, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content. </p>
                        </div>

                        <div className="col-12 mt-5">
                            <h3>Data protection notice</h3>
                            <p>It goes without saying that we treat users' personal data confidentially. The collection and processing of your data takes place within the framework of the data protection regulations.</p>
                            <p>When you visit our website, our web server automatically saves the name of your internet service provider, the website from which you are visiting us,</p>
                            <p>the web pages you visit on our site, as well as the date and duration of your visit. Tools such as google analytics are used on this page to check sustainability .</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}