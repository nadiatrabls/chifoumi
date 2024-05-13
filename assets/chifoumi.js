const PIERRE = 1, FEUILLE = 2, CISEAUX = 3;
let score = { // objet
    joueur: 0,
    ordi: 0,
    egalite : 0
}
let chifoumi = function(joueur) { // deuxiéme version de presentation de function



   document.querySelector("#choixJoueur").src = "images/" + joueur + ".jpg";

   let signes = document.querySelectorAll(".signe");
   // boucle for of spécialement pour les tableaux
   /**
    * for of
    * pour chaque element du tableau signes..
    * a chaque tours de boucles (=itération), la variable element 
    * va prendre la valeur suivante du tableau 
    */
   for (let element of signes) {
    element.style.border = "none";
   }
   document.querySelector("#signeJoueur" + joueur).style.border = "1px solid blue";
   
   /* 
   math est une biblithéque de fonctions intégrée à JS.
   pour utiliser les fonctions de cette bibliothéque, il faut toujours préciser Math.
   Math.random retourne un nombre réel aléatoire entre 0 et 1.
   Math.round permet d'arrondir une valeur décimale
   
   pour avoir un nombre aléatoire entre min et max : 
   Math.round(Math.random() * (max - min)) + min 
   */ 
  /*******************ORDI***************************** */
   let ordi;
   if( !document.querySelector("#triche").checked ){
    ordi = Math.round(Math.random() * 2) +1;
   }else {
    /* triche: l'ordinateur gagne toujours */
    switch (joueur){
       case PIERRE:
          ordi = FEUILLE;
       break;
       case FEUILLE:
         ordi = CISEAUX;
       break;
       case CISEAUX:
         ordi = PIERRE;
     }
   }
    
   
   document.querySelector("#choixOrdi").src = "images/" + ordi + ".jpg";
   document.querySelector("#signeOrdi" + ordi).style.border = "1px solid red";

   
   let message = document.getElementById("message");
   // let message = document.queryselecteur("#message");
   if( ordi == joueur ){
    // innerHTML contient tous le contenus du html
    message.innerHTML = "égalité";
      //score.egalite = score.egalite +1;
      // score.egalité +=1;
    score.egalite++;



   }else if ( joueur == PIERRE && ordi == CISEAUX 
    || joueur == FEUILLE && ordi == PIERRE
    || joueur == CISEAUX && ordi == FEUILLE ) {
    
    message.innerHTML = "Gagné !!!";
    score.joueur++;
    document.querySelector("#scoreJoueur").innerHTML = score.joueur;
   }else{
    message.innerHTML = "Perdu !";
    score.ordi++;
    document.querySelector("#scoreOrdi").innerHTML = score.ordi;
   }
   
}
