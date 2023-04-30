import styled from "styled-components";
import React from "react";

export default function CartProduct() {
	return (
		<Container>
			<img src="https://photos.enjoei.com.br/nargas-mini-sultan-completo-usado-poucas-vezes-83906751/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82MTQ5OTkxLzhiZTc0MDk5MTFmNGRiNTY0NzE5OTU4NmFlYTNhNWVmLmpwZw" />
			<p>X</p>
			<h2>R$10</h2>
			<h3>+ 2 -</h3>
		</Container>
	);
}

const Container = styled.div`
	margin-bottom: 6vh;
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
	img {
		width: 40vw;
		height: 15vh;
	}
	p {
		top: 6%;
		right: 4.5%;
		position: absolute;
		font-size: 1.6vh;
		font-family: "Oldenburg", cursive;
		font-weight: 400;
	}
	h2 {
		font-family: "BioRhyme Expanded", cursive;
		font-weight: 400;
		color: green;
		font-size: 1.5vh;
	}
	h3 {
		font-family: "BioRhyme Expanded", cursive;
		font-weight: 400;
		font-size: 1.5vh;
	}
`;
