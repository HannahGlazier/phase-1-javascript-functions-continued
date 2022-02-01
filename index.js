// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(mondayActivity = 'go to the office') {
    return `This Monday, I will ${mondayActivity}.`
}

function wrapAdjective(string = "*") {
    return function inner (adjective = 'special') {
        return `You are ${string}${adjective}${string}!`
    } 
}

