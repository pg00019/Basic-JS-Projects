// Get the elements from DOM
let InputDate = document.querySelector("#dob");
let CalBtn = document.querySelector(".CalBtn");
let result = document.querySelector(".result");


// adding click function to the button
CalBtn.addEventListener("click" , CalculateAge);

// function to calculate the age
function CalculateAge(){
    let birthdate = new Date(InputDate.value);
    let today = new Date();

    // calculate the age 
    let ageInMilliseconds = today - birthdate;
    let ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.24));
    console.log(ageInYears);

    // display the result
    if (ageInYears > 0){
        result.textContent = `You are ${ageInYears} years old`;
    }else
    result.textContent = `Not a valid Input`;


}
