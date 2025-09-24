// webpage of 16x16 square divs using js (in js) 
// have the grid squares inside a container div in html
// use flex box to have div appear like grid (in css)

const gridContainer = document.querySelector(".divContainer")

for (i=0; i< 256; i++) {
    const grids = document.createElement ("div");
    grids.className = "grid"
    gridContainer.appendChild (grids)
}
