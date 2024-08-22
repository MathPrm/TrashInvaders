'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // récupération de l'élément canvas
    const canvas = document.getElementById("canvas");

    // c'est du dessin en 2D
    const ctx = canvas.getContext("2d");

    // importation des images
    const arrierePlan = new Image();
    arrierePlan.src = "assets/img/background.png"

    const garbage_can = new Image();
    garbage_can.src = "assets/img/garbage_can.png";

    const possum = new Image();
    possum.src = "assets/img/possum.png";

    const raccoon = new Image();
    raccoon.src = "assets/img/raccoon.png";

    const skunk = new Image();
    skunk.src = "assets/img/skunk.png";

    const wombat = new Image();
    wombat.src = "assets/img/wombat.png";

    // modif james 
    let pressLeft = false; 
    let pressRight = false;
    // modif James 

    

    // création d'une fonction constructor, elle peut être réutilisée pour créer différents objets (exemple la poubelle et les ennemis)
    function Object(options){
        this.x = options.x || 10; // L'objet a une position en x de 10 par défaut
        this.y = options.y || 10; // L'objet a une positiion en y de 10 par défaut
        this.width = options.width || 50; // L'objet a une largeur de 50 par défaut
        this.height = options.height || 50; // L'objet a une hauteur de 50 par défaut
        this.image = options.image //pas de valeur par défaut
    }
    
    const space = 10;

    //définition de l'objet player, en redéfinissant ses propriétés
    let player = new Object({
        // x: ( canvas.width / 2 ) - 37.5,
        x: ( canvas.width  - 75 ) /2,
        y: canvas.height - (100 + space),
        width: 75,
        height: 100,
        image: garbage_can
    })

    // création d'une fonction input pour gérer les déplacements
    function input(player){
        window.addEventListener('keydown', function(e){
            switch(e.code) {
                case "ArrowLeft":
                    pressLeft = true;
                break;
                case "ArrowRight":
                    pressRight = true;
                break;
            }
        })
    }

   // création d'une fonction drawCharacter() qui permet de dessiner un personnage
   function drawCharacter(character){
        ctx.drawImage(character.image , character.x, character.y, character.width, character.height );
   }

   // création d'une fonction update() qui permet de prendre en compte le nouveau dépalcement demandé
   function update(){
        input(player);
   }

   // création d'une fonction draw() qui permet de redessiner notre personnage au bon endroit
   function draw(){
        if(pressLeft && player.x - 7 >= 0){
            player.x -= 7;
            console.log('toto');
            pressLeft = false;
        }else if(pressRight && player.x + player.width + 7 <= canvas.width){
            player.x += 7;
            pressRight = false;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(arrierePlan , 0, 0,1200,700);//dessin de l'arrière plan à chaque fois qu'on efface le canva
        drawCharacter(player);
   } 

   // création de la fonction loop aui permet d'exécuter les fonctions précédentes dans le bon ordre
   function loop(){
        draw();
        update();
        window.requestAnimationFrame(loop); 
   }

   // appel de la focntion loop
   loop();
   
})