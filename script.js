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

function mode(){
  let mode=document.getElementById("mode")

  if (mode.src.includes("https://uploads.onecompiler.io/44qdjw5sd/1781182969607/mode-nuit.png")){
    mode.src="https://uploads.onecompiler.io/44qdjw5sd/1781182972269/mode-lumiere.png"
    document.body.style.backgroundColor="#3B3B3D"
  }else { 
     mode.src="https://uploads.onecompiler.io/44qdjw5sd/1781182969607/mode-nuit.png"
     document.body.style.backgroundColor="#e2d0eab3"
  }
}
