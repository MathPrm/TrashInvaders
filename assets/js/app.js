"use strict"

//création des canvas (le background et le reste)
const canvas = document.getElementById("canvas")
const background = document.getElementById("background")

//taille des canvas
canvas.width = 1200;
canvas.height = 700;

background.width = 1200;
background.height = 700;


//c'est du dessin en 2D
const ctx = canvas.getContext("2d");
const ctx2 = background.getContext("2d");

//importation des images

const arrierePlan = new Image();
arrierePlan.src = "assets/img/background.png"

const garbage_can = new Image();
garbage_can.src = "assets/img/garbage_can.png"

const possum = new Image();
possum.src = "assets/img/possum.png"

const raccoon = new Image();
raccoon.src = "assets/img/raccoon.png"

const skunk = new Image();
skunk.src = "assets/img/skunk.png"

const wombat = new Image();
wombat.src = "assets/img/wombat.png"


//affichage de l'arrière plan sur le canvas "background"
arrierePlan.addEventListener('load', function(){
    ctx2.drawImage(arrierePlan , 0, 0,1200,700);
},false)

//petit espace entre la poubelle et le sol
const space = 10
//création d'un objet poubelle sous json
let garbage = {

    x: ( canvas.width / 2 ) - 75,
    y: canvas.height - (100 + space),
    width: 75,
    height: 100

}
//affichage de la poubelle
garbage_can.addEventListener('load', function(){
    ctx.drawImage(garbage_can , garbage.x, garbage.y, garbage.width, garbage.height );
},false)

//déplacement de la poubelle avec les flèches gauche et droite
window.addEventListener('keydown', function(e){
    switch(e.code) {
        case "ArrowLeft":
            if(garbage.x - 5 >= 0) {
                garbage.x -=5
            }
        break;
        case "ArrowRight":
            if(garbage.x + garbage.width + 5 <= canvas.width) {
                garbage.x += 5
            }
        break;
    }
    //on efface une partie du canvas avec les coordonnée et dimensions de la poubelle à chaque déplacement
    ctx.clearRect(garbage.x-5, garbage.y, garbage.width+10, garbage.height)

    //on redéssine la poubelle au bon emplacement
    ctx.drawImage(garbage_can , garbage.x, garbage.y, garbage.width, garbage.height );
})