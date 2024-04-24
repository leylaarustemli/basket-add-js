const row=document.getElementById("row")
let clothes=[];
if (localStorage.getItem("clothes")) {
    clothes = JSON.parse(localStorage.getItem("clothes"));
} else {
   
  localStorage.setItem("clothes", JSON.stringify(clothes));
}
let basket=[];
if (localStorage.getItem("basket")) {
    basket = JSON.parse(localStorage.getItem("basket"));
} else {
   
  localStorage.setItem("basket", JSON.stringify(basket));
}
function renderUI(){
    innerHTML=""
    for (let i = 0; i < clothes.length; i++) {
        innerHTML+=` <div class="card p-0" style="width: 18rem;">
        <img height="280px" src="${clothes[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${clothes[i].price}$</h5>
          <p class="card-text">${clothes[i].brand}-${clothes[i].model}</p>
          <button onclick=" deleteHandler(${clothes[i].id})"  class="btn btn-danger">delete</button>
          <button onclick=" addBasket(${clothes[i].id})"  class="btn btn-primary">add</button>
        </div>
      </div>
        `
    }
    row.innerHTML=innerHTML
}


function deleteHandler(id){
    let target =clothes.find((data)=>data.id==id)
   let targetOfIndex=clothes.indexOf(target)
   clothes.splice(targetOfIndex,1)
   localStorage.setItem("clothes",JSON.stringify(clothes))
   renderUI()
}



function addBasket(id){
    let basketItem = basket.find((x) => x.item.id == id);
  if (!basketItem) {
    let target = clothes.find((basket) => basket.id == id);
    let newBasketItem = {
      item: target,
      count: 1,
      totalPrice: target.price,
    };
    basket.push(newBasketItem);
    localStorage.setItem("basket", JSON.stringify(basket));
  } else {
    basketItem.count++;
    basketItem.totalPrice = basketItem.count * basketItem.item.price ;
    localStorage.setItem("basket", JSON.stringify(basket));
  }
}
renderUI()
