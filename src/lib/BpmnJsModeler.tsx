import React, {
  forwardRef,
  Ref,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

// import BpmnJSModeler from "bpmn-js/dist/bpmn-modeler.production.min.js";
import BpmnModeler from "bpmn-js/lib/Modeler";

import { defaultBpmnXml } from "../utils/bpmn.utils";
import ZoomActions from "../components/ZoomActions";

export type BpmnJsModelerProps = {
  xml?: string;
  height?: any;
  onLoading?: Function;
  onError?: Function;
  onShown?: Function;
  saveXml?: Function;
  zoomActions?: boolean;
};

const BpmnJsModeler = forwardRef(
  (
    {
      xml = defaultBpmnXml,
      height = 400,
      zoomActions = true,
      onLoading = () => {},
      onError = () => {},
      onShown = () => {},
      ...props
    }: BpmnJsModelerProps,
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

      bpmnEditor?.on("import.done", (event) => {
        const { error, warning } = event;

        if (error) {
          return onError(error);
        }

        bpmnEditor.get("canvas").zoom("fit-viewport");

        onShown(warning);
      });
    }, [bpmnEditor, xml]);

    useImperativeHandle(
      ref,
      () => ({
        saveXml(result: any, options = { format: false }) {
          bpmnEditor.saveXML(options, result);
        },
        async saveXmlAsync(result: any, options = { format: false }) {
          return await bpmnEditor.saveXML(options, result);
        },
        zoomIn(step = 0.1) {
          bpmnEditor.get("zoomScroll").stepZoom(step);
        },
        zoomOut(step = 0.1) {
          bpmnEditor.get("zoomScroll").stepZoom(-step);
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
              <ZoomActions zoomIn={zoomIn} zoomOut={zoomOut}></ZoomActions>
            )}
          </div>
        </div>
      </>
    );
  }
);

export default BpmnJsModeler;
