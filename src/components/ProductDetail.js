import React, {  useContext } from "react";
import { IoCart } from "react-icons/io5";
import { UserContext } from "../contexts/UserContext.js";
import { StandardButton, Product } from "../style/styles.js";

export default function ProductDetail({
	setDisplayProduct,
	productsData,
	setCartData,
	cartData,
	amount,
	setAmount,
}) {
	const { cartImage, setCartImage } = useContext(UserContext);
	console.log();
	function handleAddCart() {
		if (amount > 0) {
			const existingProductIndex = cartData.findIndex(
				(prod) => prod._id === productsData._id
			);

			if (existingProductIndex !== -1) {
				// Produto já está no carrinho, atualize a quantidade
				const updatedCartData = [...cartData];
				updatedCartData[existingProductIndex].amount += amount;
				setCartData(updatedCartData);
			} else {
				// Produto não está no carrinho, adicione-o
				setCartData([
					...cartData,
					{
						name: productsData.name,
						price: productsData.price,
						_id: productsData._id,
						amount,
					},
				]);
				setCartImage([
					...cartImage,
					{
						_id: productsData._id,
						image: productsData.image,
					},
				]);
				console.log(cartImage);
			}

			setDisplayProduct("none");
			setAmount(0);
			console.log(cartData);
		}
	}

	return (
		<Product className="product">
			<p
				onClick={() => {
					setDisplayProduct("none");
					setAmount(0);
				}}
			>
				X
			</p>
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

			<StandardButton onClick={() => handleAddCart()}>
				<h5>Adicionar ao carrinho</h5>
				<IoCart color="white" />
			</StandardButton>
		</Product>
	);
}