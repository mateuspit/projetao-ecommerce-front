import React from "react";
import styled from "styled-components";

export default function ProductDetail() {
	return (
		<Product className="product">
			<img src="https://photos.enjoei.com.br/nargas-mini-sultan-completo-usado-poucas-vezes-83906751/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82MTQ5OTkxLzhiZTc0MDk5MTFmNGRiNTY0NzE5OTU4NmFlYTNhNWVmLmpwZw" />
			<h1 className="text">nargas</h1>
			<h2 className="">
				Um narguilé (também conhecido como cachimbo d'água, hookah, shisha ou
				arguile) é um dispositivo utilizado para fumar tabaco aromatizado ou
				outras substâncias, que é comum em muitas culturas do Oriente Médio e do
				Sul da Ásia. O narguilé é composto por uma base com água, um tubo
				vertical com um prato na parte superior para colocar o tabaco, um
				fornilho para aquecer o tabaco, uma mangueira para fumar e uma boquilha
				para inalar a fumaça. A fumaça é filtrada pela água na base, tornando-a
				mais suave do que a fumaça de um cigarro tradicional. O uso do narguilé
				é frequentemente associado à socialização e à cultura de cafés em países
				como Egito, Turquia, Líbano e Índia.
			</h2>
			<h3>R$ 20</h3>
			<h4>+ 2 -</h4>
			<button>Adicionar ao carrinho</button>
		</Product>
	);
}

const Product = styled.div`
	position: absolute;
	top: 7%;
	left: 7%;
	right: 7%;
	border: 7%;
	background-color: #fafafa;
	width: 85vw;
	height: 85vh;
	z-index: 3;
	padding: 3rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	.text {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	img {
		width: 60vw;
		height: 23vh;
	}
	h1 {
		font-weight: 400;
		font-family: "Indie Flower", cursive;
		font-size: 5.5vh;
		min-height: 7vh;
	}
	h2 {
		font-weight: 400;
		font-family: "Indie Flower", cursive;
		font-size: 1.7vh;
		background-color: red;
		max-height: 18vh;
		overflow-y: scroll;
        line-height: 2.1vh;
        text-align: justify;
	}
	h3 {
		font-weight: 400;
		font-family: "BioRhyme Expanded", cursive;
		color: green;
		font-size: 2vh;
	}
	h4 {
		font-weight: 400;
		font-family: "BioRhyme Expanded", cursive;
		font-size: 1.7vh;
	}
	button {
		border: 0;
		background-color: #273b51;
		font-size: 1.2vh;
		font-weight: 400;
		font-family: "BioRhyme Expanded", cursive;
		color: white;
		border-radius: 10px;
		width: 63vw;
		height: 6vh;
	}
`;
