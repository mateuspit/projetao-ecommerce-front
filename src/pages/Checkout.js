// import React, { useContext } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
// import { UserContext } from "../context/UserContext";

export default function Checkout() {
	// const { user } = useContext(UserContext);
	// const token = user;
	const navigate = useNavigate();

	const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

	function handlepurchase() {
		// const body = {
		// 	user,
		// };

		// const config = {
		// 	headers: {
		// 		Authorization: `Bearer ${token}`,
		// 	},
		// };

		axios
			.post(`${REACT_APP_API_URL}/checkout`)
			// .post(`${REACT_APP_API_URL}/checkout`, body, config)
			.then((res) => {
				console.log(res.data);
				navigate("/success");
			})
			.catch((err) => {
				console.log(err.response.data);
				navigate("/cart");
			});
	}

	return (
		<CheckoutContainer>
			<h1>Checkout</h1>
			<Link to="/cart">Voltar</Link>
			<InputContainer>
				<Input placeholder="CPF" />
				<Input placeholder="Nome no cartão" />
				<Input placeholder="Número do cartão" />
				<div>
					<Input placeholder="Validade" />
					<Input placeholder="CVC" />
				</div>
			</InputContainer>
			<PurchaseButton onClick={handlepurchase}>Finalizar compra</PurchaseButton>
		</CheckoutContainer>
	);
}

const CheckoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100vw;
	height: 100vh;
	padding: 30px 20px;
	box-sizing: border-box;
	h1 {
		margin-bottom: 30px;
		font-size: 32px;
	}
	a {
		color: blue;
		font-size: 18px;
		margin: 10px;
	}
`;
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100%;
	max-width: 400px;
	margin: 30px;
	box-sizing: border-box;
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;
const Input = styled.input`
	width: 100%;
	height: 40px;
	margin: 10px;
	border-radius: 30px;
`;
const PurchaseButton = styled.button`
	position: fixed;
	bottom: 30px;
	width: 350px;
	height: 50px;
	border-radius: 30px;
	border: none;
	font-size: 20px;
`;
