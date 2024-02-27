# bpmn-js-react

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![All Contributors](https://img.shields.io/github/forks/majeeddl/bpmn-js-react.svg)
![Issue Open](https://img.shields.io/github/issues/majeeddl/bpmn-js-react.svg)
![Issue Close](https://img.shields.io/github/issues-closed/majeeddl/bpmn-js-react.svg)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

This project is developed for using Use [bpmn-js](https://github.com/bpmn-io/bpmn-js) to display BPMN 2.0 diagrams in a React application.


## Install

```bash
yarn add bpmn-js-react 

or

npm install --save bpmn-js-react
```

### Usage

```javascript
import { BpmnJsReact,useBpmnJsReact } from "bpmn-js-react";

const ComponentForBpmnViewer = (props) => {
  return <BpmnJsReact xml={xml} />;
};

const ComponentForBpmnModeler = (props) => {

  const bpmnReactJs = useBpmnJsReact();
 
  const saveXml = async () => {
    const result = await bpmnReactJs.saveXml()

    console.log(result?.xml)
  }

  return (
     <div>
         <BpmnJsReact  useBpmnJsReact={bpmnReactJs} mode="edit" xml={xml} />
         <button onClick={()=> saveXml()}>Save Xml</>
     </div>
  );
};
```

## Props

<table width="100%" style="width:100%;font-size:11px">
  <tr>
    <th width="24%">Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>mode</td>
    <td>'view' | 'edit'</td>
    <td></td>
  </tr>
   <tr>
    <td>xml</td>
    <td>string</td>
    <td>xml string of bpmn</td>
  </tr>
  <tr>
    <td>height</td>
    <td>number</td>
    <td>Default value is 300</td>
  </tr>
  <tr>
    <td>click</td>
    <td>function</td>
    <td>This function is called when you do click on bpmn elemnt</td>
  </tr>
  <tr>
    <td>dbclick</td>
    <td>function</td>
    <td>This function is called when you do dbclick on bpmn elemnt</td>
  </tr>
</table>


## Resources

- [Issues](https://github.com/majeeddl/bpmn-js-react/issues)

## License

MIT © [Majeed Dourandeesh](https://github.com/majeeddl)

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
