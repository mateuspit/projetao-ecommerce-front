import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import ProductContainer from "../components/ProductContainer.js";
import { IoPersonCircle, IoCart } from "react-icons/io5";
import CartProduct from "../components/CartProduct.js";
import { useState } from "react";
import ProductDetail from "../components/ProductDetail.js";

export default function Home() {
	const [display, setDisplay] = useState("none");
	const [displayProduct, setDisplayProduct] = useState("none");

	function sideMenu() {
		setDisplay("flex");
	}

	function product() {
		setDisplayProduct("flex");
	}

	return (
		<BigContainer display={display} displayProduct={displayProduct}>
			<ProductDetail setDisplayProduct={setDisplayProduct} />
			<Backdiv className="product" onClick={() => setDisplayProduct("none")} />
			<SideMenu className="slide-right">
				<div className="login">
					<IoPersonCircle color="black" onClick={sideMenu} />
					<h1>Faça Login!</h1>
				</div>
				<Icon>
					<p>Carrinho</p>
					<IoCart color="black" />
				</Icon>
				<div className="cart">
					<CartProduct />
					<CartProduct />
					<CartProduct />
					<CartProduct />
				</div>
				<div></div>
				<p className="price">Total: R$100</p>
				<div className="buttons">
					<button>Cancelar</button>
					<button>Comprar</button>
				</div>
			</SideMenu>
			<OpacityDiv className="slide-right" onClick={() => setDisplay("none")} />
			<Header sideMenu={sideMenu} />
			<Page>
				<h1 className="title">Conheca nossos produtos ✨</h1>
				<div className="container">
					<ProductContainer product={product} />
					<ProductContainer product={product} />
					<ProductContainer product={product} />
					<ProductContainer product={product} />
					<ProductContainer product={product} />
					<ProductContainer product={product} />
				</div>
			</Page>
		</BigContainer>
	);
}

const Page = styled.div`
	background-color: rgb(240, 240, 240);
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow-y: hidden;
	align-items: center;
	.title {
		margin-top: 3vh;
		font-size: 4.5vh;
		font-family: "Oldenburg", cursive;
		text-align: center;
	}
	.container {
		margin-top: 3.4vh;
		display: flex;
		flex-wrap: wrap;
		overflow-y: scroll;
		justify-content: space-between;
		height: 67vh;
		width: 84.6vw;
	}
`;

const BigContainer = styled.div`
	height: 100vh;
	width: 100vw;
	overflow-y: hidden;
	position: relative;
	.slide-right {
		-webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
			both;
		animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
		display: ${(props) => props.display};
	}
	@-webkit-keyframes slide-right {
		0% {
			-webkit-transform: translateX(-10vw);
			transform: translateX(-10vw);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}
	@keyframes slide-right {
		0% {
			-webkit-transform: translateX(-10vw);
			transform: translateX(-10vw);
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}
	}
	.product {
		display: ${(props) => props.displayProduct};
	}
`;

const SideMenu = styled.div`
	width: 70vw;
	height: 100vh;
	background-color: #fafafa;
	z-index: 2;
	position: absolute;
	padding: 2rem;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	p {
		font-weight: 400;
		font-family: "BioRhyme Expanded", cursive;
		font-size: 1.7vh;
	}
	.price {
		margin-bottom: 2vh;
	}
	.login {
		font-size: 10vw;
		display: flex;
		align-items: center;
		h1 {
			margin-left: 4vw;
		}
	}
	h1 {
		font-weight: 400;
		font-family: "BioRhyme Expanded", cursive;
		font-size: 1.7vh;
		margin-bottom: 1vh;
	}
	.cart {
		max-height: 67vh;
		overflow-y: scroll;
	}
	button {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		width: 20vw;
		height: 6vh;
		color: white;
		font-size: 1.2vh;
		font-weight: 400;
		font-family: "BioRhyme Expanded", cursive;
		border: 0;
	}
	.buttons {
		width: 45vw;
		display: flex;
		justify-content: space-between;
		button:nth-child(1) {
			color: black;
			background-color: #d9d9d9;
		}
		button:nth-child(2) {
			background-color: #273b51;
		}
	}
`;

const OpacityDiv = styled.div`
	right: 0;
	top: 0;
	z-index: 1;
	width: 100vw;
	height: 100vh;
	background-color: rgb(210, 210, 210);
	opacity: 0.8;
	position: absolute;
`;

const Backdiv = styled.div`
	right: 0;
	top: 0;
	z-index: 1;
	width: 100vw;
	height: 100vh;
	background-color: rgb(210, 210, 210);
	opacity: 0.8;
	position: absolute;
`;

const Icon = styled.div`
	font-size: 5vh;
	display: flex;
	align-items: center;
`;