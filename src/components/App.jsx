import React from "react";
import Logme from "./Login";

var Login = false;
// This is optional if you don't want to use ternary operator
// function Loggin() {
//   if (Login === true) return <h1>Hello</h1>;
//   else {
//     return <Logme />;
//   }
// }
function App() {
  return (
    <div className="container">
      {/* Ternary Operator {CONDITION ? DO IF TRUE : DO IF FALSE} */}
      {Login === true ? (
        <h1>Hello You have Scuccesfully Login !</h1>
      ) : (
        <Logme />
      )}
      {/* And Operator {CONDITION && EXPRESSION} */}
    </div>
  );
}

export default App;
