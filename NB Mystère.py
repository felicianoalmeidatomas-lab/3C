from random import randint
tentatives= 0
NBC = randint(1, 10)
Code_Secret="Tomas12@"
TC=input()
if TC==Code_Secret:
    print(NBC)
tentatives= 0
NBC = randint(1, 10)
print("Bienvenue dans le jeu où tu devines le nombre mystère")
print("Donne-moi un nombre")
while True:
 NB=int(input())

#Comparateurs
 if NB==NBC:
   print("Bravo,tu as trouvé en",(tentatives+1),"tentatives")
 if NB>NBC:
   print("Le nombre mystère est plus petit")
   tentatives += 1
 if NB<NBC:
   print("Le nombre mystère est plus grand")
   tentatives += 1


    
    
    
