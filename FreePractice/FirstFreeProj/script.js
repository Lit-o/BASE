"use strict"

fetch('db.json')
    .then(response => response.json())
    .then(data => console.log(data))