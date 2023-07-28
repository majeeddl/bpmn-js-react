import { useState } from "react";
//import BpmnJSModeler from "bpmn-js/dist/bpmn-modeler.production.min.js";
//@ts-ignore
import BpmnModeler, { BpmnModeler as IBpmnModeler } from "bpmn-js/lib/Modeler";

export const useBpmnJsReact = () => {
  const [xml, setXml] = useState<string>("");
  const [bpmnEditor, setBpmnEditor] = useState<ReturnType<typeof IBpmnModeler>>(
    new BpmnModeler()
  );

  //BASIC

  const loadXml = (xml: string) => {
    bpmnEditor?.importXML(xml, (err: any) => {
      // if (err) {
      //   console.error(err);
      // } else {
      //   setStyle();
      // }
    });
  };

  const saveXml = () => {
    console.log()
  };

  const saveXmLAsync = async (result: any, options = { format: false }) => {
    return await bpmnEditor?.saveXML(options, result);
  };

  //STYLING

  const setStyle = () => {
    const canvas = bpmnEditor?.get("canvas");
    canvas?.zoom("fit-viewport");
  };
  const addMarker = (id: string, cssClass: string) => {
    bpmnEditor.get("canvas").addMarker(id, cssClass);
  };

  const removeMarker = (id: string, cssClass: string) => {
    bpmnEditor?.get("canvas").removeMarker(id, cssClass);
  };

  const setColor = (elements: any, color: any) => {
    bpmnEditor.get("modeling").setColor(elements, color);
  };

  return {
    loadXml,
    saveXml,
    saveXmLAsync,
    setStyle,
  };
};
