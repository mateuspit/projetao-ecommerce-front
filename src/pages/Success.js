/*eslint-disable */
import React, { useContext } from "react";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.js";

export default function Success() {
	const { cartData, setCardData } = useContext(UserContext);
	const location = useLocation();

	const products = location.state?.purchaseData || [];

	//limpar carinho

	let total = 0;
    console.log(products);
	if (products.lenght !== 0) {
		return (
			<SuccessContainer>
				<Header>
					<SuccessTitle>
						Compra concluída
						<p>com sucesso!</p>
					</SuccessTitle>
				</Header>
				<ClienteName>
					<h4>Nome do cliente:</h4>
					<p>{products.cardName}</p>
				</ClienteName>
				<Table>
					<thead>
						<TableTitles>
							<ProductHeader>Produto</ProductHeader>
							<QuantityHeader>Quant.</QuantityHeader>
							<PriceHeader>Preço</PriceHeader>
						</TableTitles>
					</thead>
					<tbody>
						{products.products.map((p) => {
							total += p.amount * p.price;
							return (
								<tr key={p._id}>
									<ProductColumn>{p.name}</ProductColumn>
									<QuantityColumn>{p.amount}</QuantityColumn>
									<PriceColumn>{p.price}</PriceColumn>
								</tr>
							);
						})}
					</tbody>
				</Table>

				<h3>
					<span>TOTAL A PAGAR: {total.toFixed(2)}</span>
				</h3>

				<ButtonDiv>
					<Link to="/">
						<StandardButton onClick={() => setCardData([])}>
							Voltar para a Home
						</StandardButton>
					</Link>
				</ButtonDiv>
				<h2>Compra realizada em {new Date().toLocaleDateString("pt-BR")}</h2>
			</SuccessContainer>
		);
	} else {
		return (
			<>
				<Header>
					<p>ERROR 404</p>
				</Header>
				<ButtonDiv>
					<Link to="/">
						<StandardButton onClick={() => setCardData([])}>
							Voltar para a Home
						</StandardButton>
					</Link>
				</ButtonDiv>
			</>
		);
	}
}

const Table = styled.table`
	width: 90vw;
	margin: 0 auto;
	border-collapse: collapse;

	thead {
		th {
			color: #273b51;
			text-align: left;
			font-weight: bold;
			/*padding: 10px;*/
			background-color: #f2f2f2;
			border-bottom: 1px solid #ddd;
		}
	}

	tbody {
		tr {
			color: #273b51;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #ddd;
			margin-bottom: 2vh;
		}
	}
`;

const TableTitles = styled.tr`
	display: flex;
	justify-content: space-between;
`;

const ProductColumn = styled.td`
	width: 50vw;
	text-align: "center";
`;

const QuantityColumn = styled.td`
	width: 17vw;
	text-align: "center";
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PriceColumn = styled.td`
	width: 23vw;
	text-align: "center";
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ProductHeader = styled.th`
	width: 50vw;
	text-align: "center";
	color: #273b51;
	font-weight: 700;
	margin-bottom: 2vh;
`;

const QuantityHeader = styled.th`
	margin-bottom: 2vh;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 17vw;
	text-align: "center";
	color: #273b51;
	font-weight: 700;
`;

const PriceHeader = styled.th`
	margin-bottom: 2vh;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 23vw;
	text-align: "center";
	color: #273b51;
	font-weight: 700;
`;

const Header = styled.header`
	background-color: #273b51;
    p{
        font-size: 50px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Icon = styled.div`
	font-size: 40px;
	position: absolute;
	margin-top: 60px;
	margin-left: 60px;
	@media (max-width: 625px) {
		font-size: 40px;
		position: absolute;
		margin-top: 5vh;
		margin-left: 5vw;
	}
`;

const ClienteName = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	line-height: 3vh;
	margin-left: 5vw;
	margin-bottom: 2vh;
	margin-top: 2vh;
	p {
		color: #273b51;
	}
	h4 {
		background-color: #f2f2f2;
		border-bottom: 1px solid #ddd;
		margin-right: 5vw;
	}
`;

const ButtonDiv = styled.div`
	/*position: absolute;*/
	/*bottom: 5%;*/
	/*margin: auto;*/
	margin-top: 5vh;
	margin-bottom: 1vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	a {
		pointer-events: ${(props) => (props.noLink ? "none" : "auto")};
		color: #af7014;
		font-weight: bold;
		text-decoration: underline;
		text-decoration-color: #af7014;
		&:link,
		&:visited,
		&:hover,
		&:active {
			color: #af7014;
		}
	}
`;

const StandardButton = styled.button`
	background-color: #af7014; /* cor de fundo do botão */
	border: none; /* remove a borda do botão */
	color: white; /* cor do texto do botão */
	padding: 10px 20px; /* espaço interno do botão */
	text-align: center; /* alinhamento do texto */
	text-decoration: none; /* remove a decoração de link */
	display: inline-block; /* permite que outros elementos fiquem ao lado do botão */
	font-size: 16px; /* tamanho da fonte */
	border-radius: 5px; /* curvatura dos cantos */
	cursor: pointer; /* cursor ao passar por cima do botão */
`;

const SuccessTitle = styled.h1`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	font-size: 50px;
	margin-bottom: 30px;
	@media (max-width: 625px) {
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 4vh;
		font-size: 7vw;
		margin-bottom: 4vh;
	}
`;

const SuccessContainer = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		color: red;
		font-size: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 700;
		@media (max-width: 625px) {
			color: red;
			font-size: 3vw;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 700;
		}
	}
	h3 {
		text-align: right;
		margin-right: 5vw;
		margin-top: 3vh;
		color: #273b51;
		display: inline-block;
		padding: 0.5em 1em;
	}

	h3 span {
		background-color: #f2f2f2;
		border-bottom: 1px solid #ddd;
		font-weight: 700;
	}
	h4 {
		font-weight: 700;
		color: #273b51;
	}
`;
