function two(){
    let element = document.createElement('div');
    element.innerHTML = '我是第二个入口文件';
    return element
}
document.getElementById('div1').appendChild(two());

import $ from 'jquery';

console.log('这是b.js');
console.log($('ul li'));
$('ul li:last-child').css('background','green');
console.log(_([1,2,3]).map(v=>v*3));