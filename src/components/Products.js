// import React, { useContext } from "react";
import React from "react";
import styled from "styled-components";
// import { UserContext } from "../context/UserContext";

export default function Products() {
	// const { purchase } = useContext(UserContext);
	return (
		<>
			<ProductsContainer>
				<p>Produtos</p>
				<p>Produtos</p>
			</ProductsContainer>
			<p>R$ 452,23</p>
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
