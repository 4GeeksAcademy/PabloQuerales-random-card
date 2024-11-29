let palo = ["♦", "♥", "♠", "♣"]
let value = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"] 
let poker = [palo,value]
let randomCard = []
window.onload = function() {
  //ACÁ SE GENERA EL NUMERO Y EL PALO DE MANERA ALEATORIA Y SE INTRODUCEN EN UN ARRAY VACIO
  for (let i = 0; i < poker.length; i++) {
    let randomNumber = Math.floor(Math.random() * poker[i].length);
    for (let index = 0; index < 1; index++) {
    randomCard.push(poker[i][randomNumber])
    }
  }
  // ACÁ SE VALIDA EL COLOR DEL PALO
let color = ""
if (randomCard[0] == "♦") {
  color = "red"
} else if(randomCard[0] == "♥"){
  color = "red"
}
  //ACÁ SE IMPRIME EL VALOR
  document.querySelector(".card").innerHTML = `      
  <div class="card-top ${color}"><span>${randomCard[0]}</span></div>
  <div class="card-mid"><span>${randomCard[1]}</span></div>
  <div class="card-bot ${color}"><span>${randomCard[0]}</span></div>`
};