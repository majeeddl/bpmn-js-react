import React, { forwardRef, useEffect, useRef, useState } from "react";
import BpmnJSModeler from "./BpmnJsModeler";
import BpmnJsViewer from "./BpmnJsViewer";

import "./index.scss";

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
  zoomActions?: boolean;
};

const BpmnJsReact = forwardRef<HTMLElement, BpmnJsReactProps>(
  ({ mode = BpmnJsReactModeType.View, xml, ...props }, ref) => {
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
