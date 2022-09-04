"use strict";(self.webpackChunkreact_number_format=self.webpackChunkreact_number_format||[]).push([[870],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,f=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=["components"],i={sidebar_position:4,title:"Props"},s="Common Props",m={unversionedId:"props",id:"props",title:"Props",description:"customInput React.Component",source:"@site/docs/props.md",sourceDirName:".",slug:"/props",permalink:"/react-number-format/docs/props",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/props.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Props"},sidebar:"tutorialSidebar",previous:{title:"Pattern Format",permalink:"/react-number-format/docs/pattern_format"},next:{title:"Customization",permalink:"/react-number-format/docs/customization"}},p={},u=[{value:"customInput <code>React.Component&lt;any&gt;</code>",id:"custominput-reactcomponentany",level:3},{value:"defaultValue <code>number | string</code>",id:"defaultvalue-number--string",level:3},{value:"displayType <code>text | input</code>",id:"displaytype-text--input",level:3},{value:"getInputRef <code>elm =&gt; void</code>",id:"getinputref-elm--void",level:3},{value:"isAllowed <code>(values) =&gt; boolean</code>",id:"isallowed-values--boolean",level:3},{value:"valueIsNumericString <code>boolean</code>",id:"valueisnumericstring-boolean",level:3},{value:"onValueChange <code>(values, sourceInfo) =&gt; {}</code>",id:"onvaluechange-values-sourceinfo--",level:3},{value:"prefix <code>string</code>",id:"prefix-string",level:3},{value:"renderText <code>(formattedValue, customProps) =&gt; React Element</code>",id:"rendertext-formattedvalue-customprops--react-element",level:3},{value:"type <code>string</code>",id:"type-string",level:3},{value:"value <code>number | string</code>",id:"value-number--string",level:3},{value:"Other Props",id:"other-props",level:3}],d={toc:u};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"common-props"},"Common Props"),(0,o.kt)("h3",{id:"custominput-reactcomponentany"},"customInput ",(0,o.kt)("inlineCode",{parentName:"h3"},"React.Component<any>")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")),(0,o.kt)("p",null,"This allow supporting custom input components with number format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\nimport { TextField } from '@mui/material';\n\n<NumericFormat value={12323} customInput={TextField} />;\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/custominput-demo-u3wg9m?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"customInput-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"defaultvalue-number--string"},"defaultValue ",(0,o.kt)("inlineCode",{parentName:"h3"},"number | string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default")," : ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"Value to be used as default value if value is not provided."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat defaultValue=\"12312\" />;\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/defaultvalue-demo-1qc7fk?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"defaultValue-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"displaytype-text--input"},"displayType ",(0,o.kt)("inlineCode",{parentName:"h3"},"text | input")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"input")),(0,o.kt)("p",null,"If value is ",(0,o.kt)("inlineCode",{parentName:"p"},"input"),", it renders an input element where formatting happens as you type characters. If value is ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),", it renders formatted text in a span tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat displayType="input" value={110} />;\n<NumericFormat displayType="text" value="110" />;\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/displaytype-demo-hgcvs9?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"displayType-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"getinputref-elm--void"},"getInputRef ",(0,o.kt)("inlineCode",{parentName:"h3"},"elm => void")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Deprecated")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is deprecated in favour of passing ref directly instead of using getInputRef."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"null")),(0,o.kt)("p",null,"Method to get reference of input, span (based on displayType prop) or the customInput's reference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\nimport { useRef } from 'react';\n\nexport default function App() {\n  let ref = useRef();\n  return (\n    <NumericFormat\n      getInputRef={(inputRef) => {\n        ref = inputRef;\n        console.log(ref);\n      }}\n    />\n  );\n}\n")),(0,o.kt)("h3",{id:"isallowed-values--boolean"},"isAllowed ",(0,o.kt)("inlineCode",{parentName:"h3"},"(values) => boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"A checker function to validate the input value. If this function returns false, the onChange method will not get triggered and the input value will not change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\nconst MAX_LIMIT = 1000;\n\n<NumericFormat\n  value={11}\n  isAllowed={(values, sourceInfo) => {\n    const { value } = values;\n    return value < MAX_LIMIT;\n  }}\n/>;\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/isallowed-demo-3hrw7z?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"isAllowed-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"valueisnumericstring-boolean"},"valueIsNumericString ",(0,o.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": false"),(0,o.kt)("p",null,"If value is passed as string representation of numbers (unformatted) then this should be passed as ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat\n  value={val}\n  type="text"\n  value="123456789"\n  decimalSeparator=","\n  displayType="input"\n  type="text"\n/>;\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/valueIsNumericString-demo-gjdqgr?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"valueIsNumericString-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"onvaluechange-values-sourceinfo--"},"onValueChange ",(0,o.kt)("inlineCode",{parentName:"h3"},"(values, sourceInfo) => {}")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": undefined"),(0,o.kt)("p",null,"A handler which recieves any changes on the value, triggered from user input or prop change. It recieves ",(0,o.kt)("a",{parentName:"p",href:"#valueObject"},"valueObject")," as first param, and ",(0,o.kt)("a",{parentName:"p",href:"#sourceInfo"},"sourceInfo")," as second param."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat\n  value={123441234123}\n  prefix=\"$\"\n  onValueChange={(values, sourceInfo) => {\n    console.log(values, sourceInfo);\n  }}\n/>;\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/onvaluechange-demo-c5nl2f?fontsize=14&hidenavigation=1&theme=dark&view=editor",className:"csb",title:"onvaluechange-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"prefix-string"},"prefix ",(0,o.kt)("inlineCode",{parentName:"h3"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),":",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"Adds the prefix character before the input value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={123441234123} prefix={'$'} />;\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/prefix-demo-6ibo72?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"prefix-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"rendertext-formattedvalue-customprops--react-element"},"renderText ",(0,o.kt)("inlineCode",{parentName:"h3"},"(formattedValue, customProps) => React Element")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"A renderText method useful if you want to render formattedValue in different element other than span. It also returns the custom props that are added to the component which can allow passing down props to the rendered element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { NumericFormat } from \'react-number-format\';\n\n<NumericFormat\n  value={1231231}\n  thousandsGroupStyle="lakh"\n  thousandSeparator=","\n  displayType="text"\n  renderText={(value) => <b>{value}</b>}\n/>;\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/rendertext-demo-lg3dml?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"renderText-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"type-string"},"type ",(0,o.kt)("inlineCode",{parentName:"h3"},"string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"text")),(0,o.kt)("p",null,"This allows passing the input type attribute value, Supported types include ",(0,o.kt)("inlineCode",{parentName:"p"},"text")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"tel")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"password")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={123441234123} type=\"text\" />;\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/type-demo-4qwwjk?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"type-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"value-number--string"},"value ",(0,o.kt)("inlineCode",{parentName:"h3"},"number | string")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"default"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")),(0,o.kt)("p",null,"This is the value for the input field. It can be a float number or a formatted string."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the value passed is a string representation of the number, the ",(0,o.kt)("a",{parentName:"p",href:"#valueIsNumericString"},(0,o.kt)("inlineCode",{parentName:"a"},"valueIsNumericString"))," props should be passed as ",(0,o.kt)("inlineCode",{parentName:"p"},"true")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { NumericFormat } from 'react-number-format';\n\n<NumericFormat value={123441234123} />;\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Demo"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/value-demo-ziuzcp?fontsize=14&hidenavigation=1&theme=dark&view=preview",className:"csb",title:"value-demo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})),(0,o.kt)("h3",{id:"other-props"},"Other Props"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/numeric_format"},"Numeric Format Props")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pattern_format"},"Pattern Format Props"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other than this it accepts all the props which can be given to a input or span based on displayType you selected.")))}c.isMDXComponent=!0}}]);