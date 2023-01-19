import React from "react";
// import { Link } from "react-router-dom";
import "../components/signIn/SignIn.scss";
import SignImg from "../components/signIn/img/signin.webp";
import CreateAccount from "../components/signIn/CreateAccount";

const SignIn = () => {
	return (
		<div className="signin">
			<div className="signin__wrap">
				<CreateAccount></CreateAccount>
				<img src={SignImg} alt="" className="signin__img" />
			</div>
		</div>
	);
};
export default SignIn;
