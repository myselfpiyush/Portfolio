import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.text};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => props.theme.text};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  .wrapIm {
    @media (max-width: 1000px) {
      ${
        "" /* display: flex;
      flex-wrap: wrap;
      flex-direction: column;

      align-content: space-between;
      width: 20px;
      height: 20px; */
      }
      position:absolute;
      top: 7rem;
    }
  }
`;

const H1 = styled.h1`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
  }

  html,
  body {
    height: 100%;
  }
  body {
    text-align: center;
    background-color: hsla(230, 40%, 50%, 1);
  }
  body:before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
    height: 100%;
  }

  h1 {
    display: inline-block;
    color: white;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.5em;
    text-shadow: 0.03em 0.03em 0 #81f;

    @media (max-width: 1000px) {
      position: absolute;
      top: 1rem;
    }
  }
  h1:after {
    content: attr(data-shadow);
    position: absolute;
    top: 0.06em;
    left: 0.06em;
    z-index: -1;
    text-shadow: none;
    background-image: linear-gradient(
      45deg,
      transparent 45%,
      hsla(48, 20%, 90%, 1) 45%,
      hsla(48, 20%, 90%, 1) 55%,
      transparent 0
    );
    background-size: 0.05em 0.05em;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: shad-anim 15s linear infinite;
  }

  @keyframes shad-anim {
    0% {
      background-position: 0 0;
    }
    0% {
      background-position: 100% -100%;
    }
  }
`;

const H3 = styled.h2`
  ${"" /* main is the container to change the position of stairs  */}
  .main {
    position: fixed;
    left: 60%;
    top: 20%;
  }

  .perspective-text {
    color: black;
    font-family: Arial;
    font-size: 58px;
    font-weight: 900;
    letter-spacing: -2px;
    text-transform: uppercase;
    position: relative;
    right: 100px;
    top: 30px;
    ${"" /*  */}
    @media (max-width: 1000px) {
      position: absolute;

      top: 15rem;
      right: -2rem;
      font-size: 50px;
    }
  }

  .perspective-line {
    height: 50px;
    overflow: hidden;
    position: relative;
  }

  p {
    margin: 0;
    height: 50px;
    line-height: 50px;
    transition: all 0.5s ease-in-out;
  }

  .perspective-line:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(0.667);
  }

  .perspective-line:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.337);
  }

  .perspective-text:hover p {
    transform: translate(0, -50px);
  }

  .perspective-line:nth-child(1) {
    left: 29px;
    color: white;
  }

  .perspective-line:nth-child(2) {
    left: 58px;
    background: #f07e6e;
  }

  .perspective-line:nth-child(3) {
    left: 87px;
    background: #84cdfa;
  }

  .perspective-line:nth-child(4) {
    left: 116px;
    background: #5ad1cd;
  }

  .perspective-line:nth-child(5) {
    left: 145px;
    color: white;
  }
`;

const H2 = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900&display=swap");

  body {
    padding: 0;
    margin: 0;
    background: black;
    height: 100vh;
    width: 100vw;
  }

  span {
    position: absolute;
    left: 44%;
    top: 90%;
    transform: translate(-50%, -50%);
    display: block;
    font-family: "Open Sans", sans-serif;

    color: #cf1b1b;
    font-size: 60px;
    letter-spacing: 8px;
    cursor: pointer;
    font-weight: 900;

    @media (max-width: 1000px) {
      position: absolute;
      left: 10rem;
      top: 30%;
      font-size: 40px;
      transform: translate(-83%, 60%);
    }
  }

  span::before {
    content: "PIYUSH";
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;
    top: 0px;
    left: 0;
    z-index: -1;
    transition: 1s;
  }

  span::after {
    content: "PIYUSH";
    position: absolute;
    color: transparent;
    background-image: repeating-linear-gradient(
      135deg,
      transparent 0,
      transparent 2px,
      white 2px,
      white 4px
    );
    -webkit-background-clip: text;
    top: 0px;
    left: 0px;
    transition: 1s;
  }

  span:hover:before {
    top: 10px;
    left: 10px;
  }

  span:hover:after {
    top: -10px;
    left: -10px;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 2, delay: 0 }}
    >
      <SubBox>
        <Text>
          <H1>
            <h1 data-shadow="Hi,">Hi,</h1>
          </H1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="wrapIm" style={{ fontSize: "45px" }}>
              I'm{" "}
            </h2>
            <H2>
              <span>PIYUSH</span>
            </H2>
          </motion.div>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <H3>
            <div class="main">
              <div class="perspective-text">
                <div class="perspective-line">
                  <p></p>
                  <p>Practical</p>
                </div>
                <div class="perspective-line">
                  <p>Practical</p>
                  <p>Versatile</p>
                </div>
                <div class="perspective-line">
                  <p>Versatile</p>
                  <p>Motivated </p>
                </div>
                <div class="perspective-line">
                  <p>Motivated </p>
                  <p>Explorer</p>
                </div>
                <div class="perspective-line">
                  <p>Explorer</p>
                  <p></p>
                </div>
              </div>
            </div>
          </H3>
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
