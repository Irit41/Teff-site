
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
 let image =  `http://127.0.0.1:5500/pics/whitetefbeg.jpg`
let  description = `משקל : 25 ק"ג `
let category = `קמחים`
let price = 300
let salePrice = 0
let product = new Product(code,name,image,category,description,price,salePrice)

products_arr.push(product)
code = `cr4`
image =  `http://127.0.0.1:5500/pics/beg.jpg`
description = `משקל : 50 ק"ג `
category = `קמחים`
price = 750
salePrice = 600

product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)
code = `ewer3`
name = `עוגיות טף חלבה`
image =  `http://127.0.0.1:5500/pics/cookies.jpg`
description = `משקל : 180 גרם `
category = `מאפים ועוגות`
price = 27
salePrice = 0
product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)

code =`asd2sdf`
name = `לחם טף`
image =  `http://127.0.0.1:5500/pics/bread.jpg`
description = `פרווה `
category = `מאפים ועוגות`
price = 12.90
salePrice = 10
product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)


code =`ee5`
name = `דייסה`
image = `http://127.0.0.1:5500/pics/deisa.jpg`
description = `תערובת מקמח טף להכנה מהירה `
category = `משקאות`
price = 29.50
salePrice = 0
product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)


code = `sfsdf1`
name = `בירה אתיופית (טלה - Tella)`
image = `http://127.0.0.1:5500/pics/tella.jpg`
description = `500 מ"ל`
category = `משקאות`
price = 34.90
salePrice = 0
product = new Product(code,name,image,category,description,price,salePrice)
products_arr.push(product)


code = `dpg8`
name = `עוגת שוקולד טף `
 image = `http://127.0.0.1:5500/pics/storecake.jpg`
 description = `משקל : 250 גרם`
 category = `מאפים ועוגות`
 price = 39.90
 salePrice = 31.90
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)


 code =`iyuiyi54646`
 name = `שק קמח טף (הזן האדום) `
 image = `http://127.0.0.1:5500/pics/redtype.jpg`
 description = `משקל : 11.34 ק"ג`
 category = `קמחים`
 price = 249.90
 salePrice = 199.90
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)


 code =`3424dsd`
 name = `קמח טף לבן `
 image = `http://127.0.0.1:5500/pics/smallkemah.jpg`
 description = `משקל : 1 ק"ג `
 category = `קמחים`
 price = `17.90`
 salePrice = 0
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)

 code = `555bg`
 name = `פוקאצות טף`
 image = `http://127.0.0.1:5500/pics/fukacha.jpg`
 description = `3 יחידות במארז `
 category = `מאפים ועוגות`
 price = 29.90
 salePrice = 0
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)

 code = `888s`
 name = `אינגרה (injera) `
 image = `http://127.0.0.1:5500/pics/injera.jpg`
 description = `10 יחידות בחבילה `
 category = `מאפים ועוגות`
 price = 29.90
 salePrice = 0
 product = new Product(code,name,image,category,description,price,salePrice)
 products_arr.push(product)


 code =`dgdfg999`
 name = `פנקייקים מקמח טף `
image = `http://127.0.0.1:5500/pics/teff-pancakes.jpg`
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
 
 
function printCartInfo(product,index){
  // let counter = 0;
  let str = `<li  class="list-group-item d-flex justify-content-between">
  <div class= "col-8">
      <h6 class="my-0">${product.name}</h6>
      <small class="text-muted">${product.description}</small>
  </div>
  <div class= "col-3">
  <span class="text-muted">${product.price} ₪</span>
 </div>
 <button   data-id="${index}" class="delprod" >X</button>
  </li>
 `
//  counter++;
return str ;
}
function showCartProducts() {
 let zover =0;
let ul = document.querySelector(`#cartInfo`)
  for (let i = 0; i < cart.length; i++) {
      ul.innerHTML+=printCartInfo(cart[i],i)
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