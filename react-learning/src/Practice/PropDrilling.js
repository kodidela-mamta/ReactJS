import React from "react";

function CompA() {
  return <CompB title="Prop Drilling" />;
}
function CompB(title) {
  console.log(title);
  return <CompC title={title} />;
}
function CompC(title) {
  return <PropDrilling title={title} />;
}
function PropDrilling(title) {
  return <h1>{title}</h1>;
}
export default PropDrilling;
