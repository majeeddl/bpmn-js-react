import React, { forwardRef, useEffect, useRef, useState } from "react";
import BpmnJSModeler from "./BpmnJsModeler";
import BpmnJsViewer from "./BpmnJsViewer";

import "../../node_modules/bpmn-js/dist/assets/diagram-js.css";
import "../../node_modules/bpmn-js/dist/assets/bpmn-js.css";
import "../../node_modules/bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";
import "./index.css";

import { defaultBpmnXml } from "../utils/bpmn.utils";
import { MantineProvider } from "@mantine/core";

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
  ({ mode = BpmnJsReactModeType.View, xml, ...props }: any, ref) => {
    return (
      <>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {mode == BpmnJsReactModeType.Edit && (
            <BpmnJSModeler {...props} ref={ref}></BpmnJSModeler>
          )}

          {mode == BpmnJsReactModeType.View && (
            <BpmnJsViewer xml={xml} {...props} ref={ref}></BpmnJsViewer>
          )}
        </MantineProvider>
      </>
    );
  }
);

export default BpmnJsReact;
