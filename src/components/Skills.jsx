import React from "react";
import styled from "styled-components";
import JavaSvg from "../images/Java.svg";
import PythonSvg from "../images/Python.svg";
import ReactSvg from "../images/react.svg";
import JavaScriptSvg from "../images/JavaScript.svg";
import FigmaSvg from "../images/Figma.svg";
import PostgressSvg from "../images/logos_postgresql.svg";
import NodeSvg from "../images/node.svg";
import { motion } from "framer-motion";

function Skills() {
  return (
    <SkillDiv>
      <SkillHead>Skills</SkillHead>
      <IconDiv>
        <Icon
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src={ReactSvg} alt="Java-Icons" />
        </Icon>
        <Icon
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src={JavaScriptSvg} alt="Java-Icons" />
        </Icon>
        <Icon
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src={FigmaSvg} alt="Java-Icons" />
        </Icon>
        <Icon
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src={JavaSvg} alt="Java-Icons" />
        </Icon>
        <Icon
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src={PythonSvg} alt="Java-Icons" />
        </Icon>
        <Icon
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src={PostgressSvg} alt="Java-Icons" />
        </Icon>
        <Icon
          whileHover={{
            scale: 1.1,
          }}
        >
          <img src={NodeSvg} alt="Java-Icons" />
        </Icon>
      </IconDiv>
    </SkillDiv>
  );
}

const SkillDiv = styled.div`
  max-width: 600px;
`;

const SkillHead = styled.div`
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

const IconDiv = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  column-gap: 120px;
  row-gap: 60px;
  justify-content: center;
  aligm-items: center;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Icon = styled(motion.div)`
  font-size: 35px;
  color: white;
  background: #02131b;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export default Skills;
