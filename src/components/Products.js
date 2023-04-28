import React, { useState, useEffect } from "react";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Products({ productsArray }) {
	const [products, setProducts] = useState([]);
	const [productDetails, setProductDetails] = useState([]);

	useEffect(() => {
		setProducts(productsArray);
	}, [productsArray]);
	console.log(products, setProductDetails);

	const increaseQuantity = (productID) => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.productID === productID
					? { ...product, qntd: product.qntd + 1 }
					: product
			)
		);
	};

	const decreaseQuantity = (productID) => {
		setProducts((prevProducts) =>
			prevProducts.map((product) =>
				product.productID === productID && product.qntd > 1
					? { ...product, qntd: product.qntd - 1 }
					: product
			)
		);
	};

	const removeProduct = (productID) => {
		setProducts((prevProducts) =>
			prevProducts.filter((product) => product.productID !== productID)
		);
	};

	return (
		<>
			<ProductsContainer>
				{productDetails.map((product) => (
					<Product key={product._id}>
						<h2>{product.name}</h2>
						<QuantityButton onClick={() => decreaseQuantity(product._id)}>
							-
						</QuantityButton>
						<p>Quantidade: {product.qntd}</p>
						<QuantityButton onClick={() => increaseQuantity(product._id)}>
							+
						</QuantityButton>
						<p>{product.price}</p>
						<RemoveButton onClick={() => removeProduct(product._id)}>
							x
						</RemoveButton>
					</Product>
				))}
			</ProductsContainer>
		</>
	);
}

const ProductsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100%;
	max-width: 800px;
	height: 400px;
	padding: 10px;
	margin: 25px 0;
	box-sizing: border-box;
	background-color: #f5f5f5;
	border-radius: 30px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`;
const Product = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 40px;
	padding: 5px;
	margin: 5px 0;
	box-sizing: border-box;
	background-color: #f5f5f5;
`;

const QuantityButton = styled.button`
	background-color: #4caf50;
	border: none;
	color: white;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 0 2px;
	cursor: pointer;
	border-radius: 5px;
	padding: 5px 10px;
`;
const RemoveButton = styled.button`
	background-color: #f44336;
	border: none;
	color: white;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 0 2px;
	cursor: pointer;
	border-radius: 5px;
	padding: 5px 10px;
`;
