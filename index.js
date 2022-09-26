var Sentencer = require('sentencer');
//var fs = require('fs');

Sentencer.configure({
    nounList:['artificer', 'barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger','rogue', 'sorcerer', 'warlock', 'wizard'],
    adjectiveList: ['strong', 'powerful', 'nimble', 'wise','charming', 'clever', 'speedy', 'witty', 'burly','elated', 'elegant', 'oblivious', 'awesome'],
    actions:{}    
});
presentVerbs = ['enters', 'journeys' , 'ventures', 'travels', 'parades', 'struts', 'traverses', 'descends']

// check sentence for noun afterwards
//split the function up to only call  ase 1 a or case 2 an (expected behavoir)
// solution 3?? then
for(let i = 0; i < 10; i++){
    console.log(Sentencer.make(`{{an_adjective}} {{ noun }} ${presentVerbs[Math.floor(Math.random()* presentVerbs.length)]}`))
}




