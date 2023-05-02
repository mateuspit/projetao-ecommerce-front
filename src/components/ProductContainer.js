import styled from "styled-components";
import React from "react";
import { ProductContainerHome } from "../style/styles.js";

export default function ProductContainer({ showProduct, productsData }) {
	return (
		<ProductContainerHome onClick={() => showProduct(productsData)}>
			<ImgContainer>
				<img src={productsData.image} />
			</ImgContainer>
			<StatsContainer>
				<h1>{productsData.name}</h1>
				<h2>R$ {productsData.price}</h2>
				<h3>R$ {(productsData.price * 0.9).toFixed(2)}</h3>
			</StatsContainer>
		</ProductContainerHome>
	);
}

const StatsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
`;

const ImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 200px;
		height: 200px;
	}
	@media (max-width: 525px) {
		img {
			width: 34.5vw;
			height: 13vh;
		}
	}
`;