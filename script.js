// function for computer play, here it will randomly select rock, scissor or paper.

function computerPlay() {
    CPUChoice = Math.floor(Math.random()*3 + 1);
    CPUResult = null;
    switch(CPUChoice) {
        case 1:
            CPUResult = 'Rock';
            break;
        case 2:
            CPUResult = 'Paper';
            break;
        case 3:
            CPUResult = 'Scissor';
            break;
        default:
            console.log(`Damn, how did you do that?`)
    } return CPUResult;
}

// funciton for human play, here player sill select rock, scissor or paper.
function humanPlay() {
    humanChoice = prompt(`Choose "Rock", "Paper" or "Scissor"`);
    humanChoice = humanChoice.toUpperCase();
    humanResult = null;
    switch(humanChoice) {
        case 'ROCK':
            humanResult = 'Rock';
            break;
        case 'PAPER':
            humanResult = 'Paper';
            break;
        case 'SCISSOR':
            humanResult = 'Scissor';
            break;
        default:
            humanPlay();
    } return humanResult;
}

function gameRound() {

    cpuScore = 0;
    p1Score = 0;

    while((cpuScore < 2) && (p1Score < 2)) {
        
        cpu = computerPlay();
        p1 = humanPlay();

        if(p1 == cpu) {
            console.log('Draw!');

        } else if (p1 == 'Rock' && cpu == 'Scissor') {
            console.log('Rock beats Scissor! Player wins');
            p1Score += 1;

        } else if (p1 == 'Rock' && cpu == 'Paper') {
            console.log('Paper beats Rock! Cpu wins');
            cpuScore += 1;

        } else if (p1 == 'Paper' && cpu == 'Rock') {
            console.log('Paper beats Rock! Player wins');
            p1Score += 1;

        } else if (p1 == 'Paper' && cpu == 'Scissor') {
            console.log('Scissor beats Paper! Cpu wins');
            cpuScore += 1;

        } else if (p1 == 'Scissor' && cpu == 'Paper') {
            console.log('Scissor beats Paper! Player wins');
            p1Score += 1;

        } else if (p1 == 'Scissor' && cpu == 'Rock') {
            console.log('Rock beats Scissor! Cpu wins');
            cpuScore += 1;
        }   

        console.log(`Playing to 2\n Player: ${p1Score}\n Cpu: ${cpuScore}`)
    }
}