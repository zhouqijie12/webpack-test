import './css/index.css'
import './css/bule.scss'
import createElement from './createElement.js'
// import Hello from'./hello'
// import React from 'react'
// import {render} from 'react-dom'
document.getElementById('div1').appendChild(createElement());
// render(<Hello/>, document.getElementById('div1'))
// [1,2,3].map((n)=>{
//     console.log(n ** 3)
//     return n ** 5;
// })

import $ from 'jquery';

console.log('这是a.js');
console.log($('ul'));
$('ul li:last-child').css('background','green');