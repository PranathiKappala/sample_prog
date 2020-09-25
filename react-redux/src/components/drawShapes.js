import React, { Component } from "react";
import "./index.css";
class Shapes extends Component {
  state = {
    x: 0,
    y: 0,
    isDrawing: false,
  };
  mouseDown = e => {
    this.setState({ x: e.pageX, y: e.pageY, isDrawing: true });
  };
  mouseOver = e => {
    const canvas = document.getElementById("canvasId");
    let ctx = canvas.getContext("2d");
    let { x, y } = this.state;
    console.log(ctx, e.pageX);
    if (this.state.isDrawing) {
      this.drawLine(ctx, x, y, e.pageX, e.pageY);
      this.setState({ x: e.pageX, y: e.pageY });
    }
    // ctx.beginPath();
    // ctx.fillStyle("#ffffff");
    // ctx.stroke();
  };
  mouseUp = e => {
    const canvas = document.getElementById("canvasId");
    let ctx = canvas.getContext("2d");
    let { x, y } = this.state;
    this.drawLine(ctx, x, y, e.pageX, e.pageY);
    this.setState({ x: 0, y: 0, isDrawing: false });
  };

  drawLine = (context, x1, y1, x2, y2) => {
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  };
  render() {
    return (
      <canvas
        id="canvasId"
        onMouseUp={this.mouseUp}
        onMouseDown={this.mouseDown}
        onMouseOver={this.mouseOver}
      />
    );
  }
}

export default Shapes;
