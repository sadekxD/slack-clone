import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
	height: 50px;
	width: 100%;
	padding: 0 1.2rem;
	background-color: var(--slack-bg);
	border-bottom: 1px solid gray;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
`;

export const ToggleIcon = styled.span`
	position: absolute;
	display: flex;
	left: 1rem;
	top: 50%;
	font-size: 1.6rem;
	color: #fff;
	transform: translateY(-50%);
	cursor: pointer;
`;
export const NavMenu = styled.ul`
	height: 100%;
	display: grid;
	grid-template-columns: 20% 40% 20% 20%;
	justify-content: space-between;
	align-items: center;
`;

export const NavItem = styled.li`
	width: 100%;
	display: flex;
	align-items: center;
	&:nth-child(1) {
		justify-content: flex-end;
		padding-right: 1rem;
	}
	&:nth-child(2) {
		padding: 0;
	}
	&:nth-child(3) {
		justify-content: flex-start;
		padding-left: 1rem;
	}
	&:nth-child(4) {
		justify-content: flex-end;
	}
`;
export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
`;
export const NavSearch = styled.form`
	width: 100%;
`;
export const NavSearchInput = styled.input`
	width: 100%;
	border: 1px solid gray;
	border-radius: 0.3rem;
	padding: 0.3rem 0.5rem;
	background: rgb(67, 30, 68);
	box-shadow: inset 0 0 0 1px rgb(104 74 104);
	color: gray;
	font-size: 13px;
`;

export const NavIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	height: 36px;
	width: 36px;
	background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
	font-size: 18px;
	&:hover {
		backdrop-filter: brightness(1.6);
	}
`;

export const NavAvatar = styled.img`
	border-radius: 50%;
	height: 36px;
	width: 36px;
	object-fit: cover;
	&:hover {
		backdrop-filter: brightness(1.6);
	}
`;
