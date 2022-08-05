import React from "react";
import styled from "styled-components";

function Education() {
  return (
    <EducationDiv>
      <EducationHead>Education</EducationHead>
      <Center>
        <Timeline>
          <Content>
            <Year>2024</Year>
            <Degree>
              <h3>MCA</h3>
              <p>MCA Sastra University</p>
              <p>Currently pursuing</p>
            </Degree>
          </Content>
          <Content>
            <Year>2021</Year>
            <Degree>
              <h3>Bsc-IT (Information Technology)</h3>
              <p>Mumbai University</p>
              <p>CGPI: 8.8</p>
            </Degree>
          </Content>
          <Content>
            <Year>2018</Year>
            <Degree>
              <h3>HSC</h3>
              <p>Maharashtra State Board</p>
              <p>Percentage: 76.5%</p>
            </Degree>
          </Content>
          <Content>
            <Year>2016</Year>
            <Degree>
              <h3>SSC</h3>
              <p>Maharashtra State Board</p>
              <p>Percentage: 76.5%</p>
            </Degree>
          </Content>
        </Timeline>
      </Center>
    </EducationDiv>
  );
}

const EducationDiv = styled.div`
  max-width: 600px;
  font-size: 12px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const EducationHead = styled.div`
  background: #4158d0;
  padding: 0.3rem 1rem;
  text-transform: Uppercase;
  width: fit-content;
  font-size: 14px;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.4);
  margin: 0px 0px 20px 0px;
`;

const Timeline = styled.div`
  width: fit-content;
  margin: 0 auto;
  height: 345px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &:before {
    content: "";
    position: absolute;
    left: 0px;
    width: 2px;
    height: 100%;
    border-left: 2px dashed black;
  }
`;

const Content = styled.div`
  position: relative;
  left: 10px;
  &:before {
    content: "";
    position: absolute;
    left: -11.5px;
    top: 20px;
    width: 5px;
    height: 5px;
    background-color: black;
    border-radius: 50%;
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.5);
  }
  &:hover: before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.5);
  }
`;

const Year = styled.h3`
  position: relative;
  left: -55px;
  top: 15px;
  font-weight: 700;
`;

const Degree = styled.div``;
export default Education;
