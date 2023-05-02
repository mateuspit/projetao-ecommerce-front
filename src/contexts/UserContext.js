import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [token, setToken] = useState("");
	const [name, setName] = useState("");
	const [cartData, setCardData] = useState([]);
	const [cartImage, setCartImage] = useState([]);

	return (
		<UserContext.Provider value={{ token, setToken, cartData, setCardData, cartImage, setCartImage, name, setName }}>
			{children}
		</UserContext.Provider>
	);
};
