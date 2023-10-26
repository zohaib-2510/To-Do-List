var addBtn = document.getElementById("add")
var body = document.getElementById("jj")
addBtn.addEventListener("click",addInp)
function addInp(){
    var inp = document.createElement("input")
    inp.id="inp"
    var removeBtn = document.createElement("button")
    removeBtn.id="Button"
    removeBtn.innerHTML="Remove"
    body.appendChild(inp)
    body.appendChild(removeBtn)
    removeBtn.addEventListener("click",removeInp)
    console.log("ok");
    function removeInp(){
        inp.remove()
        removeBtn.remove()
        console.log("remove");
    }
}