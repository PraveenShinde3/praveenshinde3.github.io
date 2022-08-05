import ProfileHome from "../components/ProfileHome";
import { motion } from "framer-motion";
import styled from "styled-components";

function Home() {
  return (
    <HomeDiv
      id="Home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <ProfileHome />
    </HomeDiv>
  );
}

const HomeDiv = styled(motion.div)`
  padding: 60px 0 0 0;
`;

export default Home;
