const Signin = () => {
  return (
    <>
      <section className="sign-in-section">
        <main className="main-con" id="sign-up">
          <h1>Sign In/Login</h1>
          <form className="sign-in-form">
            <p className="filling-error-sign-in">No box should be empty</p>
            {/* <!-- Email Container --> */}
            <div className="signin-email-container">
              <label className="lab" htmlFor="">
                Email:
              </label>
              <input
                className="signin-email-input signin-input"
                type="email"
                placeholder="olatopper@gmail.com"
              />
            </div>

            {/* <!-- Password Container --> */}
            <div className="signin-password-container">
              <label className="lab" htmlFor="">
                Password:
              </label>
              <input
                className="signin-password-input signin-input"
                type="password"
              />
              <p>
                <input
                  className="check-box-sign-in"
                  type="checkbox"
                  name="check"
                  id="check-sign-in"
                />
                <label
                  htmlFor="check-sign-in"
                  style={{ marginLeft: "margin-left: 5px" }}
                >
                  show password
                </label>
              </p>
            </div>
            <button type="submit" className="sign-in-btn">
              Login
            </button>
          </form>
          <p className="acc-exists">
            I don't have an account
            <a className="sign-in-to-sign-up">register</a>
          </p>
        </main>
      </section>
    </>
  );
};

export default Signin;
