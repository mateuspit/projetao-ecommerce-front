import React from "react";
import styled from "styled-components";
import { IoCart } from "react-icons/io5";

export default function ProductDetail({ setDisplayProduct, productsData }) {
	//useEffect(() => {
	//	console.log("no creio", productsData);
	//	console.log(productsData.image);
	//}, []);
	return (
		<Product className="product">
			<p onClick={() => setDisplayProduct("none")}>X</p>
			<img src={productsData.image} />
			<h1 className="text">{productsData.name}</h1>
			<h2 className="">{productsData.description}</h2>
			<h3>R$ {(productsData.price * 0.9).toFixed(2)}</h3>
			<h4>+ 2 -</h4>

			<StandardButton>
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
	font-size: 16px; /* tamanho da fonte */
	border-radius: 5px; /* curvatura dos cantos */
	cursor: pointer; /* cursor ao passar por cima do botão */
	margin-bottom: 2vh;
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
	padding: 3rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-weight: 400;
	p {
		position: absolute;
		top: 3%;
		right: 6%;
		cursor: pointer;
	}
	.text {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	img {
		width: 60vw;
		height: 23vh;
	}
	h1 {
		/*font-family: "Indie Flower", cursive;*/
		font-size: 5.5vh;
		min-height: 7vh;
	}
	h2 {
		/*font-family: "Indie Flower", cursive;*/
		font-size: 1.7vh;
		max-height: 18vh;
		overflow-y: scroll;
		line-height: 2.1vh;
		text-align: justify;
	}
	h3 {
		/*font-family: "BioRhyme Expanded", cursive;*/
		color: green;
		font-size: 2vh;
	}
	h4 {
		/*font-family: "BioRhyme Expanded", cursive;*/
		font-size: 1.7vh;
	}
	.botao {
		background-color: #273b51;
		font-size: 7vw;
		/*font-family: "BioRhyme Expanded", cursive;*/
		color: white;
		border-radius: 10px;
		width: 63vw;
		height: 6vh;
		display: flex;
		align-items: center;
		justify-content: center;
		h5 {
			font-size: 1.2vh;
			color: white;
			margin-right: 2vw;
		}
	}
`;
