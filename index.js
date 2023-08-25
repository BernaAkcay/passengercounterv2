let saveEl = document.getElementById("save-el")
let totalCountEl = document.getElementById("total-count-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
let totalPeople = localStorage.getItem("totalPeople")


if( gecmisBilgi !== null) {
    saveEl.textContent = gecmisBilgi
} else {
    saveEl.textContent = ""
}


if (totalPeople !== null) {
    totalCountEl.textContent = totalPeople
} else {
    totalCountEl.textContent = "0"
}

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

  
    let previousTotal = parseInt(totalCountEl.textContent)
    totalCountEl.textContent = previousTotal + count
    
    localStorage.setItem("gecmisBilgi", saveEl.textContent)
    localStorage.setItem("totalPeople", totalCountEl.textContent) 

    countEl.textContent = 0
    count = 0
}
