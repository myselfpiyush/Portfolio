import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FFF325'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 15px;
    }
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 7rem;
    right: calc(1rem + 2vw);
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  right: calc(3rem + 14vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 2rem;
    right: calc(1rem + 2vw);
  }
`;
const PROJECTS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  ${
    "" /* position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1; */
  }

  position: absolute;
  top: 2rem;
  right: calc(6rem + 20vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 2rem;
    right: calc(6rem + 2vw);
  }
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  ${
    "" /* text-decoration: none;
  z-index: 1; */
  }

  position: absolute;
  top: 2rem;
  right: calc(1.6rem + 9vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 4.5rem;
    right: calc(1rem + 2vw);
  }
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  ${
    "" /* text-decoration: none;
  z-index: 1; */
  }

  position: absolute;
  top: 2rem;
  right: calc(9rem + 25vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 2rem;
    right: calc(10.5rem + 2vw);
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />

        <SocialIcons theme={"dark"} />

        <Contact
          target="_blank"
          to={{ pathname: "mailto:piyushkvagcr@gmail.com" }}
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi..
          </motion.h2>
        </Contact>
        <WORK to="/workExperience">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work Exp.
          </motion.h2>
        </WORK>

        <PROJECTS to="/projects">
          {/* click={+click} */}
          <motion.h2
            initial={{
              x: 550,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            animate={{
              x: 0,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Projects
          </motion.h2>
        </PROJECTS>
        <ABOUT to="/about">
          {" "}
          <motion.h2
            initial={{
              x: 550,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            animate={{
              x: 0,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About
          </motion.h2>
        </ABOUT>
        <SKILLS to="/skills">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Skills
          </motion.h2>
        </SKILLS>
      </Container>
      <Intro />
    </MainContainer>
  );
};

export default Main;
