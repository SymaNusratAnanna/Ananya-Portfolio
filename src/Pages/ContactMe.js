import React from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_rbuotnt', e.target, 'Qg95aMYxvRcsZY4Vn')
            .then((result) => {
                alert("Your Message has been successfully sent. I will contact you Soon.")
                console.log(result.text);
                
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div>
          
            <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto p-5">
                
                    <div className="col-8 form-group mx-auto">
                    <h2 style={{ color: 'Black', marginTop: '60px'}}>Contact Me</h2>
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto mb-3">
                        <input type="submit" className="btn btn-info" value="Send Message"></input>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactMe;