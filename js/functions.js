'use strict'

let rand_num1 = 0
let rand_num2 = 0
let CAnswers = 0
let IAnswers = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

const updateScore = () => {
    document.getElementById('Ccount').textContent = CAnswers
    document.getElementById('Icount').textContent = IAnswers
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
    updateScore()
})

document.querySelector('button').addEventListener('click',() => {
    const answer = Number(document.querySelector('input').value)
    const correctanswer = rand_num1 + rand_num2
    if (answer === correctanswer) {
        alert('Correct!')
        CAnswers++
    } else {
        alert('Incorrect!')
        IAnswers++
    }
    
    updateScore()
    randomizeNumbers()
    document.querySelector('input').value=''
})