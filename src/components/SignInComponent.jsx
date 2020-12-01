import React,{ useContext } from "react";
import "./styles/SignInComponent.css";
import logo from "../assets/logo/round_logo.png";
import { Link, useHistory } from "react-router-dom";
import UserInput from "../microcomponents/UserInput";
import UseInputValue from "../microcomponents/UseInputValue";
import { gql, useMutation } from "@apollo/client";
import  UserContextProvider from "../layout/context/UserContext";

const SIGNIN = gql`
  mutation logIn($type: signInInput) {
    signIn(input: $type) {
      auth
      body
    }
  }
`;

const SignInComponent = (props) => {
  // const email = UseInputValue("");
  // const password = UseInputValue("");
  
  const email = UseInputValue("david@gmail.com");
  const password = UseInputValue("root");
  
  const [signIn, { client,data, error}] = useMutation(SIGNIN);
  const {setJWT} = useContext(UserContextProvider);


  function validateForm() {
    return email.value.length > 0 && password.value.length > 0;
  }
  let history = useHistory()

  const handleSubmit = async (e) => {
    const userInfo = { email: email.value, password: password.value };
    e.preventDefault();
    try {
      signIn({ variables: { type: userInfo } });
    } catch (e) {
      console.log('Not match');
    }
  };
  if(data){
    if(data.signIn.auth){
      client.resetStore()
      let token = data.signIn.body
      console.log('[SignIn]', token)
      // document.cookie= `id=${token}`
      localStorage.removeItem('token')
      localStorage.setItem('token', token )
      setJWT(localStorage.getItem('token'))
      history.push('/')
    }
  }
  return (
    <div className="SignInComponent_container" id="Form">
      <form
        className="SignInComponent_form"
        onSubmit={handleSubmit}
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
        {error && <p>ERROR</p>}
      </form>
      <Link className="SignInComponent_SingUp" to="/signup">Registrate</Link>
    </div>
  );
};

export default SignInComponent;

