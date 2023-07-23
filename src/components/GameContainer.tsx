import React from "react";
import styled from "styled-components";

type ContainerProps = {
  children: React.ReactNode; // 👈️ type children
};

const GameContainer = styled.div``;

const Container = (props: ContainerProps) => {
  return <GameContainer>{props.children}</GameContainer>;
};

export default Container;
