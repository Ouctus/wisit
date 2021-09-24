import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";
import { Blog_card } from "../Blog_card";

export class Software extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row dors">
                    <div className="col-12 col-md-8">
                        <h2>Software solutions</h2>
                        <img className="float-end ml-2" src="images/tabimg1.jpg" alt="" />
                        <p>We develop solutions for you that are individually tailored to your business processes. The modular structure of our framework software enables us to carry out both large and small changes on a customer-specific basis. The active integration of new components and the execution of test cases are made possible in running applications with reference to the entire system scope. This is your great advantage when it comes to quickly adapting ongoing process applications to the constantly changing environment.</p>
                        
                        <p>The software solutions developed or refined by us “do their job” and prove themselves to our customers every day.</p>
                        <p>The modular structure enables linking and further use of customer-specific requirements. That is why we are constantly expanding our range of products - you benefit from it!</p>
                        </div>
                    <div className="col-12 col-md-4">
                        <div>
                            <div className="card card-body bg-light">
                                <h5 className="mt-0">How we support you</h5>
                                    <p> We develop solutions for you according to your business processes.</p>

 

                                   <p> We support you with the introduction of new systems.</p>

                                    

                                    <p>We will show you software solutions tailored to your needs.        </p>
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