let listitems = document.querySelector(".list-items");
listitems.style.fontSize = "20px";


let input1 = document.querySelector(".input-box");

let button1 = document.querySelector(".btn-1");


button1.onclick = () => {
    if (input1.value === "") {


    }
    else if (input1.value !== null) {
        createElement()
    }

}


function createElement() {
    let newdivflx = document.createElement("div");
    newdivflx.style.display = "flex";
    newdivflx.style.flexDirection = "row";
    newdivflx.style.alignItems = "center";
    newdivflx.style.gap = "10px";
    listitems.append(newdivflx);
    let newdiv = document.createElement("div");
    newdiv.style.border = "2px solid red";
    newdiv.style.width = "10px";
    newdiv.style.height = "10px";
    newdiv.style.borderRadius = "50%";
    newdivflx.append(newdiv);

    let newelement = document.createElement("li");
    newelement.style.listStyleType = "none";
    newelement.innerText = input1.value;
    newdivflx.append(newelement);
    let button3 = document.createElement("button");
    button3.innerText = "➖"
    newdivflx.append(button3);

    newdiv.onclick = () => {
        if (
            newelement.style.textDecorationLine = "line-through") {

        }
    }

    button3.onclick = () => {
        newelement.remove();
        newdivflx.remove()
        newdiv.remove()
    }
    input1.value = "";
}

input1.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let newdivflx = document.createElement("div");
        newdivflx.style.display = "flex";
        newdivflx.style.flexDirection = "row";
        newdivflx.style.alignItems = "center";
        newdivflx.style.gap = "10px";
        listitems.append(newdivflx);
        let newdiv = document.createElement("div");
        newdiv.style.border = "2px solid red";
        newdiv.style.width = "10px";
        newdiv.style.height = "10px";
        newdiv.style.borderRadius = "50%";
        newdivflx.append(newdiv);

 newdiv.onclick = () => {
        if (
            newelement.style.textDecorationLine = "line-through") {

        }
    }

        let newelement = document.createElement("li");
        newelement.style.listStyleType = "none";
        newelement.innerText = input1.value;
        newdivflx.append(newelement);
        let button3 = document.createElement("button");
        button3.innerText = "➖"
        newdivflx.append(button3);
        button3.onclick = () => {
            newelement.remove();
            newdivflx.remove()
            newdiv.remove()
        }
        input1.value = "";

    }

});
