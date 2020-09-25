import React, { Component } from "react";

// ES6
import { Resizable, ResizableBox } from "react-resizable";

import ResizableRect from "react-resizable-rotatable-draggable";

class TableComponent extends Component {
  constructor() {
    super();
    this.state = {
      width: 100,
      height: 100,
      top: 100,
      bottom: 100,
      left: 100,
      rotateAngle: 0,
      obj: {
        functionName: "0",
        occurrence: 1,
        extraword: "",
        sorting: false,
        linecount: 1,
        extracolumn: null,
        columnnames: null,
        tableendword: null,
        differentiatorcolumn: null,
        wordprevious: null,
        offseteachitem: null,
        fieldValue: "",
        Table_Endword: "iuyygt",
        Word_Previous: "jkhb",
        parameters: [],
        rect: {},
      },
      loading: false,
      success: false,
      check: false,
    };
  }

  handleResize = (style, isShiftKey, type) => {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { top, left, width, height } = style;
    top = Math.round(top);
    left = Math.round(left);
    width = Math.round(width);
    height = Math.round(height);
    this.setState({
      top,
      left,
      width,
      height,
    });
  };

  handleRotate = rotateAngle => {
    this.setState({
      rotateAngle,
    });
  };

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY,
    });
  };

  render() {
    let options = [
      {
        name: "Please select function type ...",
        value: "0",
      },
      {
        name: "Get Area Based Text",
        value: "getAreaBasedText",
      },
      {
        name: "Get Right Side Area Text",
        value: "getRightSideAreaText",
      },
      {
        name: "Extract Table",
        value: "extractTable",
      },
      {
        name: "Get Key Value",
        value: "getKeyValue",
      },
      {
        name: "Get Next Word",
        value: "getnextWord",
      },
      {
        name: "Get Previous Word",
        value: "getPrevWord",
      },
    ];
    let {
      linecount,
      occurrence,
      functionName,
      sorting,
      extraword,
      fieldValue,
      Table_Endword,
      Word_Previous,
    } = this.state.obj;
    let { success, loading } = this.state;
    const { width, top, left, height, rotateAngle } = this.state;
    return (
      <div className="App">
        <ResizableRect
          //left={left}
          top={top}
          width={width}
          height={height}
          // aspectRatio={false}
          // minWidth={10}
          // minHeight={10}
          zoomable="n, e"
          // rotatable={true}
          // onRotateStart={this.handleRotateStart}
          // onRotateEnd={this.handleRotateEnd}
          // onResizeStart={this.handleResizeStart}
          onResize={this.handleResize}
          // onResizeEnd={this.handleUp}
          // onDragStart={this.handleDragStart}
          //onDrag={this.handleDrag}
          // onDragEnd={this.handleDragEnd}
        />

        <div
          className="StyledRect-sc-1uso172-0 fFutOK rect single-resizer"
          top={top}
          width={width}
          height={height}
          // aspectRatio={false}
          // minWidth={10}
          // minHeight={10}
          zoomable="n, e"
          // rotatable={true}
          // onRotateStart={this.handleRotateStart}
          // onRotateEnd={this.handleRotateEnd}
          // onResizeStart={this.handleResizeStart}
          onResize={this.handleResize}
        >
          <div
            className="t resizable-handler"
            style={{ cursor: "n - resize" }}
          ></div>
          <div
            class="r resizable-handler"
            style={{ cursor: "e- resize" }}
          ></div>
          <div class="t square"></div>
          <div class="r square"></div>
          <div className="form-group">
            <label htmlFor="function" className="">
              Function Type
            </label>
            <select
              className="form-control"
              value={functionName}
              name="functionName"
            >
              {options.map((opt, i) => {
                return (
                  <option value={opt.value} key={i}>
                    {opt.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <div style={{ width: "95%", display: "flex" }}>
              <div style={{ width: "50%", marginRight: 10 }}>
                <label htmlFor="occurrence">Occurrence </label>
                <input
                  type="number"
                  min="1"
                  name="occurrence"
                  className="form-control"
                  id="occurrence"
                  value={occurrence}
                />
              </div>
              <div style={{ width: "50%" }}>
                <label htmlFor="linecount">Line Count </label>
                <input
                  type="number"
                  min="1"
                  name="linecount"
                  className="form-control"
                  id="linecount"
                  value={linecount}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="extraword" className="">
                Extra word{" "}
                <span style={{ color: "grey" }}>
                  (use comma to add multiple fields)
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                id="extraword"
                name="extraword"
                value={extraword}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TableComponent;
