import { useState } from "react";
//import BpmnJSModeler from "bpmn-js/dist/bpmn-modeler.production.min.js";
//@ts-ignore
import BpmnModeler, { BpmnModeler as IBpmnModeler } from "bpmn-js/lib/Modeler";
import {
  ImportXMLResult,
  ModdleElement,
  SaveXMLOptions,
  SaveXMLResult,
} from "bpmn-js/lib/BaseViewer";

export type BpmnJsReactHook = () => {
  bpmnModeler: ReturnType<typeof IBpmnModeler>;
  setBpmnModeler: React.Dispatch<
    React.SetStateAction<ReturnType<typeof IBpmnModeler>>
  >;
  importXml: (
    xml: string,
    bpmnDiagram?: ModdleElement | string
  ) => Promise<ImportXMLResult>;
  saveXml: (
    callback: (err: any, xml: string) => void,
    options?: SaveXMLOptions
  ) => void;
  saveXmLAsync: (options?: SaveXMLOptions) => Promise<SaveXMLResult>;
  getElementById: (id: string) => any;

  zoomIn: (step?: number) => void;
  zoomOut: (step?: number) => void;
  zoomFit: () => void;
  setStyle: () => void;

  setColor: (elements: any, color: any) => void;
  addMarker: (id: string, cssClass: string) => void;
  removeMarker: (id: string, cssClass: string) => void;

  getCanvas: () => any;
  getAttribute: (id: string, attr: string) => any;
  setAttribute: (id: string, attr: string, value: any) => void;
  getElements: () => any;
  getBusinessObject: (id: string) => any;
  getIncoming: (id: string) => any;
  getOutgoing: (id: string) => any;

};

export const useBpmnJsReact: BpmnJsReactHook = () => {
  const [xml, setXml] = useState<string>("");
  const [bpmnModeler, setBpmnModeler] =
    useState<ReturnType<typeof IBpmnModeler>>(null);

  //BASIC

  const getCanvas = () => bpmnModeler?.get("canvas");

  const importXml: (
    xml: string,
    bpmnDiagram?: ModdleElement | string
  ) => Promise<ImportXMLResult> = (xml: string) => {
    return bpmnModeler?.importXML(xml);
  };

  const saveXml = (
    callback: (err: any, xml: string) => void,
    options: SaveXMLOptions = {
      format: false,
    }
  ) => {
    // console.log(bpmnModeler);
    bpmnModeler?.saveXML(options, callback);
  };

  const saveXmLAsync: (
    options?: SaveXMLOptions
  ) => Promise<SaveXMLResult> = async (options = { format: false }) =>
    bpmnModeler?.saveXML(options);

  const getElements = () => {
    return bpmnModeler?.get("elementRegistry").getAll();
  };
  const getElementById = (id: string) => {
    return bpmnModeler?.get("elementRegistry").get(id);
  };
  //STYLING

  const zoomIn = (step = 0.1) => {
    bpmnModeler?.get("zoomScroll")?.zoom(step);
  };
  const zoomOut = (step = 0.1) => {
    bpmnModeler?.get("zoomScroll")?.zoom(-step);
  };
  const zoomFit = () => {
    bpmnModeler?.get("zoomScroll")?.zoom("fit-viewport");
  };
  const setStyle = () => {
    const canvas = bpmnModeler?.get("canvas");
    canvas?.zoom("fit-viewport");
  };
  const addMarker = (id: string, cssClass: string) => {
    bpmnModeler.get("canvas").addMarker(id, cssClass);
  };
  const removeMarker = (id: string, cssClass: string) => {
    bpmnModeler?.get("canvas").removeMarker(id, cssClass);
  };
  const setColor = (elements: any, color: any) => {
    bpmnModeler.get("modeling").setColor(elements, color);
  };

  //PROPERTIES
  const getElementRegistry = () => bpmnModeler?.get("elementRegistry");

  const getBusinessObject = (id: string) => {
    return getElementRegistry()?.get(id).businessObject;
  };

  const getAttribute = (id: string, key: string) => {
    return getBusinessObject(id)[key];
  };

  const setAttribute = (id: any, name: string, value: any) => {
    getBusinessObject(id)[name] = value;
  };

  const getIncoming = (id: string) => {
    return getBusinessObject(id).incoming;
  };

  const getOutgoing = (id: string) => {
    return getBusinessObject(id).outgoing;
  };

  return {
    bpmnModeler,
    setBpmnModeler,
    importXml,
    saveXml,
    saveXmLAsync,
    getCanvas,
    getElements,
    getElementById,
    zoomIn,
    zoomOut,
    zoomFit,
    setStyle,
    setColor,
    addMarker,
    removeMarker,
    getAttribute,
    setAttribute,
    getIncoming,
    getOutgoing,
  };
};
