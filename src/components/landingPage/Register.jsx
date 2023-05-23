import "../../allStyles/register.css";
import Signup from "./Signup";
import Signin from "./Signin";

const Register = () => {
  return (
    <>
      {/* Sign Up Section */}
      <main>
        <Signup />

        {/* Sign in Section */}
        <Signin />
      </main>
    </>
  );
};

export default Register;
