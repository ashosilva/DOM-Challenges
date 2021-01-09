let table = document.getElementById("grid-table");
let currentRow = 0;
let currentCol = 0;
let currentColor = "red";
let defaultColor = "white";

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", event =>{
    let addRow = Number(document.querySelector("#addRowT").value);
    let addCol = Number(document.querySelector("#addColT").value);
    let remRow = Number(document.querySelector("#remRowT").value);
    let remCol = Number(document.querySelector("#remColT").value);

    //check for invalid inputs: addRow
    if(addRow < 0){
        alert("Invalid Input! negative not allowed!")
    }else if(addRow !== 0 || addRow !== ''){
        addNewRows(addRow);    
    }
    //check for invalid inputs: addCol
    if(addCol < 0){
        alert("Invalid Input! negative not allowed!")
    }else if(addCol !== 0 || addCol !== ''){
        addNewColumns(addCol);    
    }
    //check for invalid inputs: remRow
    if(remRow < 0 || remRow > currentRow){
        alert("Invalid Input! Can't remove a negative number of rows!")
    }else if(remRow !== 0){    
        removeRows(remRow);
    }
    //check for invalid inputs: remRow
    if(remCol < 0 || remCol > currentCol){
        alert("Invalid Input! Can't remove a negative number of columns!")
    }else if(remCol !== 0){    
        removeColumns(remCol);
    }


    // document.querySelector("#rowValue").innerText = "Row(s) Added: " + addRow;
    // document.querySelector("#colValue").innerText = "Column(s) Added: " + addCol;
    // document.querySelector("#rowValue").innerText = "Row(s) Removed: " + remRow;
    // document.querySelector("#colValue").innerText = "Column(s) Removed: " + remCol;

    document.getElementById("addRowT").value = '';
    document.getElementById("addColT").value = '';
    document.getElementById("remRowT").value = '';
    document.getElementById("remColT").value = '';
});

//Adds new rows in the table
function addNewRows(numRow){
    for(let i = currentRow; i < currentRow + numRow; i++){
        const newRow = table.insertRow(i);
        newRow.setAttribute("id", "row"+ (i+1).toString());
        for(let j = 0; j < currentCol; j ++){          
            //add new cell   
            let newCell = newRow.insertCell(j);             
            newCell.style.backgroundColor = defaultColor;           
            changeCellColor(newCell);
            //changeColorMouseDownAndHover(newCell); 
        }

    }
    console.log(table)
    //update number of rows
    currentRow += numRow;
}

//Adds new columns in the table
function addNewColumns(numCol){
    for(let i = 0; i < currentRow; i++){
        let row = document.getElementById("row"+ (i+1).toString());
        for(let j = currentCol; j < currentCol + numCol; j++){     
            //add new cell       
            let newCell = row.insertCell(j);                 
            newCell.style.backgroundColor = defaultColor;           
            changeCellColor(newCell);    
            //changeColorMouseDownAndHover(newCell);      
        }
    }

    //update number of columns
    currentCol += numCol;
}


//Removes rows from the table
function removeRows(numRow){    
    for(let i = currentRow - 1; i > currentRow - numRow - 1; i--){         
        table.deleteRow(i);
    }
    currentRow -= numRow;
}


//Removes columns from the table
function removeColumns(numCol){
    for(let i = 0; i < currentRow; i++){
        let row = document.getElementById("row"+ (i+1).toString());
        for(let j = currentCol - 1; j >= currentCol - numCol; j--){            
            row.deleteCell(j);    
        }
    }

    //update number of columns
    currentCol -= numCol;
}

let dropDownMenu = document.getElementById("color-dropdowns");
//Dropdown menu listener
dropDownMenu.addEventListener("click", event =>{
    currentColor = dropDownMenu.value;
});

//Change cell color on click
function changeCellColor(currentCell){
    currentCell.addEventListener("click", event =>{
        currentCell.style.backgroundColor = currentColor;
    });
}










