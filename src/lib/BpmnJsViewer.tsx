import React, { useRef, useState, useEffect } from "react";

import BpmnViewer from "bpmn-js/dist/bpmn-navigated-viewer.production.min.js";

export type BpmnViewerProps = {
  xml: any;
  onLoading?: Function;
  onError?: Function;
  onShown?: Function;
};

const BpmnJsViewer = ({
  xml,
  onLoading = () => {},
  onError = () => {},
  onShown = () => {},
  ...props
}: BpmnViewerProps) => {
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

      bpmnViewer.get("canvas").zoom("fit-viewport");

      onShown(warning);
    });
  }, [bpmnViewer, xml]);

  // useEffect(() => {
  //   bpmnViewer?.importXML(xml);
  // }, [xml, bpmnViewer]);

  return (
    <>
      <div className="bpmn-js-react-view-container" ref={containerRef}></div>
    </>
  );
};

export default BpmnJsViewer;
