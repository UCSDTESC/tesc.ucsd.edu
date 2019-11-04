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
                            <span><p>Liability Waiver Form (Coming Soon) | Photo Release Form (Coming Soon)</p></span>
                            <p>** Note: All students must have both waivers filled out to attend Enspire! **</p>
                        </div>

                        <div className="enspire-register__volunteers">
                            <p><b>Volunteers, please complete the following:</b></p>
                            <span><p>Volunteer Registration Form (Coming Soon)</p></span>
                        </div>                                 
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
