import { useState } from 'react'
import './App.css'
import { BpmnJsReact } from './lib'
import { BpmnJsReactModeType } from './lib/BpmnJsReact';

function App() {
  return (
    <div className="App">
      <BpmnJsReact mode={BpmnJsReactModeType.Edit}></BpmnJsReact>
      <br />
      <BpmnJsReact></BpmnJsReact>
    </div>
  );
}

export default App
