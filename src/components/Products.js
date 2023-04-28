import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function Products() {
	const navigate = useNavigate();

	const token = "exemple";
	const { products, setProducts } = useContext(UserContext);
	const [productDetails, setProductDetails] = useState([]);

	const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

	const test = [
		{
			productID: "prod1",
			qntd: 1,
		},
		{
			productID: "prod2",
			qntd: 2,
		},
		{
			productID: "prod3",
			qntd: 3,
		},
	];
	setProducts(test);

	useEffect(() => {
		async function fetchProductDetails() {
			try {
				const details = await Promise.all(
					products.map(async (product) => {
						const config = {
							headers: {
								Authorization: `Bearer ${token}`,
							},
						};
						const { data } = await axios.get(
							`${REACT_APP_API_URL}products`,
							config
						);
						return { ...data, qntd: product.qntd };
					})
				);
				setProductDetails(details);
			} catch (err) {
				console.log("ERR ", err.response.data);
				navigate("/");
			}
		}

		fetchProductDetails();
	}, [products, navigate, REACT_APP_API_URL, token]);

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
