import React from "react";
import styled from "styled-components";

const SvgHuman = styled.svg`
  fill: transparent;
  stroke: #000;
  stroke-width: 4px;
`;

const SvgContainer = styled.div`
  display: flex;
  margin: 5em 10em;
`;

const FigureLine = styled.line`
  stroke-width: 0.2em;
`;

const FigureCircle = styled.circle`
  //display: none;
`;

const FiguredPart = styled.line`
  //display: none;
`;

const Figure = () => {
  return (
    <SvgContainer>
      <SvgHuman height="250" width="200">
        {"<!-- Rod -->"}
        <FigureLine x1="60" y1="20" x2="140" y2="20" />
        <FigureLine x1="140" y1="20" x2="140" y2="50" />
        <FigureLine x1="60" y1="20" x2="60" y2="230" />
        <FigureLine x1="20" y1="230" x2="100" y2="230" />

        {"<!-- Head -->"}
        <FigureCircle cx="140" cy="70" r="20" />

        {"<!-- Body -->"}
        <FiguredPart x1="140" y1="90" x2="140" y2="150" />

        {"<!-- Arms -->"}
        <FiguredPart x1="140" y1="120" x2="120" y2="100" />
        <FiguredPart x1="140" y1="120" x2="160" y2="100" />

        {"<!-- Legs -->"}
        <FiguredPart x1="140" y1="150" x2="120" y2="180" />
        <FiguredPart x1="140" y1="150" x2="160" y2="180" />
      </SvgHuman>
    </SvgContainer>
  );
};

export default Figure;
