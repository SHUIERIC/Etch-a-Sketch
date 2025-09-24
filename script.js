const btn = document.querySelector (".numberBtn")
const gridContainer = document.querySelector(".divContainer")
const eachGrid = document.querySelectorAll (".grid")


for (i=0; i< 16*16; i++) {
    const grids = document.createElement ("div");
    grids.className = "grid"
    gridContainer.appendChild (grids)
    
    grids.style.width = "60px";
    grids.style.height = "60px";
    grids.addEventListener ("mouseenter", (e) => {
    grids.style.backgroundColor = "green";
})}


btn.addEventListener ("click", (e) => {
    let userNum = Number (prompt ("Enter the number of grid per side (<= 100) "),);
    console.log (userNum)
    if (userNum <=100) {
        gridContainer.innerHTML = "";
        
        for (i=0; i< userNum*userNum; i++) {
            const grids = document.createElement ("div");
            grids.className = "grid"
            gridContainer.appendChild (grids)
            const size = 960 / userNum;
            grids.style.width = `${size}px`;
            grids.style.height = `${size}px`;
        
}}})

gridContainer.addEventListener ("mouseover", (e) => { 
                if (e.target.classList.contains ("grid")) {
                e.target.style.backgroundColor = "green";}})
