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

function playRound(choice) {

    cpu = computerPlay();
    p1 = choice;

    if(p1 == cpu) {
        const span = document.getElementById('results');
        span.textContent = `CPU played Rock! It's a Draw!`;

    } else if (p1 == 'Rock' && cpu == 'Scissor') {
        const span = document.getElementById('results');
        span.textContent = `CPU played Scissor! Victory!`;
        p1Score += 1;

    } else if (p1 == 'Rock' && cpu == 'Paper') {
        const span = document.getElementById('results');
        span.textContent = `CPU played Paper! Defeat!`;
        cpuScore += 1;

    } else if (p1 == 'Paper' && cpu == 'Rock') {
        const span = document.getElementById('results');
        span.textContent = `CPU played Rock! Victory!`;
        p1Score += 1;

    } else if (p1 == 'Paper' && cpu == 'Scissor') {
        const span = document.getElementById('results');
        span.textContent = `CPU played Scissor! Defeat!`;
        cpuScore += 1;

    } else if (p1 == 'Scissor' && cpu == 'Paper') {
        const span = document.getElementById('results');
        span.textContent = `CPU played Paper! Victory!`;
        p1Score += 1;

    } else if (p1 == 'Scissor' && cpu == 'Rock') {
        const span = document.getElementById('results');
        span.textContent = `CPU played Rock! Defeat!`;
        cpuScore += 1;
    }   
    console.log(`\nPlayer Score:${p1Score}\nCPU Score:${cpuScore}`)
}


let cpuScore = 0;
let p1Score = 0;

const iChooseRock = document.getElementById('rock');
iChooseRock.addEventListener('click', () => {playRound('Rock')});

const iChoosePaper = document.getElementById('paper');
iChoosePaper.addEventListener('click', () => {playRound('Paper')});

const iChooseScissor = document.getElementById('scissor');
iChooseScissor.addEventListener('click', () => {playRound('Scissor')});