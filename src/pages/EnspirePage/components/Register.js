import React, {Component} from 'react';

class Register extends Component {

    render() {

        //write your css in src/scss/apps/enspire/components/_register.scss
        return(
            <div className="w-100 enspire-register">
                <div class="container">
                    <div className="enspire-register__head">
                        <b>Register for Enspire!</b>
                    </div>
                    <div class="row d-flex flex-wrap justify-content-center align-items-center">
                        <p>Enspire is a free event and all students that come will be provided lunch and a t-shirt!</p>

                        <div className="enspire-register__participants">
                            <p><b>Participants, please complete the following:</b></p>
                            <span>
                                <p>
                                    <a href="https://drive.google.com/a/tesc.ucsd.edu/file/d/14HF2ijOw_V-0UCIUlX2NgnWmdT1O8Mc_/view?usp=drivesdk" target="_blank">Model Release Waiver</a> | <a href="https://drive.google.com/a/tesc.ucsd.edu/file/d/1hGXO79l00O1EXnvH1RDN1h2iO38Ttl8J/view?usp=drivesdk" target="_blank">Liability Waiver</a>
                                </p>
                            </span>
                            <p>** Note: All students must have both waivers filled out to attend Enspire! **</p>
                        </div>

                        <div className="enspire-register__volunteers">
                            <p><b>Volunteers, please complete the following:</b></p>
                            <span>
                                <p>
                                    <a href="https://docs.google.com/forms/d/129gtJM0wOD5BKzh3B0mNnEpsfUh1xsy5waMdFmD65y8/viewform?edit_requested=true" target="_blank">Volunteer Registration Form</a>
                                </p>
                            </span>
                        </div>                                 
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
