const userLog = document.getElementById('Log');
const form = document.getElementById('logForm');

userLog.onclick = function () {
    form.style.display = "flex";
}

var card = document.getElementById("card");

function openRegister() {
    card.style.transform = "rotateY(-180deg)";
}
function openLogin() {
    card.style.transform = "rotateY(0deg)";
}

const logClose = document.querySelector('.close');

logClose.addEventListener('click', () => {
    form.style.display = "none";
})

// ============================================>

const all = document.getElementById('all');
const subbed = document.getElementById('subbed');
const dubbed = document.getElementById('dubbed');
const chinese = document.getElementById('chinese');
const trending = document.getElementById('trending');
const random = document.getElementById('random');

const conall = document.querySelector('.all');
const consubbed = document.querySelector('.subbed');
const condubbed = document.querySelector('.dubbed');
const conchinese = document.querySelector('.chinese');
const contrending = document.querySelector('.trending');
const conrandom = document.querySelector('.random');

consubbed.style.display = "none";
condubbed.style.display = "none";
conchinese.style.display = "none";
contrending.style.display = "none";
conrandom.style.display = "none";

subbed.onclick = function () {
    conall.style.display = "none";
    condubbed.style.display = "none";
    conchinese.style.display = "none";
    contrending.style.display = "none";
    conrandom.style.display = "none";
    consubbed.style.display = "grid";
}

all.onclick = function () {
    conall.style.display = "grid";
    consubbed.style.display = "none";
    condubbed.style.display = "none";
    conchinese.style.display = "none";
    contrending.style.display = "none";
    conrandom.style.display = "none";
}

dubbed.onclick = function () {
    conall.style.display = "none";
    consubbed.style.display = "none";
    condubbed.style.display = "grid";
    conchinese.style.display = "none";
    contrending.style.display = "none";
    conrandom.style.display = "none";
}

chinese.onclick = function () {
    conall.style.display = "none";
    consubbed.style.display = "none";
    condubbed.style.display = "none";
    conchinese.style.display = "grid";
    contrending.style.display = "none";
    conrandom.style.display = "none";
}

trending.onclick = function () {
    conall.style.display = "none";
    consubbed.style.display = "none";
    condubbed.style.display = "none";
    conchinese.style.display = "none";
    contrending.style.display = "grid";
    conrandom.style.display = "none";
}

random.onclick = function () {
    conall.style.display = "none";
    consubbed.style.display = "none";
    condubbed.style.display = "none";
    conchinese.style.display = "none";
    contrending.style.display = "none";
    conrandom.style.display = "grid";
}


const toggle = document.getElementById('toggle');

toggle.onclick = function() {
    toggle.classList.toggle('active');
}