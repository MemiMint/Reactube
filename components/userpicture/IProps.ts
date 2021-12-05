export interface IProps {
    picture: string;
    width: number;
    height: number;
    border?: boolean;
    hover?: boolean;
    onClick?: () => void;
}