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
import { BpmnJsReact } from "bpmn-js-react";

const ComponentForBpmnViewer = (props) => {
  return <BpmnJsReact xml={xml} />;
};

const ComponentForBpmnModeler = (props) => {

  const ref = useRef();

  return (
     <div>
         <BpmnJsReact ref={ref} mode="edit" xml={xml} />
         <button onClick={()=>  ref.current.saveXml((err,xml) => console.log(xml))}>Save Xml</>
     </div>
  );
};
```

## Resources

- [Issues](https://github.com/majeeddl/bpmn-js-react/issues)

## License

MIT © [Majeed Dourandeesh](https://github.com/majeeddl)

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
