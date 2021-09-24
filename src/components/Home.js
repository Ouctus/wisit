import React,{Component} from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class Home extends Component{
    render(){
        return(
            <section className="home_wrap">
                
                <OwlCarousel className='owl-theme' loop autoplay margin={0}  items={1}>
                    <div className='item'>
                        <img src="images/banner1-small.jpg" />
                    </div>
                    <div className='item'>
                    <img src="images/banner2-small.jpg" />
                    </div>
                    <div className='item'>
                    <img src="images/banner3-small.jpg" />
                    </div>
                    
                </OwlCarousel>
                
                <div className="container">
                    <div className="shadow p-4">
                        <ul className="nav nav-tabs  mb-4 pt-3 pb-1" id="hometab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link  " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                    <h2>individual solutions </h2>
                                    <p>for your business processes and models</p>
                                    </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                    <h2>Matching tools </h2>
                                    <p>for your intranet 2.0</p>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                                    <h2>reduce costs </h2>
                                    <p>with application service providing</p>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="act-tab" data-bs-toggle="tab" data-bs-target="#act" type="button" role="tab" aria-controls="act" aria-selected="false">
                                    <h2>Act efficiently </h2>
                                    <p>Fast and flexible - everything from a single source</p>
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active">
                                <div className="row " >
                                    <div className="col-12 col-md-9">
                                        <div className="tabcont">
                                        <h4>Do you have any questions about digital processes?</h4>
                                        <p>Are you looking for ideas or solutions to optimize your process organization? Do you need suitable instruments and tools for your business processes?</p>
                                        <p>Together with you, we develop the right software solutions for you. Regardless of whether it is the addition of a missing feature in a standard product or the implementation of your idea for a new solution. We use agile process models so that rapid progress is ensured and the flexible adaptation of the development to new requirements and findings is possible. We accompany you not only up to the rollout - we also look after your application beyond that.</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                        <div className="tabimg">
                                            <img src="images/tabimg.jpg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    <div className="tab-pane fade " id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <div className="tabcont">
                                <h4> Individual solutions for your business processes and models</h4>
                                <p>Almost every new idea requires the medium of the Internet, be it only for evaluating individual processes or even as a basis for the entire business model.</p>
                                <p>We help quickly and efficiently and provide you with the know-how and individual software at low cost to implement your business models and optimize processes.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="tabimg">
                                    <img src="images/tabimg1.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row">
                            <div className="col-12 col-md-9">
                                <div className="tabcont">
                                <h4>Suitable tools for your intranet 2.0 (= extranet) </h4>
                                <p>What about the in-house intranet in many companies?</p>
                                <p>Is it still being used or is it already sleeping?</p>
                                <p>Intranet operators are under pressure because open communities often have more content than the company's own network. In fact, the demands on this medium are growing - but your intranet can successfully be “more”: Make your intranet an extranet and integrate your partners and customers.</p>
                                <p>We will show you ways and means of getting closer to your goals.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="tabimg">
                                    <img src="images/tabimg2.jpg" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row">
                                <div className="col-12 col-md-9">
                                    <div className="tabcont">
                                    <h4>Lower costs with application service providing</h4>
                                    <p>Not only for standard products, but also for the operation of your individual software, we offer you a tailored, calculable cost structure that contains all relevant factors from operation to maintenance to updates and adjustments.</p>
                                    <p>You relieve your IT infrastructure and can calculate new projects or business models without hidden costs.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3">
                                    <div className="tabimg">
                                        <img src="images/tabimg3.jpg" />
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    <div className="tab-pane fade" id="act" role="tabpanel" aria-labelledby="act-tab">
                        <div className="row">
                                <div className="col-12 col-md-9">
                                    <div className="tabcont">
                                    <h4>Act efficiently: Fast and flexible - everything from a single source</h4>
                                    <p>Wisit GmbH is an owner-managed company and offers you everything that is used in the medium of the Internet.</p>
                                    <p>Through strong partnerships, we combine know-how and power with flexibility and prudence in a rapidly changing information technology business environment.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-3">
                                    <div className="tabimg">
                                        <img src="images/tabimg4.jpg" />
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    </div>
                    </div>
                    
                    <div className="homecard pt-5 pb-5">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>Seminare Verwalten und Verkaufen mit Seminrs.com</h5>
                                    <p><strong>Webbasierte Seminarmanagement Software - SEMINRS</strong></p>
                                    <p>Training is your business? Manage and publish your training courses and seminars with our web-based seminar management software.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>Knowledge management</h5>
                                    <p><strong>A strategic basis for knowledge management is the consideration of knowledge as a production factor.</strong></p>
                                    <p>Information systems make a contribution by networking employees in a communicative manner and providing and storing information. Wisit solutions GmbH accompanies and supports companies with the right selection, creation and implementation of ECM - enterprise content management systems.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>Knodge V0.591 - for networks that work</h5>
                                    <p><strong>Knowledge management for clubs, funding agencies and associations</strong></p>
                                    <p>As a mixture of a document management system and an interaction platform, Knodge enables the collected knowledge from the most varied of areas to be managed centrally and comprehensively.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>Knowledge management</h5>
                                    <p><strong>A strategic basis for knowledge management is the consideration of knowledge as a production factor.</strong></p>
                                    <p>Information systems make a contribution by networking employees in a communicative manner and providing and storing information. Wisit solutions GmbH accompanies and supports companies with the right selection, creation and implementation of ECM - enterprise content management systems.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>Application Service</h5>
                                    <p><strong>Use solutions without ballast - whether individual or standard software.</strong></p>
                                    <p>Wisit solutions GmbH offers flexible usage options for software solutions tailored to your needs. Whether CMS, community or ERP solutions - this enables a smooth transition for you.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>simple, fast and effective - direct marketing via newsletter</h5>
                                    <p><strong>Integrate your own information system quickly and easily.</strong></p>
                                    <p>This tool can be used across companies not only for newsletters and e-mail marketing. With the workflows and processes we have set up, this becomes a highly efficient contact management. Register and test all possibilities. If you would like to send more than 10 e-mails, contact us, we will make you an individual offer. You can even integrate the newsletter system on your company website yourself - but we can of course do this for you if you wish. for registration and</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>Project management</h5>
                                    <p><strong>The right method is not everything - but it is a good start.</strong></p>
                                    <p>A balanced professional project management based on proven procedures is an important success factor for any kind of IT project.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>Ideas and business models</h5>
                                    <p><strong>A lack of capacities and insufficient (limited, limited, inadequate) know-how inhibit the growth of many companies. </strong></p>
                                    <p>The effective implementation of new ideas, business models, processes or services is of essential importance both for the establishment of new companies and for the sustainable development of existing companies.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>wisit V3.3</h5>
                                    <p><strong>(w) ebbased (i) nformation - (s) ystem (i) ntegrating (t) echnology</strong></p>
                                    <p>is a web-based ERP solution that enables you to completely map and coordinate complex service processes across the entire value chain.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card">
                                    <h5>CRM - Customer Relationship Management</h5>
                                    <p><strong>The software wisit-CRM can be customer-related due to its complete recording</strong></p>
                                    <p>Actions support customer relationship management by integrating marketing, sales and service aspects. Customer information is available for the task at hand and enables a call center employee, sales representative or service partner, for example, to provide optimized customer support.</p>
                                    <a href="#">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   
        )
    }
}