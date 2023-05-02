import styled from "styled-components";
import { useState, useContext } from "react";
import React from "react";
import logoWhite from "../assets/images/logo-white-cropped.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext.js";
import {
	StandardButtonLogin,
	StandardInput,
	LoginStyle,
	LogoWhite,
} from "../style/styles.js";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginPageDisable, setLoginPageDisable] = useState(false);
	const [isLinkDisabled, setIsLinkDisabled] = useState(false);
	const navigate = useNavigate();
	const { setToken, setName } = useContext(UserContext);

	function getLoginData(event) {
		event.preventDefault();
		setLoginPageDisable(true);
		setIsLinkDisabled(true);

		const promise = axios.post(`${process.env.REACT_APP_API_URL}sign-in`, {
			email,
			password,
		});

		promise.then((res) => {
			const { token, name } = res.data;
			const authorization = `Bearer ${token}`;
			setToken(authorization);
			setName(name);
			setLoginPageDisable(false);
			setIsLinkDisabled(false);
			navigate("/");
		});

		promise.catch((res) => {
			alert(res.response.data);
			setLoginPageDisable(false);
			setIsLinkDisabled(false);
			setPassword("");
		});
	}

	return (
		<LoginStyle>
			<LogoWhite src={logoWhite} alt="logo branca" />
			<LoginForm onSubmit={getLoginData}>
				{/*<LoginForm>*/}
				<StandardInput
					disabled={loginPageDisable}
					required
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Email"
				/>
				<StandardInput
					disabled={loginPageDisable}
					minLength={6}
					required
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Senha"
					autoComplete="new-password"
				/>
				<StandardButtonLogin disabled={loginPageDisable} type="submit">
					Entrar
				</StandardButtonLogin>
			</LoginForm>
			<StyledLink noLink={isLinkDisabled} to="/signup">
				Cadastre-se
			</StyledLink>
		</LoginStyle>
	);
}

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
`;

const StyledLink = styled(Link)`
	pointer-events: ${(props) => (props.noLink ? "none" : "auto")};
	color: #af7014;
	font-weight: bold;
	text-decoration: underline;
	text-decoration-color: #af7014;
	&:link,
	&:visited,
	&:hover,
	&:active {
		color: #af7014;
	}
`;
