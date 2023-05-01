import React from "react";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Success() {
	const purchaseData = {
		products: [
			{
				id: "644ebe583c9f7e8599d74f51",
				name: "Seda para Tabaco Aromatizada de Morango",
				amount: 1,
				price: 2.99,
			},
			{
				id: "644ebe583c9f7e8599d74f5f",
				name: "Fumo para Narguilé de Canela",
				amount: 2,
				price: 7.99,
			},
			{
				id: "644ebe583c9f7e8599d74f48",
				name: "Narguilé Pequeno",
				amount: 3,
				price: 35.99,
			},
			{
				id: "644ebe583c9f7e8599d74f5e",
				name: "Cachimbo de Metal",
				amount: 4,
				price: 14.99,
			},
			{
				id: "644ebe583c9f7e8599d74f4f",
				name: "Incenso de Sândalo",
				amount: 5,
				price: 3.49,
			},
			{
				id: "644ebe583c9f7e8599d74f67",
				name: "Fumo para Narguilé de Pêssego",
				amount: 6,
				price: 7.99,
			},
		],
		paymentInfo: {
			cardName: "Fulano da Silva",
			cardNumber: "4111111111111111",
			expirationDate: "12/25",
			cardCVC: "123",
		},
	};
	//limpar carinho
	let total = 0;
	return (
		<SuccessContainer>
			<Header>
				<Link to="/checkout">
					<Icon>
						<IoChevronBack color="WHITE" />
					</Icon>
				</Link>
				<SuccessTitle>
					Compra concluída
					<p>com sucesso!</p>
				</SuccessTitle>
			</Header>
			<ClienteName>
				<h4>Nome do cliente:</h4>
				<p>{purchaseData.paymentInfo.cardName}</p>
			</ClienteName>
			<h4>
				<ProductsList>
					<Product>Produto</Product>
					<p>Quant.</p>
					<p>Preço</p>
				</ProductsList>
			</h4>
			{purchaseData.products.map((p) => {
				total += p.amount * p.price;
				return (
					<ProductsList key={p._id}>
						<Product>{p.name}</Product>
						<p>{p.amount}</p>
						<p>{p.price}</p>
					</ProductsList>
				);
			})}
			<h3>TOTAL A PAGAR: {total.toFixed(2)}</h3>

			<ButtonDiv>
				<Link to="/">
					<StandardButton>Voltar para a Home</StandardButton>
				</Link>
			</ButtonDiv>
			<h2>Compra realizada em {new Date().toLocaleDateString("pt-BR")}</h2>
		</SuccessContainer>
	);
}
const Header = styled.header`
    background-color: #273b51;
`;

const Icon = styled.div`
	font-size: 40px;
	position: absolute;
	margin-top: 4vh;
	margin-left: 5vw;
`;

const ClienteName = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	line-height: 4vh;
	margin-left: 5vw;
	margin-bottom: 3vh;
    margin-top: 2vh;
	p {
		color: #273b51;
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

const Product = styled.p`
	overflow-wrap: break-word;
	width: 40vw;
	color: #273b51;
`;

const ProductsList = styled.div`
	color: black;
	display: flex;
	/*flex-direction: column;*/
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 2vh;
	margin-left: 5vw;
	margin-right: 5vw;
	p {
		color: #273b51;
	}
`;

const SuccessTitle = styled.h1`
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 4vh;
	font-size: 7vw;
	margin-bottom: 4vh;
`;

const SuccessContainer = styled.div`
	display: flex;
	flex-direction: column;
	h2 {
		color: red;
		font-size: 3vw;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h3 {
		text-align: right;
		margin-right: 5vw;
		margin-top: 3vh;
		font-weight: 700;
		color: #273b51;
	}
	h4 {
		font-weight: 700;
		color: #273b51;
	}
`;
