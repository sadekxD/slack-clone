import { AiFillMessage } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import { AiTwotoneLayout } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";

export const options = [
	{
		id: 1,
		icon: <AiFillMessage />,
		title: "Thread",
	},
	{
		id: 2,
		icon: <HiOutlineSave />,
		title: "Saved Items",
	},
	{
		id: 3,
		icon: <AiTwotoneLayout />,
		title: "Channels",
	},
	{
		id: 4,
		icon: <IoMdPeople />,
		title: "People and Groups",
	},
];
