import React from "react";
import ProjectBox from "../components/ProjectBox";
import styled from "styled-components";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <ProjectDiv
      id="Projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <ProjectHead>Project</ProjectHead>
      <ProjectBox
        name="Project ame"
        description="Web designers generally have nothing to do with creating content for
            their projects. Even so, the look of a site can be incomplete if no
            words are included. Web designers need to find ways to incorporate
            copyright-free content into their designs to provide clients with a
            look that is as finished as possible."
        buttonText="View Project"
      />
      <ProjectBox
        name="Project ame"
        description="Web designers generally have nothing to do with creating content for
            their projects. Even so, the look of a site can be incomplete if no
            words are included. Web designers need to find ways to incorporate
            copyright-free content into their designs to provide clients with a
            look that is as finished as possible."
        buttonText="View Project"
      />
      <ProjectBox
        name="Project ame"
        description="Web designers generally have nothing to do with creating content for
            their projects. Even so, the look of a site can be incomplete if no
            words are included. Web designers need to find ways to incorporate
            copyright-free content into their designs to provide clients with a
            look that is as finished as possible."
        buttonText="View Project"
      />
    </ProjectDiv>
  );
};

const ProjectDiv = styled(motion.div)`
  margin: 0 auto;
  max-width: 1280px;
  padding: 3rem 6rem;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ProjectHead = styled.div`
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

export default Projects;
