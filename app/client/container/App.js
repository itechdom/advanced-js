import React from 'react';
import Header from '../components/header.js';
require('./app.scss');

module.exports = ({ name,number }) => (
  <div>
    <h1>title</h1>
    <header></header>
  </div>
);
function nameUpperCase(name){
  return name.toUpperCase();
}
