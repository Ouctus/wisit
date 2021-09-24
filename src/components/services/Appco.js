import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";

export class Appco extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row appco">
                    <div className="col-12 col-md-8">
                        <h2>Wisit media GmbH</h2>
                        <p>individual app and backend development</p>

                        <h5>Backend - also possible as IaaS</h5>
                        <p>INFRASTRUCTURE FOR YOUR ENTERPRISE INNOVATION</p>
                        <p>Growing requirements are forcing companies to innovate quickly and provide even better functionality for customers. In order to meet these expectations, IT must provide efficient, flexibly usable services in a new way. Fortunately, technical barriers that previously prevented companies from setting up scalable data centers are now resolving very quickly. wisit Grid paves the way for enterprise clouds that are optimized to accommodate both traditional and cloud-native applications with ease.</p>

                        <h6>wisit grid clouds</h6>
                        <p>With wisit grid clouds you can manage your strategically most important in-house workloads with little effort and at the same time have the option of a seamless transition to a hybrid cloud environment, if the operation requires this.</p>

                        <h6>App</h6>
                        <p>We develop our apps specifically on the Unity game engine. By using this game engine, we have access to one of the most powerful multi-platform tools on the market and can therefore implement your ideas very efficiently. We made the decision in favor of Unity for several reasons: On the one hand, we have been able to develop more and more trade fair and multimedia applications recently and, on the other hand, portability to iOS, Android and Windows Phone was necessary. This enables us to offer our customers high-quality app productions with a good price / performance ratio. Due to our focus on development with Unity and the networking of our developers, we are able to implement complex applications in the shortest possible time</p>

                        <h6>Unity and its advantages:</h6>
                        <ul>
                            <li>- Support of all major smartphone platforms: iOS, Android and Windows Phone</li>

                           <li> - Unity3D offers extensive support and a number of ready-made tools that simplify development and can be integrated into our internal processes.</li>

                            <li>- Possibility to bring the apps to SmartTV with little effort (Apple TV, Samsung and Google TV)</li>

                           <li> - Export also possible as a desktop application for Mac or Windows</li>

                           <li> - Enables the development of virtual reality and augmented reality applications</li>

                           <li> - Native support for many smartphone functions (push, sensor data, ...)</li>

                            <li>- Build-in services, without much additional effort (multiplayer, analytics, monitarization, ...)</li>
                        </ul>

                        <h6>You are getting everything out of one hand with us</h6>
                        <p> We would be happy to advise you on architecture and planning, including taking your internal work processes and framework conditions into account</p>

                        <p> We are happy to set up the required infrastructure for you and look after it or hand it over to your internal administration</p>

                            <p>We are happy to develop the complete backend to suit your requirements</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div>
                            <div className="card card-body bg-light">
                                <h5>All from a single source:</h5>
                               <p> We would be happy to advise you on architecture and planning, including taking your internal work processes and framework conditions into account.</p>

                                <p>We are happy to set up the required infrastructure for you and look after it or hand it over to your internal administration.</p>

                               <p> We are happy to develop the complete backend to suit your requirements.</p>
                            </div>
                            <div className="card card-body bg-light mt-4">
                                <h5 className="mt-0 mb-3">Wisit cloud</h5>
                                <img src="./images/wisserv.png" alt="" />
                            </div>
                            <div className="card card-body bg-light mt-4">
                                <h5 className="mt-0 mb-3">We help you</h5>
                                <p>To find the right application for you.</p>

                                <p>We propose simple solutions that suit you.</p>

                                <p>We design, program and implement your solution.</p>
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