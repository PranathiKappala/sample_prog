import React, { useState } from "react";

const Practice = () => {
  const [id, setId] = useState(null);
  const [display, setDisplay] = useState(false);
  let rectangles = [
    { id: 0, key: "abc" },
    { id: 1, key: "ac" },
    { id: 2, key: "ao" },
  ];
  const handleClick = it => {
    setId(it.id);
    if (id === it.id) {
      console.log("iiiifgfffffff");
      setDisplay(!display);
    } else setDisplay(true);
  };
  console.log(display);
  return (
    <div>
      {rectangles.map(item => (
        <p
          className={id == item.id && display ? "active" : null}
          onClick={() => handleClick(item)}
        >
          {item.key}
        </p>
      ))}
    </div>
  );
};

export default Practice;
