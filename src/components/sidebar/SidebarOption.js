import React from "react";
import styled from "styled-components";

const SidebarOption = ({ icon, title }) => {
	return (
		<Option>
			{icon} <h4>{title}</h4>
		</Option>
	);
};

const Option = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 1rem;
	color: #fff;
	cursor: pointer;

	&:hover {
		backdrop-filter: brightness(1.2);
	}

	svg {
		font-size: 1.5rem;
		margin-right: 1rem;
	}

	h4 {
		font-size: 0.8rem;
		font-weight: 400;
	}
`;

export default SidebarOption;
