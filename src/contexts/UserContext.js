import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [token, setToken] = useState("");
	const [cartData, setCardData] = useState([]);

	return (
		<UserContext.Provider value={{ token, setToken, cartData, setCardData }}>
			{children}
		</UserContext.Provider>
	);
};
