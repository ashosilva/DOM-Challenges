let tablel = document.getElementById("grid-table");
let currentRow = 0;
let currentCol = 0;


const submitButton = document.querySelector("#submit-button");
console.log(addRow);
submitButton.addEventListener("click", event =>{
    let addRow = Number(document.querySelector("#addRow").value);
    let addCol = Number(document.querySelector("#addCol").value);

    if(addCol < 0){
        alert("Invalid Input! negative not allowed!")
    }else if(addRow !== 0 || addRow !== ''){
        addNewRows(addRow);    
    }
    
    if(addCol < 0){
        alert("Invalid Input! negative not allowed!")
    }else if(addCol !== 0 || addCol !== ''){
        addNewColumns(addCol);    
    }

    document.querySelector("#rowValue").innerText = "Rows: " + addRow;
    document.querySelector("#colValue").innerText = "Columns: " + addCol;

    document.getElementById("addRow").value = '';
    document.getElementById("addCol").value = '';
});


function addNewRows(numRow){
    for(let i = currentRow; i < currentRow + numRow; i++){
        const newRow = tablel.insertRow(i);
        newRow.setAttribute("id", "row"+ (i+1).toString());
        for(let j = 0; j < currentCol; j ++){          
            //add new cell   
            let newCell = newRow.insertCell(j);             
            //newCell.style.backgroundColor = defaultColor;           
            //changeCellColor(newCell);
            //changeColorMouseDownAndHover(newCell); 
        }

    }
    console.log(tablel)
    //update number of rows
    currentRow += numRow;
}



//Adds new columns in the table
function addNewColumns(numCol){
    for(let i = 0; i < currentRow; i++){
        let rows = document.getElementById("row"+ (i+1).toString());
        for(let j = currentCol; j < currentCol + numCol; j++){     
            //add new cell       
            let newCell = rows.insertCell(j);                 
            //newCell.style.backgroundColor = defaultColor;           
            //changeCellColor(newCell);    
            //changeColorMouseDownAndHover(newCell);      
        }
    }

    //update number of columns
    currentCol += numCol;
}