
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


export type BpmnJsReactHandle = {
  saveXml: Function;
  saveXmlAsync: Function;
  zoomIn: Function;
  zoomOut: Function;
};

export type BpmnJsReactProps = {
  mode?: "view" | "edit";
  xml?: any;
  height?: any;
  onLoading?: Function;
  onError?: Function;
  onShown?: Function;
  saveXml?: Function;
  onClick?: Function;
  onDbclick?: Function;
  zoomActions?: boolean;
};
