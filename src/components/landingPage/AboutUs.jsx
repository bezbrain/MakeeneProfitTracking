import "../../allStyles/aboutus.css";

const AboutUs = () => {
  return (
    <>
      <section className="about-us-section" id="about-us">
        <h2>About Us</h2>
        {/* <!-- Vision Section --> */}
        <section className="vision-bg-carrier">
          <div className="vision-container">
            <p>Vision</p>
            <div className="vision-content-con content-container">
              <span>
                Our vision is to revolutionize the way individuals and
                bbusinesses track and manage their finances, making it simple
                and easy for anyone to understand and take control of their
                fnancial performance. We aim to create a world where financial
                management is not a burden, but a tool for growth and success{" "}
                <br />
                our web app will be the go-to solution for individuals and
                businesses seeking to optimize their profit and make informed
                decisions about their financial goals and create a better life
                for themselves and their families
              </span>
            </div>
          </div>
        </section>
        {/* <!-- Mission Section --> */}
        <section className="mission-bg-carrier">
          <div className="mission-container">
            <p>Mission</p>
            <div className="mission-content-con content-container">
              <span>
                Our mission is to empower individuals and businesses to take
                control of their financial future by providing a user-friendly
                and intuitive profit tracking app. <br />
                Our app is designed to simplify the process of tracking
                realizable profit, giving users a clear picture of their
                financial performance at all times. <br />
                Our goal is to provide accurate and actionable insights that
                allow our users to make informed decisions about their finances,
                whether they are running a small business or managing personal
                finances.
                <br />
                We are committed to continually improving our app, incorporating
                feedback from our users and leveraging the latest technologies
                to ensure that our users have access to the best tools for
                financial success
              </span>
            </div>
          </div>
        </section>
        {/* <!-- Values Section --> */}
        <div className="values-container">
          <p>Values</p>
          <div className="value-content-con content-container">
            <span>
              We are MAKEENE Profit Tracking, a platform and web application. We
              have observed the contemporary market and we observe that traders
              of any kind can not do without debtors if they really want their
              business to move to the next level.
              <br />
              It can be overwelming and sometimes annoying when a vendor cannot
              properly track his/her Realized and Realizable Profits properly
              because of many debtors involved. This kind of challenge and other
              related challenges are what the MAKEENE Profut Tracking helps you
              with.
              <br />
              Because we focus more on debtors, hence, the web app keeps track
              of realizable profit (which arises from credit sales) rather than
              realized profit (which arises from cash sales)
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
