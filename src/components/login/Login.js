import React from "react";
import { signInWithGoogle } from "../../services/firebase";
import styled from "styled-components";

export default function Login() {
	return (
		<LoginContainer>
			<button className="login-provider-button" onClick={signInWithGoogle}>
				Continue with Google
			</button>
		</LoginContainer>
	);
}

const LoginContainer = styled.div`
	background: #73ac73;
	padding: 0.5rem 1rem;
	border-radius: 0.2rem;

	button {
		background: transparent;
		font-size: 1rem;
		color: #fff;
		cursor: pointer;
	}
`;
