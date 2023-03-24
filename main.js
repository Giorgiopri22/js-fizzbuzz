
const gridContainer = document.getElementById("grid-container");

// Loop attraverso i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  let result = "";
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);
    
  if (i % 3 === 0) {
    result += "Fizz";
   // gridItem.classList.add("Fizz");
  }
  if (i %  5=== 0) {  
    result += "Buzz";
    //gridItem.classList.add("Buzz");
  }
  if(result=="FizzBuzz"){
    //gridItem.classList.add("FizzBuzz")
  }
  if(result!=""){
      gridItem.classList.add(result);
  }
  
  gridItem.textContent = result || i ;
}
