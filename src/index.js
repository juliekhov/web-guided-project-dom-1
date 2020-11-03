// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header')
const logoTitle = document.getElementById('logoTitle')
const firstCard = document.querySelector('div.card:nth-of-type(1)')
    // B- finding within one particular element
const imageFirstCard = document.querySelector('.card-img-top')
const titleFirstCard = document.querySelector('h2.card-title')
const subtitleFirstCard = document.querySelector('h3.card-subtitle')
const textFirstCard = document.querySelector('p.card-text')
    // C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling
console.log(link2FirstCard)


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
// puts into node list
const navAs = document.querySelectorAll('nav a')
    // B- Loop over the links and console.log their text content
navAs.forEach(item => console.log(item.textContent))
    // C- Turn the collection of links into a real array
    // use Array.from to convert node list
const aArr = Array.from(navAs)
    // D- Use .filter to find the anchor tag with the textContent of "Home"
const homeA = aArr.filter(item => item.textContent === "Home")


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "Lambda Dog"
imageFirstCard.src = "https://images.unsplash.com/photo-1578830122871-774ab1aedf2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
titleFirstCard.textContent = "Puppies for Sale"
subtitleFirstCard.textContent = "puppies need help"
textFirstCard.textContent = "Doggo ipsum smol. Length boy most angery pupper I have ever seen doggo wrinkler I am bekom fat, super chub smol. Extremely cuuuuuute long doggo very jealous pupper very good spot stop it fren, clouds waggy wags doing me a frighten. I am bekom fat heckin clouds what a nice floof maximum borkdrive, such treat tungg fat boi."
link1FirstCard.textContent = "More Dogs"
link2FirstCard.textContent = "Doggo Ipsum"
    //  B- Have the students research online the difference between textContent and innerText
    /*

    textContent
    ans: returns the text inside the node (removes html tags, prints only text inside that container)

    innerText
    ans: property of the HTMLElement interface represents the "rendered" text content of a node
    and its descendants. As a getter, it approximates the text the user would get if they highlighted
    the contents of the element with the cursor and then copied it to the clipboard
    innerText is aware of things like <br> elements, and ignores hidden elements.
    */


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.style.color = 'purple'
link2FirstCard.style.color = 'purple'
    //  B- Using .setAttribute to change a few attributes
titleFirstCard.setAttribute('style', 'color:#b76618;')
document.querySelector('body').setAttribute('style', 'background-color:#2A1D14;')
header.setAttribute('style', 'background-color:#181417')
logoTitle.setAttribute('style', 'color:white;')
    // const lambdaLogo = document.getElementById('lambdaLogo').src = 

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
textFirstCard.classList.add('doggobox')
    //  B- By manipulating inline styles on the element
link1FirstCard.target = "_blank"

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
// need parent selector
// not related to nav a querySelector made earlier from q2
// store parent mainNav in p1
p1 = document.getElementById('mainNav')
const newA = document.createElement('a')
newA.textContent = 'Blog'
newA.href = 'https://blog.juliekhov.com'
p1.appendChild(newA)
    // const newContent = document.createTextNode('Blog')
    // link https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
// copy
// append

// Copy the div element and its child element
var cardCln = document.querySelector('div.card').cloneNode(true);
// Append the cloned card element to parent div
// https://cln.sh/el2m0s
document.querySelector("div.card-group").appendChild(cardCln);

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
// remove an existing element
// add existing element back
// use removeElement() or remove() method
// https://cln.sh/HWFVJP

const lLogo = document.getElementById("lambdaLogo")
lLogo.remove()

const imgCreate = document.createElement('img')
imgCreate.src = "https://d1vki863cvir6c.cloudfront.net/uploads/topic/image/635/lambdaschool.png"

const pLogo = document.querySelector('div.logo-container')
pLogo.prepend(imgCreate)

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
// insertAdjacentHTML

cardCln.insertAdjacentHTML('afterend', '<img src="https://assets.codepen.io/3163723/CleanShot+2020-10-31+at+03.10.41%402x.png" width="60%" height="50%" alt="dogLogo">')
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    // beforebegin