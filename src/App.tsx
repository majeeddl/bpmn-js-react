import { useRef, useState } from "react";
import "./App.css";
import { BpmnJsReact } from "./lib";
import { BpmnJsReactModeType } from "./lib/BpmnJsReact";

function App() {
  const ref = useRef<any>();
  return (
    <div className="App">
      <BpmnJsReact mode={BpmnJsReactModeType.Edit} ref={ref}></BpmnJsReact>
      <button
        onClick={() =>
          console.log(ref.current.saveXml((err:any, xml:string) => console.log(xml)))
        }
      >
        save
      </button>
      <br />
      <BpmnJsReact></BpmnJsReact>
    </div>
  );
}

export default App;
