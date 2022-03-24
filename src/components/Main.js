import { motion } from "framer-motion";
import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";
import Media from "react-media";
import { SayHi, WorkExp, Skills, About, Projects } from "../components/AllSvgs";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  background-color: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FFF325'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(0 0)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='rotate(0 800 450)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(0 0)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(0 0)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='rotate(0 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='rotate(0 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  @media (max-width: 1000px) {
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0' gradientTransform='rotate(21,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(33,0.5,0.5)'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='43.559999999999995'%3E%3Cpath transform='translate(-157.5 36) rotate(22.5 1409 581) scale(1.09)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='14.52' transform='translate(-90 90) rotate(27 800 450) scale(1.045)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(81 -270) rotate(270 401 736) scale(1.045)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='13.2'%3E%3Cpath transform='translate(540 -36) rotate(9 150 345) scale(0.91)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='29.04' transform='translate(-360 -225) rotate(324 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-540 180) rotate(54 1400 132)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
  }
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
    .media {
      display: none;
    }
    ${
      "" /*  to remove the highlight blue light when touch icon in mobile mode */
    }
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 0vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 14rem;
    right: calc(1rem + 2vw);
  }
`;
const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  right: calc(3rem + 12vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 8rem;
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
  right: calc(6rem + 18.5vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 5rem;
    right: calc(1rem + 2vw);
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
  right: calc(1.6rem + 7vw);
  text-decoration: none;
  z-index: 1;
  @media (max-width: 1000px) {
    top: 11rem;
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
  right: calc(9rem + 23.5vw);
  text-decoration: none;
  z-index: 1;

  @media (max-width: 1000px) {
    top: 1.8rem;
    right: calc(1rem + 2vw);
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
            <h4 className="media">Say hi..</h4>
            <Media
              queries={{
                small: "(max-width: 1000px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && <SayHi width={40} height={40} />}
                </Fragment>
              )}
            </Media>
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
            <h4 className="media">Work Exp.</h4>

            <Media
              queries={{
                small: "(max-width: 1000px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && <WorkExp width={40} height={40} />}
                </Fragment>
              )}
            </Media>
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
            <h4 className="media">Projects</h4>

            <Media
              queries={{
                small: "(max-width: 1000px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && <Projects width={40} height={40} />}
                </Fragment>
              )}
            </Media>
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
            <h4 className="media">About</h4>
            <Media
              queries={{
                small: "(max-width: 1000px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && <About width={40} height={40} />}
                </Fragment>
              )}
            </Media>
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
            <h4 className="media">Skills</h4>
            <Media
              queries={{
                small: "(max-width: 1000px)",
              }}
            >
              {(matches) => (
                <Fragment>
                  {matches.small && <Skills width={40} height={40} />}
                </Fragment>
              )}
            </Media>
          </motion.h2>
        </SKILLS>
      </Container>
      <Intro />
    </MainContainer>
  );
};
export default Main;
