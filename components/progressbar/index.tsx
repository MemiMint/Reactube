import React, { FunctionComponent, Props, useEffect } from "react";
import NProgress from "nprogress";
import Router from "next/router";
import { IProps } from "./Iprops"

export const ProgressBar: FunctionComponent = (): JSX.Element => {

  const defaultProps: IProps = {
    color: "#6ee7b7",
    startPosition: 0.3,
    stopDelayMS: 200,
    height: 3,
    options: {}
  }


  let timer: NodeJS.Timeout;


  const routeChangeStart = (): void => {
    const { stopDelayMS } = defaultProps

    NProgress.set(stopDelayMS);
    NProgress.start();
  }

  const routeChangeEnd = (): void => {
    const { stopDelayMS } = defaultProps

    clearTimeout(timer);
    timer = setTimeout(() => {
      NProgress.done(true);

    }, stopDelayMS);
  }

  useEffect(() => {
    const { options } = defaultProps

    if (options) NProgress.configure(options);
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);
  })

  const { color, height } = defaultProps

  return (

    <style jsx global>{
      `#nprogress {
                pointer-events: none;
              }
              #nprogress .bar {
                background: ${color};
                position: fixed;
                z-index: 1031;
                top: 0;
                left: 0;
                width: 100%;
                height: ${height}px;
              }
              #nprogress .peg {
                display: block;
                position: absolute;
                right: 0px;
                width: 100px;
                height: 100%;
                box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
                opacity: 1;
                -webkit-transform: rotate(3deg) translate(0px, -4px);
                -ms-transform: rotate(3deg) translate(0px, -4px);
                transform: rotate(3deg) translate(0px, -4px);
              }
              .nprogress-custom-parent {
                overflow: hidden;
                position: relative;
              }
              .nprogress-custom-parent #nprogress .bar {
                position: absolute;
              }`
    }</style>
  )
}