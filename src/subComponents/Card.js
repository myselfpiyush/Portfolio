import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, LinkChain } from "../components/AllSvgs";

const Box = styled(motion.li)`
  width: 18rem;
  height: 42vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  &:hover {
    background: rgb(34, 193, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};

    .text {
      color: red;
    }
  }
`;
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Type = styled.h6`
  font-size: calc(0.6em + 0.4vw);
  color: green;
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled(NavLink)`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const PaperLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github, link, type } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Type className="text">{type}</Type>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo}` }} target="_blank">
          Visit
        </Link>
        {/*  */}

        {github ? (
          <Git to={{ pathname: `${github}` }} target="_blank">
            <Github width={30} height={30} />
          </Git>
        ) : (
          <PaperLink to={{ pathname: `${link}` }} target="_blank">
            <LinkChain width={30} height={30} />
          </PaperLink>
        )}
      </Footer>
    </Box>
  );
};

export default Card;
