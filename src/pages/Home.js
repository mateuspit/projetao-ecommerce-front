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
import {
	Page,
	SideMenu,
	OpacityDiv,
	Backdiv,
	IconHome,
	LoadingText,
	LoadingGif,
} from "../style/styles.js";

export default function Home() {
	const { setCardData, cartData, cartImage, token } = useContext(UserContext);

	const navigate = useNavigate();

	const [display, setDisplay] = useState("none");
	const [displayProduct, setDisplayProduct] = useState("none");
	const [randomProducts, setRandomProducts] = useState([]);
	const [homeProductsReady, setHomeProductsReady] = useState(false);
	const [dataProduct, setDataProduct] = useState();
	const [amount, setAmount] = useState(0);

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
	}

	function updateCartAmount(productId, amount) {
		setCardData(
			cartData.map((prod) =>
				prod._id === productId ? { ...prod, amount } : prod
			)
		);
	}

	function calculateTotal() {
		return cartData.reduce((total, product) => {
			return total + product.price * product.amount;
		}, 0);
	}

	function handleCheckout() {
		if (token) {
			navigate("/checkout", { state: { products: cartData } });
		} else {
			navigate("/login");
		}
	}

	if (homeProductsReady) {
		return (
			<BigContainer display={display} displayProduct={displayProduct}>
				<ProductDetail
					setDisplayProduct={setDisplayProduct}
					productsData={dataProduct}
					setCartData={setCardData}
					cartData={cartData}
					amount={amount}
					setAmount={setAmount}
				/>
				<Backdiv
					className="product"
					onClick={() => {
						setDisplayProduct("none");
						setAmount(0);
					}}
				/>
				<SideMenu className="slide-right">
					{!token ? (
						<Link to={"/login"}>
							<div className="login">
								<IoPersonCircle style={{cursor:"pointer"}} color="#273b51" onClick={sideMenu} />
								<h1>Faça Login!</h1>
							</div>
						</Link>
					) : (
						<div className="login">
							<h1>Olá cliente!</h1>
						</div>
					)}
					<IconHome>
						<p>Carrinho</p>
						<IoCart color="#273b51" />
					</IconHome>
					<div className="cart">
						{cartData.map((productData, index) => {
							const productImage = cartImage.find(
								(product) => product._id === productData._id
							).image;
							return (
								<CartProduct
									key={index}
									productsData={productData}
									updateCartAmount={updateCartAmount}
									productImage={productImage}
									cartAmount={productData.amount}
								/>
							);
						})}
					</div>
					<p className="price">
						Total: R${(calculateTotal() * 0.9).toFixed(2)}
					</p>
					<div className="buttons">
						<button
							style={{ cursor: "pointer" }}
							onClick={() => setDisplay("none")}
						>
							Cancelar
						</button>
						<button style={{ cursor: "pointer" }} onClick={handleCheckout}>
							Comprar
						</button>
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
