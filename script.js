const mainContainer = document.getElementById("mainContent");
const resetBtn = document.getElementById('resetBtn');

const player = document.createElement("div")
player.classList.add("playerStyle");
player.id = 'player'



function createMaze(){
    const map = [
        "WWWWWWWWWWWWWWWWWWWWW",
        "W   W     W     W W W",
        "W W W WWW WWWWW W W W",
        "W W W   W     W W   W",
        "W WWWWWWW W WWW W W W",
        "W         W     W W W",
        "W WWW WWWWW WWWWW W W",
        "W W   W   W W     W W",
        "W WWWWW W W W WWW W F",
        "S     W W W W W W WWW",
        "WWWWW W W W W W W W W",
        "W     W W W   W W W W",
        "W WWWWWWW WWWWW W W W",
        "W       W       W   W",
        "WWWWWWWWWWWWWWWWWWWWW",
    ];

    for(let i= 0; i<map.length;i++){
        let rowDiv = document.createElement("div");
        rowDiv.classList.add("rowStyle")
        row = map[i]

        for(let j= 0; j<row.length;j++){
            let cellDiv = document.createElement("div")
            cellDiv.classList.add("cellStyle")
            
            let cell = row[j];  

            
            cellDiv.dataset.line = i;
            cellDiv.dataset.col  = j;


            if(cell === " "){
            cellDiv.classList.add("pathStyle") 
            }
            else if(cell === 'W'){
                cellDiv.classList.add("wallStyle");
            }
            else if(cell === 'S'){ 
                cellDiv.id = 'start';
                cellDiv.classList.add("pathStyle")
                cellDiv.appendChild(player);
            }
            else if(cell === 'F'){
                cellDiv.id = "end"
                cellDiv.classList.add("pathStyle")
            }
            cellDiv.append(cell);

            rowDiv.appendChild(cellDiv);
        } 
    mainContainer.appendChild(rowDiv);
    }
}


function moviments(event){
    const pressedKey = event.key;
    let currentLine = Number(player.parentElement.getAttribute('data-line'));
    let currentCol = Number(player.parentElement.getAttribute('data-col'));
    let nextDiv;

        if(pressedKey === 'ArrowUp'){
            nextDiv = mainContainer.children[currentLine - 1].children[currentCol];

            if(nextDiv.classList.contains('pathStyle')){
                nextDiv.appendChild(player)
            }
        }
        else if(pressedKey === 'ArrowDown'){
            nextDiv = mainContainer.children[currentLine + 1].children[currentCol];
            
            if(nextDiv.classList.contains('pathStyle')){
                nextDiv.appendChild(player)
            }
        }

        if(pressedKey === 'ArrowLeft'){
            nextDiv = mainContainer.children[currentLine].children[currentCol - 1]

            if(nextDiv.classList.contains('pathStyle')){
                nextDiv.appendChild(player)
            }
        }
        else if(pressedKey === 'ArrowRight'){
            nextDiv = mainContainer.children[currentLine].children[currentCol+1];

            if(nextDiv.classList.contains('pathStyle')){
                nextDiv.appendChild(player)
            }
        }
        
        checkOut(nextDiv);    
}

const checkOut = (div) =>{
    const sucess = document.getElementById('sucessScreen');

    if(div.id === 'end'){
        sucess.classList.remove('hidden');
    }
}

const resetMaze = () => {
    const start = document.getElementById('start')
    start.appendChild(player);
}
createMaze();
document.addEventListener('keydown',moviments);
resetBtn.addEventListener('click', resetMaze);