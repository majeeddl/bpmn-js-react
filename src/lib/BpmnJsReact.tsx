import React, { forwardRef, ForwardRefRenderFunction, useEffect, useRef, useState } from "react";
import BpmnJSModeler from "./BpmnJsModeler";
import BpmnJsViewer from "./BpmnJsViewer";

import "@mantine/core/styles.css";
import "./index.scss";

import { defaultBpmnXml } from "../utils/bpmn.utils";
import { createTheme, MantineProvider } from "@mantine/core";
import { BpmnJsReactHandle, BpmnJsReactProps } from "../interfaces/bpmnJsReact.interface";

const BpmnJsReact: ForwardRefRenderFunction<BpmnJsReactHandle, BpmnJsReactProps> = (
  { mode = "view", xml, useBpmnJsReact, ...props },
  ref
) => {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <>
      <MantineProvider theme={theme}>
        {mode == "edit" && (
          <BpmnJSModeler {...props} xml={xml} ref={ref} useBpmnJsReact={useBpmnJsReact}></BpmnJSModeler>
        )}

        {mode == "view" && <BpmnJsViewer xml={xml} {...props} ref={ref} useBpmnJsReact={useBpmnJsReact}></BpmnJsViewer>}
      </MantineProvider>
    </>
  );
};

// export default forwardRef(BpmnJsReact);
export default forwardRef(BpmnJsReact);
