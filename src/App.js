import React, { useState, useEffect, createContext } from "react";
import Chat from "./components/chat/Chat";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { GlobalStyle } from "./style/GlobalStyle";
import { auth } from "./services/firebase";
import Loading from "./components/loader/Loading";
import { Switch, Route } from "react-router-dom";
import "./style/style.scss";

export const UserContext = createContext(null);

function App() {
	const [user, setuser] = useState(null);
	const [activeSidebar, setAciveSidebar] = useState(true);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				const { displayName, email, photoURL, uid } = user;
				setuser({
					uid,
					displayName,
					email,
					photoURL,
				});
			}
		});
	}, []);

	return (
		<UserContext.Provider value={{ user, activeSidebar, setAciveSidebar }}>
			<div className="main" style={{ marginTop: 50 }}>
				<GlobalStyle />
				{user ? (
					<>
						<Navbar />
						<Sidebar />
						<Switch>
							<Route exact path="/">
								<Chat />
							</Route>
						</Switch>
					</>
				) : (
					// <Login />
					<Loading />
				)}
			</div>
		</UserContext.Provider>
	);
}

export default App;
