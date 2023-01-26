import React, { forwardRef, useEffect, useRef, useState } from "react";
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
  height?: any;
  onLoading?: Function;
  onError?: Function;
  onShown?: Function;
};

const BpmnJsReact = forwardRef(
  ({ mode = BpmnJsReactModeType.View, xml, ...props }:any, ref) => {
    return (
      <>
        {mode == BpmnJsReactModeType.Edit && (
          <BpmnJSModeler {...props} ref={ref}></BpmnJSModeler>
        )}

        {mode == BpmnJsReactModeType.View && (
          <BpmnJsViewer xml={xml} {...props} ref={ref}></BpmnJsViewer>
        )}
      </>
    );
  }
);

export default BpmnJsReact;
