import React from "react";
import styled from "styled-components";
import WorkedFor from "../components/WorkedFor";
import Experience from "../components/Experience";
import { motion } from "framer-motion";

function About() {
  return (
    <AboutDiv
      id="About"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <WorkedFor />
      <Experience />
    </AboutDiv>
  );
}

const AboutDiv = styled(motion.div)`
  padding: 3rem 6rem;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;
export default About;
