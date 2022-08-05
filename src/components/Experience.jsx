import React from "react";
import styled from "styled-components";

function Experience() {
  return (
    <ExperienceDiv>
      <Left>
        <h1>1+</h1>
        <p>Years Experience Working</p>
      </Left>
      <Right>
        <AboutText>
          I am a developer currenlty working in TCS -Tata Consultancy Service
          specialized in both FrontEnd and BackEnd part of the product.
        </AboutText>
        <ExpHead>Experience</ExpHead>
        <ExpData>
          <Years>
            <p> 2021 - Present</p>
          </Years>
          <Company>
            <h3>Developer</h3>
            <p>TCS - Tata Consultancy Service</p>
          </Company>
        </ExpData>
      </Right>
    </ExperienceDiv>
  );
}

const ExperienceDiv = styled.div`
  display: flex;
  max-width: 1280px;
  column-gap: 10vw;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 0rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 0;
  h1 {
    font-size: 128px;
  }
  p {
    max-width: 126px;
    height: 72px;
    font-weight: 800;
  }
  @media (max-width: 768px) {
    margin: 0 0 40px 0;
  }
`;

const Right = styled.div`
  max-width: 650px;
`;

const AboutText = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 20px 0;
  @media (max-width: 768px) {
    text-align: center;
    margin: 0 0 40px 0;
  }
`;

const ExpData = styled.div`
  padding: 2rem 0;
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ExpHead = styled.div`
  background: #4158d0;
  padding: 0.3rem 1rem;
  text-transform: Uppercase;
  width: fit-content;
  font-size: 14px;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.4);
  margin: 0px 0px 0px 0px;
`;

const Years = styled.div`
  p {
    font-size: 10px;
    background: #02131b;
    padding: 3px 10px;
    font-weight: 600;
    color: white;
    width: fit-content;
    border-radius: 4px;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.4);
    margin: 0px 0px 10px 0px;
  }
`;

const Company = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: space-around;

    flex-direction: column;
  }

  padding: 0px 20px;
  h3 {
    font-size: 14px;
  }
  p {
    font-size: 12px;
  }
`;

export default Experience;
