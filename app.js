let input = document.getElementById("input");
let listeTaches = document.getElementsByClassName("to-do-items")[0];
;
input.addEventListener("keydown",(e)=>{
    if (e.key=="Enter") {
        addItem()
    }
})
function addItem(params) {
    if (input.value=="") {
        alert("veiller entrer une tahe")
        return
    }
    let actions = document.createElement("div")
    actions.classList.add("actions")
    let cocher = document.createElement("button")
    cocher.classList.add("cocher")
    cocher.innerHTML = "Cocher"
    actions.appendChild(cocher)
    let sup = document.createElement("button")
    sup.classList.add("delete")
    sup.innerHTML ="Suprimer"
    actions.appendChild(sup)
    
    let div = document.createElement("div")
    div.classList.add("item")
    div.innerHTML = input.value + "-"
    div.appendChild(actions)
    listeTaches.appendChild(div)
    input.focus()
    input.value=""

    cocher.addEventListener("click",()=>{
        if (div.style.textDecoration=="line-through") {
            div.style.textDecoration="none"
            cocher.innerHTML = "Cocher"
            div.style.opacity = "1"
        }else{
            cocher.innerHTML = "Decocher"
            div.style.textDecoration="line-through"
            div.style.transition = ".3s"
        div.style.opacity = ".5"
        }
    })

    sup.addEventListener("click",()=>{
        div.remove()
    })

}
