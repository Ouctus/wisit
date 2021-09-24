import React, {Component} from "react";
import { Dropdheader } from "./dropdheader";

export class Contact extends Component{
    render(){
        return(
            <div className="">
                <Dropdheader />
                <div className="container ptb-50">
                    <h4>Write us an eMail</h4>
                    <p>to info (at) wisit.com</p>
                </div>
            </div>
        )
    }
}