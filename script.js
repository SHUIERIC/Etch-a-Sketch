const gridContainer = document.querySelector(".divContainer")

//Default 16 by 16 size grid 
for (i=0; i< 16*16; i++) {
    const grids = document.createElement ("div");
    grids.className = "grid"
    gridContainer.appendChild (grids)
    
    grids.style.width = "60px";
    grids.style.height = "60px";

    grids.darkLevel = 0
}

//Prompt for user to change grid size a
const btn = document.querySelector (".numberBtn")

btn.addEventListener ("click", (e) => {
    let userNum = Number (prompt ("Enter the number of grid per side (<= 100) "),);
    if (userNum <=100) {
        gridContainer.innerHTML = "";
        
        for (i=0; i< userNum*userNum; i++) {
            const grids = document.createElement ("div");
            grids.className = "grid"
            gridContainer.appendChild (grids)
            const size = 960 / userNum;
            grids.style.width = `${size}px`;
            grids.style.height = `${size}px`;

            grids.darkLevel = 0
            }
        }
    })


//Eventlistener for all grids to change color and turn black on 10 hits 

gridContainer.addEventListener ("mouseover", (e) => {
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);

    e.target.darkLevel = Math.min (e.target.darkLevel +0.1, 1)

    if (e.target.darkLevel <1) {
        e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${e.target.darkLevel})`
    } else  {
        e.target.style.backgroundColor = "rgb(0, 0, 0)"

    } 
})