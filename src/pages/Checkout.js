import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { IoChevronBack } from "react-icons/io5";
import { UserContext } from "../contexts/UserContext.js";
import ReactLoading from "react-loading";
import {
	LoadingText,
	LoadingGif,
	CheckoutContainer,
	ContainerHeader,
	Form,
	Input,
	Button,
	Icon,
} from "../style/styles.js";

export default function Checkout() {
	const { token } = useContext(UserContext);

	const navigate = useNavigate();
	const location = useLocation();

	const products = location.state?.products || [];

	const [cardName, setCardName] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [expirationDate, setExpirationDate] = useState("");
	const [cardCVC, setCardCVC] = useState("");
	const [checkoutPageDisable, setCheckoutPageDisable] = useState(true);

	const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

	function handleSubmit() {
		setCheckoutPageDisable(false);
		const body = {
			products,
			cardName,
			cardNumber: cardNumber.replace(/ /g, ""),
			expirationDate,
			cardCVC,
		};

		const config = {
			headers: {
				Authorization: token,
			},
		};

		axios
			.post(`${REACT_APP_API_URL}checkout`, body, config)
			.then(() => {
				setCheckoutPageDisable(true);
				navigate("/success", { state: { purchaseData: body } });
			})
			.catch((err) => {
				alert(err.response.data);
				setCheckoutPageDisable(true);
				navigate("/");
			});
	}
	if (checkoutPageDisable) {
		return (
			<CheckoutContainer>
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
			</CheckoutContainer>
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