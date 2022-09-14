var Sentencer = require('sentencer');
//var fs = require('fs');

Sentencer.configure({
    nounList:['artificer', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger','rogue', 'sorcerer', 'warlock', 'wizard'],
    adjectiveList: ['strong', 'powerful', 'nimble', 'wise','charming', 'clever'],
    actions:{}    
});
presentVerbs = ['enters', 'journeys' , 'ventures', 'travels', 'parades']

console.log(Sentencer.make(`{{adjective}} {{ noun }} ${presentVerbs[Math.floor(Math.random()* presentVerbs.length)]}`))
console.log(Sentencer.make("{{ noun }}"))




