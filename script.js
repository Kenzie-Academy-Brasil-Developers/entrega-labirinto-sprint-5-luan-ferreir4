const mainContainer = document.getElementById("mainContent");
const player = document.createElement("div")
player.classList.add("playerStyle");
player.id = 'player'
let currentPosition = [];
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

function createMaze(){
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
                cell = '';
                cellDiv.classList.add("wallStyle");
            }
            else if(cell === 'S'){ 
                cellDiv.id = "start"
                cellDiv.appendChild(player);
            }
            else if(cell === 'F'){
                cellDiv.id = "end"
            }
            cellDiv.append(cell);

            rowDiv.appendChild(cellDiv);
        } 
    mainContainer.appendChild(rowDiv);
    }
}
createMaze();

function moviments(event){
    const pressedKey = event.key;
    let currentLine = player.parentElement.getAttribute('data-line');
    let currentCol = player.parentElement.getAttribute('data-col')

        if(pressedKey === 'ArrowUp'){

        }
        else if(pressedKey === 'ArrowDown'){
                
        }

        if(pressedKey === 'ArrowLeft'){
            console.log()
        }
        else if(pressedKey === 'ArrowRight'){
            let nextDiv =  document.querySelector([Number(currentCol)+1])
            // nextDiv.appendChild(player)
            console.log(nextDiv);
        }
              
}
document.addEventListener('keydown',moviments)