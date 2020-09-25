import React from "react";
import screenshot from "./Screenshot.png";

// import "./index.css";

class CanvasComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      imageData: screenshot,
      canvasx: 0,
      canvasy: 0,
      last_mousex: 0,
      last_mousey: 0,
      mousex: 0,
      mousey: 0,
      ctx: null,
    };
  }

  componentDidMount() {
    console.log("props", this.props);
    if (!this.state.imageData) {
      console.log("no image");
    } else {
      let canvas = document.getElementById("canvasId");
      let ctx = canvas.getContext("2d");
      this.closeEnough = 10; //to form circles on edit box and enable edit only when diff is 10
      console.log(ctx);

      this.drag = this.dragTL = this.dragTR = this.dragBL = this.dragBR = false; //SETTING TO FALSE ALL CORNERS
      this.rect = {};
      canvas.style.backgroundImage = `url(${this.state.imageData})`;
      let img = new Image();
      img.onload = function () {
        canvas.width = this.width;
        canvas.height = this.height;
      };
      img.src = this.state.imageData;
      let canvasx = canvas.offsetLeft;
      console.log("canX", canvasx);

      let canvasy = canvas.offsetTop;
      let last_mousex = 0;
      let last_mousey = 0;
      let mousex = 0;
      let mousey = 0;
      this.setState({
        canvasx: canvasx,
        canvasy: canvasy,
        last_mousex: last_mousex,
        last_mousey: last_mousey,
        mousex: mousex,
        mousey: mousey,
        ctx: ctx,
      });
    }
  }

  updateResizeImageRatios = () => {
    let canvas = document.getElementById("canvasId");
    let {
      width: resizedWidth,
      height: resizedHeight,
    } = canvas.getBoundingClientRect();
    let canvasHeight = canvas.height;
    let canvasWidth = canvas.width;

    let scaleWidthRatio = parseFloat(canvasWidth / resizedWidth);
    let scaleHeightRatio = parseFloat(canvasHeight / resizedHeight);
    this.scaleWidthRatio = scaleWidthRatio;
    this.scaleHeightRatio = scaleHeightRatio;
  };

  /**
   * Updates canvas while drawing rectangle
   */
  updateCanvas = state => {
    this.updateResizeImageRatios();
    let canvas = document.getElementById("canvasId");
    let { x, y } = canvas.getBoundingClientRect();

    let {
      scaleWidthRatio,
      scaleHeightRatio,
      state: { last_mousex, last_mousey },
    } = this;

    let mousex = state.mousex;
    let mousey = state.mousey;

    let width = (mousex - last_mousex) * scaleWidthRatio;
    let height = (mousey - last_mousey) * scaleHeightRatio;

    let x1 = (last_mousex - x) * scaleWidthRatio;
    let y1 = (last_mousey - y) * scaleHeightRatio;

    let x2 = width + x1;
    let y2 = height + y1;

    let rect = { x1, y1, x2, y2, width, height };

    this.drawRectangle(rect);
    this.rect = { ...rect }; //UPDATING RECT OBJ
  };

  checkCloseEnough(point1, point2) {
    return Math.abs(point1 - point2) < this.closeEnough;
  }

  mouseDown = e => {
    console.log(e.pageX, "mousedown");
    let { editRect, drawRect } = this.props;
    this.updateResizeImageRatios();
    let {
      scaleWidthRatio,
      scaleHeightRatio,
      state: { canvasx, canvasy },
    } = this;
    let last_mousex = parseInt(e.pageX - canvasx);
    let last_mousey = parseInt(e.pageY - canvasy);

    //KEEPING INITIAL MOUSE DOWN EVENTS
    if (!editRect && drawRect) {
      this.drag = true;
      this.setState({
        last_mousex: last_mousex,
        last_mousey: last_mousey,
      });
    } else {
      let canvas = document.getElementById("canvasId");
      let { x, y } = canvas.getBoundingClientRect();
      let { x1, y1, width, height } = this.editingRectangle.rect;
      let mouseX = (e.pageX - x) * scaleWidthRatio;
      let mouseY = (e.pageY - y) * scaleHeightRatio;
      if (
        this.checkCloseEnough(mouseX, x1) &&
        this.checkCloseEnough(mouseY, y1)
      ) {
        this.dragTL = true; // TOP LEFT
        /**
         * x2 = x1+ width;
         * y2 = y1+ height;
         * (x1,y1)-------------------(x2,y1)
         * |  TL                      TR |
         * |                             |
         * |                             |
         *  BL                        BR |
         * (x1,y2)--------------------(x2,y2)
         */
      } else if (
        this.checkCloseEnough(mouseX, x1 + width) &&
        this.checkCloseEnough(mouseY, y1)
      ) {
        this.dragTR = true; //TOP RIGHT
      } else if (
        this.checkCloseEnough(mouseX, x1) &&
        this.checkCloseEnough(mouseY, y1 + height)
      ) {
        this.dragBL = true; //BOTTON LEFT
      } else if (
        this.checkCloseEnough(mouseX, x1 + width) &&
        this.checkCloseEnough(mouseY, y1 + height)
      ) {
        this.dragBR = true; //BOTTOM RIGHT
      }
      this.drag = true;
    }
  };

  mouseMove = e => {
    // console.log("mouseMove", e);

    let { editRect, drawRect } = this.props;
    if (this.drag && drawRect && !editRect) {
      let mousex = Math.abs(e.pageX - this.state.canvasx);
      let mousey = Math.abs(e.pageY - this.state.canvasy);
      this.updateCanvas({ mousex, mousey });
    } else if (this.drag && editRect) {
      let canvas = document.getElementById("canvasId");
      let { x, y } = canvas.getBoundingClientRect();
      let {
        dragTL,
        dragTR,
        dragBL,
        dragBR,
        scaleWidthRatio,
        scaleHeightRatio,
      } = this;

      let { x1, y1, width, height } = this.editingRectangle.rect;
      let mouseX = (e.pageX - x) * scaleWidthRatio;
      let mouseY = (e.pageY - y) * scaleHeightRatio;
      if (dragTL) {
        width += x1 - mouseX;
        height += y1 - mouseY;
        x1 = mouseX;
        y1 = mouseY;
      } else if (dragTR) {
        width = Math.abs(x1 - mouseX);
        height += y1 - mouseY;
        y1 = mouseY;
      } else if (dragBL) {
        width += x1 - mouseX;
        height = Math.abs(y1 - mouseY);
        x1 = mouseX;
      } else if (dragBR) {
        width = Math.abs(x1 - mouseX);
        height = Math.abs(y1 - mouseY);
      }

      this.editingRectangle.rect = {
        x1,
        y1,
        x2: x1 + width,
        y2: y1 + height,
        width,
        height,
      };
      this.drawEditingRectangle(this.editingRectangle.rect);
    }
  };

  mouseUp = e => {
    console.log("mouseUp", e);

    let { editRect } = this.props;
    let obj = {};
    if (!editRect) {
      this.drag = false;
      obj = {
        displayModal: true,
        showModal: true,
        rect: this.rect,
      };
    } else if (editRect) {
      this.drag = this.dragTL = this.dragTR = this.dragBL = this.dragBR = false;
      this.props.updateCordinatesOfBox(this.editingRectangle); //Updating Edited Rectangle
    }
    //performing actions on mouseupevent
    this.props.mouseUpActions(obj);
  };

  editRectangle = rect => {
    // this.editRectangle is initialised here
    this.editingRectangle = rect;
    this.drawRectangle(rect.rect);
    this.drawHandles(rect.rect);
  };

  clearDrawnRectangle = () => {
    let ctx = this.state.ctx;
    let { width, height } = document.getElementById("canvasId");
    ctx.clearRect(0, 0, width, height); //clear canvas
  };

  /**
   * Using this function to edit the existing box
   */
  drawEditingRectangle = rect => {
    let ctx = this.state.ctx;
    let { x1, y1, width, height } = rect;
    this.clearDrawnRectangle();
    this.drawHandles(rect);
    ctx.beginPath();
    ctx.rect(x1, y1, width, height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.stroke();
  };

  drawRectangle = rect => {
    let ctx = this.state.ctx;
    this.clearDrawnRectangle();
    ctx.beginPath();
    let x1 = parseFloat(rect.x1);
    let y1 = parseFloat(rect.y1);
    let width = parseFloat(rect.x2) - parseFloat(rect.x1);
    let height = parseFloat(rect.y2) - parseFloat(rect.y1);

    ctx.rect(x1, y1, width, height);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "red";
    ctx.stroke();
  };

  /**
   * This function is used to draw circles on rectangle box in edit
   */
  drawHandles = rect => {
    let { x1, y1, width, height } = rect;
    this.drawCircle(x1, y1, this.closeEnough);
    this.drawCircle(x1 + width, y1, this.closeEnough);
    this.drawCircle(x1 + width, y1 + height, this.closeEnough);
    this.drawCircle(x1, y1 + height, this.closeEnough);
  };

  drawCircle = (x, y, radius) => {
    let ctx = this.state.ctx;
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  render() {
    let style = this.props.style;
    if (!style) {
      style = {};
    }
    return (
      <div
        className="canvas-container"
        id="canvasContainer"
        style={{ ...style }}
      >
        <canvas
          className="canvas"
          onMouseDown={this.mouseDown}
          onMouseMove={this.mouseMove}
          onMouseUp={this.mouseUp}
          ref="canvas"
          id="canvasId"
        ></canvas>
      </div>
    );
  }
}

export default CanvasComponent;
