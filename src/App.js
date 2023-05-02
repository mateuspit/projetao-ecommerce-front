import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { UserProvider } from "./contexts/UserContext.js";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export default function App() {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/success" element={<Success />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
}
