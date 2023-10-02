
// Get the HTML elements
let displayNo = document.querySelector(".count");
let addBtn = document.querySelector("#addBtn");
let subBtn = document.querySelector("#subBtn");
let resetBtn =document.querySelector("#resetBtn");

// Add the click event to the buttons
addBtn.addEventListener("click" , Increase);
subBtn.addEventListener("click" , Decrease);
resetBtn.addEventListener("click",Reset);



// initialize count to 0 
let num =0;

// function to increment the value 
function Increase(){
   let result =  num++;
   // if (result >0){
   //    addBtn.disabled = false;
   // }
  displayNo.innerText =result;
}

// function to decrement the value
function Decrease(){
   let result = num --;

   // if (result <=0){
   //    subBtn.disabled = true;
   // }
      displayNo.innerText = result;
}

function Reset(){
   num=0
   displayNo.innerText = num;
}

function UpdateDisplay(){
   if (num === 0 )
   {
      subBtn.disabled = true;
   }
   else
     subBtn.disabled = false;
}

UpdateDisplay();

// Required -> add a function which disables the subtract button if the value is 0