
const gridContainer = document.getElementById("grid-container");

// Loop attraverso i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  let result = "";
  
  
  if (i % 3 === 0) {
    result += "Fizz";
  }
  if (i %  5=== 0) {
    result += "Buzz";
  }
  
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.textContent = result || i;

  gridContainer.appendChild(gridItem);
}
