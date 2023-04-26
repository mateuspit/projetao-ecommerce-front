import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import { UserContext } from "./context/UserContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import Success from "./pages/Success";

export default function App() {
	return (
		<PagesContainer>
			<BrowserRouter>
				<UserContext.Provider>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/" element={<Home />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/success" element={<Success />} />
					</Routes>
				</UserContext.Provider>
			</BrowserRouter>
		</PagesContainer>
	);
}

const PagesContainer = styled.main`
	width: 100vw;
	height: 100vw;
`;
