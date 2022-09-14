var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var Sentencer = require('sentencer');
var fs = require('fs');

var spells; 
let bake = false;
let target;
if(process.argv.length > 3){
    target = process.argv[3]
}
else{
    target = "races"
}

if(process.argv.length > 2){if(process.argv.includes("bake")){bake = true}} //this should be two seperate scripts; alas later! TODO
console.log(bake ? "bake" : "cake")
Sentencer.configure({
    nounList:['artificer', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger','rogue', 'sorcerer', 'warlock', 'wizard'],
    adjectiveList: ['strong', 'powerful', 'nimble', 'wise','charming', 'clever'],
    actions:{}    
});
presentVerbs = ['enters', 'journeys' , 'ventures', 'travels', 'parades']

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", bake ? prompt: load)
xhr.responseType = 'json';
xhr.open("GET", `https://www.dnd5eapi.co/api/${target}/`)
xhr.send();

/*
console.log(Sentencer.make(`{{adjective}} {{ noun }} ${presentVerbs[Math.floor(Math.random()* presentVerbs.length)]}`))
console.log(Sentencer.make("{{ noun }}"))
*/ 

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

