import styled from "styled-components";
import { handleTypeColors } from "./handleColors";
import { ToastStyledProps } from "../../types";


export const Wrapper = styled.div<ToastStyledProps>`
  position: relative;
  z-index: 1;
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
  width: 250px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background: none;
    color: inherit;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    `;

