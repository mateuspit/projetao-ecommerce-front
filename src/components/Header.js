import styled from "styled-components";
import React from "react";
import logoWhite from "../assets/images/logo-white-cropped.png";
import { IoPersonCircle } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header() {
	return (
		<HeaderStyle>
			<MenuIcon>
				<HiOutlineMenu color="white" size="10vw" />
			</MenuIcon>
			<LogoWhite src={logoWhite} alt="logo branca" />
			<UserIcon>
				<IoPersonCircle color="white" size="10vw" />
			</UserIcon>
		</HeaderStyle>
	);
}

const MenuIcon = styled.div`
	margin-left: 3vw;
`;

const UserIcon = styled.div`
	margin-right: 3vw;
`;

const HeaderStyle = styled.header`
	padding-top: 3vh;
	background-color: #273b51;
	width: 100vw;
	height: 10vh;
	display: flex;
	justify-content: space-between;
`;

const LogoWhite = styled.img`
	height: 13vw;
	width: auto;
`;
