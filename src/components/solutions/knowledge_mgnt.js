import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";
import { Blog_card } from "../Blog_card";

export class knowledge_mgnt extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row dors">
                    <div className="col-12 col-md-8">
                        <h2>Wisit Knodge - knowledge management</h2>
                        <p>Knodge is a platform that gives networks, clubs and associations a large amount of common room for maneuver. In addition to the filing and management of documents, there is also a communicative exchange on the platform level, which is located directly in the data filing system. In contrast to our software for in-house business process management, the prerequisite for interdisciplinary networking is also met. The structure of the system can be independently adapted to the specifications and needs of the respective network. Not only is a comprehensive data collection created, but the system can also be used in a very short time for process optimization within temporary working groups. Multi-tenancy makes it possible</p>
                        <p>A tidy front end is available for the users of the system, which enables intuitive work. The only difference between the administrator area is the additional functions that are required for editing the system. There is no need to switch from the front-end to the back-end area.</p>
                        <img className="float-end" src="images/knwimg.jpg" alt="" />
                        <p>The system is equipped with various modules that expand the range of functions. (Possible equipment includes: click picture to enlarge)</p>
                        <p>Additional functions and modules can also be developed and integrated as required - Knodge scores above all for its flexibility. Furthermore, the software is always based on the latest technology. Depending on the type of service contract concluded, these regular updates are integrated into ongoing operations so that you can always be sure of the "state of the art" network.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <div>
                            <div className="card card-body bg-light">
                                <h5 className="mt-0">Club management</h5>
                                    <p>With Knodge we offer networks Associations and associations an established platform for document management and interaction -  inexpensive through ASP </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Blog_card />
            </div>
            </>
        )
    }
}