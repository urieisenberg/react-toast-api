import styled from "styled-components";
import { handleTypeColors } from "./handleColors";
import { StyleProps } from "../../types";

export const Wrapper = styled.div<StyleProps>`
  position: relative;
  color: ${(props) => props.color};
  background: ${(props) =>
    props.type ? handleTypeColors(props.type) : props.background};
  border: ${(props) =>
    props.border === "none"
      ? "none"
      : `1px ${props.border} ${props.borderColor}`};
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  z-index: 1;
`;
