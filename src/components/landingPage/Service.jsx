import "../../allStyles/services.css";
import { useGlobalContext } from "../../context";

const Service = () => {
  const { setToggleNav } = useGlobalContext(); //Used to close nav section when service section is clicked

  return (
    <>
      <main onClick={() => setToggleNav(false)}>
        <section className="service-section" id="service">
          <button>exclusive features</button>
          <h2>Let Makeene Help You Keep Track of Your Realizable Profit</h2>
          {/* <!-- Service One --> */}
          <summary className="service-and-img-con">
            <img
              className="service-img"
              src="https://i.ibb.co/NpQdf19/Makeen-Financial-Charts-2-1.png"
              alt=""
            />
            <div className="services-list">
              <h3>Automate profit and debtors tracking</h3>
              <p>
                Track all unrealizable profits and debtors. Collect data, and
                get reports on your business automatically. Everything in just
                one single dashboard, including:
              </p>
              <ul>
                <li>
                  <span>Ascertainment of unrealized profit</span>
                </li>
                <li>
                  <span>Provides a database that stores all debtor</span>
                </li>
                <li>
                  <span>
                    Gives advise if more debtors should be entertained or not
                  </span>
                </li>
                <li>
                  <span>
                    Aggregates total debtors and presents it to all users
                  </span>
                </li>
              </ul>
            </div>
          </summary>
          {/* <!-- Service Two --> */}
          <summary className="second-service-and-img">
            <div className="second-services-list-con">
              <h3>Manage Unrealizable Profits</h3>
              <p>
                Did you know that allowing debtors is good but allowing too many
                debtors is bad and can cost you your profit and your business
                itself. MakeeneProfitTracking would allow you input the
                following:
              </p>
              <ul>
                <li>
                  <span>Name of customer(s)</span>
                </li>
                <li>
                  <span>Cost of materials</span>
                </li>
                <li>
                  <span>Amount charged</span>
                </li>
                <li>
                  <span>Amount paid</span>
                </li>
              </ul>
              <p>With these inputs, MakeeneProfitTracking does the rest</p>
            </div>
            <img
              className="second-service-img"
              src="https://i.ibb.co/r32CbFg/Makeen-Financial-Charts-1-2.png"
              alt="Phone Display"
            />
          </summary>
          {/* <!-- Service Three --> */}
          <summary className="third-service-and-img">
            <img
              className="third-service-img"
              src="https://i.ibb.co/0YhDFLq/Makeen-Financial-Charts-5-1.png"
              alt=""
            />
            <div className="third-services-list-con">
              <h3>What will Makeene Profit Tracking do for me?</h3>
              <p>
                When you have input everything as required, the web application
                will help you with the following automatically:
              </p>
              <ul>
                <li>
                  <span>Amount yet to be paid by customer if any</span>
                </li>
                <li>
                  <span>Profit realized</span>
                </li>
                <li>
                  <span>Profit realizable</span>
                </li>
                <li>
                  <span>Aggregated realizable profit</span>
                </li>
                <li>
                  <span>
                    Automatically saving debtors name to a database system
                  </span>
                </li>
              </ul>
            </div>
          </summary>
        </section>
        {/* <!-- Service Four --> */}
        <summary className="fourth-service-and-img">
          <div className="fourth-services-list-con">
            <h3>Manage Unrealizable Profits</h3>
            <p>
              Did you know that allowing debtors is good but allowing too many
              debtors is bad and can cost you your profit and your business
              itself. MakeeneProfitTracking would allow you input the following:
            </p>
            <ul>
              <li>
                <span>Name of customer(s)</span>
              </li>
              <li>
                <span>Cost of materials</span>
              </li>
              <li>
                <span>Amount charged</span>
              </li>
              <li>
                <span>Amount paid</span>
              </li>
            </ul>
            <p>With these inputs, MakeeneProfitTracking does the rest</p>
          </div>
          <div className="all-img-con">
            <img
              className="human-service-img"
              src="https://i.ibb.co/MpL5p89/Human.png"
              alt="Human Display"
            />
            <img
              className="human-chart-service-img"
              src="https://i.ibb.co/MfTMmnt/Human-chart.png"
              alt=""
            />
            <img
              className="human-circle-service-img"
              src="https://i.ibb.co/kHkh6nY/Human-Circle.png"
              alt=""
            />
          </div>
        </summary>
      </main>
    </>
  );
};

export default Service;
