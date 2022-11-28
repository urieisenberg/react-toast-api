export interface IToast {
    id?: number;
    message: string;
    type?: "success" | "error" | "info" | "warning";
    duration?: number;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    color?: string;
    background?: string;
    border?:
    | "none"
    | "solid"
    | "dashed"
    | "dotted"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset"
    | "hidden"
    | "initial"
    | "inherit";
    borderColor?: string;
}

export interface StyleProps {
    type?: string | "";
    color?: string | "white";
    background?: string | "black";
    border?: string | "none";
    borderColor?: string | "black";
}