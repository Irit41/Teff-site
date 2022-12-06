
var products_arr = new Array()

function priceFilter(event) {
 
  let element = event.target.id;
  let productsArr = new Array;
 if (element == "0") 
    {
      
      productsArr =  products_arr.filter((item) => { return item.price <= 100;})


    }
    if (element == "100") 
    {
      productsArr =  products_arr.filter((item) => { return item.price >= 100 && item.price <=250;})

      console.log(productsArr)
      
    }
  
    if (element == "250") 
    {
      productsArr =  products_arr.filter((item) => { return item.price >= 250 && item.price <=500;})
     
    }
  
    if (element == "500") 
    {
      productsArr =  products_arr.filter((item) => { return  item.price >= 500;})
     
      
    }
    let div = document.querySelector(`#pro_area`)
    div.innerHTML = " ";
    for (let i = 0; i <  productsArr.length; i++) {
        div.innerHTML+=printProduct( productsArr[i])
        
    }
    
let categorybtns = document.querySelectorAll(`.add-to-cart`)
categorybtns.forEach(btn => btn.addEventListener(`click`,addToCart))
}

function productDelete(event) {
  let current = event.target.dataset.id;
  cart.splice(current,1)
  sessionStorage.removeItem(`cart`);
 sessionStorage.setItem(`cart`,JSON.stringify(cart))
 location.reload();

}


function createProducts(){
 
 let code = `a22a`
 let name = `שק קמח טף (הזן הלבן)`
 let image =  `https://d2j6dbq0eux0bg.cloudfront.net/images/15647077/944678087.jpg`
let  description = `משקל : 25 ק"ג `
let category = `קמחים`
let price = 300
let salePrice = 0
let product = new Product(code,name,image,category,description,price,salePrice)

products_arr.push(product)
code = `cr4`
image =  `https://d2j6dbq0eux0bg.cloudfront.net/images/15647077/947157182.jpg`
description = `משקל : 50 ק"ג `
category = `קמחים`
price = 750
salePrice = 600

product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)
code = `ewer3`
name = `עוגיות טף חלבה`
image =  `https://accvaloreti.azureedge.net/images/40b66673-72de-4265-85d5-59365dd46c4c_500.jpg`
description = `משקל : 180 גרם `
category = `מאפים ועוגות`
price = 27
salePrice = 0
product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)

code =`asd2sdf`
name = `לחם טף`
image =  `https://accvaloreti.azureedge.net/images/3e7bc222-5275-4047-a0c5-a6f10cd6ea55_500.jpg`
description = `פרווה `
category = `מאפים ועוגות`
price = 12.90
salePrice = 10
product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)


code =`ee5`
name = `דייסה`
image = `https://static.wixstatic.com/media/d3438e_810ba1699d524947b79d7b7708af1ab9~mv2.jpeg/v1/fill/w_450,h_531,al_c,q_90/d3438e_810ba1699d524947b79d7b7708af1ab9~mv2.webp`
description = `תערובת מקמח טף להכנה מהירה `
category = `משקאות`
price = 29.50
salePrice = 0
product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)


code = `sfsdf1`
name = `בירה אתיופית (טלה - Tella)`
image = `http://cdn.shopify.com/s/files/1/1791/3419/products/Tej-Addis-Abeba1_1200x1200.jpg?v=1595026584`
description = `500 מ"ל`
category = `משקאות`
price = 34.90
salePrice = 0
product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)


code = `dpg8`
name = `עוגת שוקולד טף `
 image = `https://www.essyroz.com/wp-content/uploads/2020/06/IMG_1243-1-1920x1817.jpg`
 description = `משקל : 250 גרם`
 category = `מאפים ועוגות`
 price = 39.90
 salePrice = 31.90
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)


 code =`iyuiyi54646`
 name = `שק קמח טף (הזן האדום) `
 image = `https://teffco.com/wp-content/uploads/2016/08/25lb-flour-brown-1024x1024.jpg`
 description = `משקל : 11.34 ק"ג`
 category = `קמחים`
 price = 249.90
 salePrice = 199.90
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)


 code =`3424dsd`
 name = `קמח טף לבן `
 image = `https://www.nizat.com/ProductsImages/thumbs/M934151_20122020124111_250_250.jpg`
 description = `משקל : 1 ק"ג `
 category = `קמחים`
 price = `17.90`
 salePrice = 0
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)

 code = `555bg`
 name = `פוקאצות טף`
 image = `https://accvaloreti.azureedge.net/images/34956c29-b139-4eb5-bd33-dc50efc7ca5b_500.jpg`
 description = `3 יחידות במארז `
 category = `מאפים ועוגות`
 price = 29.90
 salePrice = 0
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)

 code = `888s`
 name = `אינגרה (injera) `
 image = `http://127.0.0.1:5500/tmunott/injera.jpg`
 description = `10 יחידות בחבילה `
 category = `מאפים ועוגות`
 price = 29.90
 salePrice = 0
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)


 code =`dgdfg999`
 name = `פנקייקים מקמח טף `
image = `data:image/jpeg;base64,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`
 description = `7 יחידות בחבילה `
    category = `מאפים ועוגות`
    price = 45
    salePrice =  38
    product = new Product(code,name,image,category,description,price,salePrice)
    products_arr.push(product)



localStorage.setItem(`products`, JSON.stringify(products_arr))

return products_arr;
}






function addProduct(event) {
  
    event.preventDefault()

 let code = document.querySelector(`#code`).value
let name = document.querySelector(`#name`).value
let image = document.querySelector(`#image`).value
let description = document.querySelector(`#description`).value
let category = document.querySelector(`#category`).value
let  price = document.querySelector(`#price`).value
let salePrice = document.querySelector(`#salePrice`).value
if (salePrice == null) {
  salePrice = 0
}
if (category == 1) {
  category = `קמחים`
}else if (category == 2){
  category = `מאפים ועוגות`
}
else if (category == 3){
  category = `משקאות`
}

for (let i = 0; i < code.length; i++) {
  for (let j = 0; j < hebcheack.length; j++) {
     if (code[i]===hebcheack[j] ) {
       alert(`קוד לא תקין`)  
       return
     }
      
  }
  for (let k = 0; k < specials.length; k++) {
    if(code[i]===specials[k]){
      alert(`קוד לא תקין`)  
      return
    }
  
  }
    
}
for (let i = 0; i < name.length; i++) {
if(parseInt(name[i])){
  alert(`שם המוצר לא תקין`)  
  return
}

if(isNaN(price) || price <= 0 )
   {
    alert(`מחיר לא תקין `)  
    return
   }
}
 if (salePrice!=="" || salePrice!==null) {
   if(isNaN(salePrice))
   {
    alert(`מחיר מבצע לא תקין`)  
    return
   }
   if (salePrice>=price || salePrice < 0) {
    alert(`מחיר מבצע לא תקין`)  
    return
   }
 }



let product = new Product (code,name,image,category,description,price,salePrice)
products_arr.push(product)
localStorage.setItem(`products`,JSON.stringify(products_arr)) 
 alert(`המוצר נוסף בהצלחה`)




}


 function printProduct(product){
    str =`
   <div class=" col-md-4 mt-5>
<div style="width: 17rem;" class="card border-0">
 <img  style="height: 350px;" src="${product.image}" class="card-img-top"/>

 <div class="card-body">
 <span style="font-size:11px;">${product.category}</span></h5>
   <h5 class="card-title">${product.name}</h5>
   <p class="card-text">${product.description} </p>
  <p class="card-text">
  <p class="text-decoration-line-through"> ${product.price} ₪ </p>
    <strong >מחיר מבצע :  ${product.salePrice} ₪ </strong></p>

   <button  data-product='${JSON.stringify(product)}' class="text-center btn btn-warning add-to-cart">הוספה לסל</button>
 </div>
</div>
</div>

    ` 
    if (product.salePrice === 0||product.salePrice ===null||product.salePrice ==="") {
      str = str.replace(`<strong >מחיר מבצע :  ${product.salePrice} ₪ </strong>`,`<br> `)
      str = str.replace(`<p class="text-decoration-line-through"> ${product.price} ₪ </p>`,`<p><strong> ${product.price} ₪ </strong></p>`)
     
    }
    
    return str
}
var counter = 0;
function printProductAdmin(product){
  
  str =`
 <div class="col-md-3 mt-3 >
<div style="width: 17rem;" class="card border-0">
<img  style="height: 350px;" src="${product.image}" class="card-img-top"/>

<div class="card-body">
<span style="font-size:11px;">${product.category}</span></h5>
 <h5 class="card-title">${product.name}</h5>
 <p class="card-text">${product.description} </p>
<p class="card-text">
<p class="text-decoration-line-through"> ${product.price} ₪ </p>
  <strong >מחיר מבצע :  ${product.salePrice} ₪ </strong></p>
  <button  class="text-center btn btn-dark"><i class="trash far fa-trash-alt" data-id="${counter}"></i></button>
 <button  class="text-center btn btn-warning "><i  data-product='${JSON.stringify(product)}' class="fas fa-shopping-bag add-to-cart"></i></button>
 <button  class="text-center btn btn-danger"><i data-product='${JSON.stringify(product)}' class="admin-pro-edit far fa-edit"></i></button>
</div>
</div>
</div>

  ` 
  counter++;
  if (product.salePrice === 0||product.salePrice ===null||product.salePrice ==="") {
    str = str.replace(`<strong >מחיר מבצע :  ${product.salePrice} ₪ </strong>`,`<br> `)
    str = str.replace(`<p class="text-decoration-line-through"> ${product.price} ₪ </p>`,`<p><strong> ${product.price} ₪ </strong></p>`)
   
  }
  
  return str
}

function showProductsAdmin() {
 
  let div = document.querySelector(`#pro_admin_area`)
  for (let i = 0; i < products_arr.length; i++) {
      div.innerHTML+=printProductAdmin(products_arr[i])
      
  }
  
}

function showProducts() {
 
    let div = document.querySelector(`#pro_area`)
    for (let i = 0; i < products_arr.length; i++) {
        div.innerHTML+=printProduct(products_arr[i])
        
    }
    
}


function hideAndShow() {
  
  var x = document.getElementById("addpro_form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function productsEdit(event){
  
let btn = event.target 
  let curproduct = JSON.parse(btn.dataset.product);
  for (let i = 0; i < products_arr.length; i++) {
    if (curproduct.id == products_arr[i].id) {
     sessionStorage.setItem(`product`,JSON.stringify(products_arr[i]))
     break;
    }
    
  }
 
 location.href = `products-edit-form.html`
 




}





function proDelete(event){
  let current = event.target.dataset.id;

  products_arr.splice(current,1)
  localStorage.setItem(`products`,JSON.stringify(products_arr)) 
 location.reload();
  
  
}





 function Edit(event){
   event.preventDefault();
let code = document.querySelector(`#code2`).value
  let name = document.querySelector(`#name2`).value
  let image = document.querySelector(`#image2`).value
  let description = document.querySelector(`#description2`).value
  let category = document.querySelector(`#category2`).value
  let  price = document.querySelector(`#price2`).value
  let salePrice = document.querySelector(`#salePrice2`).value
  if (salePrice == null) {
    salePrice = 0
  }
  if (category == 1) {
    category = `קמחים`
  }else if (category == 2){
    category = `מאפים ועוגות`
  }
  else if (category == 3){
    category = `משקאות`
  }
  
  for (let i = 0; i < code.length; i++) {
    for (let j = 0; j < hebcheack.length; j++) {
       if (code[i]===hebcheack[j] ) {
         alert(`קוד לא תקין`)  
         return
       }
        
    }
    for (let k = 0; k < specials.length; k++) {
      if(code[i]===specials[k]){
        alert(`קוד לא תקין`)  
        return
      }
    
    }
      
  }
  for (let i = 0; i < name.length; i++) {
  if(!isNaN(name[i])){
    alert(`שם המוצר לא תקין`)  
    return
  }
  if(isNaN(price) || price < 0 )
     {
      alert(`מחיר לא תקין `)  
      return
     }
  }
   if (salePrice!=="" || salePrice!==null) {
     if(isNaN(salePrice))
     {
      alert(`מחיר מבצע לא תקין`)  
      return
     }
     if (salePrice>=price || salePrice < 0) {
      alert(`מחיר מבצע לא תקין`)  
      return
     }
   }
  let curproduct =  JSON.parse(sessionStorage.getItem(`product`));
  let tempProduct = new Product (curproduct.id,curproduct.name,curproduct.image,curproduct.category,curproduct.description,curproduct.price,curproduct.salePrice)
   
  for (let i = 0; i < products_arr.length; i++) {
    if (tempProduct.id === products_arr[i].id &&tempProduct.name ===  products_arr[i].name) {
      products_arr[i]=  new Product(code,name,image,category,description,price,salePrice)
      localStorage.setItem(`products`,JSON.stringify(products_arr)) 
      break;
    }
  }
   
 
 location.href =`adminstore.html`
}
 
 
function printCartInfo(product){
  let counter = 0;
  let str = `<li data-id="${counter}" class="list-group-item d-flex justify-content-between">
  <div class= "col-8">
      <h6 class="my-0">${product.name}</h6>
      <small class="text-muted">${product.description}</small>
  </div>
  <div class= "col-3">
  <span class="text-muted">${product.price} ₪</span>
 </div>
 <button class="delprod"><i class="fas fa-times"></i></button>
  </li>
 `
 counter++;
return str ;
}
function showCartProducts() {
 let zover =0;
let ul = document.querySelector(`#cartInfo`)
  for (let i = 0; i < cart.length; i++) {
      ul.innerHTML+=printCartInfo(cart[i])
      zover+=parseFloat(cart[i].price) ;
  }
  ul.innerHTML+=  `<li class="list-group-item d-flex justify-content-between">
  <span> סה"כ </span>
  <strong>${zover.toFixed(2)} ₪ </strong>
</li> `
}








function addToCart(event) {
    let btn = event.target
    let product = JSON.parse(btn.dataset.product)
    cart.push(product)
    sessionStorage.setItem(`cart`,JSON.stringify(cart))
    document.querySelector(`#cart-count`).innerHTML = cart.length
}

 function showFlours(){
   
  let productsArr = new Array;
  productsArr =  products_arr.filter((item) => { return  item.category == "קמחים";})
  let div = document.querySelector(`#pro_area`)
  div.innerHTML = " ";
  for (let i = 0; i <  productsArr.length; i++) {
      div.innerHTML+=printProduct( productsArr[i])
      
  }
  
document.querySelectorAll(`.add-to-cart`)
let categorybtns = document.querySelectorAll(`.add-to-cart`)
categorybtns.forEach(btn => btn.addEventListener(`click`,addToCart))
 }
 function showCakes(){
  let productsArr = new Array;
  productsArr =  products_arr.filter((item) => { return  item.category == "מאפים ועוגות";})
  let div = document.querySelector(`#pro_area`)
  div.innerHTML = " ";
  for (let i = 0; i <  productsArr.length; i++) {
      div.innerHTML+=printProduct( productsArr[i])
      
  }
  

let categorybtns = document.querySelectorAll(`.add-to-cart`)
categorybtns.forEach(btn => btn.addEventListener(`click`,addToCart))
 }
 
 
 function showDrinks(){
  let productsArr = new Array;
  productsArr =  products_arr.filter((item) => { return  item.category == "משקאות";})
  let div = document.querySelector(`#pro_area`)
  div.innerHTML = " ";
  for (let i = 0; i <  productsArr.length; i++) {
      div.innerHTML+=printProduct( productsArr[i])
      
  }
  

let categorybtns = document.querySelectorAll(`.add-to-cart`)
categorybtns.forEach(btn => btn.addEventListener(`click`,addToCart))
 }


 function inputFieldsCheck(event) {


let curelement = event.target.id;
for (let i = 0; i < arr2.length; i++) {
if (curelement==arr2[i]) {
     return;
}
    
}
  arr2.push(curelement)
  let curvalue = event.target.value;
  if (curvalue!=="") {
    arr.push(" ");
   
  }
  if(arr.length == 6){
    button.disabled = false;
    
    arr =[];
    arr2 =[];
  }
}


function clearAll() {
  arr =[];
  arr2 =[];
location.reload()
}