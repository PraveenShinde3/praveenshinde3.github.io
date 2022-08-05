import React from "react";
import styled from "styled-components";
import JavaSvg from "../images/Java.svg";
import PythonSvg from "../images/Python.svg";
import ReactSvg from "../images/react.svg";

const ProjectBox = (props) => {
  return (
    <div>
      <Box>
        <Left></Left>
        <Right>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <button>{props.buttonText}</button>
          <Icons>
            <img src={JavaSvg} alt="Java Svg" />
            <img src={PythonSvg} alt="python Svg" />
            <img src={ReactSvg} alt="React Svg" />
          </Icons>
        </Right>
      </Box>
    </div>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 950px;
  background: #02131b;
  border-radius: 10px;
  padding: 20px;
  margin: 40px auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  max-width: 400px;
  width: 100%;
  height: 250px;
  background: white;
  border-radius: 10px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const Right = styled.div`
  max-width: 500px;
  height: 250px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  row-gap: 10px;
  p {
    font-size: 12px;
  }
  button {
    padding: 7px 20px;
    background: #4158d0;
    font-size: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const Icons = styled.div`
  display: flex;
  img {
    margin: 0 20px 0 0;
    height: 21px;
    width: auto;
  }
`;

export default ProjectBox;
