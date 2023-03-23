import { BpmnElementType } from "../enums/bpmn.enum";

export type IElement = {
  id: string;
  type: BpmnElementType | string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  businessObject: any;
  incoming?: any;
  outgoing?: any;
  labels?: any;
};
