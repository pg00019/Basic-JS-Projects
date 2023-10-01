
// We have aceepted all the input inside the function because then we can calculate the result without refreshing the page
// for example -> the user gave the input of weight and height and then calculated the BMI . 
// Now if the user changes the value then the user can directly calculate the BMI otherwise ,he has to refresh the page.


document.querySelector(".calBtn").addEventListener("click", CalBMI);

function CalBMI() {
    // get the input values from the user
  let InputWeight = document.querySelector(".weight");
  let InputHeight = document.querySelector(".height");
//   get the value where we have to show the result 
  let result = document.querySelector(".result");

  let weight = InputWeight.value;
  let height = InputHeight.value / 100; // convert height (in cm) to (in m)

//   checking for null and invalid inputs
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    result.textContent = `Please enter valid Input`;
    result.style.color = "#f00";
    return;
  }

//   calculate the BMI and round off to nearest integer 
  let bmiCal = Math.round(weight / (height * height));


//   checking for category
  let category = "";
  if (bmiCal < 18.5) {
    category = "underweight";
  } else if (bmiCal < 25) {
    category = "Normal Weight";
  } else if (bmiCal < 30) category = "Overweight";
  else {
    category = "obese";
  }

//   display the result 
  result.innerHTML = `Your BMI is : <span>${bmiCal}</span>. <br> Category: <span>${category}</span>`;
  result.style.color = "#000";


//   display the BMI and category result according to the below format  
  let resultSpan = result.querySelectorAll("span");
  resultSpan.forEach((item) => {
    if (bmiCal < 18.5) {
      item.style.color = "red";
    } else if (bmiCal < 25) {
      item.style.color = "green";
    } else {
      item.style.color = "red";
    }
  });
}
