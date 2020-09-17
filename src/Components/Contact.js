import React, { Component } from 'react';

//styles
import '../Styles/_contact.scss';



class ContactForm extends Component {
    render() {
        return (
            <div className="contact-form">
                <div className="form-one">
                <h3>Contact</h3>
                <p>Feel free to contact us at anytime with help on products or shipping and we will promptly return your message at the earliest convenience.</p>
                <form action="" method="get" className="form">
                    <div className="name">
                        <input type="text" name="name" id="name" placeholder="name" required />
                    </div>
                    <div className="email">
                        <input type="email" name="email" id="email" placeholder="email" required />
                    </div>
                    <div className="phone">
                        <input type="phone" name="phone" id="phone" placeholder="phone number" required />
                    </div>
                    <div className="contact">
                        <input type="submit" value="Contact" />
                    </div>
                </form>
                </div>

                <div className="contact-info">
                    <div>
                        <h5><ion-icon name="navigate-outline"></ion-icon> Store</h5>
                        <p>104 Av. des Champs-Élysées, 75008 Paris, France</p>
                    </div>

                    <div>
                        <h5><ion-icon name="call-outline"></ion-icon> Phone</h5>
                        <p>Hartwell, Lindsey</p>
                        <p>+33 9 77 30 40 70</p>
                        <p>Mon.-Fri. 8:00am-4:00pm</p>
                    </div>

                    <div>
                        <h5><ion-icon name="mail-outline"></ion-icon> Email</h5>
                        <p>hartwell.l@mounier.com</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactForm;