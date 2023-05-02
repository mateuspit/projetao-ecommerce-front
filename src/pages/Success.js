import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.js";
import {
	Table,
	TableTitles,
	ProductColumn,
	QuantityColumn,
	PriceColumn,
	ProductHeader,
	QuantityHeader,
	PriceHeader,
	Header,
	ClienteName,
	ButtonDiv,
	SuccessTitle,
	SuccessContainer,
	StandardButtonSucess,
} from "../style/styles.js";

export default function Success() {
	const { setCardData } = useContext(UserContext);
	const location = useLocation();

	const products = location.state?.purchaseData || [];

	//limpar carinho

	let total = 0;
	
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
						<StandardButtonSucess onClick={() => setCardData([])}>
							Voltar para a Home
						</StandardButtonSucess>
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
						<StandardButtonSucess onClick={() => setCardData([])}>
							Voltar para a Home
						</StandardButtonSucess>
					</Link>
				</ButtonDiv>
			</>
		);
	}
}