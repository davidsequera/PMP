import React,{ useContext } from "react";
import "./styles/SignInComponent.css";
import logo from "../assets/logo/round_logo.png";
import { Link, useHistory } from "react-router-dom";
import UserInput from "../microcomponents/UserInput";
import UseInputValue from "../microcomponents/UseInputValue";
import { gql, useMutation } from "@apollo/client";
import  UserContextProvider from "../layout/context/UserContext";
import Cookies from "universal-cookie/es6";
import ErrorBanner from "../microcomponents/ErrorBanner";

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
  
  const email = UseInputValue("");
  const password = UseInputValue("");
  const cookies = new Cookies()
  const [signIn, { client,data, error}] = useMutation(SIGNIN, { errorPolicy: "none" });
  const {setJWT} = useContext(UserContextProvider);
  let history = useHistory()


  function validateForm() {
    return email.value.length > 0 && password.value.length > 0;
  }


  const handleSubmit = async (e) => {
    const userInfo = { email: email.value, password: password.value };
    e.preventDefault();
    try {
      await signIn({ variables: { type: userInfo } });
    } catch (err) {
      console.log('Not match', err);
    }
  };

  if(data){
    if(data.signIn.auth){
      client.resetStore()
      let token = data.signIn.body
      // document.cookie= `id=${token}`
      cookies.remove('token')
      cookies.set('token', token)
      setJWT(cookies.get('token'))
      history.push('/dashboard')
    }else{
      // error de usuario
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
        <UserInput id="34" title="Contraseña" type="password" name={password} />
        <button
          disabled={!validateForm()}
          // onClick={this.props.consoleprinter}
          //   to="/course"
          className="button"
          id="SignInComponent_button"
        >
          SIGN IN
        </button>
        {error && <ErrorBanner/>}
      </form>
      <Link className="SignInComponent_SingUp" to="/signup">Registrate</Link>
    </div>
  );
};

export default SignInComponent;

