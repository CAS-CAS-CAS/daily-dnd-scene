//TOOFO read more about pure functions!

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var fs = require('fs');

if(process.argv.length > 3){
    target = process.argv[3]
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", bake ? prompt: load)
    xhr.responseType = 'json';
    xhr.open("GET", `https://www.dnd5eapi.co/api/${target}/`)
    xhr.send();
}

function load(){
    fs.readFile(`${target}.txt`, "utf-8", (err, data) =>{if(err){throw err }console.log(JSON.parse(data))})
}

function prompt(){
    let array = JSON.parse(this.responseText);
    //console.log(Sentencer.make("{{a_noun}} casts " + array.name));
    //console.log(JSON.parse(this.responseText))
    spells = []
    array.results.forEach(element => {
        spells.push(element.index)
    });
   fs.writeFile(`${target}.txt`, JSON.stringify(spells), err => {if(err)throw err});
}