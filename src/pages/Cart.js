import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Products from "../components/Products";

export default function Cart() {
	const navigate = useNavigate();

	const products = [
		{
			_id: "lksdvnj6as4vs6fv5fsv",
			name: "Produto 1",
			description: "Descrição do produto 1",
			image: "url/imagem/produto1.jpg",
			price: 29.99,
			qntd: 1,
		},
		{
			_id: "lksd5f7cs6gsr6gvr6g2v",
			name: "Produto 2",
			description: "Descrição do produto 2",
			image: "url/imagem/produto2.jpg",
			price: 59.99,
			qntd: 2,
		},
	];

	function handleCart() {
		navigate("/checkout", { state: { products } });
	}

	return (
		<CartContainer>
			<h1>Carrinho</h1>
			<Link to="/">Continuar comprando</Link>

			<Products productsArray={products}/>

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
