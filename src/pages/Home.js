import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import ReactLoading from "react-loading";
import { IoPersonCircle, IoCart } from "react-icons/io5";
import { UserContext } from "../contexts/UserContext.js";

import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail.js";
import ProductContainer from "../components/ProductContainer.js";
import CartProduct from "../components/CartProduct.js";

export default function Home() {
	const { setCardData, cartData } = useContext(UserContext);

	const navigate = useNavigate();

	const [display, setDisplay] = useState("none");
	const [displayProduct, setDisplayProduct] = useState("none");
	const [randomProducts, setRandomProducts] = useState([]);
	const [homeProductsReady, setHomeProductsReady] = useState(false);
	const [dataProduct, setDataProduct] = useState();

	useEffect(() => {
		const promise = axios.get(`${process.env.REACT_APP_API_URL}products`);

		promise.then((res) => {
			setRandomProducts(res.data);
			setHomeProductsReady(true);
		});

		promise.catch((res) => {
			alert(res);
			setHomeProductsReady(false);
		});
	}, []);

	function sideMenu() {
		setDisplay("flex");
	}

	function showProduct(data) {
		setDisplayProduct("flex");
		setDataProduct(data);
		// console.log(dataProduct);
	}

	function updateCartAmount(productId, amount) {
		setCardData(
			cartData.map((prod) =>
				prod._id === productId ? { ...prod, amount } : prod
			)
		);
	}

	function findProductImage(productId) {
		const product = randomProducts.find((product) => product._id === productId);
		return product?.image;
	}

	function calculateTotal() {
		return cartData.reduce((total, product) => {
			return total + product.price * product.amount;
		}, 0);
	}

	function handleCheckout() {
		navigate("/checkout", { state: { products: cartData } });
	}

	if (homeProductsReady) {
		return (
			<BigContainer display={display} displayProduct={displayProduct}>
				<ProductDetail
					setDisplayProduct={setDisplayProduct}
					productsData={dataProduct}
					setCartData={setCardData}
					cartData={cartData}
				/>
				<Backdiv
					className="product"
					onClick={() => setDisplayProduct("none")}
				/>
				<SideMenu className="slide-right">
					<Link to={"/login"}>
						<div className="login">
							<IoPersonCircle color="black" onClick={sideMenu} />
							<h1>Faça Login!</h1>
						</div>
					</Link>
					<Icon>
						<p>Carrinho</p>
						<IoCart color="black" />
					</Icon>
					<div className="cart">
						{cartData.map((prod) => (
							<CartProduct
								key={prod._id}
								productsData={prod}
								updateCartAmount={updateCartAmount}
								findProductImage={findProductImage}
								cartData={cartData}
							/>
						))}
					</div>
					<div></div>
					<p className="price">
						Total: R${(calculateTotal() * 0.9).toFixed(2)}
					</p>
					<div className="buttons">
						<button onClick={() => setDisplay("none")}>Cancelar</button>
						<button onClick={handleCheckout}>Comprar</button>
					</div>
				</SideMenu>
				<OpacityDiv
					className="slide-right"
					onClick={() => setDisplay("none")}
				/>
				<Header sideMenu={sideMenu} />
				<Page>
					<h1 className="title">Conheca nossos produtos ✨</h1>
					<div className="container">
						{randomProducts.map((rp) => (
							<ProductContainer
								key={rp._id}
								productsData={rp}
								showProduct={showProduct}
							/>
						))}
					</div>
				</Page>
			</BigContainer>
		);
	} else {
		return (
			<>
				<Header sideMenu={sideMenu} />
				<LoadingText>Carregando produtos!</LoadingText>
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
	margin-top: 50px;
`;

const LoadingGif = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 150px;
`;
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
		text-align: center;
	}
	.container {
		margin-top: 3.4vh;
		display: flex;
		flex-wrap: wrap;
		overflow-y: scroll;
		justify-content: space-between;
		height: 67vh;
		width: 87vw;
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
			background-color: #af7014;
		}
	}
	a {
		display: flex;
		flex-direction: column;
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
