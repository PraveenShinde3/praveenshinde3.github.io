import React from "react";
import styled from "styled-components";
import Scrollspy from "react-scrollspy";
import "../style/nav.css";

function Header() {
  return (
    <HeaderDiv>
      <HeaderTag>
        <Logo>PRAVEEN.S</Logo>
        <Navbar>
          <Scrollspy
            className="scrollspy"
            items={["Home", "About", "Skills", "Projects"]}
            currentClassName="is-current"
          >
            <NavItems>
              <a href="#Home">Home</a>
            </NavItems>
            <NavItems>
              <a href="#About">About</a>
            </NavItems>
            <NavItems>
              <a href="#Skills">Skills</a>
            </NavItems>
            <NavItems>
              <a href="#Projects">Projects</a>
            </NavItems>
          </Scrollspy>
        </Navbar>
      </HeaderTag>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  width: 100%;
  position: fixed;
  z-index: 99;
  background: #d0d5e8;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  box-shadow: 2px 0px 20px rgba(0, 0, 0, 0.15);
`;

const HeaderTag = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

//Logo -> this tag is created for holding logo information.
const Logo = styled.div`
  font-size: 20px;
  font-weight: 800;
  @media (max-width: 768px) {
    display: none;
  }
`;

//Navbar -> Tag represents the navbar
const Navbar = styled.div`
  // background: blue;
`;

//Nav -> This contains the list of nav elements replaced the 'ul' tag
// const Nav = styled.div`
//   display: flex;
//   justify-content: center;
// `;

//NavItems -> This represents the Items inside a navbar replaces the 'li' tag.
const NavItems = styled.div`
  list-style: none;
  letter-spacing: 0.1rem;
  font-weight: 700;
  font-size: 0.7rem;
  margin: 0px 4px;
`;

//NavLink -> this is a replcement for 'a' tag
// const NavLink = styled.a`
//   text-decoration: none;
//   padding: 1em 1.55em;
//   color: #02131b;
//   border-radius: 5px;
//   &:hover {
//     background: #02131b;
//     color: white;
//   }
//   transition: 0.3s;
// `;

export default Header;
