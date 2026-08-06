let listitems = document.querySelector(".list-items");
listitems.style.fontSize = "20px";
// listitems.style.fontFamily = "Inter", sans - serif;
// listitems.style.fontOpticalSizing = auto;
// listitems.style.fontweight = 600;
// listitems.style.fontStyle = normal;


let input1 = document.querySelector(".input-box");

let button1 = document.querySelector(".btn-1");
// button1.style.border = "none";

button1.onclick = () => {
    if (input1.value === "") {


    }
    else if (input1.value !== null) {
        // let newelement = document.createElement("li");
        // newelement.innerText = "•" + " " + input1.value;
        // listitems.append(newelement)
        createElement()
    }

}

function createElement() {
   let newelement = document.createElement("li");
    newelement.innerText = input1.value;
    listitems.append(newelement)
    input1.value = "";
}
