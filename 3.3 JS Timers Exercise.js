Countdown

Write a function called countdown that accepts a number as a parameter and every 1000 
milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

function countDown(num) {
    let timer = setInterval(function(){
        num--;
        if (num <= 0) {
            clearInterval(timer);
            console.log("DONE!");
        } else {
            console.log(num);
        }
    },1000)
}

2. RandomGame

Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random 
number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took
before we found a number greater than .75.

function randomGame() {
    let times = 0;
    let timer = setInterval(function(){
    let nums = Math.random();
        if (nums < .75) {
        times++
        console.log(nums)
         } else {
            clearInterval(timer);
            console.log(nums)
            console.log( "It took " + times + " try/tries");
            }
        }, 1000)
    }
    