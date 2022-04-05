let play = document.getElementById("btn").addEventListener("click", griglia);
let gioco = document.getElementById("gioco");
let row = document.createElement("div");
let result = document.getElementById("output");
let click = 0;
let flag = true;
row.setAttribute("class", "row");


function griglia(){
    click = 0;
    flag = true;
    let text = document.getElementById("text");
    text.classList.add("hide");
    let select = document.getElementById("diff");
    let diffValue = select.options[select.selectedIndex].value;
    let gamecol = 0;
    switch(diffValue){
        case "easy":
        default:
            gamecol = 100;
            break;
        case "hard":
            gamecol = 81;
            break;
        case "crazy":
            gamecol = 49;
            break;
    }
   
    cols = creaColonne(gamecol, diffValue);
    row.innerHTML = " ";
    result.innerHTML = " ";
    row.innerHTML = cols;
    gioco.append(row);
    let colorSwitch = document.querySelectorAll(".box");
    let bombSwitch = document.querySelectorAll(".bomb");

    for(let i=0; i < colorSwitch.length; i++){
        console.log(i)
        colorSwitch[i].classList.add("pointer");
            colorSwitch[i].addEventListener("click", colors);
            console.log(colorSwitch[i])
            /* colorSwitch[i].removeEventListener("click", colors);
            console.log(colorSwitch[i]) */
        console.log(flag)
        function colors(){
            colorSwitch[i].classList.add("clicked");
            click++;
            flag = true;
            colorSwitch[i].classList.remove("pointer");
            this.removeEventListener("click", colors)
            console.log(click)
            if(click > 2 /* (colorSwitch.length - 16) */){
                flag = false;
                result.innerHTML = `
                    hai vinto, hai liberato tutte e ${click} caselle
                `;
            }
            
            if(flag === false){
                for(let k = 0; k < colorSwitch.length; k++){
                    this.removeEventListener("click", colors);
                }
            }
        }
        

        
    }
    for(let i=0; i < bombSwitch.length; i++){
        bombSwitch[i].addEventListener("click", bombColors);
        
        function bombColors(){
            bombSwitch[i].innerHTML = '<i class="fa-solid fa-bomb"></i>';
            bombSwitch[i].classList.add("bomb-clicked");
            bombSwitch[i].classList.remove("pointer");
            this.removeEventListener("click", bombColors)
            result.innerHTML = `
                hai beccato la bomba dopo ${click} caselle
            `;
            for(i=0; i< bombSwitch.length; i++){
                bombSwitch[i].innerHTML = '<i class="fa-solid fa-bomb"></i>';
                bombSwitch[i].classList.add("bomb-clicked");
            }
        }
    }

}



function creaColonne(numeroColonne, diff){
    let bombs = [];
    let cols = " ";
    let random;
    while(bombs.length <16){
        random = Math.floor((Math.random() * numeroColonne) + 1);
        if(!bombs.includes(random)){
            bombs.push(random);
        }
    }
    console.log(bombs)
    for(let i= 1; i<= numeroColonne; i++){
        if(bombs.includes(i)){
            cols += `
            <div class="col box bomb box-${diff}">${i}</div>
        `;
        } else {
            cols += `
            <div class="col box box-${diff}">${i}</div>
        `;
        }
    }

    return cols;
}

