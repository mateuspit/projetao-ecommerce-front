import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { IoChevronBack } from "react-icons/io5";
import { UserContext } from "../contexts/UserContext.js";
import ReactLoading from "react-loading";

export default function Checkout() {
	const { token } = useContext(UserContext);

	const navigate = useNavigate();
	const location = useLocation();

	const products = location.state?.products || [];
	//console.log(products);

	const [cardName, setCardName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [expirationDate, setExpirationDate] = useState("");
	const [cardCVC, setCardCVC] = useState("");
	const [checkoutPageDisable, setCheckoutPageDisable] = useState(true);

	const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

	//const productsObject = products.reduce((obj, product) => {
	//	obj[product._id] = product.qntd;
	//	return obj;
	//}, {});

	function handleSubmit() {
		setCheckoutPageDisable(false);
		const body = {
			products,
			cardName,
			cardNumber: cardNumber.replace(/ /g, ""),
			expirationDate,
			cardCVC,
		};
		console.log(body);

		const config = {
			headers: {
				Authorization: token,
			},
		};

		axios
			.post(`${REACT_APP_API_URL}checkout`, body, config)
			.then((res) => {
				console.log(res.data);
				setCheckoutPageDisable(true);
				navigate("/success", { state: { purchaseData: body } });
			})
			.catch((err) => {
				alert(err.response.data);
				setCheckoutPageDisable(true);
				console.log(err.response.data);
				navigate("/");
			});
	}
	if (checkoutPageDisable) {
		return (
			<Container>
				<ContainerHeader>
					<h1>Checkout</h1>
					<Link to="/">
						<Icon>
							<IoChevronBack />
						</Icon>
					</Link>
				</ContainerHeader>

				<p>Insira os dados do cartão de crédito</p>

				<Form>
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
							className="smallerInput"
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
					<Button onClick={handleSubmit}>Finalizar compra</Button>
				</Form>
			</Container>
		);
	} else {
		return (
			<>
				<ContainerHeader>
					<h1>Checkout</h1>
					<Icon>
						<IoChevronBack />
					</Icon>
				</ContainerHeader>
				<LoadingText>Realizando compra!</LoadingText>
				<LoadingGif>
					<ReactLoading type="spin" color="#af7014" width={200} />
				</LoadingGif>
			</>
		);
	}
}

const LoadingText = styled.p`
	color: #af7014;
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
`;

const LoadingGif = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100vw;
	height: 100vh;
	padding: 30px 20px;
	box-sizing: border-box;
	background-color: #f5f5f5;
	p {
		margin-top: 100px;
		margin-bottom: 15px;
		font-size: 22px;
	}
`;
const ContainerHeader = styled.header`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	padding: 0 30px;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	background-color: #273b51;
	h1 {
		color: #ffffff;
		font-size: 36px;
	}
`;
const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 400px;
	margin: 30px;
	box-sizing: border-box;
	div {
		display: flex;
		width: 100%;
	}
	.smallerInput {
		margin-right: 15px;
	}
`;
const Input = styled.input`
	display: flex;
	width: 100%;
	height: 45px;
	margin-bottom: 15px;
	padding: 0 10px;
	flex-wrap: nowrap;
	border: 0.5px solid;
	border-radius: 8px;
	box-sizing: border-box;
`;
const Button = styled.button`
	position: fixed;
	bottom: 30px;
	width: 350px;
	height: 50px;
	border-radius: 30px;
	border: none;
	background-color: #af7014;
	color: #ffffff;
	font-size: 20px;
	cursor: pointer;
`;
const Icon = styled.div`
	color: #ffffff;
	font-size: 40px;
	position: absolute;
	top: 20px;
	left: 20px;
`;
