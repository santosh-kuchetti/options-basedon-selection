import "./App.css";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  let arr = [
    ["Srikakulam", "Vizag"],
    ["Hyderabadh", "Secanderabadh"],
    ["Jalandhar", "Amritsar"],
  ];
  return (
    <div className="App">
      <div className="main">
        <div className="select">
          <select onChange={(e) => setState(e.target.value)}>
            <option value="">Please select state</option>
            <option value="1">AndraPradesh</option>
            <option value="2">Telangana</option>
            <option value="3">Panjab</option>
          </select>
        </div>
        <div>
          <select defaultValue={''}>
            <option value="">Please select city</option>
            {state == 1
              ? arr[0].map((i,index) => <option value={index}>{i}</option>)
              : state == 2
              ? arr[1].map((i,index) => <option value={index}>{i}</option>)
              : state == 3
              ? arr[2].map((i,index) => <option value={index}>{i}</option>)
              : null}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
