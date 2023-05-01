import styled from "styled-components";
import React from "react";

export default function ProductContainer({ product, productsData }) {
	//useEffect(() => {
	//	console.log(productsData);
	//}, []);
	return (
		<Container onClick={product}>
			<ImgContainer>
				<img src={productsData.image} />
			</ImgContainer>
			<StatsContainer>
				<h1>{productsData.name}</h1>
				<h2>R$ {productsData.price}</h2>
				<h3>R$ {(productsData.price * 0.9).toFixed(2)}</h3>
			</StatsContainer>
		</Container>
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

const Container = styled.div`
	width: 300px;
	height: 300px;
	padding-bottom: 100px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color: #fafafa;
	display: flex;
	/*max-width: 200px;*/
	flex-direction: column;
	margin-bottom: 30px;
	padding: 15px;
	h1 {
		width: 100%;
		text-align: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	h2 {
		color: red;
		text-decoration-line: line-through;
		font-size: 13px;
		margin-bottom: 10px;
		/*font-family: "BioRhyme Expanded", cursive;*/
		text-align: left;
	}
	h3 {
		color: green;
		font-size: 19px;
		/*font-family: "BioRhyme Expanded", cursive;*/
		text-align: left;
	}
	@media (max-width: 525px) {
		width: 69vw;
		padding-bottom: 7vh;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		background-color: #fafafa;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		margin-bottom: 2vh;
		min-height: 32vh;
		padding: 3%;
		max-width: 42vw;
		font-weight: 400;
		img {
			width: 34.5vw;
			height: 13vh;
		}
		h1 {
			width: 34vw;
			min-height: 4.5vh;
			font-size: 2.7vh;
			font-weight: 400;
			/*font-family: "Indie Flower", cursive;*/
			text-align: left;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		h2 {
			color: red;
			margin-top: -2vh;
			text-decoration-line: line-through;
			font-size: 1.1vh;
			/*font-family: "BioRhyme Expanded", cursive;*/
			font-weight: 400;
			text-align: left;
		}
		h3 {
			color: green;
			font-size: 1.4vh;
			/*font-family: "BioRhyme Expanded", cursive;*/
			font-weight: 400;
			text-align: left;
		}
	}
`;
