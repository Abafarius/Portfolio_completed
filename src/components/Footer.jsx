import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #111;
  color: #ffcc00;
  text-align: center;
  padding: 20px;
  font-family: 'Press Start 2P', cursive;
  border-top: 4px solid #ffcc00;
  box-shadow: 0px -4px 0px #000;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © 2025 Галымжан Есимбек | Разработано в ретро-стиле
    </FooterContainer>
  );
};

export default Footer;
