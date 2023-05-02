import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../assets/images/logo-white-cropped.png";
import { IoPersonCircle } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

export default function Header({sideMenu}) {
	return (
		<HeaderStyle>
			<MenuIcon>
				<HiOutlineMenu style={{cursor:"pointer"}} color="white" onClick={sideMenu}/>
			</MenuIcon>
			<Link to="/">
				<LogoWhite src={logoWhite} alt="logo branca" />
			</Link>
			<UserIcon>
				<IoPersonCircle style={{cursor:"pointer"}} color="white" onClick={sideMenu}/>
			</UserIcon>
		</HeaderStyle>
	);
}

const MenuIcon = styled.div`
	margin-left: 3vw;
	font-size: 50px;
	@media (max-width: 525px) {
		font-size: 10vw;
	}
`;

const UserIcon = styled.div`
	margin-right: 3vw;
	font-size: 50px;
	@media (max-width: 525px) {
		font-size: 10vw;
	}
`;

const HeaderStyle = styled.header`
	overflow-y: hidden;
	background-color: #273b51;
	width: 100vw;
	height: 10vh;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LogoWhite = styled.img`
	height: 50px;
	width: auto;
	@media (max-width: 525px) {
		height: 13vw;
	}
`;