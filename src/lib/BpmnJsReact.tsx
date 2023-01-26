import React, { useEffect, useRef, useState } from "react";
import BpmnJSModeler from "./BpmnJsModeler";
import BpmnJsViewer from "./BpmnJsViewer";

import { defaultBpmnXml } from "../utils/bpmn.utils";

export enum BpmnJsReactModeType {
  Edit = "edit",
  View = "view",
}

export type BpmnJsReactProps = {
  mode?: BpmnJsReactModeType;
  xml?: any;
};

const BpmnJsReact = ({
  mode = BpmnJsReactModeType.View,
  xml,
  ...props
}: BpmnJsReactProps) => {
  return (
    <>
      {mode == BpmnJsReactModeType.Edit && (
        <BpmnJSModeler {...props}></BpmnJSModeler>
      )}

      {mode == BpmnJsReactModeType.View && (
        <BpmnJsViewer xml={xml} {...props}></BpmnJsViewer>
      )}
    </>
  );
};

export default BpmnJsReact;
