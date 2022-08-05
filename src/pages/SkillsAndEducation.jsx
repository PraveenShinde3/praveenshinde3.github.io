import React from "react";
import styled from "styled-components";
import Education from "../components/Education";
import Skills from "../components/Skills";
import { motion } from "framer-motion";

function SkillsAndEducation() {
  return (
    <SEDiv
      id="Skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <Skills />
      <Education />
    </SEDiv>
  );
}

const SEDiv = styled(motion.div)`
  max-width: 1280px;
  height: 720px;
  display: flex;
  padding: 3rem 6rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  column-gap: 70px;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
    flex-direction: column;
    row-gap: 70px;
    height: auto;
  }
`;

export default SkillsAndEducation;
