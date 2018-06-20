//Remove the king from the list.
//Fill the list based on the following list of objects.
//Only add the asteroids to the list.
//Each list item should have its category as a class and its content as text content.

let king = document.querySelector('li');
let list = document.querySelector('ul.asteroids');
list.removeChild(king);

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid) {
    let newLi = document.createElement('li');
    list.appendChild(newLi);
    newLi.textContent = planetData[i].content;
    newLi.setAttribute('class', planetData[i].category);
  }
}
