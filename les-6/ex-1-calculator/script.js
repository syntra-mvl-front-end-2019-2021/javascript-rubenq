let sumBtn = document.getElementById('sum-submit-btn');
let productBtn = document.getElementById('product-submit-btn');
let addBtn = document.getElementById('add-input-btn');
let remBtn = document.getElementById('delete-number-input');

// function for click event when button "calculate sum" is pushed.
function sumClick(event) 
{
    let resultSum = document.getElementById('sum-result-container');
    let sumResult = 0;
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);    
    sumResult = input1 + input2;
    resultSum.innerText = sumResult;  
}
sumBtn.addEventListener('click', sumClick);

// function for click event when button "calculate product" is pushed.
function prodClick(event) 
{
    let resultProd = document.getElementById('product-result-container');
    let prodResult = 1;
    let input1 = parseInt(document.getElementById('input1').value);
    let input2 = parseInt(document.getElementById('input2').value);    
    prodResult = input1 * input2;
    resultProd.innerText = prodResult; 
}
productBtn.addEventListener('click', prodClick);

// Function to add a new field to the calculator.
function addInput(event)
{
    let extraInput = document.createElement('div');
    let position = document.getElementById('input-container');
    let number = document.getElementById('number-count-container');
    position.appendChild(extraInput);
    position.innerHTML += '<div class="field has-addons number-input-group"><div class="control"><input id="input2" class="input number-input" type="number" step="1" value="0"></div><div class="control"><a class="button is-danger delete-number-input">X</a></div></div>'
    number.innerHTML ++;
}
addBtn.addEventListener('click', addInput);

// Function to remove a field from the calculator.
function removeInput(event)
{
    let parent = document.getElementById('input-container');
    let child = document.getElementsByClassName('field')[-1];
    parent.removeChild(child);
}

remBtn.addEventListener('click', removeInput);