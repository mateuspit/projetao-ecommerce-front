/* eslint-disable */
import styled from "styled-components";
import { useState, useContext } from "react";
import logoWhite from "../assets/images/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext.js";

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
			const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
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
				navigate("/home");
			});

			promise.catch((res) => {
				console.log("catch");
				alert(res.response.data);
				setLoginPageDisable(false);
				setIsLinkDisabled(false);
				setPassword("");
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
				<LogoWhite src={logoWhite} alt="logo branca" />
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
					<StandardButton disabled={loginPageDisable} type="submit">
						Entrar
					</StandardButton>
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

const StandardButton = styled.button`
	background-color: #af7014; /* cor de fundo do botão */
	border: none; /* remove a borda do botão */
	color: white; /* cor do texto do botão */
	padding: 10px 20px; /* espaço interno do botão */
	text-align: center; /* alinhamento do texto */
	text-decoration: none; /* remove a decoração de link */
	display: inline-block; /* permite que outros elementos fiquem ao lado do botão */
	font-size: 16px; /* tamanho da fonte */
	border-radius: 5px; /* curvatura dos cantos */
	cursor: pointer; /* cursor ao passar por cima do botão */
	margin-bottom: 2vh;
`;

const StandardInput = styled.input`
	padding: 10px;
	border: 2px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
	margin-bottom: 3vh;
	&:focus {
		outline: none;
		border-color: #66afe9;
		box-shadow: 0 0 5px #66afe9;
	}
`;

const LoginStyle = styled.body`
	background-color: #273b51;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;

const LogoWhite = styled.img`
	height: auto;
	width: 69vw;
`;
