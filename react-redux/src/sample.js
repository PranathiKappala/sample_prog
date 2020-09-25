import React, { Component } from "react";

// const Sample = () => {
//   let tableData = [
//     {
//       fieldName: "S. No.",
//       fieldValues: [" 1"],
//     },
//     {
//       fieldName: "Service Description",
//       fieldValues: [
//         " PROFESSIONAL FEE (Amount of professional charged for Miles)",
//       ],
//     },
//     {
//       fieldName: "Amount",
//       fieldValues: [" 54,167.000"],
//     },
//     {
//       fieldName: "Taxable Value",
//       fieldValues: [" Rate 35,616.44 Total"],
//     },
//     {
//       fieldName: "CGST",
//       fieldValues: [" Rate Amount"],
//     },
//     {
//       fieldName: "SGST",
//       fieldValues: [" Rate Amount"],
//     },
//     {
//       fieldName: "IGST",
//       fieldValues: [" Amount"],
//     },
//     {
//       fieldName: "Total",
//       fieldValues: [" 35,616.44 35,616.44"],
//     },
//   ];
//   const tabledataRender = () => {
//     console.log(tableData);
//     let maxLength = 0;
//     let tableHeaders = [];
//     tableData.forEach(item => {
//       tableHeaders.push(item.fieldName);
//       if (maxLength < item.fieldValues.length) {
//         maxLength = item.fieldValues.length;
//       }
//     });
//     let newA = [];
//     let index = 0;
//     while (index < maxLength) {
//       let newObj = {};
//       for (let i = 0; i < tableData.length; i++) {
//         let { fieldName, fieldValues } = tableData[i];
//         newObj[fieldName] = fieldValues[index] ? fieldValues[index] : "";
//       }
//       console.log("newObj-----", newObj);
//       newA.push(newObj);
//       index++;
//     }
//     console.log("table--headers", tableHeaders, newA);
//   };
//   return (
//     <div>
//       <button className="btn btn-primary">See Table{tabledataRender()}</button>
//     </div>
//   );
// };

// export default Sample;
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput = () => {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    console.log(this.textInput.current);
    this.textInput.current.focus();
  };

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
export default CustomTextInput;
