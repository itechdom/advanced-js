import React from 'react';
import ReactDom from 'react-dom' // shortcut to ReactDom.render
// before run npm install react react-dom --save (save to package.json))
// let React = require('react') ---> another way to import react into project(

let App = () =>(
  <div>hello</div>
)
ReactDom.render(
  <App />,
  document.body
)
