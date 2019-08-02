import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to top, #335272 0%, #e5e9ed 100%);
`;

const Welcome = styled.h2`
  font-weight: 500;
  font-style: italic;
  //font-size: 29px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px dashed #335272;
  width: 50%;
`;

const Title = styled.h1`
  color: #01284f;
  font-weight: 600;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;

const Link = styled.a`
  color: dodgerblue;
  text-decoration: none;
  padding: 5px 20px 30px;

  :hover {
    color: darkblue;
  }
`;

const NasaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Image = styled.img`
  border-radius: 5px;
  max-width: 80%;
  box-shadow: 5px 5px #01284f;
`;

const Paragraph = styled.p`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  width: 60%;
  line-height: 22px;
  text-align: justify;
`;

const Span = styled.span`
  font-weight: bold;
`;

export {
  Container,
  Header,
  Welcome,
  Title,
  Navigation,
  Link,
  NasaContainer,
  Image,
  Paragraph,
  Span
};
