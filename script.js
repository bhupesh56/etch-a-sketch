const GRID_SIDE = 500;
let col = 16;

const grid = document.querySelector('.grid');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
grid.style.width = grid.style.height = `${GRID_SIDE}px`;

function createGrid(col) {
    for(let i = 0; i < col * col; i++){
        const gridDiv = document.createElement('div');

        gridDiv.style.width = gridDiv.style.height = `${GRID_SIDE / col - 2}px`;
        
        grid.appendChild(gridDiv);
        gridDiv.className = "gridDiv";
        gridDiv.addEventListener("mouseover", function(){
            this.style.backgroundColor = "black";
        })
    }
}

function removeGrid(){
    grid.innerHTML= '';
}

slider.oninput = function(){
    let txt = `${this.value} x ${this.value}(Resolution)`;
    sliderValue.textContent = txt;
    removeGrid();
    createGrid(this.value);
    console.log("hii");
}

createGrid(col);
