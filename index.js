// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
    return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *   A. Counter 1 has a variable that exists in the block scope. Counter two contains a variable that is accessible globally. 
 * 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *   B. Technically they both contain and use closures since a closure is created every time a function is created in JS. But number one contains a function inside of another function, so that means it is the one with a closure. 
 * 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *   C. I would prefer counter one if I was trying to ensure that no other functions had access to my variables. Code that has been identified elsewhere can be used later. Would2 be better? Here we are not nesting functions was nesting functions? I guess it would be better to understand what is really going on behind the scenes. 
 */

// counter1 code
function counterMaker() {
    let count = 0;
    return function counter() {
        return count++;
    }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
    return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() { // inning function

    return Math.floor(Math.random() * 3)
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` 
(from above) and a number of innings and and returns the final score of
 the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/

/* 
write a function called final score
 create a callback function called inning
 input inning into the HOF from above
 also accepts the number of innings 
 also has to return the final score of the game as an object

 */

function finalScore(inning, inningsNum) {
    let homeScore = 0;
    let awayScore = 0;
    for (let i = 0; i < inningsNum; i++) {
        homeScore = homeScore + inning();
        awayScore = awayScore + inning();
    }

    return {
        "homeScore": homeScore, // home score
        "awayScore": awayScore // away score
    }
}
console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(inning) {
    return {
        home: inning(),
        away: inning(),
    }
}

function scoreboard(getInningScore, inning, inningsNum) {
    let scoreByInning = [];
    let homeScore = 0;
    let awayScore = 0;


    for (let i = 0; i < inningsNum; i++) {
        const currentInning = getInningScore(inning)
        homeScore = homeScore + currentInning.home;
        awayScore = awayScore + currentInning.away;
        scoreByInning.push(`inning ${i+1}: Away ${currentInning.away} - Home ${currentInning.home}`)
    }
    return scoreByInning;
}
console.log(scoreboard(getInningScore, inning, 9));