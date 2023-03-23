// export type BpmnJsProps = {
//   xml?: string;
//   height?: any;
//   onLoading?: Function;
//   onError?: Function;
//   onShown?: Function;
//   saveXml?: Function;
//   onClick?: Function;
//   onDbclick?: Function;
//   zoomActions?: boolean;
// };

import { IElement } from "./bpmn.interface";

export type BpmnJsReactHandle = {
  saveXml: Function;
  saveXmlAsync: Function;
  getModeler : Function;
  getCanvas: Function;
  zoomIn: Function;
  zoomOut: Function;
  zoomFit: Function;
  setColor: (
    elements: IElement[],
    color: { stroke?: string; fill?: string } | object
  ) => void;
  addMarker : (id : string , cssClass : string) => void;
  removeMarker : (id : string , cssClass : string) => void;
};

export type BpmnJsReactProps = {
  mode?: "view" | "edit";
  xml?: any;
  height?: any;
  onLoading?: Function;
  onError?: Function;
  onShown?: Function;
  saveXml?: Function;
  click?: Function;
  dbclick?: Function;
  hover?: Function;
  out?: Function;
  mousedown?: Function;
  mouseup?: Function;
  zoomActions?: boolean;
};
