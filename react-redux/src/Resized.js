import React from "react";
const BORDER_SIZE = 4;
const panel = document.getElementById("right_panel");

function resize(e) {
  let m_pos;
  const dx = m_pos - e.offsetX;
  m_pos = e.offsetX;
  panel.style.width = parseInt(getComputedStyle(panel, "").width) + dx + "px";
}

const mouseUp = e => {
  let m_pos;
  if (e.offsetX < BORDER_SIZE) {
    m_pos = e.offsetX;
    resize();
  }
};

const mouseDown = e => {
  console.log(e);
};

const Resized = () => {
  return (
    <div
      id="right_panel"
      onMouseDown={mouseDown}
      //onMouseMove={mouseMove}
      onMouseUp={mouseUp}
    >
      vbhfd
    </div>
  );
};

export default Resized;
