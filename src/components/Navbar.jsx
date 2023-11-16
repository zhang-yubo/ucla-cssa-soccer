import React from "react";
import styled from "styled-components";
import logo_image from "../images/icon-bw.png";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 10rem;

    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    border-bottom: 4px black solid;

    background: linear-gradient(to bottom, white 0%, white 60%, black 100%);
    
`

const LogoContainer = styled.div`
    position: relative;
    height: 100%;
    aspect-ratio: 1.3;
    left: 0%;
    background-color: black;
    background: linear-gradient(to bottom, white 0%, black 30%);

    display: flex;
    justify-content: center;
    align-items: center;
`

const Logo = styled.img`
    height: 90%;
    position: relative;
`

const NavMenu = styled.ul`
    height: 100%;
    border: 10px blue solid;

    background: blue;

    list-style: none;
    display: flex;
    gap: 20%;
`;

const NavItem = styled.li`
    font-size: 20px;
    cursor: pointer;
    color: blue;
`;

function Navbar(props) {
    return (
        <Container>
            <LogoContainer>
                <Logo src={logo_image} />
            </LogoContainer>
            
            <NavMenu>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Contact</NavItem>
            </NavMenu>


        </Container>
    );
};

export default Navbar;