// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios';

let cards = axios.get('https://lambda-times-api.herokuapp.com/articles');
cards.then( obj => {

    console.log(obj);
    let objData = obj.data.articles.javascript[0];
    createCard(objData);
})
.catch( err => {
    console.log(err);
});

function createCard(obj){
    console.log(obj);
    const container = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    container.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author')
    imgContainer.classList.add('img-container');

    container.appendChild(headline);
    container.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    container.appendChild(span);

    container.addEventListener('click', event => {
        console.log(`Clicked on ${event.target}`);
    });

    headline.innerText = `${obj.headline}`
    img.setAttribute('src', obj.authorPhoto);
    span.innerText = `By ${obj.authorName}`

    const mainContain = document.querySelector('.cards-container');
    mainContain.appendChild(container);
}