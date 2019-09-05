import React, {Component} from 'react';

class Orgs extends React.Component {

    render() {
        /*return (
            <section className="w-100 eotg-orgs d-flex flex-column align-items-center justify-content-center" id="orgs">
            
                <div className="container">
                    <div className="row text-center">
                        <h1 className="text-center w-100">Attending Organizations</h1>     


                        
                                           
                    </div>
                </div>
            </section>
        )*/

        return (
        <section className="tabling" id="companies">
            <div className="container">
                <h1 className="tabling__header mb-5">Attending Companies</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md mt-3">
                        <input type="text" placeholder="Company" className="form-control company-table__search"/>
                    </div>
                    <div className="col-md mt-3">
                        <div className="dropdown">
                        <button className="filter industry-filter btn dropdown-toggle" type="button" id="industryDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Industry
                        </button>
                        <div className="filter__options dropdown-menu industry-filter__options" aria-labelledby="industryDropdown">
                        </div>
                        </div>
                    </div>

                <div className="col-md mt-3">
                <div className="dropdown">
                <button className="filter position-filter btn dropdown-toggle" type="button" id="positionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Position
                </button>
                <div className="filter__options dropdown-menu position-filter__options" aria-labelledby="industryDropdown">
                </div>
                </div>
                </div>
                <div className="col-md mt-3">
                <div className="dropdown">
                <button className="filter authorisation-filter btn dropdown-toggle" type="button" id="workAuthDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Work Authorization
                </button>
                <div className="filter__options dropdown-menu authorisation-filter__options" aria-labelledby="industryDropdown">
                </div>
                </div>
                </div>
            </div>

            <div id="companies">
                <div className="container p-0 mt-5 company">
                <div className="row">
                    <div className="col-md-4 align-self-center">
                        <div className="company__content">
                            <a className="company__name" href="https://www.astranis.com" target="_blank"> Lego Club </a>
                            <p className="company__description">
                                Come build with us!
                            </p>
                        <div className="company__industry">
                            Industry: <span>Fun</span>
                            </div>
                            <div className="company__position">
                                Position: <span>Full-time, Internship</span> 
                            </div>
                            <div className="company__auth">
                            Work Authorization: <span>U.S. Citizen</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 align-self-center">
                        <div className="company__content">
                            <a className="company__name" href="https://www.astranis.com" target="_blank"> Hamilton Club </a>
                            <p className="company__description">
                                Come sing with us!
                            </p>
                        <div className="company__industry">
                            Industry: <span>Music, Singing</span>
                            </div>
                            <div className="company__position">
                                Position: <span>Full-time, Internship</span> 
                            </div>
                            <div className="company__auth">
                            Work Authorization: <span>U.S. Citizen</span>
                            </div>
                        </div>
                    </div>

                    {/*<img src="./assets/sponsors/astranis.svg" className="company__featurette" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                    <div className="company__content">
                        <a className="company__name" href="https://www.astranis.com" target="_blank"> Astranis </a>
                        <p className="company__description">
                            We are taking on one of humanity's most important challenges. Four billion people do not have access to the internet. Astranis is going to change that. We are building the next generation of smaller, lower-cost telecommunications satellites to bring the world online.
                        </p>
                    <div className="company__industry">
                        Industry: <span>Mechanical, Aerospace</span>
                        </div>
                        <div className="company__position">
                            Position: <span>Full-time, Internship</span> 
                        </div>
                        <div className="company__auth">
                        Work Authorization: <span>U.S. Citizen</span>
                        </div>
                    </div>
                    </div> */}
                </div>
                </div>

                <div className="container p-0 mt-5 company">
                <div className="row">
                    <div className="col-md-4 align-self-center">
                    <img src="./assets/sponsors/astranis.svg" className="company__featurette" />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                    <div className="company__content">
                        <a className="company__name" href="https://www.astranis.com" target="_blank"> Astranis </a>
                        <p className="company__description">
                            We are taking on one of humanity's most important challenges. Four billion people do not have access to the internet. Astranis is going to change that. We are building the next generation of smaller, lower-cost telecommunications satellites to bring the world online.
                        </p>
                    <div className="company__industry">
                        Industry: <span>Mechanical, Aerospace</span>
                        </div>
                        <div className="company__position">
                            Position: <span>Full-time, Internship</span> 
                        </div>
                        <div className="company__auth">
                        Work Authorization: <span>U.S. Citizen</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>       
          {/*</table>*/}
        </div>

        {/*<script type="text/javascript" src="/public/sortElements.js"></script>
    <script type="text/javascript" src="/public/company-table.js"></script>*/}

    </section>
        )
    }
}

export default Orgs;