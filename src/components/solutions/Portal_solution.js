import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";
import { Blog_card } from "../Blog_card";

export class Portal_solution extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row dors">
                    <div className="col-12 col-md-8">
                        <h2>Portal solutions (Internet, extranet, intranet)</h2>
                        <p>New valuable possibilities and opportunities can arise for you when you connect your intranet to the extranet! This means that you no longer only provide access to information via the company's own network (intranet), but also distribute information regardless of location via the Internet in a secure area (extranet). In this way, partners and customers are integrated efficiently and effectively. You save time and money.</p>
                        <p>It is not mandatory, but it is still an opportunity.</p>

                        <h6>Example:</h6>
                        <p>You can provide your partners or customers with information on a weekly basis, e.g. B. in the form of a newsletter by post or email. This is quite time-consuming and you have no overview of whether all the information has actually been received.
                        Experience has shown that partners and customers are happy to collect your information if this process is simple and reliable and the process is routine. In addition, this can be done anywhere in the world at any time, 24 hours a day - when the user actually needs the information and not depending on the frequency of the e-mail service.</p>
                        <p>Exchange of experience and knowledge management, collaboration, creation of workspaces - these are the future requirements for your intranet. Integrate your employees, partners and customers by expanding it into an extranet. Connect knowledge.</p>
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
                <Blog_card />
            </div>
            </>
        )
    }
}