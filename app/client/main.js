import React from 'react';
import ReactDom from 'react-dom' // shortcut to ReactDom.render
import App from './container/app';
// before run npm install react react-dom --save (save to package.json))
// let React = require('react') ---> another way to import react into project(

ReactDom.render(
  <div>
    <App name="hello" number={10} />
  </div>,
  document.getElementById('app')
)
