import "./index.scss";

import { useBpmnJsReact } from "../hooks/bpmn.hook";
import BpmnJsReact from "./BpmnJsReact";
import {
  BpmnJsReactHandle,
  BpmnJsReactProps,
} from "../interfaces/bpmnJsReact.interface";
// import BpmnJsModeler from "./BpmnJsModeler";

export type { BpmnJsReactProps, BpmnJsReactHandle };
export { useBpmnJsReact, BpmnJsReact };
