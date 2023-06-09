const head = document.querySelector("#container")
const p = document.createElement('p');

p.textContent = 'I am red';
p.style.color = "red";

head.appendChild(p);

const h3 = document.createElement('h3');

h3.textContent = 'I’m a blue h3!'
h3.style.color = "blue";

head.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = 'border : black ; background-color : pink';

head.appendChild(div);

const h1 = document.createElement('h1');
h1.textContent = "I’m in a div";

div.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = "I’m also";

div.appendChild(p2);