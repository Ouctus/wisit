
import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";
import { Blog_card } from "../Blog_card";
import { Link } from "react-router-dom";

export class Agenda extends Component{
    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
                
                <div className="row dors">
                    <div className="col-12 col-md-8">
                        <h2>Agenda - business software by professionals for Professionals</h2>
                        <p>The practical solution for tax consultants</p>    
                        <p>We offer you, as tax consultants, an integrated system and thus ensure a relaxed working atmosphere. Benefit from quick and easy installation and low system requirements.</p>

                        <p><strong>The professional solution for your accounting office</strong></p>
                        <p>Professional accountants trust AGENDA. Are you looking for a tool that will remind you of your work in the tax office? AGENDA is the solution for the professional accounting office.</p>
                        <p>The professional business management solution for small and medium-sized companies.
                        Do you employ accounting, human resources and tax specialists in your commercial department? AGENDA is the business solution for companies - by professionals for professionals.</p>
                        <p><strong>Talk to us, we will be happy to advise you.</strong></p>
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