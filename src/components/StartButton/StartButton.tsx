import React from "react";
import styled from "styled-components";

type Props = {
  callback: () => void;
};

const StartButton: React.FC<Props> = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;

export const StyledStartButton = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 8px;
  background: linear-gradient(180deg, #f8961a 0%, #e83434 100%);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  max-height: 32px;
`;
