import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";
import { Blog_card } from "../Blog_card";

export class Sumak extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row dors">
                    <div className="col-12 col-md-8">
                        <h2>SUMAK KAWSAY</h2>
                        <h4>How are you today - and how tomorrow?</h4>
                        <p>Today in our company we know a lot about our image in public, about our customers, about partners and suppliers, about our employees. Surveys and statistical surveys underpin these subject areas with key figures and mean values. However, they rarely ask for something very simple but fundamental: How happy and satisfied are all of the respondents. This is where the SUMAK KAWSAY app comes in. She doesn't ask for numbers. She asks how people are doing. No more and no less.</p>
                        <p>Based on this simple approach, the SUMAK KAWSAY app enables companies to draw a real-time- based mood picture of themselves, their customers and their employees in a temporal and spatial context. The perceived mood of each individual participant becomes a measurable and interpretable fact in the sum of all participants. It allows root cause research, the definition of relevant subject areas and the resulting dialogue about them. It provides reasons and creates facts for deriving and reviewing initiated improvement measures. It helps in change and crisis management to identify problem areas in good time and to take countermeasures at an early stage. It increases employee motivation. SUMAK KAWSAYis extremely easy to use, as an app it is available anytime and anywhere. The mood is submitted absolutely anonymously and without prior registration.</p>

                        <h5>SUMAK KAWSAY can do more than happy or not:</h5>
                            <ul>
                                <li> Absolute branding, implemented quickly and effectively</li>

                                <li> SUMAK KAWSAY works without hardware, only the mobile phone is sufficient</li>

                                <li> SUMAK KAWSAY gives feedback - to the customer and the employees</li>

                                <li> SUMAK KAWSAY sends an email when threshold values ​​are reached</li>

                                <li> SUMAK KAWSAY is independent of place or time</li>

                                <li> SUMAK KAWSAY can speak several languages</li>

                                <li> SUMAK KAWSAY can handle events and a large number of simultaneous accesses</li>

                                <li> SUMAK KAWSAY real-time analysis</li>

                                <li> SUMAK KAWSAY is on German servers, other countries are possible on request</li>

                                <li> SUMAK KAWSAY is safe from fraud and multiple voting</li>

                                <li> SUMAK KAWSAY is anonymous</li>

                                <li> SUMAK KAWSAY provides relevant information</li>
                            </ul>

                            <h5>Areas of application</h5>
                                <ul>
                                    <li> Solution for evaluating social issues</li>

                                    <li> Solution to support communal issues</li>

                                    <li> Solution for people - health sector - digital health</li>

                                    <li> Solution for customer feedback</li>

                                    <li> Solution for employee survey</li>

                                    <li> Solution for visitor survey</li>
                                </ul>
                        </div>
                    <div className="col-12 col-md-4">
                        <div>
                            <div className="card card-body bg-light">
                                <h5 className="mt-0">Club management</h5>
                                    <p>To find the right application for you.</p>

    

                                    <p>We propose simple solutions that suit you.</p>

                                    

                                    <p>We design, program and implement your solution.</p>
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