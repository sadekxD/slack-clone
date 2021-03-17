export const roomChange = (roomName) => (dispatch) => {
	dispatch({
		type: "room_name",
		payload: roomName,
	});
};
