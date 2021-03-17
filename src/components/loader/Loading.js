import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../login/Login";
import { auth } from "../../services/firebase";
import slack from "../../images/slack.gif";

const Loading = () => {
	const [user, loading] = useAuthState(auth);
	const [logged, setLogged] = useState(false);

	useEffect(() => {
		if (user) {
			setLogged(true);
		}
	}, [user]);

	return (
		<LoadingContainer>
			<img src={slack} alt="slack" />
			{!loading && !logged ? (
				<Login />
			) : (
				<Loader type="ball-spin-fade-loader" color="black" active />
			)}
		</LoadingContainer>
	);
};

const LoadingContainer = styled.div`
	width: 300px;
	height: 300px;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
	border-radius: 0.3rem;
	margin: auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;

	img {
		height: 150px;
		width: 150px;
		object-fit: cover;
	}
`;

export default Loading;
