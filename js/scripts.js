// Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....

const subtitleElement = document.getElementById('start-point');

console.dir(subtitleElement);
console.dir(
  `Soy un ${subtitleElement.tagName} con el id ${subtitleElement.id} y la clase ${subtitleElement.className}. Mi padre es un ${subtitleElement.parentElement.tagName} con el id ${subtitleElement.parentElement.id} y la clase ${subtitleElement.parentElement.className} .Mi hermano es un ${subtitleElement.previousElementSibling.tagName} con el id ${subtitleElement.previousElementSibling.id} y la clase ${subtitleElement.previousElementSibling.className} .Mi otro hermano es ${subtitleElement.previousElementSibling.previousElementSibling.tagName} con el id ${subtitleElement.previousElementSibling.previousElementSibling.id} y la clase ${subtitleElement.previousElementSibling.previousElementSibling.className}. `
);

// Partiendo de esta lista, invierte el contenido de los li, deberás tener este
// resultado sin modificar a mano el HTML. Importante, no hay que mover el
// <li>sólo cambiar el contenido.</li>

const firstList = document.getElementById('first-list');
const secondList = document.getElementById('second-list');

let auxText = firstList.children[0].textContent;
firstList.children[0].textContent = secondList.children[0].textContent;
secondList.children[0].textContent = auxText;

auxText = firstList.children[1].textContent;
firstList.children[1].textContent = secondList.children[1].textContent;
secondList.children[1].textContent = auxText;

auxText = firstList.children[2].textContent;
firstList.children[2].textContent = secondList.children[2].textContent;
secondList.children[2].textContent = auxText;

// Usando este HTML muestra por consola el número de etiquetas que hay de cada cosa.
//   - Hay 1 Header
//   - Hay 1 h1
//   - Hay 2 nav
//     ......

const bodyElement = document.querySelectorAll('body');
const headerElement = document.querySelectorAll('header');
const h1Element = document.querySelectorAll('h1');
const h2Element = document.querySelectorAll('h2');
const h3Element = document.querySelectorAll('h3');
const navElement = document.querySelectorAll('nav');
const ulElement = document.querySelectorAll('ul');
const liElement = document.querySelectorAll('li');
const sectionElement = document.querySelectorAll('section');
const articleElement = document.querySelectorAll('article');
const pElement = document.querySelectorAll('p');
const aElement = document.querySelectorAll('a');
const imgElement = document.querySelectorAll('img');
const spanElement = document.querySelectorAll('span');
const footerElement = document.querySelectorAll('footer');

console.log(`Hay ${bodyElement.length} ${bodyElement[0].tagName}`);
console.log(`Hay ${headerElement.length} ${headerElement[0].tagName}`);
console.log(`Hay ${h1Element.length} ${h1Element[0].tagName}`);
console.log(`Hay ${h2Element.length} ${h2Element[0].tagName}`);
console.log(`Hay ${h3Element.length} ${h3Element[0].tagName}`);
console.log(`Hay ${navElement.length} ${navElement[0].tagName}`);
console.log(`Hay ${ulElement.length} ${ulElement[0].tagName}`);
console.log(`Hay ${liElement.length} ${liElement[0].tagName}`);
console.log(`Hay ${sectionElement.length} ${sectionElement[0].tagName}`);
console.log(`Hay ${articleElement.length} ${articleElement[0].tagName}`);
console.log(`Hay ${pElement.length} ${pElement[0].tagName}`);
console.log(`Hay ${aElement.length} ${aElement[0].tagName}`);
console.log(`Hay ${imgElement.length} ${imgElement[0].tagName}`);
console.log(`Hay ${spanElement.length} ${spanElement[0].tagName}`);
console.log(`Hay ${footerElement.length} ${footerElement[0].tagName}`);
