import { FaCaretUp } from "react-icons/fa";
import "../../allStyles/footer.css";
import { useGlobalContext } from "../../context";
import { useEffect, useState } from "react";

const Footer = () => {
  const { goTopIcon, setGoTopIcon } = useGlobalContext();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY === 0) {
      setGoTopIcon("remove-icon-when-at-the-top");
    } else {
      setGoTopIcon("add-icon-when-at-the-top");
    }
  }, [scrollY, setGoTopIcon]);

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
      <div
        className={`top-icon ${goTopIcon}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <a href="#top-page">
          <FaCaretUp />
        </a>
      </div>
    </>
  );
};

export default Footer;
