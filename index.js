var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
var Sentencer = require('sentencer');
var fs = require('fs');
var spells; 
Sentencer.configure({
    nounList:['artificer', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger','rogue', 'sorcerer', 'warlock', 'wizard'],
    adjectiveList: ['strong', 'powerful', 'nimble', 'wise','charming', 'clever'],
    actions:{}    
});
presentVerbs = ['enters', 'journeys' , 'ventures', 'travels', 'parades']

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", prompt)
xhr.responseType = 'json';
xhr.open("GET", "https://www.dnd5eapi.co/api/spells/")
xhr.send();

/*
console.log(Sentencer.make(`{{adjective}} {{ noun }} ${presentVerbs[Math.floor(Math.random()* presentVerbs.length)]}`))
console.log(Sentencer.make("{{ noun }}"))
*/

function prompt(){
    let array = JSON.parse(this.responseText);
    //console.log(Sentencer.make("{{a_noun}} casts " + array.name));
    //console.log(JSON.parse(this.responseText))
    spells = []
    array.results.forEach(element => {
        spells.push(element.index)
    });
   //fs.writeFile("spells.txt", JSON.parse(spells));
}

