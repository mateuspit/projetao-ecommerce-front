import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function Checkout() {
	const { products } = useContext(UserContext);
	const token = "user";

	const navigate = useNavigate();

	const [cardName, setCardName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [expirationDate, setExpirationDate] = useState("");
	const [cardCVC, setCardCVC] = useState("");

	const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

	function handleSubmit() {
		const body = {
			products,
			cardName,
			cardNumber,
			expirationDate,
			cardCVC,
		};

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		axios
			.post(`${REACT_APP_API_URL}/checkout`, body, config)
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
		<Container>
			<h1>Checkout</h1>
			<Link to="/cart">Voltar</Link>
			<p>Insira os dados do cartão</p>
			<Form onSubmit={handleSubmit}>
				<Input
					name="cardName"
					type="text"
					placeholder="Nome no cartão"
					value={cardName}
					onChange={(e) => setCardName(e.target.value)}
					required
				/>
				<Input
					name="cardNumber"
					type="text"
					placeholder="Número do cartão"
					value={cardNumber}
					onChange={(e) => setCardNumber(e.target.value)}
					required
				/>
				<div>
					<Input
						name="expirationDate"
						type="text"
						placeholder="MM / AA"
						value={expirationDate}
						onChange={(e) => setExpirationDate(e.target.value)}
						required
					/>
					<Input
						name="CVV"
						type="text"
						placeholder="CVC"
						value={cardCVC}
						onChange={(e) => setCardCVC(e.target.value)}
						required
					/>
				</div>
				<Button type="submit">Finalizar compra</Button>
			</Form>
		</Container>
	);
}

const Container = styled.div`
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
const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 500px;
	margin: 30px;
	box-sizing: border-box;
	div {
		display: flex;
	}
`;
const Input = styled.input`
	width: 100%;
	height: 40px;
	margin: 10px;
	border-radius: 30px;
`;
const Button = styled.button`
	position: fixed;
	bottom: 30px;
	width: 350px;
	height: 50px;
	border-radius: 30px;
	border: none;
	font-size: 20px;
`;
