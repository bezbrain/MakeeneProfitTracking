import { FaCaretUp } from "react-icons/fa";
import "../../allStyles/footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-sect">
          <div className="brand-name">
            <img
              className="footer-logo"
              src="https://i.ibb.co/Stw8cdK/6.jpg"
              alt=""
            />
            <span>AKEENE</span>
          </div>
          <div className="terms-and-condition-con">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
          <div className="copyright-con">
            <div className="copyright-logo">c</div>
            <p>Makeene Profit Tracking</p>
          </div>
        </section>
      </footer>
      {/* Go to top icon */}
      <div className="top-icon">
        <a href="#top-page">
          {/* <i className="fa-solid fa-caret-up"></i> */}
          <FaCaretUp />
        </a>
      </div>
    </>
  );
};

export default Footer;
