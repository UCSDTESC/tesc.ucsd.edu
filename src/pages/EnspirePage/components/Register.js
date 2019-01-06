import React, {Component} from 'react';

class Register extends Component {

    render() {

        //write your css in src/scss/apps/enspire/components/_register.scss
        return(
            <div className="w-100 h-100 enspire-register">

                {/* Title */}
                <div className="enspire-register__head">
                    <b>Register for Enspire!</b>
                </div>

                {/* 1x2 grid with words on left and picture on right */}
                <div class="container">
                    <div class="row">
                        {/* For the words on the left */}
                        <div class="col-md-6">
                            <div className="enspire-register__left">
                                <p>Enspire is a free event and all students that come will be provided lunch and a t-shirt!</p>
                                
                                <div className="enspire-register__left-participants">
                                    <ul class="list-unstyled">
                                        <li><p><b>Participants,</b> please complete the following:</p></li>
                                        <ul>
                                            <li><p><a href="https://www.google.com" target="_blank">liability waiver form</a> (one per student)</p></li>
                                            <li><p><a href="https://www.google.com" target="_blank">photo release form</a> (one per student)</p></li>
                                        </ul>
                                    </ul>
                                </div>

                                <p className="enspire-register__note"><b>** Note: All students must have both waivers filled out to attend Enspire! **</b></p>
                                
                                <div className="enspire-register__left-volunteers">
                                    <ul class="list-unstyled">
                                        <li><p><b>Volunteers,</b> please complete the following:</p></li>
                                        <ul>
                                            <li><p>Fill out the <a href="https://www.google.com" target="_blank">volunteer registration form</a></p></li>
                                        </ul>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>

                        {/* Picture on the right */}
                        <div class="col-md-6">
                            <div className="enspire-register__right">
                                <img src="/Enspire-register-image.png" class="float-right"></img>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
