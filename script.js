// declaring variables for the player names 

const firstPlayer = document.querySelector('.firstPlayer')
const secondPlayer = document.querySelector('.secondPlayer')

// declaring the players name

let firstPlayerName = prompt("what is the first player's name?")
let secondPlayerName = prompt("what is the second player's name?")
while (firstPlayerName === null) {
    firstPlayerName = prompt("1st field can't be empty!");
}
firstPlayer.textContent = firstPlayerName;
while (secondPlayerName === null) {
    secondPlayerName = prompt("2nd field can't be empty!");
}
secondPlayer.textContent = secondPlayerName;

let firstScore = document.querySelector('.firstScore')
let secondScore = document.querySelector('.secondScore')


// declaring variables for the boxes

const topLeft = document.querySelector('.topLeft');
const topCenter = document.querySelector('.topCenter');
const topRight = document.querySelector('.topRight');

const middleLeft = document.querySelector('.middleLeft');
const middleCenter = document.querySelector('.middleCenter');
const middleRight = document.querySelector('.middleRight');

const bottomLeft = document.querySelector('.bottomLeft');
const bottomCenter = document.querySelector('.bottomCenter');
const bottomRight = document.querySelector('.bottomRight');

// declaring variables to make X or O appear

const hidden1 = document.querySelector('.hidden1');
const hidden2 = document.querySelector('.hidden2');
const hidden3 = document.querySelector('.hidden3');
const hidden4 = document.querySelector('.hidden4');
const hidden5 = document.querySelector('.hidden5');
const hidden6 = document.querySelector('.hidden6');

const hidden7 = document.querySelector('.hidden7');
const hidden8 = document.querySelector('.hidden8');
const hidden9 = document.querySelector('.hidden9');
const hidden10 = document.querySelector('.hidden10');
const hidden11 = document.querySelector('.hidden11');
const hidden12 = document.querySelector('.hidden12');

const hidden13 = document.querySelector('.hidden13');
const hidden14 = document.querySelector('.hidden14');
const hidden15 = document.querySelector('.hidden15');
const hidden16 = document.querySelector('.hidden16');
const hidden17 = document.querySelector('.hidden17');
const hidden18 = document.querySelector('.hidden18');

const hidden19 = document.querySelector('.hidden19');
const hidden20 = document.querySelector('.hidden20');
const hidden21 = document.querySelector('.hidden21');
const hidden22 = document.querySelector('.hidden22');
const hidden23 = document.querySelector('.hidden23');
const hidden24 = document.querySelector('.hidden24');

const hidden25 = document.querySelector('.hidden25');
const hidden26 = document.querySelector('.hidden26');
const hidden27 = document.querySelector('.hidden27');

// declaring variables so that you can't double click on a box

let topLeftClicked = true;
let topCenterClicked = true;
let topRightClicked = true;
let middleLeftClicked = true;
let middleCenterClicked = true;
let middleRightClicked = true;
let bottomLeftClicked = true;
let bottomCenterClicked = true;
let bottomRightClicked = true;

// toggling between players

let currentPlayer = 0;

// declaring variables to know which player won

let xLetter1 = false;
let xLetter2 = false;
let xLetter3 = false;
let xLetter4 = false;
let xLetter5 = false;
let xLetter6 = false;
let xLetter7 = false;
let xLetter8 = false;
let xLetter9 = false;

let oLetter1 = false;
let oLetter2 = false;
let oLetter3 = false;
let oLetter4 = false;
let oLetter5 = false;
let oLetter6 = false;
let oLetter7 = false;
let oLetter8 = false;
let oLetter9 = false;

//Making the game work

topLeft.addEventListener('click', function () {

    if (topLeftClicked === true && currentPlayer % 2 === 0) {

        // X letter

        currentPlayer++;

        hidden1.classList.remove('hidden1');
        hidden2.classList.remove('hidden2');

        topLeftClicked = false;

        xLetter1 = true;

        xletterwon();

    } else if (topLeftClicked === true && currentPlayer % 2 !== 0) {

        // O letter

        currentPlayer++;

        hidden3.classList.remove('hidden3');

        topLeftClicked = false;

        oLetter1 = true;

        oletterwon();

    }
});

topCenter.addEventListener('click', function () {

    if (topCenterClicked === true && currentPlayer % 2 === 0) {

        // X letter

        currentPlayer++;

        hidden4.classList.remove('hidden4');
        hidden5.classList.remove('hidden5');

        topCenterClicked = false;

        xLetter2 = true;

        xletterwon();

    } else if (topCenterClicked === true && currentPlayer % 2 !== 0) {

        // O letter

        currentPlayer++;

        hidden6.classList.remove('hidden6');

        topCenterClicked = false;

        oLetter2 = true;

        oletterwon();

    }
});

topRight.addEventListener('click', function () {

    if (topRightClicked === true && currentPlayer % 2 === 0) {

        // X letter

        currentPlayer++;

        hidden7.classList.remove('hidden7');
        hidden8.classList.remove('hidden8');

        topRightClicked = false;

        xLetter3 = true;

        xletterwon();

    } else if (topRightClicked === true && currentPlayer % 2 !== 0) {

        // O letter

        currentPlayer++;

        hidden9.classList.remove('hidden9');

        topRightClicked = false;

        oLetter3 = true;

        oletterwon();

    }
});

middleLeft.addEventListener('click', function () {

    if (middleLeftClicked === true && currentPlayer % 2 === 0) {

        // X letter

        currentPlayer++;

        middleLeftClicked = false;

        hidden10.classList.remove('hidden10');
        hidden11.classList.remove('hidden11');

        middleLeftClicked = false;

        xLetter4 = true;

        xletterwon();

    } else if (middleLeftClicked === true && currentPlayer % 2 !== 0) {

        // O letter

        currentPlayer++;

        hidden12.classList.remove('hidden12');

        middleLeftClicked = false;

        oLetter4 = true;

        oletterwon();

    }
});

middleCenter.addEventListener('click', function () {

    if (middleCenterClicked === true && currentPlayer % 2 === 0) {

        // X letter

        currentPlayer++;

        hidden13.classList.remove('hidden13');
        hidden14.classList.remove('hidden14');

        middleCenterClicked = false;

        xLetter5 = true;

        xletterwon();

    } else if (middleCenterClicked === true && currentPlayer % 2 !== 0) {

        // O letter

        currentPlayer++;

        hidden15.classList.remove('hidden15');

        middleCenterClicked = false;

        oLetter5 = true;

        oletterwon();

    }
});

middleRight.addEventListener('click', function () {

    if (middleRightClicked === true && currentPlayer % 2 === 0) {

        // X letter

        currentPlayer++;

        hidden16.classList.remove('hidden16');
        hidden17.classList.remove('hidden17');

        middleRightClicked = false;

        xLetter6 = true;

        xletterwon();

    } else if (middleRightClicked === true && currentPlayer % 2 !== 0) {

        // O letter

        currentPlayer++;

        hidden18.classList.remove('hidden18');

        middleRightClicked = false;

        oLetter6 = true;

        oletterwon();

    }
});

bottomLeft.addEventListener('click', function () {

    if (bottomLeftClicked === true && currentPlayer % 2 === 0) {

        // X letter

        currentPlayer++;

        hidden19.classList.remove('hidden19');
        hidden20.classList.remove('hidden20');

        bottomLeftClicked = false;

        xLetter7 = true;

        xletterwon();

    } else if (bottomLeftClicked === true && currentPlayer % 2 !== 0) {

        // O letter

        currentPlayer++;

        hidden21.classList.remove('hidden21');

        bottomLeftClicked = false;

        oLetter7 = true;

        oletterwon();

    }
});

bottomCenter.addEventListener('click', function () {

    if (bottomCenterClicked === true && currentPlayer % 2 === 0) {

        // X letter

        currentPlayer++;

        hidden22.classList.remove('hidden22');
        hidden23.classList.remove('hidden23');

        bottomCenterClicked = false;

        xLetter8 = true;

        xletterwon();

    } else if (bottomCenterClicked === true && currentPlayer % 2 !== 0) {

        // O letter

        currentPlayer++;

        hidden24.classList.remove('hidden24');

        bottomCenterClicked = false;

        oLetter8 = true;

        oletterwon();

    }
});

bottomRight.addEventListener('click', function () {

    if (bottomRightClicked === true && currentPlayer % 2 === 0) {

        // X letter

        currentPlayer++;

        hidden25.classList.remove('hidden25');
        hidden26.classList.remove('hidden26');

        bottomRightClicked = false;

        xLetter9 = true;

        xletterwon();

    } else if (bottomRightClicked === true && currentPlayer % 2 !== 0) {

        // O letter

        currentPlayer++;

        hidden27.classList.remove('hidden27');

        bottomRightClicked = false;

        oLetter9 = true;

        oletterwon();

    }
});

//Making sure that the game would stop once a player has won

function xletterwon() {
    if (xLetter1 === true && xLetter2 === true && xLetter3 === true ||
        xLetter4 === true && xLetter5 === true && xLetter6 === true ||
        xLetter7 === true && xLetter8 === true && xLetter9 === true ||
        xLetter1 === true && xLetter4 === true && xLetter7 === true ||
        xLetter2 === true && xLetter5 === true && xLetter8 === true ||
        xLetter3 === true && xLetter6 === true && xLetter9 === true ||
        xLetter1 === true && xLetter5 === true && xLetter9 === true ||
        xLetter3 === true && xLetter5 === true && xLetter7 === true) {
        setTimeout(function () { firstScore.textContent++ }, 1300);
        topLeftClicked = false;
        topCenterClicked = false;
        topRightClicked = false;
        middleLeftClicked = false;
        middleCenterClicked = false;
        middleRightClicked = false;
        bottomLeftClicked = false;
        bottomCenterClicked = false;
        bottomRightClicked = false;
    }
}

function oletterwon() {
    if (oLetter1 === true && oLetter2 === true && oLetter3 === true ||
        oLetter4 === true && oLetter5 === true && oLetter6 === true ||
        oLetter7 === true && oLetter8 === true && oLetter9 === true ||
        oLetter1 === true && oLetter4 === true && oLetter7 === true ||
        oLetter2 === true && oLetter5 === true && oLetter8 === true ||
        oLetter3 === true && oLetter6 === true && oLetter9 === true ||
        oLetter1 === true && oLetter5 === true && oLetter9 === true ||
        oLetter3 === true && oLetter5 === true && oLetter7 === true) {
        setTimeout(function () { secondScore.textContent++ }, 1300);
        topLeftClicked = false;
        topCenterClicked = false;
        topRightClicked = false;
        middleLeftClicked = false;
        middleCenterClicked = false;
        middleRightClicked = false;
        bottomLeftClicked = false;
        bottomCenterClicked = false;
        bottomRightClicked = false;
    }
}

//buttons that declares a new game

const newGame = document.querySelector('.new');

newGame.addEventListener('click', function () {
    hidden1.classList.add('hidden1');
    hidden2.classList.add('hidden2');
    hidden3.classList.add('hidden3');
    hidden4.classList.add('hidden4');
    hidden5.classList.add('hidden5');
    hidden6.classList.add('hidden6');
    hidden7.classList.add('hidden7');
    hidden8.classList.add('hidden8');
    hidden9.classList.add('hidden9');
    hidden10.classList.add('hidden10');
    hidden11.classList.add('hidden11');
    hidden12.classList.add('hidden12');
    hidden13.classList.add('hidden13');
    hidden14.classList.add('hidden14');
    hidden15.classList.add('hidden15');
    hidden16.classList.add('hidden16');
    hidden17.classList.add('hidden17');
    hidden18.classList.add('hidden18');
    hidden19.classList.add('hidden19');
    hidden20.classList.add('hidden20');
    hidden21.classList.add('hidden21');
    hidden22.classList.add('hidden22');
    hidden23.classList.add('hidden23');
    hidden24.classList.add('hidden24');
    hidden25.classList.add('hidden25');
    hidden26.classList.add('hidden26');
    hidden27.classList.add('hidden27');

    topLeftClicked = true;
    topCenterClicked = true;
    topRightClicked = true;
    middleLeftClicked = true;
    middleCenterClicked = true;
    middleRightClicked = true;
    bottomLeftClicked = true;
    bottomCenterClicked = true;
    bottomRightClicked = true;

    xLetter1 = false;
    xLetter2 = false;
    xLetter3 = false;
    xLetter4 = false;
    xLetter5 = false;
    xLetter6 = false;
    xLetter7 = false;
    xLetter8 = false;
    xLetter9 = false;

    oLetter1 = false;
    oLetter2 = false;
    oLetter3 = false;
    oLetter4 = false;
    oLetter5 = false;
    oLetter6 = false;
    oLetter7 = false;
    oLetter8 = false;
    oLetter9 = false;

    currentPlayer = 0;
})

