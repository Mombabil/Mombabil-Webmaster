let but1 = document.getElementById("but1") // Recuperation des boutons d'affichage
let but2 = document.getElementById("but2")
let but3 = document.getElementById("but3")

let html = document.getElementById("html") // Recuperation des composants a afficher
let css = document.getElementById("css")
let js = document.getElementById("js")

html.style.display = "flex" // Par défaut, c'est la div #html qui est affiché
css.style.display = "none"
js.style.display = "none"

but1.addEventListener("click", () => { // Si clique sur bouton 1 (html), on affiche la div #html
  if(getComputedStyle(html).display != "none"){
    html.style.display = "flex"
  }else{
    html.style.display = "flex"
    css.style.display = "none"
    js.style.display = "none"
  }
})
but2.addEventListener("click", () => { // Si clique sur bouton 2 (css), on affiche la div #css
  if(getComputedStyle(css).display != "none"){
      css.style.display = "none";
    }else{
    css.style.display = "flex"
    html.style.display = "none"
    js.style.display = "none"
  }
})
but3.addEventListener("click", () => { // Si clique sur bouton 3 (javascript), on affiche la div #js 
  if(getComputedStyle(js).display != "none"){
    js.style.display = "none"
  }else{
    js.style.display = "flex"
    css.style.display = "none"
    html.style.display = "none"
  }
})



