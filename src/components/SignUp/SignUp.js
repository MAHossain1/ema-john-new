import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password.length < 6) {
      setError("Please give password at least 6 character");
      return;
    }

    if (password !== confirm) {
      setError("Password did not match");
      return;
    }
    createUser(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Sign Up</h3>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Your password" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id=""
            placeholder="Confirm password"
          />
        </div>
        <p className="text-error">{error}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;
