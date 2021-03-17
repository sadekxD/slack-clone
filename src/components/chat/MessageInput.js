import React from "react";
import styled from "styled-components";

const MessageInput = ({ handleChange, handleSend, value, room }) => {
	return (
		<MessageInputContainer>
			<form onSubmit={handleSend}>
				<input
					onChange={handleChange}
					className="message-input"
					placeholder={`Message #${room}`}
					value={value}
				/>
			</form>
		</MessageInputContainer>
	);
};

const MessageInputContainer = styled.div`
	form {
		width: 100%;
		padding: 1rem 0;
		display: flex;
		justify-content: center;

		.message-input {
			&:focus {
				outline: none;
			}
			border: 1px solid gray;
			border-radius: 0.3rem;
			padding: 0.3rem 0.5rem;
			max-width: 800px;
			width: 100%;
			height: 50px;
		}

		.btn-send {
			border: 1px solid black;
			background-color: blue;
			padding: 0.4rem;
			font-size: 1.4rem;
			border-radius: 0.2rem;

			&:focus {
				outline: none;
			}
		}
	}
`;

export default MessageInput;
