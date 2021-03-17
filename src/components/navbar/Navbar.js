import React, { useContext } from "react";
import { FaHistory } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { BiHelpCircle } from "react-icons/bi";
import {
	NavContainer,
	NavMenu,
	NavItem,
	NavLink,
	NavSearch,
	NavSearchInput,
	NavIcon,
	NavAvatar,
	ToggleIcon,
} from "./NavElements";
import { UserContext } from "../../App";

const Navbar = () => {
	const { user, activeSidebar, setAciveSidebar } = useContext(UserContext);
	return (
		<NavContainer>
			<ToggleIcon onClick={() => setAciveSidebar(!activeSidebar)}>
				<FiMenu />
			</ToggleIcon>
			<NavMenu>
				<NavItem>
					<NavLink to="/">
						<NavIcon>
							<FaHistory />
						</NavIcon>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavSearch>
						<NavSearchInput placeholder="Search" />
					</NavSearch>
				</NavItem>
				<NavItem>
					<NavLink to="/">
						<NavIcon>
							<BiHelpCircle />
						</NavIcon>
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/">
						{user ? <NavAvatar src={user.photoURL} /> : ""}
					</NavLink>
				</NavItem>
			</NavMenu>
		</NavContainer>
	);
};

export default Navbar;
