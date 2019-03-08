import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "antd/dist/antd.css";

// function Button(props) {
//   console.log(props.text);

//   return (<div style={{ color: props.color }}>{props.text}</div>);
// }

// function App() {
//   return (
//     <div>
//       Hi
//       <Button color="green" text="Hi!!" />
//       <Button color="blue" text ="Bye" />
//       <Button color="blue" text="asada" />
//       <Button />
//     </div>
//   );
// }

// use state add state functionality to your component
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -{" "}
      </Button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
