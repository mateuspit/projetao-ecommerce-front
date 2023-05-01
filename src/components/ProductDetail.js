import React, { useState } from "react";
import styled from "styled-components";
import { IoCart } from "react-icons/io5";

export default function ProductDetail({
	setDisplayProduct,
	productsData,
	setCartData,
	cartData,
}) {
	const [amount, setAmount] = useState(0);

	return (
		<Product className="product">
			<p onClick={() => setDisplayProduct("none")}>X</p>
			<img src={productsData?.image} />
			<h1>{productsData?.name}</h1>
			<h2>{productsData?.description}</h2>
			<h3>R$ {(productsData?.price * 0.9).toFixed(2)}</h3>
			<div className="quantity">
				<h1 onClick={() => setAmount(amount + 1)}>+</h1>
				<h2>{amount}</h2>
				<h3
					onClick={() => {
						if (amount > 0) setAmount(amount - 1);
					}}
				>
					-
				</h3>
			</div>

			<StandardButton
				onClick={() => {
					setCartData([
						...cartData,
						{
							name: productsData.name,
							price: productsData.price,
							_id: productsData._id,
							amount,
						},
					]);
					console.log([
						...cartData,
						{
							name: productsData.name,
							price: productsData.price,
							_id: productsData._id,
							amount,
						},
					]);
				}}
			>
				<h5>Adicionar ao carrinho</h5>
				<IoCart color="white" />
			</StandardButton>
		</Product>
	);
}

const StandardButton = styled.button`
	background-color: #af7014; /* cor de fundo do botão */
	border: none; /* remove a borda do botão */
	color: white; /* cor do texto do botão */
	padding: 10px 20px; /* espaço interno do botão */
	text-align: center; /* alinhamento do texto */
	text-decoration: none; /* remove a decoração de link */
	display: inline-block; /* permite que outros elementos fiquem ao lado do botão */
	font-size: 4vw; /* tamanho da fonte */
	border-radius: 5px; /* curvatura dos cantos */
	cursor: pointer; /* cursor ao passar por cima do botão */
	display: flex;
	align-items: center;
	width: 63vw;
	height: 6vh;
	justify-content: center;
	h5 {
		font-size: 1.7vh;
		color: white;
		margin-right: 2vw;
	}
`;

const Product = styled.div`
	position: absolute;
	top: 7%;
	left: 7%;
	right: 7%;
	border: 7%;
	background-color: #fafafa;
	width: 85vw;
	height: 85vh;
	z-index: 3;
	padding: 2rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.quantity {
		display: flex;
		width: 15vw;
		max-height: 2vh;
		justify-content: space-between;
		h1,
		h2,
		h3 {
			font-size: 2vh;
			color: black;
			cursor: pointer;
		}
	}
	p {
		position: absolute;
		top: 3%;
		right: 6%;
		cursor: pointer;
	}
	img {
		width: 60vw;
		height: 23vh;
	}
	h1 {
		font-size: 3vh;
		min-height: 12vh;
		overflow-x: scroll;
	}
	h2 {
		font-size: 1.7vh;
		max-height: 19vh;
		overflow-y: scroll;
		line-height: 2.1vh;
		text-align: justify;
	}
	h3 {
		color: green;
		font-size: 2vh;
	}
`;
