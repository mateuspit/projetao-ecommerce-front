import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext.js";

export default function CartProduct({
	productsData,
	updateCartAmount,
}) {
	const { cartImage, cartData } = useContext(UserContext);

	const productImage = cartImage.find(
		(product) => product._id === productsData._id
	).image;

	const product = cartData.find((prod) => prod._id === productsData._id);
	const cartProductAmount = product.amount;

	return (
		<Container>
			<img src={productImage} />
			<p>X</p>
			<h1>{productsData?.name}</h1>
			<h3>R$ {(productsData?.price * 0.9).toFixed(2)}</h3>
			<div className="quantity">
				<h1 onClick={() => updateCartAmount(productsData._id, cartProductAmount + 1)}>+</h1>
				<h2>{cartProductAmount}</h2>
				<h3
					onClick={() => {
						if (cartProductAmount > 0) updateCartAmount(productsData._id, cartProductAmount - 1);
					}}
				>
					-
				</h3>
			</div>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 4vh;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	position: relative;
	background-color: rgb(230, 230, 230);
	width: 58vw;
	height: 30vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 1.3rem;
	font-size: 1.5vh;
	img {
		width: 40vw;
		height: 15vh;
	}
	p {
		top: 6%;
		right: 4.5%;
		position: absolute;
	}
	h2 {
		color: green;
	}
	h4 {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.quantity {
		display: flex;
		width: 10vw;
		justify-content: space-between;
		margin-top: 1vh;
	}
`;