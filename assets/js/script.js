// Solution 1
// Je déclare ma fonction changeColor
function changeColor(elmnt){
  // On stock dans une variable , la valeur de l'attribut class de l'élément sur lequel on vien de cliqué
  var classValue = elmnt.getAttribute('class');
  // On utilise la fonction split pour éclater la chaine de caractére, contenu dans la variable classValue
  // On stock le résultat dans la variale classArray qui devien un tableau
  // Attention tous les tableau commence a 0
  // Tableau[index]
  var classArray = classValue.split(' ');
  console.log(classArray[1]);
  // On applique au texte la couleur correspondant, au 2eme élement du tableau
  document.getElementById('text').style.color = classArray[1];
}

// Pour faire l'exercice en une seul ligne
function changeColor(elmnt){
  document.getElementById('text').style.color= elmnt.getAttribute('class').split(' ')[1];
}
