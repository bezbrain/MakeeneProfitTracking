const Signup = () => {
  return (
    <>
      <section className="sign-up-section">
        <main className="main-con" id="sign-up">
          <h1>Sign Up/Register</h1>
          <form action="" className="sign-up-form">
            <p className="filling-error">No box should be empty</p>
            {/* <!-- Username Container --> */}
            <div className="name-container">
              <label className="lab" htmlFor="">
                Username:
              </label>
              <input
                className="username-input sign-input"
                type="text"
                placeholder="Olatopper"
                id="text"
              />
            </div>
            {/* <!-- Email Container --> */}
            <div className="email-container">
              <label className="lab" htmlFor="">
                Email:
              </label>
              <input
                className="email-input sign-input"
                type="email"
                placeholder="olatopper@gmail.com"
                id="email"
              />
            </div>
            {/* <!-- Password Container --> */}
            <div className="password-container">
              <label className="lab" htmlFor="">
                Password:
              </label>
              <input
                className="password-input sign-input"
                type="password"
                id="password"
              />
              <p>
                <input
                  className="check-box"
                  type="checkbox"
                  name="check"
                  id="check"
                />
                <label htmlFor="check">show password</label>
              </p>
            </div>
            {/* <!-- Sign Up Button --> */}
            <button type="submit" className="sign-btn">
              Sign Up
            </button>
          </form>
          <p className="acc-exists">
            I have an account already
            <a className="sign-up-to-sign-in">sign in</a>
          </p>
        </main>
      </section>
    </>
  );
};

export default Signup;
