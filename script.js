function menu(){
 let Menuu=document.getElementById("Menu")

 if (Menuu.style.display==="none"){
  Menuu.style.display="block"
 } else{
  Menuu.style.display="none"
 }
}

function back(){
  let couleur=prompt('Quelle couleur veux tu pour le fond d écran?(en Anglais)')
  document.body.style.backgroundColor=couleur
}
