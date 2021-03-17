import React, { useEffect, useContext } from "react";
import { MdFiberManualRecord, MdCreate } from "react-icons/md";
import styled from "styled-components";
import { options } from "./options";
import SidebarOption from "./SidebarOption";
import SidebarChannel from "./SidebarChannel";
import { motion, AnimatePresence } from "framer-motion";
import { UserContext } from "../../App";

const sidebarAnim = {
	initial: { x: "-100%" },
	animate: { x: 0, transition: { duration: 0.3 } },
	exit: { x: "-100%", transition: { duration: 0.3 } },
};

const Sidebar = () => {
	// const [activeSidebar, setAciveSidebar] = useState(true);
	const { user, activeSidebar, setAciveSidebar } = useContext(UserContext);

	useEffect(() => {
		const handleSidebar = () => {
			if (window.innerWidth <= 768) {
				setAciveSidebar(false);
			} else {
				setAciveSidebar(true);
			}
		};
		window.addEventListener("resize", handleSidebar);
		handleSidebar();
	}, []);

	return (
		<>
			<AnimatePresence>
				{activeSidebar && (
					<SidebarContainer
						variants={sidebarAnim}
						initial="initial"
						animate="animate"
						exit="exit"
					>
						<SidebarHeader>
							<SidebarInfo>
								<h2>Code for Everyone</h2>
								<h3>
									<MdFiberManualRecord />
									{user?.displayName}
								</h3>
							</SidebarInfo>
							<span className="create-icon">
								<MdCreate />
							</span>
						</SidebarHeader>

						{options.map((op, index) => (
							<SidebarOption key={index} icon={op.icon} title={op.title} />
						))}
						<SidebarChannel />
					</SidebarContainer>
				)}
			</AnimatePresence>
		</>
	);
};

const SidebarContainer = styled(motion.div)`
	max-width: 280px;
	min-width: 250px;
	background-color: var(--slack-bg);
	height: calc(100vh - 50px);
	overflow: auto;
`;
const SidebarHeader = styled.div`
	border-bottom: 1px solid gray;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	.create-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 40px;
		width: 40px;
		border-radius: 50%;
		font-size: 1.8rem;
		background: #fff;
		cursor: pointer;
		svg {
			vertical-align: middle;
		}
	}
`;
const SidebarInfo = styled.div`
	color: #fff;

	h2 {
		font-size: 1rem;
		font-weight: 500;
	}
	h3 {
		display: flex;
		align-items: center;
		font-size: 0.8rem;
		font-weight: 500;
		opacity: 0.6;

		svg {
			vertical-align: center;
			margin-right: 0.5rem;
			font-size: 0.8rem;
			color: red;
		}
	}
`;

export default Sidebar;
