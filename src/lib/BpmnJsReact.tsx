import React, { forwardRef, useEffect, useRef, useState } from "react";
import BpmnJSModeler from "./BpmnJsModeler";
import BpmnJsViewer from "./BpmnJsViewer";

import "./index.scss";

import { defaultBpmnXml } from "../utils/bpmn.utils";
import { MantineProvider } from "@mantine/core"

export type BpmnJsReactProps = {
  mode?: 'view' | 'edit';
  xml?: any;
  height?: any;
  onLoading?: Function;
  onError?: Function;
  onShown?: Function;
  zoomActions?: boolean;
  save?: Function;
};

const BpmnJsReact = forwardRef<any, BpmnJsReactProps>(
  ({ mode = 'view', xml, ...props }, ref) => {
    return (
      <>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          {mode == 'edit' && (
            <BpmnJSModeler
              {...props}
              ref={ref}
              onClick={(e: any) => {
                console.log(e);
              }}
            ></BpmnJSModeler>
          )}

          {mode =='view' && (
            <BpmnJsViewer xml={xml} {...props} ref={ref}></BpmnJsViewer>
          )}
        </MantineProvider>
      </>
    );
  }
);

export default BpmnJsReact;
