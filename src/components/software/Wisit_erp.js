

import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";
import { Blog_card } from "../Blog_card";
import { Link } from "react-router-dom";

export class Wisit_erp extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row dors">
                    <div className="col-12 col-md-8">
                        <h2>Wisit - an open software solution for network structures</h2>
                        <p>wisit stands for w eb-based i nformation s ystem - i ntegrating t echnology.</p>
                        <p>With our web-based ERP software wisit, you can network both your internal and external service partners with a focus on the best solution for your customer.</p>
                        <img className=" mt-2 mb-2 m-auto d-block" src="images/erpimg.jpg" alt="" />

                       <p>You oversee and control your service processes from start to finish in an effective and efficient way. You retain a complete overview and influence on the coordination of external service providers / partners and internal departments with the aim of satisfying your customers as best as possible. wisit ensures cross-company information flows through an optimized network from which all of your company's processes that are directed towards your customers benefit. The process information system wisit helps you to optimize your processes.</p>
                       </div>
                    <div className="col-12 col-md-4">
                        <div>
                            <div className="card card-body bg-light">
                                <h5 className="mt-0">Partners and references</h5>
                                <Link to="/Partners">Partners and references</Link>
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