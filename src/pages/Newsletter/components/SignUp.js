import React, {useState, useEffect} from 'react';
import Mailchimp from 'react-mailchimp-subscribe';
import '../../../scss/components/_signup.scss';
import InputField from "./Input";
import '../../../scss/components/_signup.scss'

// VISIT TUTORIAL FOR DEBUGGING https://dev.to/gedalyakrycer/create-an-email-list-with-react-mailchimp-965#step6

const CustomForm = ({status, message, onValidated}) => {

    const [email,setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
      }

const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
    });
}

    return(
        <form className="signup__form" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="signup__title">
            {status === "success" 
                ? "Welcome to the TESC Newsletter!" 
                : "Join the TESC Newsletter!"
            }
            </h3>
            
            {status === "sending" && (
                <div className="signup__alert signup__alert--sending">
                    sending...
                </div>
            )}
            {status === "error" && (
                <div 
                    className="signup__alert signup__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {
                status === "success" && (
                    <div
                        className="signup__alert signup__alert--success"
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
            {
                status !== "success" ? (
                <div className="signup__field-container">
                    <div className="signup__field-container">
                        <InputField
                            label="First Name"
                            onChangeHandler={setFirstName}
                            type="text"
                            value={firstName}
                            placeholder="Jane"
                            isRequired
                        />

                        <InputField
                            label="Last Name"
                            onChangeHandler={setLastName}
                            type="text"
                            value={lastName}
                            placeholder="Doe"
                            isRequired
                        />

                        <InputField
                            label="Email"
                            onChangeHandler={setEmail}
                            type="email"
                            value={email}
                            placeholder="your@email.com"
                            isRequired
                        />

                    </div>

                    <InputField
                    label="Submit"
                    type="submit"
                    formValues={[email, firstName, lastName]}
                    />
                    <br />
                </div>
              ) : null
            }

  </form>
);
};

const SignUp = props => 
{
    const postUrl = 'https://ucsd.us9.list-manage.com/subscribe/post?u=2b76757d9b200f72632d7330a&amp;id=67bd73e211&amp';


return(
    <div classname="signup__form-container">
        <Mailchimp 
            url = {postUrl}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status = {status}
                    message= {message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    </div>
    );
};

export default SignUp;