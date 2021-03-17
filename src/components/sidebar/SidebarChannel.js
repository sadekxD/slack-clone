import React, { useContext } from "react";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import { useDispatch } from "react-redux";
import { roomChange } from "../../actions/chat";
import { UserContext } from "../../App";

const SidebarChannel = () => {
	const [channels] = useCollection(db.collection("rooms"));
	const { user } = useContext(UserContext);
	const dispatch = useDispatch();
	const addChannel = () => {
		const channelName = prompt("Please enter a room channel");
		if (channelName) {
			db.collection("rooms").add({
				id: user.uid,
				user: user.displayName,
				name: channelName,
			});
		}
	};

	return (
		<ChannelContainer>
			<ChannelHeader onClick={addChannel}>
				<h4>Add a channel</h4>
				<IoMdAdd />
			</ChannelHeader>
			{channels?.docs.map((doc) => (
				<Channel key={doc.id} onClick={() => dispatch(roomChange(doc.id))}>
					# {doc.data().name}
				</Channel>
			))}
		</ChannelContainer>
	);
};

const ChannelContainer = styled.div`
	color: #fff;
`;

const ChannelHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1rem;

	svg {
		font-size: 1.5rem;
	}

	h4 {
		font-weight: 400;
		font-size: 0.8rem;
	}

	cursor: pointer;
	&:hover {
		backdrop-filter: brightness(1.2);
	}
`;
const Channel = styled.div`
	padding: 0.5rem 1rem;
	padding-top: 0.5rem;
	font-size: 0.9rem;
	font-weight: 500;
	cursor: pointer;
	&:hover {
		backdrop-filter: brightness(1.2);
	}
`;
export default SidebarChannel;
