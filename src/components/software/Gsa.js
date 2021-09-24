
import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";
import { Blog_card } from "../Blog_card";

export class Gsa extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row dors">
                    <div className="col-12 col-md-8">
                        <h2>Search Our Network</h2>
                        <p>Google also offers its search expertise to companies. If implemented skillfully, this can be an excellent addition with many advantages FOR and IN your company.</p>    
                    </div>
                </div>
                <Blog_card />
            </div>
            </>
        )
    }
}