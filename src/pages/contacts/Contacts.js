import './Contacts.css'
import { PiChatsCircle } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Svg from "./Svg";

export default function Contacts() {
    return (
        <div className='contactss'>
            <div className="contacts_info">
                <div className="info-one">
                    <div className="headering">
                        <p>CONTACT INFO</p>
                        <h1>Get in touch</h1>
                    </div>

                    <div className="calls">


                        <div className="email">
                            <p className='icone'> <PiChatsCircle /></p>
                            <span className='sp'>Talk to us:</span>
                            <p className='pp'>Get in touch</p>
                        </div>

                        <div className="call">
                            <p className='icone'><IoPhonePortraitOutline /></p>
                            <span className='sp'>Call us:</span>
                            <p className='pp'>(405) 555-0128</p>
                        </div>

                        <div className="adress">
                            <p className='icone'><IoLocationOutline /></p>
                            <span className='sp'>Address:</span>
                            <p className='pp'>2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
                        </div>
                    </div>

                    <div className="follow-us">
                        <p className='texte'>FOLLOW US:</p>
                        <div className="socialss">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaYoutube />
                            <FaTelegramPlane />
                            <FaInstagram />
                            <FaLinkedinIn />

                        </div>
                    </div>
                </div>
                <div className="map">
                    <img src="map.jpg" alt="" />
                </div>
            </div>

            <div className="heading">
                <p>Any questions?</p>
                <h2>Drop us a line</h2>
            </div>
            <div className="contacts-from">
                <div className="illustration">
                    <Svg  />

                </div>
                <div className="form-field">
                    <div className="form-item">
                        <p>First Name*</p>
                        <input placeholder="Your first name" />
                    </div>
                    <div className="form-item">
                        <p>Last  Name*</p>
                        <input placeholder="Your last name" />
                    </div>
                    <div className="form-item">
                        <p>Email*</p>
                        <input placeholder="Your working email" />
                    </div>
                    <div className="form-item">
                        <p>Phone*</p>
                        <input placeholder="Your phone number" />
                    </div>
                    <div className="form-item">
                        <p>Message*</p>
                        <textarea className="form-item" placeholder='Your message'>
                        </textarea>
                    </div>
                    <div className="form-checkbox">
                        <div className="checkbox">
                        <input type="checkbox" />
                        <p>I agree to receive communications from <br /> Createx Online School</p></div>
                        <button>Send message</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

