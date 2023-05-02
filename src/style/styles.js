import styled from "styled-components";

export const ProductContainerHome = styled.div`
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
		text-align: left;
	}
	h3 {
		color: green;
		font-size: 19px;
		text-align: left;
	}
	@media (max-width: 525px) {
		justify-content: space-around;
		align-items: flex-start;
		margin-bottom: 2vh;
		max-height: 32vh;
		padding: 3%;
		max-width: 42vw;
		img {
			width: 34.5vw;
			height: 13vh;
		}
		h1 {
			width: 34vw;
			height: 6vh;
			font-size: 1.6vh;
			overflow-x: scroll;
			text-align: left;
		}
		h2 {
			color: red;
			margin-top: -2vh;
			text-decoration-line: line-through;
			font-size: 1.1vh;
			text-align: left;
		}
		h3 {
			color: green;
			font-size: 1.4vh;
			text-align: left;
		}
	}
`;

export const StandardButton = styled.button`
	background-color: #af7014; /* cor de fundo do botão */
	border: none; /* remove a borda do botão */
	color: white; /* cor do texto do botão */
	padding: 10px 20px; /* espaço interno do botão */
	text-align: center; /* alinhamento do texto */
	text-decoration: none; /* remove a decoração de link */
	display: inline-block; /* permite que outros elementos fiquem ao lado do botão */
	font-size: 4vw; /* tamanho da fonte */
	border-radius: 5px; /* curvatura dos cantos */
	cursor: pointer; /* cursor ao passar por cima do botão */
	display: flex;
	align-items: center;
	width: 63vw;
	height: 6vh;
	justify-content: center;
	h5 {
		font-size: 1.7vh;
		color: white;
		margin-right: 2vw;
	}
`;

export const Product = styled.div`
	position: absolute;
	top: 7%;
	left: 7%;
	right: 7%;
	border: 7%;
	background-color: #fafafa;
	width: 85vw;
	height: 85vh;
	z-index: 3;
	padding-top: 2rem;
	padding-right: 2rem;
	padding-left: 2rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 525px) {
		position: absolute;
		top: 7%;
		left: 7%;
		right: 7%;
		border: 7%;
		background-color: #fafafa;
		width: 85vw;
		height: 85vh;
		z-index: 3;
		padding: 2rem;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	.quantity {
		display: flex;
		width: 15vw;
		justify-content: space-between;
		h1,
		h2,
		h3 {
			font-size: 20px;
			color: black;
			cursor: pointer;
            font-weight: 700;
		}
		@media (max-width: 525px) {
			display: flex;
			width: 15vw;
			max-height: 2vh;
			justify-content: space-between;
			h1,
			h2,
			h3 {
				font-size: 2vh;
				color: black;
				cursor: pointer;
                font-weight: 700;
			}
		}
	}
	p {
		position: absolute;
		top: 3%;
		right: 6%;
		cursor: pointer;
	}
	img {
		width: 300px;
		height: auto;
		@media (max-width: 525px) {
			width: 60vw;
			height: 23vh;
		}
	}
	h1 {
		font-size: 3vh;
		overflow-x: scroll;
		font-weight: 700;
		@media (max-width: 525px) {
			font-size: 3vh;
			min-height: 12vh;
			overflow-x: scroll;
		}
	}
	h2 {
		font-size: 20px;
        padding-bottom: 15px;
		overflow-y: scroll;
		text-align: justify;
		@media (max-width: 525px) {
			font-size: 1.7vh;
			max-height: 19vh;
			overflow-y: scroll;
			line-height: 2.1vh;
			text-align: justify;
		}
	}
	h3 {
		color: green;
		font-size: 30px;
        padding-bottom: 10px;
		@media (max-width: 525px) {
			color: green;
			font-size: 2vh;
		}
	}
`;

export const LoadingText = styled.p`
	color: #af7014;
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
`;

export const LoadingGif = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
`;

export const CheckoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100vw;
	height: 100vh;
	padding: 30px 20px;
	box-sizing: border-box;
	background-color: #f5f5f5;
	p {
		margin-top: 100px;
		margin-bottom: 15px;
		font-size: 22px;
	}
`;

export const ContainerHeader = styled.header`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	padding: 0 30px;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	background-color: #273b51;
	h1 {
		color: #ffffff;
		font-size: 36px;
	}
`;

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 400px;
	margin: 30px;
	box-sizing: border-box;
	div {
		display: flex;
		width: 100%;
	}
	.smallerInput {
		margin-right: 15px;
	}
`;

export const Input = styled.input`
	display: flex;
	width: 100%;
	height: 45px;
	margin-bottom: 15px;
	padding: 0 10px;
	flex-wrap: nowrap;
	border: 0.5px solid;
	border-radius: 8px;
	box-sizing: border-box;
`;

export const Button = styled.button`
	position: fixed;
	bottom: 30px;
	width: 350px;
	height: 50px;
	border-radius: 30px;
	border: none;
	background-color: #af7014;
	color: #ffffff;
	font-size: 20px;
	cursor: pointer;
`;

export const Icon = styled.div`
	color: #ffffff;
	font-size: 40px;
	position: absolute;
	top: 20px;
	left: 20px;
`;

export const Page = styled.div`
	background-color: rgb(240, 240, 240);
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow-y: hidden;
	align-items: center;
	.title {
		margin-top: 3vh;
		font-size: 4.5vh;
		text-align: center;
	}
	.container {
		margin-top: 3.4vh;
		display: flex;
		flex-wrap: wrap;
		overflow-y: scroll;
		justify-content: space-between;
		height: 67vh;
		width: 87vw;
	}
`;

export const SideMenu = styled.div`
	width: 70vw;
	height: 100vh;
	background-color: #fafafa;
	z-index: 2;
	position: absolute;
	padding: 2rem;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	p {
		font-size: 1.7vh;
	}
	.price {
		margin-bottom: 2vh;
	}
	.login {
		font-size: 10vw;
		display: flex;
		align-items: center;
		h1 {
			margin-left: 4vw;
		}
	}
	h1 {
		font-size: 1.7vh;
		margin-bottom: 1vh;
	}
	.cart {
		max-height: 67vh;
		overflow-y: scroll;
	}
	button {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		width: 20vw;
		height: 6vh;
		color: white;
		font-size: 1.2vh;
		border: 0;
	}
	.buttons {
		width: 45vw;
		display: flex;
		justify-content: space-between;
		button:nth-child(1) {
			color: black;
			background-color: #d9d9d9;
		}
		button:nth-child(2) {
			background-color: #af7014;
		}
	}
	a {
		display: flex;
		flex-direction: column;
	}
`;

export const OpacityDiv = styled.div`
	right: 0;
	top: 0;
	z-index: 1;
	width: 100vw;
	height: 100vh;
	background-color: rgb(210, 210, 210);
	opacity: 0.8;
	position: absolute;
`;

export const Backdiv = styled.div`
	right: 0;
	top: 0;
	z-index: 1;
	width: 100vw;
	height: 100vh;
	background-color: rgb(210, 210, 210);
	opacity: 0.8;
	position: absolute;
`;

export const IconHome = styled.div`
	font-size: 5vh;
	display: flex;
	align-items: center;
`;

export const StandardButtonLogin = styled.button`
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
	margin-bottom: 2vh;
`;

export const StandardInput = styled.input`
	padding: 10px;
	border: 2px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
	margin-bottom: 3vh;
	&:focus {
		outline: none;
		border-color: #66afe9;
		box-shadow: 0 0 5px #66afe9;
	}
`;

export const LoginStyle = styled.body`
	background-color: #273b51;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;

export const LogoWhite = styled.img`
	height: auto;
	width: 300px;
	margin-top: 50px;
	margin-bottom: 50px;
	@media (max-width: 525px) {
		width: 69vw;
		padding-bottom: 7vh;
	}
`;

export const Table = styled.table`
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

export const TableTitles = styled.tr`
	display: flex;
	justify-content: space-between;
`;

export const ProductColumn = styled.td`
	width: 50vw;
	text-align: "center";
`;

export const QuantityColumn = styled.td`
	width: 17vw;
	text-align: "center";
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PriceColumn = styled.td`
	width: 23vw;
	text-align: "center";
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ProductHeader = styled.th`
	width: 50vw;
	text-align: "center";
	color: #273b51;
	font-weight: 700;
	margin-bottom: 2vh;
`;

export const QuantityHeader = styled.th`
	margin-bottom: 2vh;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 17vw;
	text-align: "center";
	color: #273b51;
	font-weight: 700;
`;

export const PriceHeader = styled.th`
	margin-bottom: 2vh;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 23vw;
	text-align: "center";
	color: #273b51;
	font-weight: 700;
`;

export const Header = styled.header`
	background-color: #273b51;
	font-size: 36px;
	p {
		font-size: 36px;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const ClienteName = styled.div`
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

export const ButtonDiv = styled.div`
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

export const StandardButtonSucess = styled.button`
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

export const SuccessTitle = styled.h1`
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

export const SuccessContainer = styled.div`
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
