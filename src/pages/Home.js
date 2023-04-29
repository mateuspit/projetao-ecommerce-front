import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import ProductContainer from "../components/ProductContainer.js";

export default function Home() {
	return (
		<BigContainer>
			<Header />
			<Page>
				<h1 className="title">Conheca nossos produtos ✨</h1>
				<div className="container">
					<ProductContainer />
					<ProductContainer />
					<ProductContainer />
					<ProductContainer />
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
`;
