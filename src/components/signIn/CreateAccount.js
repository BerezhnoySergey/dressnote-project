import React from "react";
import "../signIn/SignIn.scss";
import Dressicon from "../signIn/img/DRESSNOTE.svg";
import { Link } from "react-router-dom";

const CreateAccount = () => {
	return (
		<div className="create__account">
			<div className="create__account-wrap">
				<Link to="/Dressnote">
					<img
						src={Dressicon}
						alt="Dressicon"
						className="create__account-dressicon"
					/>
				</Link>
				<h1 className="create__account-title">Sign in</h1>

				<form className="create__account-form">
					<input
						type="email"
						placeholder="alma.lawson@example.com"
						id=""
						className="create__account-input"
					/>
					<input
						type="password"
						placeholder="Password"
						id=""
						// minlength="8"
						value="admin"
						className="create__account-input"
					/>
					<div className="create__account-remember-wrap">
						<div className="create__account-checkbox_wrap">
							<input type="checkbox" className="create__account-checkbox" />
							<p className="create__account-sub">Remember me</p>
						</div>

						<p className="create__account-sub">Forgot password?</p>
					</div>
					{/* <Link to="/signin" className="create__account-link"> */}
					<button className="create__account-btn">Sign in</button>
					{/* </Link> */}
				</form>
				<div className="create__account-new_account-link">
					<p className="create__account-sub create__account-mright">
						New here?
					</p>
					<Link to="#" className="create__account-link">
						<p className="create__account-sub">Create account</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CreateAccount;
