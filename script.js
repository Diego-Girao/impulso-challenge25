const cardContainer = document.getElementById("aux")
const cardDiv = document.createElement("div")
cardDiv.classList.add("card")

const photoDiv = document.createElement("div")
photoDiv.classList.add("photo")

cardDiv.appendChild(photoDiv)
cardContainer.appendChild(cardDiv)
