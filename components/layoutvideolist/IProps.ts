import { IProps as VideoProps } from "../videocard/Iprops"

export interface ILayoutSelectorProps {
    onChangeGrid: () => void;
    onChangeColumn: () => void;
}

export interface IProps {
    videos: VideoProps[];
    layout?: "grid" | "column";
}