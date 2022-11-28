import styled from "styled-components";
import { handleTypeColors } from "./handleColors";
import { ToastContainerStyledProps, ToastWrapperStyledProps } from "../../types";


export const Wrapper = styled.div<ToastWrapperStyledProps>`
    positon: absolute;
    ${(props) => {
        switch (props.position) {
            case "top-left":
                return `
                    top: 0;
                    left: 0;
                `;
            case "top-right":
                return `
                    top: 0;
                    right: 0;
                `;
            case "bottom-left":
                return `
                    bottom: 0;
                    left: 0;
                `;
            case "bottom-right":
                return `
                    bottom: 0;
                    right: 0;
                `;
            default:
                return `
                    top: 0;
                    right: 0;
                `;
        }
    }}
`;

export const Container = styled.div<ToastContainerStyledProps>`
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
