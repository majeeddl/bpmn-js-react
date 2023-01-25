import React, { useEffect, useRef, useState } from "react";
import BpmnJSModeler from "./BpmnJsModeler";
import BpmnJsViewer from "./BpmnJsViewer";

// import BpmnJSViewer from "bpmn-js/dist/bpmn-navigated-viewer.production.min.js";
// // import BpmnJSModeler from "bpmn-js/dist/bpmn-modeler.production.min.js";
// import BpmnJSModeler from "bpmn-js/lib/Modeler";

const BpmnJsReact = ({ mode = "view" }) => {
  return (
    <div>
      BpmnJsReact :
      <BpmnJSModeler></BpmnJSModeler>
      <br></br>
      <BpmnJsViewer></BpmnJsViewer>
    </div>
  );
};

export default BpmnJsReact;
