import React, { useRef, useState, useEffect } from "react";

import BpmnViewer from "bpmn-js/dist/bpmn-navigated-viewer.production.min.js";

import { defaultBpmnXml } from "../utils/bpmn.utils";

const BpmnJsViewer = ({ xml = defaultBpmnXml }) => {
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
