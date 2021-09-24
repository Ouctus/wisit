import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";

export class Dors extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row dors">
                    <div className="col-12 col-md-8">
                        <h2>Overview: dors - the content aggregator</h2>
                        <p>dors is a hosted full-text, numeric and faceted search engine capable of delivering real-time results from the first press of a button. With the powerful API from dors you can quickly and seamlessly implement the search in your websites and mobile applications. to the dors.today showcast</p>
                        <p>The "Mood Check " app is advertised with the showcast . In the app, information from various data sources is aggregated and prepared on topics. In addition, moods are assigned to the content accessed.</p>

                        <h5>Speed</h5>
                        <p>To deliver the best user experience, we focus on performance - milliseconds matter, and we designed an engine that is capable of delivering results in milliseconds, fast enough for a seamless, "as-you-type" experience - the de facto supplying consumer search experience.</p>
                        <p>Our ability to achieve unparalleled speeds is based on a multitude of factors, many of which are outlined in this blog post. For example, the Algolia engine handles the vast majority of the computation in indexing time, as opposed to query time. In addition, we control the entire stack end-to-end. We've obsessed about every detail, from obtaining quality infrastructure (bare metal servers!) To making our own Ubuntu-based operating system that has been carefully modified for search engine performance.</p>
                        <p>Beyond speed, we focus on providing all the necessary features to make a full-fledged search experience out of hand: prefix search, typo tolerance, faceting, highlighting and much more.</p>

                        <h5>Relevance</h5>
                        <p>Performance matters; However, to be successful, the results must be relevant to the user. The activity and his mood on different topics add to the data with criteria for building stellar text relevance.</p>

                        <h5>Indices</h5>
                        <p>An index is a unit within dors where you import the data to be imported (indexing) and query against (search). The indexes can also be queried in combination and automatic filling via URL (website) is possible.</p>

                        <h5>Properties</h5>
                        <p>dors has many built-in functions that can be easily configured and used with any search implementation. All of these are available out of the box and do not require any additional development.</p>
                        <p>Global language support: dors works with almost all languages.</p>
                        <p>Typo Tolerance: Users mistake words, especially those with mobile devices. To prevent these common mistakes from spoiling your user's search experience.</p>
                        <p>Highlighting and Snippeting: Each search response contains one or more highlighted results so you can easily show which section and words match the user's query.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div>
                            <div className="card card-body bg-light">
                                <h5 className="mt-0">We help you</h5>
                                    <p>To find the right application for you.</p>

                                   <p> We propose simple solutions that suit you.</p>

                                   <p> We design, program and implement your solution.</p>
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