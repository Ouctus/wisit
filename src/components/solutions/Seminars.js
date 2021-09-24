import React,{Component} from "react";
import { Dropdheader } from "../dropdheader";
import { Blog_card } from "../Blog_card";

export class Seminars extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: ''
        }
    }

    
    // cform
    handleEmail = event =>{
        this.setState({
            email: event.target.value
        })
    }
    handleTitle = event =>{
        this.setState({
            title: event.target.value
        })
    }
    handleSolution = event =>{
        this.setState({
            solution: event.target.value
        })
    }
    handleFname = event =>{
        this.setState({
            fname: event.target.value
        })
    }
    handleLname = event =>{
        this.setState({
            lname: event.target.value

        })
    }
    handleSubmit = event =>{
        alert(`Email: ${this.state.email}, Title: ${this.state.title}, Solution: ${this.state.solution}, First Name: ${this.state.fname}, Last Name: ${this.state.lname}`)
    }

    render(){
        return(
            <>
            <Dropdheader />
            <div className="container ptb-50">
              
                <div className="row dors">
                    <div className="col-12 col-md-8">
                        <h2>Informationen zum Produkt SEMINRS</h2>
                        <p>Tragen Sie sich hier ein und wir senden Ihnen weitere Informationen zum Produkt SEMINRS zu.</p>
                        <p>Wir garantieren, dass persönliche Daten mit äußerster Sorgfalt behandelt und sicher gespeichert werden. Wir geben keine Daten an Dritte weiter. Eine Abmeldung ist jederzeit möglich.</p>

                        <form onSubmit={this.handleSubmit} className="mt-4 p-4 shadow">
                            <div className="row">
                                <div className="col-12 col-md-6 form-group mb-3">
                                    <input type="email" required value={this.state.email} onChange={this.handleEmail} className="form-control" placeholder="E-Mail" />
                                </div>
                                <div className="col-12 col-md-6 form-group mb-3">
                                    <input type="text" required value={this.state.title} onChange={this.handleTitle} className="form-control" placeholder="Title" />
                                </div>
                                <div className="col-12 col-md-6 form-group mb-3">
                                    <input type="text" required value={this.state.solution} onChange={this.handleSolution} className="form-control" placeholder="Anrede" />
                                </div>
                                <div className="col-12  col-md-6 form-group mb-3">
                                    <input type="text" required value={this.state.fname} onChange={this.handleFname} className="form-control" placeholder="Vorname" />
                                </div>
                                <div className="col-12 col-md-6 form-group mb-3">
                                    <input type="text" required value={this.state.lname} onChange={this.handleLname} className="form-control" placeholder="Nachname" />
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-dark">Submit</button>
                                </div>
                            </div>
                        </form>
                    
                       
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

