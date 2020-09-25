import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Incdec from "./components/index";
import ClickCounter from "./components/counters/clickcounter";
import { useState } from "react";
import CustomTextInput from "./sample";
import ExtractData from "./components/extract";
import Shapes from "./components/drawShapes";
import { Button, UncontrolledTooltip } from "reactstrap";
import TableComponent from "./components/tableData";
import Resized from "./Resized";
import Practice from "./practice";
function App() {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState([]);
  const handleChange = e => {
    setTodo(e.target.value);
  };
  const handleClick = () => {
    let a;
    console.log(todo, todos);
    todos.push(todo);
    console.log(todos);
    setTodos(todos);
    setTodo("");
  };
  console.log("tyuio", todos);
  let feedback = false;
  let logicType = false;
  return (
    <div className="App">
      {/* <Incdec /> */}
      {/* <ClickCounter /> */}
      {/* <input name="todo" type="text" value={todo} onChange={handleChange} /> */}
      {/* <button onClick={handleClick}>Add</button>
      {todos.map(todo => {
        return <li>{todo}</li>;
      })}
      <div>
        <TooltipExampleMulti />
      </div>
      <CustomTextInput /> */}
      {/* <ExtractData /> */}
      {/* <Shapes /> */}
      {/* {feedback ? (
        logicType ? (
          <div>feedbakkkk</div>
        ) : (
          <div>logictype</div>
        )
      ) : null}
      <Resized /> */}
      <Practice />
    </div>
  );
}

const TooltipExampleMulti = props => {
  let options = [
    {
      placement: "top",
      text: "Top",
      tt: "lpojuoip",
    },
    {
      placement: "bottom",
      text: "Bottom",
      tt: "lpojepo",
    },
    {
      placement: "left",
      text: "Left",
      tt: ";pj;u",
    },
    {
      placement: "right",
      text: "Right",
      tt: "pokp",
    },
  ];
  return (
    <div>
      <select>
        {options.map((tooltip, i) => {
          return (
            <option key={i} id={"Tooltip-" + i}>
              {tooltip.text}
              {tooltip.tt}
            </option>
          );
        })}
      </select>
      {options.map((item, i) => {
        return (
          <UncontrolledTooltip
            placement={item.placement}
            target={"Tooltip-" + i}
            style={{ display: "none" }}
          >
            {item.value}
          </UncontrolledTooltip>
        );
      })}
    </div>
  );
};

export default App;
