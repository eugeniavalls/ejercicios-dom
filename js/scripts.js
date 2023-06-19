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

//  3 ejercicio
const liElement = document.querySelectorAll('li');

console.log(`Hay ${liElement.length} ${liElement[0].tagName}`);
