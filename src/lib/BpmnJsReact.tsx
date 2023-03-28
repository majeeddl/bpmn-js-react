import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useRef,
  useState,
} from "react";
import BpmnJSModeler from "./BpmnJsModeler";
import BpmnJsViewer from "./BpmnJsViewer";

import "./index.scss";

import { defaultBpmnXml } from "../utils/bpmn.utils";
import { MantineProvider } from "@mantine/core";
import {
  BpmnJsReactHandle,
  BpmnJsReactProps,
} from "../interfaces/bpmnJsReact.interface";

const BpmnJsReact: ForwardRefRenderFunction<
  BpmnJsReactHandle,
  BpmnJsReactProps
> = ({ mode = "view", xml, ...props }, ref) => {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {mode == "edit" && (
          <BpmnJSModeler
            {...props}
            xml={xml}
            ref={ref}
          ></BpmnJSModeler>
        )}

        {mode == "view" && (
          <BpmnJsViewer xml={xml} {...props} ref={ref}></BpmnJsViewer>
        )}
      </MantineProvider>
    </>
  );
};

export default forwardRef(BpmnJsReact);
