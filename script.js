const brandInp=document.getElementById("brand")
const modelInp=document.getElementById("model")
const imageInp=document.getElementById("image")
const priceInp=document.getElementById("price")
const form=document.getElementById("add-form")
const button=document.getElementById("submitBtn")
let id=0
let clothes=[];
if (localStorage.getItem("clothes")) {
    clothes = JSON.parse(localStorage.getItem("clothes"));
} else {
   
  localStorage.setItem("clothes", JSON.stringify(clothes));
}
if(localStorage.getItem("id")){
    id=parseInt (localStorage.getItem("id"))
}
else{
    id=0
    localStorage.setItem("id",JSON.stringify(id))
}
class Outfits{
    constructor(brand,model,image,price){
        this.brand=brand
        this.model=model
        this.image=image
        this.price=price
        this.id=id
        id++
    }
}
button.addEventListener("click",(e)=>{
    e.preventDefault()
    let brandVal=brandInp.value
    let modelVal=modelInp.value
    let imageVal=imageInp.value
    let priceVal=priceInp.value

    const newOutfits=new Outfits(brandVal,modelVal,imageVal,priceVal)
 clothes.push(newOutfits)
 localStorage.setItem("clothes", JSON.stringify(clothes));

 brandInp.value=""
 modelInp.value="klassik"
imageInp.value=""
priceInp.value=""
})

