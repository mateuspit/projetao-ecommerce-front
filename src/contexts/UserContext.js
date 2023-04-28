/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [token, setToken] = useState("");

	return (
		<UserContext.Provider value={{ token, setToken }}>
			{children}
		</UserContext.Provider>
	);
};
