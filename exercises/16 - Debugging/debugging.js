const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
]

people.forEach((person, index) => {
  console.log(person.name)
})

// Console Methods
console.info('This is some info')
console.error(`ERROR`)
console.warn(`I'd be more careful`)
console.table(people)
// console.count() counts the number of times something does something
const doABunchOfThings = () => {
  console.group('stuff')
  console.info('This is some info')
  console.error(`ERROR`)
  console.warn(`I'd be more careful`)
  console.table(people)
  console.groupEnd('stuff')
}

doABunchOfThings()

// Call Stack
/* 
think about the error being:
error was at line X
It was called by X
and then called by X
function was executed on line
*/
// Grabbing Elements
// You can use $ and pass an element as an argument to grab the first one of those element or $$ to grab them all

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doctorize(name) {
  return `Dr. ${name}`
}

function greet(name) {
  doesntExist()
  return `Hello ${name}`
}

function go() {
  const name = doctorize(greet('Wes'))
  console.log(name)
}

const button = document.querySelector('.bigger')
button.addEventListener('click', function(e) {
  const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1
  e.currentTarget.style.fontSize = `${newFontSize}px`
})

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  })
  const joke = await res.text()
  console.log(joke)
  return joke
}
