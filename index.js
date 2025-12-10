const params = new URLSearchParams(window.location.search);
const item = params.get("item");
const price = params.get("price");

document.getElementById("itemName").textContent = item;
document.getElementById("itemPrice").textContent = price;


