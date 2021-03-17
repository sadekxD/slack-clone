import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Message = ({ user, userImage, timestamp, message }) => {
	return (
		<MessageContainer
			initial={{
				opacity: 0,
				y: 50,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				duration: 0.1,
			}}
		>
			<img src={userImage} alt="avatar" className="sender-img" />
			<h4 className="sender-info">
				{user}
				<span className="timestamp">
					{new Date(timestamp?.toDate()).toUTCString()}
				</span>
			</h4>
			<div className="message-txt">{message}</div>
		</MessageContainer>
	);
};

const MessageContainer = styled(motion.div)`
	max-width: 70%;
	width: fit-content;
	display: grid;
	grid-template-areas: "image name" "image message";
	grid-template-rows: auto;
	padding-bottom: 1rem;

	.sender-img {
		grid-area: image;
		width: 50px;
		height: 50px;
		border-radius: 0.3rem;
		object-fit: cover;
		margin-right: 0.5rem;
	}

	.sender-info {
		grid-area: name;
		font-weight: 500;

		.timestamp {
			margin-left: 0.5rem;
			font-size: 11px;
			font-weight: lighter;
		}
	}

	.message-txt {
		grid-area: message;
	}
`;

export default Message;
