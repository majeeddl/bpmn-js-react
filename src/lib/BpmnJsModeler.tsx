import React, { Ref, useEffect, useRef, useState } from "react";

// import BpmnJSModeler from "bpmn-js/dist/bpmn-modeler.production.min.js";
import BpmnModeler from "bpmn-js/lib/Modeler";

import { defaultBpmnXml } from "../utils/bpmn.utils";

export type BpmnJsModelerProps = {
  xml?: string;
  height?: any;
};

const BpmnJsModeler = ({
  xml = defaultBpmnXml,
  height = 400,
  ...props
}: BpmnJsModelerProps) => {
  const containerRef = useRef(null);
  const [bpmnEditor, setBpmnEditor] = useState<BpmnModeler>(null);

  useEffect(() => {
    const container = containerRef.current;
    setBpmnEditor(new BpmnModeler({ container }));

    return () => bpmnEditor?.destroy();
  }, []);

  useEffect(() => {
    bpmnEditor?.importXML(xml);
    bpmnEditor?.get("canvas").zoom("fit-viewport");
  }, [bpmnEditor, xml]);

  // useEffect(() => {
  //   bpmnEditor?.importXML(xml);
  // }, [xml, bpmnEditor]);

  return (
    <div>
      BpmnJSModeler
      <div
        className="bpmn-js-react-editor-container"
        ref={containerRef}
        style={{ height }}
      ></div>
    </div>
  );
};

export default BpmnJsModeler;
