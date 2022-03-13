import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Logo = styled.h1`
  display: inline-block;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  text-decoration: none;
`;

const Box = styled.p`
  @import url("https://fonts.googleapis.com/css?family=Bungee+Shade");
  :root {
    --f-size: 15;
    --f-unit: 1vmin;
    --f: calc(var(--f-size) * var(--f-unit));
    --bg: #181717;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-size: var(--f);
    font-family: "Bungee Shade", "cursive";
    background-color: var(--bg);
    display: flex;
    min-height: 100vh;
    margin: 0;
    overflow: hidden;
  }

  p {
    flex: 1;
    line-height: 0.75;
    margin: auto;
    color: #1af0dc;
    text-align: center;
    transform: scaleX(var(--scale, 1));
    animation: glitch-p 11s infinite alternate;

    &::before,
    &::after {
      --top: 0;
      --left: 0;
      --v-height: 30%;

      --n-tenth: calc(var(--f-size) * 0.1 * var(--top));
      --t-cut: calc(var(--n-tenth) / var(--f-size) * 100%);
      --b-cut: calc(var(--t-cut) + var(--v-height));

      content: attr(data-text);
      position: absolute;
      width: 100%;
      left: 0;
      text-align: center;

      transform: translateX(calc(var(--left) * 100%));

      // this helps to get rid of pixelization
      filter: drop-shadow(0 0 transparent);

      text-shadow: calc(var(--left) * -3em) 0 0.02em lime,
        calc(var(--left) * -6em) 0 0.02em #ff00e1;

      background-color: var(--bg);
      clip-path: polygon(
        0% var(--t-cut),
        100% var(--t-cut),
        100% var(--b-cut),
        0% var(--b-cut)
      );
    }

    &::before {
      animation: glitch-b 1.7s infinite alternate-reverse;
    }
    &::after {
      animation: glitch-a 3.1s infinite alternate;
    }
  }

  @keyframes glitch-p {
    17% {
      --scale: 0.87;
    }
    31% {
      --scale: 1.1;
    }
    37% {
      --scale: 1.3;
    }
    47% {
      --scale: 0.91;
    }
    87% {
      --scale: 1;
    }
  }

  @keyframes glitch-a {
    10%,
    30%,
    50%,
    70%,
    90% {
      --top: 0;
      --left: 0;
    }
    0% {
      --v-height: 15%;
    }
    20% {
      --left: 0.005;
    }
    40% {
      --left: 0.01;
      --v-height: 20%;
      --top: 3;
    }
    60% {
      --left: 0.03;
      --v-height: 25%;
      --top: 6;
    }
    80% {
      --left: 0.07;
      --v-height: 5%;
      --top: 8;
    }
    100% {
      --left: 0.083;
      --v-height: 30%;
      --top: 1;
    }
  }

  @keyframes glitch-b {
    10%,
    30%,
    50%,
    70%,
    90% {
      --top: 0;
      --left: 0;
    }
    0% {
      --v-height: 15%;
      --top: 10;
    }
    20% {
      --left: -0.005;
    }
    40% {
      --left: -0.01;
      --v-height: 17%;
      --top: 3;
    }
    60% {
      --left: -0.03;
      --v-height: 35%;
      --top: 6;
    }
    80% {
      --left: -0.07;
      --v-height: 5%;
      --top: 8;
    }
    100% {
      --left: -0.083;
      --v-height: 30%;
      --top: 1;
    }
  }
`;

const LogoComponent = (props) => {
  return (
    <NavLink to="/">
      <Logo>
        <Box>
          <p data-text="PIYUSH">PIYUSH</p>
        </Box>
      </Logo>
    </NavLink>
  );
};

export default LogoComponent;
