import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Products from "../components/Products";

export default function Cart() {
	const navigate = useNavigate();

	function handleCart() {
		navigate("/checkout");
	}

	return (
		<CartContainer>
			<h1>Carrinho</h1>
			<Link to="/">Continuar comprando</Link>

			<Products />

			<CheckoutButton onClick={handleCart}>Continuar</CheckoutButton>
		</CartContainer>
	);
}

const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100vw;
	height: 100vh;
	padding: 30px 20px;
	box-sizing: border-box;
	h1 {
		margin-bottom: 20px;
		font-size: 32px;
	}
	a {
		color: blue;
		font-size: 18px;
		margin: 10px;
	}
`;

const CheckoutButton = styled.button`
	position: fixed;
	bottom: 25px;
	width: 350px;
	height: 50px;
	border-radius: 30px;
	border: none;
	font-size: 20px;
`;
