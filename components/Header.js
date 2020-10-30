// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const container = document.createElement('div')
    const date = document.createElement('span');
    const head = document.createElement('h1');
    const temp = document.createElement('span');

    container.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.innerText = "MARHC 28, 2020";
    head.innerText = "Lambda Times";
    temp.innerText = "98" + String.fromCharCode(176);

    container.appendChild(date);
    container.appendChild(head);
    container.appendChild(temp);
    let mainContain = document.querySelector('.header-container');
    mainContain.appendChild(container);
    return;
}

Header();