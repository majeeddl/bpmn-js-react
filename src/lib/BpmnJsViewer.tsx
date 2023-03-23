import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  ForwardRefRenderFunction,
} from "react";

//@ts-ignore
import BpmnViewer from "bpmn-js/dist/bpmn-navigated-viewer.production.min.js";
import ZoomActions from "../components/ZoomActions";
import {
  BpmnJsReactHandle,
  BpmnJsReactProps,
} from "../interfaces/bpmnJsReact.interface";

// export type BpmnViewerProps = {
//   xml: any;
//   height?: any;
//   zoomActions?: boolean;
//   onLoading?: Function;
//   onError?: Function;
//   onShown?: Function;
// };

const BpmnJsViewer: ForwardRefRenderFunction<
  BpmnJsReactHandle,
  BpmnJsReactProps
> = (
  {
    xml,
    height = 300,
    zoomActions = true,
    onLoading = () => {},
    onError = () => {},
    onShown = () => {},
    ...props
  },
  ref
) => {
  const containerRef = useRef(null);
  const [bpmnViewer, setBpmnViewer] = useState<BpmnViewer>();

  useEffect(() => {
    const container = containerRef.current;
    setBpmnViewer(new BpmnViewer({ container }));

    return () => bpmnViewer?.destroy();
  }, []);

  useEffect(() => {
    bpmnViewer?.importXML(xml);
    bpmnViewer?.get("canvas").zoom("fit-viewport");

    bpmnViewer?.on("import.done", (event: any) => {
      const { error, warning } = event;

      if (error) {
        return onError(error);
      }

      zoomFit()

      onShown(warning);
    });
  }, [bpmnViewer, xml]);

  const zoomIn = () => {
    bpmnViewer.get("zoomScroll").stepZoom(0.1);
  };

  const zoomOut = () => {
    bpmnViewer.get("zoomScroll").stepZoom(-0.1);
  };

  const zoomFit = () => {
    bpmnViewer.get("canvas").zoom("fit-viewport");
  };

  // useEffect(() => {
  //   bpmnViewer?.importXML(xml);
  // }, [xml, bpmnViewer]);

  return (
    <>
      <div className="bpmn-wrapper">
        <div
          className="bpmn-js-react-view-container"
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

export default forwardRef(BpmnJsViewer);
