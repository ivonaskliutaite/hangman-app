import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 50px;
  font-size: 4em;
  letter-spacing: 0.3em;
  display: flex;
`;

const Header = () => {
  return <HeaderContainer>Kartuvės</HeaderContainer>;
};

export default Header;
