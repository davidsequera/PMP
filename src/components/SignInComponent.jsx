import React from "react";
import "./styles/SignInComponent.css";
import logo from "../assets/logo/round_logo.png";
import { Link, Redirect } from "react-router-dom";
import UserInput from "../microcomponents/UserInput";
import UseInputValue from "../microcomponents/UseInputValue";
import { gql, useLazyQuery } from "@apollo/client";

const SIGNIN = gql`
  query logIn($type: signInInput) {
    signIn(input: $type) {
      body
    }
  }
`;

const SignInComponent = () => {
  // const email = UseInputValue("");
  // const password = UseInputValue("");
  
  const email = UseInputValue("daniel@gmail.com");
  const password = UseInputValue("isavelez");

  const [signIn, { data, error}] = useLazyQuery(SIGNIN);

  function validateForm() {
    return email.value.length > 0 && password.value.length > 0;
  }

  const handleSubmit = async (e) => {
    const userInfo = { email: email.value, password: password.value };
    e.preventDefault();
    try {
      signIn({ variables: { type: userInfo } });
      console.log(data.signIn.body);
    } catch (e) {
      console.log('Not match');
    }
  };
  return (
    <div className="SignInComponent_container" id="Form">
      <form
        className="SignInComponent_form"
        onSubmit={handleSubmit}
        action="/course"
      >
        <img alt="logo PMP" src={logo} className="SignInComponent_User-logo" />
        <UserInput id="2" title="Email" type="email" name={email} />
        <UserInput id="34" title="Password" type="password" name={password} />
        <button
          disabled={!validateForm()}
          // onClick={this.props.consoleprinter}
          //   to="/course"
          className="button"
          id="SignInComponent_button"
        >
          SIGN IN
        </button>
        {data ? <Redirect to="/course"></Redirect> : false}
        {error? <p>ERROR</p> : false}
      </form>
      <Link className="SignInComponent_SingUp" to="/signup">Registrate</Link>
    </div>
  );
};

export default SignInComponent;
