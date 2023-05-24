// import "../../allStyles/headerAndSubheader.css";
import "../../allStyles/headerAndSubheader.css";
import { useGlobalContext } from "../../context";
import SubHeader from "./SubHeader";
import { navData } from "./data";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Header = () => {
  const { toggleNav, setToggleNav } = useGlobalContext();

  return (
    <>
      <header id="top-page">
        <section className="nav-sect">
          <FaBars className="open" onClick={() => setToggleNav(true)} />
          <img
            className="logo-img"
            src="https://i.ibb.co/Stw8cdK/6.jpg"
            alt="6"
          />
          <nav
            className={`${toggleNav ? "add-nav" : "remove-nav"}`}
            onClick={() => setToggleNav(false)}
          >
            <ul>
              <FaTimes
                className={`close ${toggleNav ? "add-close-anim" : ""}`}
                onClick={() => setToggleNav(false)}
              />
              {navData.map((each) => {
                const { id, url, text } = each;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
              <li>
                <a href="#sign-up">
                  <button>Register</button>
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <SubHeader />
      </header>
    </>
  );
};

export default Header;
