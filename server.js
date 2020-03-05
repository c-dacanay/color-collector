const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const content = fs.readFileSync('wikipedia_colors.json');
let colors = JSON.parse(content);
let randomColor = getRandomInt(colors.length);

//this is saying all the files in public are automatically served to a browser
//static file server
app.use(express.static('public'));
app.use(express.json());

//ENDPOINTS
app.get("/colors", (request, response) => {
    //shows all of the data
    console.log('colors requested!');
    response.json(colors);
});

app.get("/random", (request, response) => {
    console.log(setRandomName(), setRandomColor());
    // response.json()
})


// app.post("/colors")

// I know this should be client side but I don't know how to access the JSON from here?
// Any communication by server must be initiated by the client && on load the page requests the API 

// app.get("/", (request, response) => {
//     ranName = setRandomName();
//     ranCol = setRandomColor();
//     ranHex = JSON.stringify(setRandomColor);

//     const pgBackground = document.getElementById('color__div');
//     const colName = document.getElementById('color__name');
//     consst colHex = document.getElementById('color__hex');

//     colName.innerHTML = ranName;
//     console.log(ranName);

// });

app.listen(5500, () => {
    console.log("server listening at localhost 5500")
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function setRandomName() {
    let title = colors[randomColor].name;
    return title;
}
function setRandomColor() {
    let background = colors[randomColor].color;
    return background;
}