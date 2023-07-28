import { ElementRef, useRef, useState } from "react";
import "./App.css";
import { BpmnJsReactHandle } from "./lib";
import BpmnJsReact from "./lib/BpmnJsReact";
import { defaultBpmnXml } from "./utils/bpmn.utils";
import { useBpmnJsReact } from "./hooks/bpmn.hook";

// import { Stack, ActionIcon, MantineProvider, Button } from "@mantine/core";
// import { IconZoomIn, IconZoomOut } from "@tabler/icons";

function App() {
  const ref = useRef<BpmnJsReactHandle>(null);

  const [elements, setElements] = useState<any>([]);

  const bpmnReactJs = useBpmnJsReact();

  return (
    <div className="App">
      <BpmnJsReact
        mode="edit"
        useBpmnJsReact={bpmnReactJs}
        ref={ref}
        click={(e: any) => setElements([e.element])}
      ></BpmnJsReact>
      <button
        onClick={() => {
          bpmnReactJs.saveXml();
          // console.log(
          //   ref.current?.saveXml((err: any, xml: string) => console.log(xml))
          // );
        }}
      >
        save
      </button>
      <button
        onClick={() => {
          console.log(
            ref.current?.setColor(elements, {
              stroke: "#00ff00",
              fill: "#ffff00",
            })
          );
        }}
      >
        set color
      </button>
      <button
        onClick={() => {
          console.log(
            ref.current?.setColor(elements, {
              stroke: "black",
              fill: "white",
            })
          );
        }}
      >
        clear color
      </button>
      <button
        onClick={() => {
          elements.forEach((element: any) => {
            ref.current?.addMarker(element.id, "highlight");
          });
        }}
      >
        addMarker
      </button>
      <button
        onClick={() => {
          elements.forEach((element: any) => {
            ref.current?.removeMarker(element.id, "highlight");
          });
        }}
      >
        removeMarker
      </button>
      <br />

      <BpmnJsReact xml={defaultBpmnXml} zoomActions={false}></BpmnJsReact>
    </div>
  );
}

export default App;
