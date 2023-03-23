import React, {
  forwardRef,
  ForwardRefRenderFunction,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// import BpmnJSModeler from "bpmn-js/dist/bpmn-modeler.production.min.js";
//@ts-ignore
import BpmnModeler from "bpmn-js/lib/Modeler";

import { defaultBpmnXml } from "../utils/bpmn.utils";
import ZoomActions from "../components/ZoomActions";
import {
  BpmnJsReactHandle,
  BpmnJsReactProps,
} from "../interfaces/bpmnJsReact.interface";

// export type BpmnJsModelerProps = {
//   xml?: string;
//   height?: any;
//   onLoading?: Function;
//   onError?: Function;
//   onShown?: Function;
//   saveXml?: Function;
//   onClick?: Function;
//   onDbclick?: Function;
//   zoomActions?: boolean;
// };

const BpmnJsModeler: ForwardRefRenderFunction<
  BpmnJsReactHandle,
  BpmnJsReactProps
> = (
  {
    xml = defaultBpmnXml,
    height = 400,
    zoomActions = true,
    onLoading = () => {},
    onError = () => {},
    onShown = () => {},
    click = () => {},
    dbclick = () => {},
    ...props
  }: BpmnJsReactProps,
  ref
) => {
  const containerRef = useRef(null);
  const [bpmnEditor, setBpmnEditor] = useState<BpmnModeler>(null);

  useEffect(() => {
    const container = containerRef.current;
    setBpmnEditor(new BpmnModeler({ container }));

    return () => bpmnEditor?.destroy();
  }, []);

  useEffect(() => {
    bpmnEditor?.importXML(xml);

    bpmnEditor?.on("import.done", (event: any) => {
      const { error, warning } = event;

      if (error) {
        return onError(error);
      }

      zoomFit();

      onShown(warning);
    });

    // bpmnEditor?.on("element.click", onClick);

    bpmnEditor?.on("element.click", (e: any) => {
      // console.log("🚀 ~ file: BpmnJsModeler.tsx:78 ~ bpmnEditor?.on ~ e:", e);
      click(e);
      // getConvas().addMarker(e.element.id, "test");
    });
  }, [bpmnEditor, xml]);

  const getConvas = () => {
    return bpmnEditor?.get("canvas");
  };

  useImperativeHandle(
    ref,
    () => ({
      saveXml(result: any, options = { format: false }) {
        bpmnEditor.saveXML(options, result);
      },
      async saveXmlAsync(result: any, options = { format: false }) {
        return await bpmnEditor.saveXML(options, result);
      },
      getModeler() {
        return bpmnEditor;
      },
      getCanvas() {
        return bpmnEditor.get("canvas");
      },
      zoomIn(step = 0.1) {
        bpmnEditor.get("zoomScroll").stepZoom(step);
      },
      zoomOut(step = 0.1) {
        bpmnEditor.get("zoomScroll").stepZoom(-step);
      },
      zoomFit() {
        bpmnEditor.get("canvas").zoom("fit-viewport");
      },
      setColor(elements: any, color: any) {
        bpmnEditor.get("modeling").setColor(elements, color);
      },
      addMarker(id: string, cssClass: string) {
        bpmnEditor.get("canvas").addMarker(id, cssClass);
      },
      removeMarker(id: string, cssClass: string) {
        bpmnEditor.get("canvas").removeMarker(id, cssClass);
      },
    }),
    [bpmnEditor]
  );

  const zoomIn = () => {
    bpmnEditor.get("zoomScroll").stepZoom(0.1);
  };

  const zoomOut = () => {
    bpmnEditor.get("zoomScroll").stepZoom(-0.1);
  };

  const zoomFit = () => {
    bpmnEditor.get("canvas").zoom("fit-viewport");
  };

  // const saveXml = () => {
  //   alert("hi");
  // };

  // useEffect(() => {
  //   bpmnEditor?.importXML(xml);
  // }, [xml, bpmnEditor]);

  return (
    <>
      <div className="bpmn-wrapper">
        <div
          className="bpmn-js-react-editor-container"
          ref={containerRef}
          style={{ height }}
        ></div>
        <div className="actions-wrapper">
          {zoomActions && (
            <ZoomActions
              zoomIn={zoomIn}
              zoomOut={zoomOut}
              zoomFit={zoomFit}
            ></ZoomActions>
          )}
        </div>
      </div>
    </>
  );
};

export default forwardRef(BpmnJsModeler);
