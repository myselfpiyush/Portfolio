import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";
import i_img from "../assets/Images/about.png";

const Box = styled.div`
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg fill-opacity='0.91'%3E%3Ccircle fill='%23000000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23230046' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%232f0052' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%233b075e' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%2348156a' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23552277' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;

  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Iimage = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  z-index: 10;

  img {
    width: 80%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 60vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(1.8px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", "monospace";
  font-style: italic;

  @media (max-width: 1000px) {
    left: calc(2rem + 5vw);
    top: 8rem;
    border: none;
    width: 60vw;
    height: 55vh;
    font-size: calc(0.7rem + 0.5vw);
  }
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />

        <Iimage>
          <img src={i_img} alt="i_image" />
        </Iimage>
        <Main>
          Enthusiastic engineering graduate with knowledge in problem solving,
          coding and design. Ability to learn new technologies quickly.
          Capability to work in teams by providing valuable support and major in
          computer science, programming and UX design.
          <br /> <br />I have completed my BTech in Computer Science and a
          student of Batch 2018-22 at HMRITM New Delhi, which is affiliated with
          Guru Gobind Singh Indraprastha University (GGSIPU New Delhi) and my
          equivalent % is 90.8.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
