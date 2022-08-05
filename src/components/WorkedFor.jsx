import React from "react";
import styled from "styled-components";
import tcsSvg from "../images/TCS-logo.svg";

function WorkedFor() {
  return (
    <WorkDiv>
      <WorkText>Worked For</WorkText>
      <ImageDiv>
        <img src={tcsSvg} alt="TCS-Logo" />
      </ImageDiv>
    </WorkDiv>
  );
}

const WorkDiv = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  max-width: 1280px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

const WorkText = styled.div`
  padding: 10px 22px;
  background: #02131b;
  color: white;
  max-width: 112px;
  height: 55 px;
  font-weight: 600;
  border-radius: 10px 0 0 10px;
  font-size: 17px;
  text-align: center;
  margin: 0 5px 0 0;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.4);
`;

const ImageDiv = styled.div`
  padding: 17.2px 22px;
  background: #4158d0;
  color: white;
  max-width: 149px;
  height: 55 px;
  border-radius: 0 10px 10px 0;
  text-align: center;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.4);
`;

export default WorkedFor;
