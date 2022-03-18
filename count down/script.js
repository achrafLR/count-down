// setTimeout(function() {
//     console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//     console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//     console.log(`Iam Message For ${user} Age Is : ${age}`);
// }


// var count = 0;

// setInterval(sayMsg, 5000, 0);

// function sayMsg(count) {
//     for (let i = 0; i < 100; i++) {
//         count++;
//         console.log(count);
//     }
// }

// setInterval(sayHello, 5000, "ashraf", 19);

// function sayHello(name, age) {
//     console.log(`My Name Is ${name}, and My Age is ${age}`);
// }


// setTimeout(sayHello, 2000, "ashraf", 19);

// function sayHello(name, age) {
//     console.log(`My Name  ${name}, and My Age is ${age}`);
// }


const btn = document.querySelector('button');
const main = document.querySelector('main');


const numbreDown = document.querySelector('span')

var counter = 30;


btn.onclick = function() {
    countdown = setInterval(countdown, 100);
}

function countdown() {
    counter--;
    if (counter == 0) {
        main.style.backgroundImage = 'linear-gradient(to top, green,green 70.71%)';
    }
    if (counter < 0) {
        return counter = 0;
    }
    if (counter === "0") {
        clearInterval(counter)
    }

    numbreDown.textContent = "0" + counter

}