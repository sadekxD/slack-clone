// import React, { useState, useEffect, createContext } from "react";
// import { auth } from "../services/firebase";

// export const UserContext = createContext();

// export default (props) => {
// 	const [user, setuser] = useState(null);

// 	useEffect(() => {
// 		auth.onAuthStateChanged(async (user) => {
// 			if (user) {
// 				const { displayName, email, photoURL } = user;
// 				setuser({
// 					displayName,
// 					email,
// 					photoURL,
// 				});
// 			}
// 		});
// 	}, []);

// 	return (
// 		<UserContext.Provider value={{ user }}>
// 			{props.children}
// 		</UserContext.Provider>
// 	);
// };
