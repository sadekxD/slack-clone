const initialState = {
	roomID: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "room_name":
			return { ...state, roomID: action.payload };
		default:
			return state;
	}
};
