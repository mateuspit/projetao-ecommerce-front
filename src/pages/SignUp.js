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
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [loginPageDisable, setLoginPageDisable] = useState(false);
	const [isLinkDisabled, setIsLinkDisabled] = useState(false);
	const navigate = useNavigate();
	const { setToken } = useContext(UserContext);

	function getSignUpData(event) {
		event.preventDefault();
		setLoginPageDisable(true);
		setIsLinkDisabled(true);

		if (password === passwordConfirm) {
			const promise = axios.post(`${process.env.REACT_APP_API_URL}sign-up`, {
				name,
				email,
				password,
			});
			promise.then((res) => {
				const { token } = res.data;
				const authorization = `Bearer ${token}`;
				setToken(authorization);
				setLoginPageDisable(false);
				setIsLinkDisabled(false);
				navigate("/login");
			});

			promise.catch((res) => {
				console.log("catch");
				//console.log(res);
				//console.log(res.response.data);
				//console.log(res.response.data.errors);
				alert(res.response.data);
				setLoginPageDisable(false);
				setIsLinkDisabled(false);
				setPassword("");
				setPasswordConfirm("");
			});
		} else {
			alert("As senhas não são iguais!");
			setPassword("");
			setPasswordConfirm("");
			setLoginPageDisable(false);
			setIsLinkDisabled(false);
		}
	}

	return (
		<>
			<LoginStyle>
				<Link to="/login">
					<LogoWhite src={logoWhite} alt="logo branca" />
				</Link>
				<LoginForm onSubmit={getSignUpData}>
					{/*<LoginForm>*/}
					<StandardInput
						disabled={loginPageDisable}
						required
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Nome"
					/>
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
					<StandardInput
						disabled={loginPageDisable}
						minLength={6}
						required
						type="password"
						value={passwordConfirm}
						onChange={(e) => setPasswordConfirm(e.target.value)}
						placeholder="Confirme a senha"
						autoComplete="new-password"
					/>
					<StandardButtonLogin disabled={loginPageDisable} type="submit">
						Cadastrar
					</StandardButtonLogin>
				</LoginForm>
				<StyledLink noLink={isLinkDisabled} to="/login">
					Faça login
				</StyledLink>
			</LoginStyle>
		</>
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