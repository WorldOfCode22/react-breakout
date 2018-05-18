// @flow
import React from "react";

type PaddlePropTypes = {
  width: number,
  height: number,
  x: number,
  y: number,
  color: string
}

const Paddle = (props: PaddlePropTypes) => {
  const paddleStyle = {
    position: "absolute",
    width: props.width,
    height: props.height,
    left: props.x,
    top: props.y,
    backgroundColor: props.color
  }

  return (
    <div style={paddleStyle}/>
  )
}