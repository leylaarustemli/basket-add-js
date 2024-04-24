const tbody=document.getElementById("tbody")
let basket=[];
if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"));
} else {
   
  localStorage.setItem("basket", JSON.stringify(basket));
}
 function renderUI(basket){
    innerHTML=""
    for (let i = 0; i < basket.length; i++) {
        innerHTML+=`<tr>
        
        <td><img width="100px" src="${basket[i].item.image}" alt=""></td>
        <td>${basket[i].item.brand}</td>
        <td>${basket[i].totalPrice}</td>
        <td>${basket[i].count}</td>

        <td><button class="btn btn-danger">Delete</button></td>
      </tr>`
        
    }
    tbody.innerHTML=innerHTML
 }
 renderUI(basket)