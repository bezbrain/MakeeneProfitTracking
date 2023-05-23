import "../../allStyles/contactus.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <section className="contact-us-section" id="contact-us">
        <h2>Contact Us</h2>
        <section className="contact">
          <div className="call-contact">
            {/* <i className="fa-solid fa-phone"></i> */}
            <FaPhone className="fa-phone" />
            <h3>Call</h3>
            <p>Call us now</p>
            <a href="tel:+2348160008104">+2348160008104</a>
          </div>
          <div className="email-contact">
            {/* <i className="fa-solid fa-envelope"></i> */}
            <FaEnvelope className="fa-envelope" />
            <h3>Mail</h3>
            <p>Send us an email</p>
            <a href="mailto:help@makeene.com">help@makeene.com</a>
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactUs;
