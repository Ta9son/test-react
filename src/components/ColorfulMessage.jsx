import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // javascriptでは、 color: 変数名 が同じ場合は colorだけでOk
    color,
    fontSize: "19px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
