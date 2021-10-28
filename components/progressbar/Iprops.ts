import { NProgress, NProgressOptions } from "nprogress";
import Proptypes from "prop-types";

export interface IProps {
    color: string;
    startPosition: number;
    stopDelayMS: number;
    height: number;
    options: Partial<NProgressOptions>
}