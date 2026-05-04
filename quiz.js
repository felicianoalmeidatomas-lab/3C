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
  if (res4==="adjectif"){
    alert("Bravo tu as trouvé")
    score=(score+1)
  } else{
    alert("Faux,c'était l'adjectif")

  }

alert("Tu as" +score +"sur 5")
}

  

  
    




 
  
