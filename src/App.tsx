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
        onClick={async () => {
          bpmnReactJs.saveXml((err: any, xml: string) => console.log(xml));

          // console.log(await bpmnReactJs.saveXmLAsync());
          // console.log(
          //   ref.current?.saveXml((err: any, xml: string) => console.log(xml))
          // );
        }}
      >
        save
      </button>
      <button
        onClick={() => {
          console.log(elements);
          console.log(
            bpmnReactJs.setColor(elements, {
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
            bpmnReactJs.setColor(elements, {
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
      <button
        onClick={() => {
          bpmnReactJs.setAttribute(elements[0]?.id, "property", "test");
        }}
      >
        setAttribute
      </button>
      <button
        onClick={() => {
          bpmnReactJs.getAttribute(elements[0]?.id, "property");
        }}
      >
        getAttribute
      </button>
      <br />

      <BpmnJsReact
        useBpmnJsReact={bpmnReactJs}
        xml={defaultBpmnXml}
        zoomActions={false}
      ></BpmnJsReact>
    </div>
  );
}

export default App;
