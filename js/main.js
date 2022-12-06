
var users = loadUsers()
var products_arr = JSON.parse(localStorage.getItem('products')) || createProducts()
var users_images = JSON.parse(localStorage.getItem('usersImages')) || []
var cart = JSON.parse(sessionStorage.getItem(`cart`)) || []
const checkboxExampleFilters = document.getElementById('checkbox-example-filters');
const radios2 = document.querySelectorAll(`.form-check-input`)
for (let i = 0; i < radios2.length; i++) {
 radios2[i].addEventListener(`click`,priceFilter)
  
}

  
const shipArray = [
  {
    name:`type2`,ship: [0,1]
  },
{

  name:`type3`,ship: [0,1,2]
},
{

  name:`type4`,ship: [0,1,2,3]
}
,
{

  name:`type5`,ship: [0,1,2,3,4]
}
]

//לולאה שתופסת את כל האינפוטים שיש להם קלאס איירדיו ומשייכת אירוע לחיצה עליהם 

const radios = document.querySelectorAll(`.iradio`)
for (let i = 0; i < radios.length; i++) {
radios[i].addEventListener(`click`,createtable)

}

if (document.getElementById("play")){

  var gameBoard = document.getElementById("play")

  gameBoard.addEventListener(`click`,show) 


}



if (document.querySelector(`#reg_form`)) 
{
  var cities_list = document.querySelector(`#cities`)
for (let i = 0; i < cities.length;i++) {
  let option = `<option >${cities[i].name}</option>`
  cities_list.innerHTML += option
 
}
document.querySelector(`#user_image`).addEventListener(`change`,SetImage);
document.querySelector(`#reg_form`).addEventListener(`submit`,regUser);

}


var login_user = JSON.parse(sessionStorage.getItem(`login_user`))
if (location.href.indexOf(`profile.html`)!=-1) {

  check()
document.querySelector(`#btn_edit`).addEventListener(`click`, updateUsersArray);
ShowUserInfo()
}

if (location.href.indexOf(`page11.html`)==-1 &&login_user==null && location.href.indexOf(`page1.html`)==-1 && location.href.indexOf(`page4.html`)==-1&&location.href.indexOf(`store.html`)==-1&&location.href.indexOf(`cart.html`)==-1) {
  
  location.href = `page4.html`
}

if (document.querySelector(`#Login`))
{
 
  document.querySelector(`#Login`).addEventListener(`submit`,loginUser);
}



if (location.href.indexOf(`admin.html`) != -1){
 var inputFeilds = document.querySelectorAll(`.input`)
var button = document.querySelector(`#submits`);
var arr = new Array();
var arr2 = new Array();
inputFeilds.forEach(inputFeild => inputFeild.addEventListener(`change`,inputFieldsCheck))
document.querySelector(`#reset`).addEventListener(`click`,clearAll)
document.querySelector(`#pro_form`).addEventListener(`submit`,addProduct)

}


if (JSON.parse(sessionStorage.getItem(`login_user`)) !== "admin" && location.href.indexOf(`store.html`) != -1)
{
 showProducts();
var btns = document.querySelectorAll(`.add-to-cart`)
btns.forEach(btn => btn.addEventListener(`click`,addToCart))
document.querySelector(`#cart-count`).innerHTML = cart.length


}



if (location.href.indexOf(`adminstore.html`) != -1)
{
  showProductsAdmin();
var btns2 = document.querySelectorAll(`.add-to-cart`)
btns2.forEach(btn => btn.addEventListener(`click`,addToCart))
document.querySelector(`#cart-count`).innerHTML = cart.length
let btnsD = document.querySelectorAll(`.trash`)
btnsD.forEach(btn => btn.addEventListener(`click`,proDelete))


var products_Edit = document.querySelectorAll(`.admin-pro-edit`)
products_Edit.forEach(productEdit => productEdit.addEventListener(`click`,productsEdit))
}
if(location.href.indexOf(`products-edit-form.html`) != -1){

  document.querySelector(`#addpro_form2`).addEventListener(`submit`,Edit);
 


}
if (location.href.indexOf(`cart.html`) != -1)
{
  if(cart.length === 0){
    document.querySelector(`.container`).innerHTML = `<div class ="mt-4 text-center"> <h1>סל הקניות שלך ריק<h1>
    <button id = "backto" type="button" class="btn btn-secondary mt-4">חזרה לחנות >> </button></div>`
    document.querySelector(`#backto`).addEventListener(`click`,() => {
      if (login_user =="admin") {
        location.href=`adminstore.html`;
      }else location.href=`store.html`;
        })
  }

showCartProducts()
let cart_products = document.querySelectorAll(`.delprod`)
cart_products.forEach(cart_product => cart_product.addEventListener(`click`, productDelete))

}




if (document.querySelector(`#admin_page`)) {

 showUsersTable()
 let btnsU = document.querySelectorAll(`.update`)
 btnsU.forEach(btn => btn.addEventListener(`click`,updateUsersArray))
 let btnsD = document.querySelectorAll(`.delete`)
 btnsD.forEach(btn => btn.addEventListener(`click`, userDelete))



}

 if (document.querySelector(`#edit_form`) && login_user !=null) {
  var cities_list2 = document.querySelector(`#cities_2`)
  for (let i = 0; i < cities.length;i++) {
    let option = `<option >${cities[i].name}</option>`
    cities_list2.innerHTML += option
  }
  document.querySelector(`#user_image_edit`).addEventListener(`change`,imageEdit)
  document.querySelector(`#edit_form`).addEventListener(`submit`,updateCurrentUser)
 
 }


