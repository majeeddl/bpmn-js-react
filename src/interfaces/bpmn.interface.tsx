// import { BpmnElementType } from '../enums/bpmn.enum';

export type BpmnElementType =
  | "bpmn:Group"
  | "bpmn:Process"
  | "bpmn:SubProcess"
  | "bpmn:StartEvent"
  | "bpmn:EndEvent"
  | "bpmn:UserTask"
  | "bpmn:ServiceTask"
  | "bpmn:ScriptTask"
  | "bpmn:SendTask"
  | "bpmn:ReceiveTask"
  | "bpmn:ManualTask"
  | "bpmn:BusinessRuleTask"
  | "bpmn:ExclusiveGateway"
  | "bpmn:ParallelGateway"
  | "bpmn:InclusiveGateway"
  | "bpmn:ComplexGateway"
  | "bpmn:EventBasedGateway"
  | "bpmn:SequenceFlow"
  | "bpmn:MessageFlow"
  | "bpmn:Association"
  | "bpmn:DataAssociation"
  | "bpmn:DataInputAssociation"
  | "bpmn:DataOutputAssociation"
  | "bpmn:DataStoreReference"
  | "bpmn:DataObjectReference"
  | "bpmn:DataInput"
  | "bpmn:DataOutput"
  | "bpmn:DataState"
  | "bpmn:DataObject"
  | "bpmn:DataStore"
  | "bpmn:Message"
  | "bpmn:MessageFlowAssociation"
  | "bpmn:ConversationLink"
  | "bpmn:Conversation"
  | "bpmn:ConversationAssociation"
  | "bpmn:ConversationNode"
  | "bpmn:ConversationParticipant";

export interface IBpmnElement {
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
}
