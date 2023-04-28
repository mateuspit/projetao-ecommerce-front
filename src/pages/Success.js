import React from "react";
import styled from "styled-components";

export default function Success() {
	return (
		<SuccessContainer>
			<h1>
				Compra concluída
				<br />
				com sucesso
			</h1>
			<div>
				<p>Produto 1</p>
				<p>qntd</p>
			</div>
			<p>Data da compra</p>
			<button>Voltar para a Home</button>
		</SuccessContainer>
	);
}

const SuccessContainer = styled.div`
	display: flex;
    flex-direction: column;
`;
