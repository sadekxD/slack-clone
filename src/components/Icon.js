import React from "react";
import styled from "styled-components";

const Icon = ({ icon, size }) => {
	return <StyledIcons size={size}>{icon}</StyledIcons>;
};

const StyledIcon = styled.span`
	border-radius: 0.3rem;
	height: 26px;
	width: 26px;
	border: 1px solid gray;
	&:hover {
		background-color: rgb(67, 30, 68);
	}
`;

export default Icon;
