import React from "react";
import styled from "styled-components";
import profileSvg from "../images/Home-Profile-Image.svg";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import pdf from "../document/PraveenShinde-CV.pdf";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfileHome() {
  const notify = () => toast.success("Downloading the file");

  let leetcode_url = "https://leetcode.com/shindepraveen002/";
  let github_url = "https://github.com/PraveenShinde3";
  return (
    <Profile>
      <Left>
        <Text1>
          <p>
            Hello I am <span>Praveen Shinde</span>
          </p>
        </Text1>
        <Text2>
          <p>
            A <span>Software Developer</span>
          </p>
        </Text2>
        <ButtonDiv>
          <Button href={pdf} onClick={notify} download="PraveenShinde-CV">
            Download CV
          </Button>
          <ToastContainer
            position="bottom-center"
            theme="dark"
            autoClose={3000}
          />
        </ButtonDiv>

        <IconDiv>
          <Icon
            whileHover={{
              scale: 1.1,
            }}
          >
            <IconLink href={leetcode_url} target="_blank">
              <SiLeetcode />
            </IconLink>
          </Icon>
          <Icon
            whileHover={{
              scale: 1.1,
            }}
          >
            <IconLink href={github_url} target="_blank">
              <FaGithub />
            </IconLink>
          </Icon>
          <Icon
            whileHover={{
              scale: 1.1,
            }}
          >
            <IconLink href="mailto:shindepraveen64@gmail.com" target="_blank">
              <HiOutlineMail />
            </IconLink>
          </Icon>
        </IconDiv>
      </Left>
      <Right>
        <div>
          <img src={profileSvg} alt="profile"></img>
        </div>
      </Right>
    </Profile>
  );
}

const Profile = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 700px;
  //   background: red;
  padding: 0rem 6rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 0rem 1rem;
    justify-content: flex-start;
    flex-direction: column;
    height: auto;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: flex-start;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    justify-content: center;
    align-items: center;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
  p {
    font-size: 48px;
    font-family: century-gothic, sans-serif;
    font-weight: 700;

    span {
      font-family: century-gothic, sans-serif;
      color: #4158d0;
    }
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
const Text2 = styled.div`
  p {
    font-size: 48px;
    font-family: century-gothic, sans-serif;
    font-weight: 700;
    span {
      font-family: century-gothic, sans-serif;
      color: #4158d0;
    }
    @media (max-width: 768px) {
      text-align: center;
      margin: 10px 0 0 0;
    }
  }
`;

const ButtonDiv = styled.div`
  padding: 50px 0 0 0;
`;

const Button = styled.a`
  color: white;
  font-size: 25px;
  width: fit-content;
  text-decoration: none;
  margin: 20px 0 0 0;
  font-size: 14px;
  padding: 15px 25px;
  border-radius: 5px;
  background: #4158d0;
  transition: 0.3s;
  font-weight: 600;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  &:hover {
    background: #02131b;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const IconDiv = styled.div`
  z-index: 1;
  display: flex;
  //   background: blue;
  padding: 50px 0 0 0;
  column-gap: 20px;
`;

const Icon = styled(motion.div)`
  padding: 6px;
  background: #02131b;
  border-radius: 5px;
  margin: 10px 0px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
`;

const IconLink = styled.a`
  color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// const ImageDiv = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   top: 0;
//   left: 0;
//   justify-content: space-between;
//   align-items: center;
//   background: transparent;
//   position: absolute;
// `;

// const Hello = styled.div`
//   font-size: 14px;
//   background: #4158d0;
//   border-radius: 10px;
//   padding: 4px 10px;
//   color: white;
//   font-weight: 600;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
// `;

// const Name = styled.div`
//   font-size: 14px;
//   background: #02131b;
//   border-radius: 10px;
//   padding: 4px 10px;
//   color: white;
//   font-weight: 600;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
// `;

// const Designation = styled.div`
//   color: white;
//   font-weight: 600;
//   text-align: center;
//   p {
//     font-size: 12px;
//     background: #02131b;
//     border-radius: 0 0 10px 10px;
//     letter-spacing: 2px;
//     padding: 4px 10px;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
//   }
//   h3 {
//     font-size: 16px;
//     letter-spacing: 1px;
//     background: #4158d0;
//     border-radius: 10px 10px 0 0;
//     padding: 4px 10px;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
//   }
// `;

export default ProfileHome;
