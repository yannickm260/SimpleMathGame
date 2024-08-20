let nb1 = document.querySelector('.nb1')
let nb2 = document.querySelector('.nb2')
let op = document.querySelector('.op')
let message = document.getElementById('message')
let score = document.getElementById('score')
let link = document.getElementById('link')
let section = document.querySelector('section')
let compteur = 0

// random number 

random1 = Math.random()*11 << 0
random2 = Math.random()*11 << 0

// insert randomly values in the variable

nb1.innerHTML = random1
nb2.innerHTML = random2

// verification function

function verify(){
    let rep = document.getElementById('rep').value
    if (random1 + random2 == rep) {
        message.style.background = "green"
        message.innerHTML = "Correct"

        // create other random int
            // random number 
            random1 = Math.random()*11 << 0
            random2 = Math.random()*11 << 0

            // insert randomly values in the variable
            nb1.innerHTML = random1
            nb2.innerHTML = random2
            compteur = compteur +1

    }else{
        message.style.background = "red"
        message.innerHTML = "Wrong"
        section.innerHTML = " "
        score.innerHTML = `<span>${compteur}</span></br>Score`
        link.style.display = "block"
    }

}