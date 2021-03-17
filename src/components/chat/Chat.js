import React, { useState, useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FiStar } from "react-icons/fi";
import Message from "./Message";
import MessageInput from "./MessageInput";
import { db } from "../../services/firebase";
import { useSelector } from "react-redux";
import firebase from "firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { animateScroll as scroll } from "react-scroll";
import { UserContext } from "../../App";

const messageAnim = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
};

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");
	const { user } = useContext(UserContext);
	const messageRef = useRef(null);
	const { roomID } = useSelector((state) => state.room);

	const [roomDetails] = useCollection(
		roomID && db.collection("rooms").doc(roomID)
	);
	const [roomMessage, loading] = useCollection(
		roomID &&
			db
				.collection("rooms")
				.doc(roomID)
				.collection("messages")
				.orderBy("timestamp")
	);

	useEffect(() => {
		if (!messageRef) return null;
		scrollToBottom();
	}, [roomID, loading, roomMessage]);

	const scrollToBottom = () => {
		scroll.scrollToBottom({
			containerId: "messageContainer",
		});
	};

	const handleChange = (e) => {
		setMessage(e.target.value);
	};

	const handleSend = (e) => {
		e.preventDefault();
		setMessages([...messages, message]);
		setMessage("");

		if (!roomID) {
			return false;
		}

		db.collection("rooms").doc(roomID).collection("messages").add({
			message: message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			user: user.displayName,
			userImage: user.photoURL,
		});
	};

	return (
		<ChatContainer>
			{roomID ? (
				<>
					<Header>
						{roomDetails?.data().name}{" "}
						<span>
							<FiStar />
						</span>
					</Header>
					<MessagesContainer
						variants={messageAnim}
						initial="initial"
						animate="animate"
						ref={messageRef}
						id="messageContainer"
					>
						<div className="dummy"></div>
						{roomMessage?.docs.map((doc) => {
							const { message, timestamp, user, userImage } = doc.data();
							return (
								<Message
									key={doc.id}
									message={message}
									timestamp={timestamp}
									user={user}
									userImage={userImage}
								/>
							);
						})}
					</MessagesContainer>
				</>
			) : (
				<Note>Select a room to chat....</Note>
			)}
			<MessageInput
				value={message}
				handleChange={handleChange}
				handleSend={handleSend}
				room={roomDetails?.data().name}
			/>
		</ChatContainer>
	);
};

const ChatContainer = styled.div`
	transition: all 0.3s ease-in-out;
	height: calc(100vh - 50px);
	min-height: calc(100vh - 50px);
	max-height: calc(100vh - 50px);
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	flex-grow: 1;
	justify-content: space-between;
`;

const Header = styled.h3`
	font-size: 1rem;
	font-weight: 600;
	display: block;
	padding: 0.5rem 0;
	span {
		font-size: 1.3rem;
		svg {
			vertical-align: middle;
		}
	}
	border-bottom: 1px solid gray;
`;

const MessagesContainer = styled(motion.div)`
	flex-grow: 1;
	overflow: auto;
	display: flex;
	flex-direction: column;
	.dummy {
		flex-grow: 1;
	}
`;

const Note = styled.div`
	padding: 0.5rem 1rem;
	font-size: 1rem;
`;
export default Chat;
