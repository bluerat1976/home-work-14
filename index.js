
var x = prompt('Input x');
var n = prompt('Input n');
x = parseInt(x);
n = parseInt(n);

var result = Math.pow(x, n);
var div = document.createElement('div');
div.className = 'main-block';
div.innerHTML = 'Result of x = ' + x + ' in power of n = ' + n + ' equals ' + result+'.';
var parentElem = document.body;
parentElem.appendChild(div);

