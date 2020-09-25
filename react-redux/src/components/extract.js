import React from "react";

import CanvasComponent from "./canvasComponent";

// import "./index.css";

class ExtractData extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      trainingType: null,
      editRect: false,
      editingRectangle: {},
      updateModel: false,
      modelName: "",
      displayProperties: false,
      editData: {}, //edit data is to store the details showing on property panel
      imageData: null,
      showModal: false,
      modalProperties: {
        fieldName: "",
        fieldType: "Alphabet",
      },
      displayModal: false,
      rectangles: [],
      rect: {
        x: 0,
        y: 0,
        height: 0,
        width: 0,
      },
      processBtn: true,
      deskew: false,
      grayscale: false,
      clearbackground: false,
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  clearDrawnRectangle = () => {
    this.child.current.clearDrawnRectangle();
  };

  updateCordinatesOfBox = rectangle => {
    let { rectangles } = this.state;
    rectangles[rectangle.id] = rectangle;
    this.setState({
      rectangles,
    });
    // return rectangles;
  };

  mouseUpActions = obj => {
    this.setState({
      ...obj,
    });
  };

  handleCloseModal = () => {
    this.setState(
      {
        showModal: false,
        displayModal: false,
        modalProperties: {
          ...this.state.modalProperties,
        },
      },
      this.clearDrawnRectangle()
    );
  };

  handleSaveAndCloseModal = props => {
    let { rect, rectangles } = this.state;
    let { modalProperties } = props;
    rectangles.push({
      key: modalProperties.fieldName,
      id: rectangles.length,
      properties: modalProperties,
      rect,
    });
    this.setState(
      {
        processBtn: false,
        rectangles,
        showModal: false,
        displayModal: false,
        modalProperties: {
          ...this.state.modalProperties,
        },
      },
      this.clearDrawnRectangle()
    );
  };

  /**
   * Display rectangle on clicking eye
   */
  handleRectButton = rect => {
    this.child.current.drawRectangle(rect.rect);
    this.setState({
      displayProperties: true,
      editData: rect,
      editRect: false,
    });
  };

  /**
   * editing rectangle box on clicking edit
   */
  editRectangle = rect => {
    this.setState(
      {
        editRect: true,
        editingRectangle: rect,
      },
      () => this.child.current.editRectangle(rect)
    );
  };

  /**
   * Deleting drawn rectangle on clicking delete
   */
  deleteRectangle = rectangle => {
    let { rectangles } = this.state;
    rectangles = rectangles.filter(rect => rect.key !== rectangle);
    this.setState(
      {
        rectangles,
        displayProperties: false,
      },
      () => {
        this.editingRectangle = {};
        this.editRect = false;
        this.clearDrawnRectangle();
      }
    );
  };

  render() {
    let {
      rectangles,
      displayProperties,
      editData,
      editRect,
      modelName,
      imageData,
    } = this.state;
    return (
      <div>
        <CanvasComponent
          ref={this.child}
          editRect={editRect}
          drawRect={true}
          mouseUpActions={obj => this.mouseUpActions(obj)}
          updateCordinatesOfBox={obj => this.updateCordinatesOfBox(obj)}
          style={{ margin: "4.5% auto" }}
        />
      </div>
    );
  }
}

export default ExtractData;
