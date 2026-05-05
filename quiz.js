//Expansions du nom

function frCdn(){
  let score=0
  let res=prompt("Lequel n'est pas une expansion du nom:l'épithète, le verbe, le complément du nom et le complément de l'antécédent.")
  if (res==="le verbe"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était le verbe")
  }
  let res2=prompt("Dans la phrase « Le chat noir dort. », quelle est l’expansion du nom ?")
  if (res2==="noir"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était noir")

  }

  let res3=prompt("Dans « Le livre que je lis est passionnant. », quelle est l'expansion du nom ?")
  if (res3==="que je lis"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était que je lis")

  }

  let res4=prompt("Dans « La maison de mon oncle est grande. », quel type d’expansion est « de mon oncle » ?")
  if (res4==="complément du nom"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était complément du nom")

  }

   let res5=prompt("Quel type d’expansion est « fatigué » dans « L’enfant fatigué s’endort. » ?")
  if (res5==="adjectif"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était l'adjectif")

  }

alert("Tu as"+score+"sur"+"5")
}
//Phrases Complexes

function frPhraseComplexe(){
  let score=0
  let res=prompt("Lequel n'est pas un moyen de lier des phrases:la subordination,la coordination,la juxtaposition ou le collage")
  if (res==="le collage"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était le collage")
  }
  let res2=prompt("Dans la phrase « Le chat noir dort mais il a peur », quelle est la liaison ?")
  if (res2==="coordination"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était la coordination")

  }

  let res3=prompt("Dans « Le livre que je lis est passionnant puisuqe je l'ai terminé. », quelle est la liaison ?")
  if (res3==="subordination"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était de la subordination")

  }

  let res4=prompt("Dans « La maison de mon oncle est grande,je la réduirais à une petite taille », quelle est la liaison? » ?")
  if (res4==="juxtaposition"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était de la juxtaposition")

  }

   let res5=prompt("Je mangerais mon poulet quand il fera froid,quel est la subordonnée(recopie la)")
  if (res5==="quand il fera froid"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était quand il fera froid")

  }

alert("Tu as"+score+"sur"+"5")
}

  

  
    




 
  
