import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function Checkout() {
	const token = "user";

	const navigate = useNavigate();
	const location = useLocation();

	const products = location.state?.products || [];

	const [cardName, setCardName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [expirationDate, setExpirationDate] = useState("");
	const [cardCVC, setCardCVC] = useState("");

	const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

	const productsObject = products.reduce((obj, product) => {
		obj[product._id] = product.qntd;
		return obj;
	}, {});

	function handleSubmit() {
		const body = {
			products: productsObject,
			paymentData: {
				cardName,
				cardNumber,
				expirationDate,
				cardCVC,
			},
		};
		console.log(body);

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
