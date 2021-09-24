import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";

export class Services extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h2>Unsere Leistung: Effizient handeln</h2>
                        <p>Sie möchten mithilfe internetbasierter Lösungen Ihre Geschäftsprozesse optimieren, können jedoch Nutzen und Machbarkeit schwer abzuschätzen – welche technischen Möglichkeiten stehen Ihnen dabei grundsätzlich zur Verfügung und wie können diese sinnvoll eingesetzt werden?</p>
                        <p>Wir als Spezialisten im Bereich internetbasierter Informations- technologien analysieren, beraten und planen – wir erstellen mit Ihnen zusammen maßgeschneiderte technische und fachliche Konzeptionen für Ihr Unternehmen.</p>
                        <p>Wir erstellen Pflichtenhefte, Angebotsanfragen und Briefings für Ihre IT-Projekte und koordinieren Agenturen und Dienstleister. Wir dirigieren Fachabteilungen, Anwender und Entwickler und sorgen für einen reibungslosen, prozessoptimalen Ablauf. Wir programmieren nicht nur Ihre IT-Anwendungen – wir entwickeln mit Ihnen zusammen Ihre optimalen Lösungen.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div>
                            <img src="./images/cube.png" alt="" />
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
                            <h5>Portal-Lösungen für Ihr Intranet oder Extranet</h5>
                            <p><strong>Netzwerke, Verbände, Vereine und Einkaufsgemeinschaften können selten Kapazitäten zur Bewältigung zeitraubender Verwaltungsaufgaben bereitstellen. </strong></p>
                            <p>Es wären schlanke, schlagkräftige Strukturen notwendig, um Ihren Mitgliedern adäquate Leistungen zu bieten. Die Integration von Portal-Lösungen und die damit gewährleistete Ortsunabhängigkeit Ihrer Geschäftstätigkeiten können dies jedoch trotzdem ermöglichen</p>
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
                            <h5>Projektmanagement</h5>
                            <p><strong>Die richtige Methode ist nicht alles – aber ein guter Anfang.</strong></p>
                            <p>Ein ausgewogenes professionelles Projektmanagement, basierend auf bewährten Vorgehensweisen, ist ein wichtiger Erfolgsfaktor für jegliche Art von IT-Projekten.</p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3>How we support you:</h3>
                    <ul>
                        <li>We advise you and plan your internet applications.</li>

                       <li> We help you with the creation of specifications and requirements and coordinate your tender.</li>
                        <li>We create and optimize your IT applications.</li>
                        <li>We implement platform independence and create interface programming.</li>

                        <li>We take care of everything from the "look and feel" of the screen design to the uniform design of your company (corporate design).</li>
                    </ul>
                </div>
            </div>
            </>
        )
    }
}