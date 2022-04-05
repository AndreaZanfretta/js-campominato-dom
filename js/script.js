let play = document.getElementById("btn").addEventListener("click", griglia);
let gioco = document.getElementById("gioco");
let row = document.createElement("div");
row.setAttribute("class", "row");


function griglia(){
    
    let select = document.getElementById("diff");
    let diffValue = select.options[select.selectedIndex].value;
    let gamecol = 0;
    let gamerow = 0;
    switch(diffValue){
        case "easy":
            gamecol = 100;
            gamerow = 100;
            break;
        case "hard":
            gamecol = 81;
            gamerow = 9;
            break;
        case "crazy":
            gamecol = 49;
            gamerow = 7;
            break;
    }
   
    cols = creaColonne(gamecol, diffValue);
    row.innerHTML = " ";
    row.innerHTML = cols;
    gioco.append(row);
    let colorSwitch = document.querySelectorAll(".box");
    for(c=0; c < colorSwitch.length; c++){
        let d = c;
        colorSwitch[c].addEventListener("click", colors);
        function colors(){
            colorSwitch[d].classList.add("clicked");
        }
    }
}

function creaColonne(numeroColonne, diff){
    let cols = " ";
    for(i= 1; i<= numeroColonne; i++){
        cols += `
            <div class="col box box-${diff}">${i}</div>
        `;
    }

    return cols;
}

/* for(let i =0; i< colorSwitch.length; i++){
    colorSwitch[i].addEventListener("click", colors(colorSwitch[i]))
 }
 function colors(color){
    color.classList.add("clicked")
 } */
