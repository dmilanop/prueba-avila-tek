import { ReactElement } from "react";

export interface DropdownProps {
    name?: string;
    className?: string;
    open_icon?: ReactElement;
    close_icon?: ReactElement;
    onClick?: () => void;
}