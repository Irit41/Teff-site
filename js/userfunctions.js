const specials = `-+/.!@#$%^&*()_"=`
const hebcheack = `אבגדהוזחטיכלמנסעפצקרשתףךץםן`




//פונקציה להצגת תמונה לאחר בחירתה מהמחשב
function SetImage(event) {
  //הקובץ שנבחר
  let file = event.target.files[0];
  console.log(file)
  //אובייקט המסוגל לקרוא קבצים מתוך המחשב
  let reader = new FileReader()

  //שיוך אירוע של טעינה
  //ברגע שהאובייקט מוכן לפעולה - תקרא את הקובץ הרלוונטי
  reader.onload = () => {
      //תתפוס את האלמנט של התמונה 
     let img =  document.querySelector(`#user_image`)
     img.src = reader.result
      //.style="display:none"
      
      //תציג את המידע של התמונה באלמנט
     sessionStorage.setItem(`profileImage`,reader.result)
     users_images.push(img.src)
     localStorage.setItem(`usersImages`,JSON.stringify(users_images))
  }

  //הפעלה של קורא הקבצים
  reader.readAsDataURL(file)
}










function imageEdit(event) {
  //הקובץ שנבחר
  let file = event.target.files[0];
  console.log(file)
  //אובייקט המסוגל לקרוא קבצים מתוך המחשב
  let reader = new FileReader()

  //שיוך אירוע של טעינה
  //ברגע שהאובייקט מוכן לפעולה - תקרא את הקובץ הרלוונטי
  reader.onload = () => {
      //תתפוס את האלמנט של התמונה 
     let img =  document.querySelector(`#user_image_edit`)
     img.src = reader.result
      //.style="display:none"
      
      //תציג את המידע של התמונה באלמנט
     sessionStorage.setItem(`profileImage`,img.src)
     localStorage.setItem(`userNewImage`,JSON.stringify(img.src))
     
  }
  
  //הפעלה של קורא הקבצים
  reader.readAsDataURL(file)
}



function loadUsers() {
    let tempArr = JSON.parse(localStorage.getItem(`users`)) 
    if (tempArr == null)
    return new Array() 
    let data = new Array() 
  for (let i = 0; i < tempArr.length; i++) {
    let tempUser = tempArr[i]
    let user = new User(tempUser.first_name,tempUser.last_name,tempUser.birth_date,tempUser.city,tempUser.street,tempUser.house_num,tempUser.user_email,tempUser.user_name,tempUser.user_password )
    data.push(user)
    
  }
    return data
  }
 

 
  function regUser(event) {
  event.preventDefault()
let first_name = document.querySelector(`#first_name`).value
let last_name = document.querySelector(`#last_name`).value
let birth_date = document.querySelector(`#birth_date`).value
let city = document.querySelector(`#city`).value
let street = document.querySelector(`#street`).value
let house_num  = document.querySelector(`#house_num`).value
let user_email = document.querySelector(`#user_email`).value
let img = document.querySelector(`#profile_img`).src
let user_name = document.querySelector(`#user_name`).value
let user_password = document.querySelector(`#user_password`).value
let user_password_con = document.querySelector(`#user_password_con`).value

for (let i = 0; i < user_name.length; i++) {
  for (let j = 0; j < hebcheack.length; j++) {
     if (user_name[i]===hebcheack[j] ) {
       alert(`שם משתמש לא תקין`)  
       return
     }
      
  }
    
}
if  (user_name.length >60) 
{
    alert(`שם משתמש ארוך מידי`)
    return
}
if (user_password.length < 7 || user_password.length > 12) {
    alert(`הסיסמא קצרה / ארוכה מידי`)
    return
}
 
let flag1 =false
let flag2 =false 
let flag3 = false
for (let i = 0; i < user_password.length; i++) {
   for (let j = 0; j < specials.length; j++) {
      if (user_password[i]===specials[j]) {
        flag1 = true  
      }
       
   }
   if (user_password[i]>=0 &&user_password[i]<=9) {
    flag2 = true 
   }
   if (user_password[i]>=`A` &&user_password[i]<=`Z`) {
    flag3 = true
   }
}
if (!flag1 || !flag2 || !flag3) {
    alert(`סיסמא לא תקינה`)
     return
}






   if (user_password != user_password_con) {
       alert(`הסיסמאות לא תואמות`)
       return
   }
 

for (let i = 0; i < first_name.length; i++) {
  if (first_name[i] >= 0 && first_name[i] <= 9) {
    alert(`יש להזין בשם משתמש טקסט בלבד`)
    return
  }
 for (let j = 0; j < specials.length; j++) {
   if (first_name[i]===specials[j]) {
    alert(`יש להזין בשם משתמש טקסט בלבד`)
    return
   }
  
   
 }
  
}
for (let i = 0; i < last_name.length; i++) {
  if (last_name[i]>=0 && last_name[i]<=9) {
    alert(`יש להזין בשם הפרטי טקסט בלבד`)
    return
  }
 for (let j = 0; j < specials.length; j++) {
   if (last_name[i]===specials[j]) {
    alert(`יש להזין בשם המשפחה טקסט בלבד`)
    return
   }
  
   
 }
  
}
let str = user_email.substring(user_email.length-3)
if (str != "com") {
  alert(`אימייל לא תקין`)
    return
}
let counter = 0
for (let i = 0; i < user_email.length; i++) {
  if (user_email[i]=== `@`) {
    counter++;
  }
  for (let j = 0; j < hebcheack.length; j++) {
    if (user_email[i]=== hebcheack[j])
    {
      alert(`אימייל לא תקין`)
      return
    }
    
  }
if(counter>2)
{
  alert(`אימייל לא תקין`)
  return
}
  
}
 let today = new Date ()
let parts = birth_date.split("-");
if (parseInt(today.getFullYear()) < parseInt(parts[0])) {
  alert(`תאריך לידה לא תקין`)

  return ;
}
if (parseInt(today.getFullYear()) == parseInt(parts[0])) {
  if (parseInt(parts[1]) > parseInt(today.getMonth() + 1)) {
    alert(`תאריך לידה לא תקין`)
    return
  }
  if (parseInt(parts[1]) == parseInt(today.getMonth() + 1) && parseInt(parts[2]) > parseInt(today.getDate())) {
    alert(`תאריך לידה לא תקין`)
    return ;
  }
 

}
if (parseInt(parts[1])===parseInt(today.getMonth() + 1) && parseInt(parts[2])===parseInt(today.getDate())){
  if (parseInt(today.getFullYear()) == parseInt(parts[0])) {
    alert(`תאריך לידה לא תקין`)
  
    return ;
  }
  if (parseInt(today.getFullYear()) - 120 >= parseInt(parts[0])){
    alert(`תאריך לידה לא תקין`)
   return;
  }
 
}

let flag4 
for (let i = 0; i < street.length; i++) {
  flag4 = false;
  for (let j = 0; j < hebcheack.length; j++) {
    
    if (street[i]=== hebcheack[j] || street[i]=== " " ) {
  flag4 = true;
  break;
    }
  }
 
  if (!flag4) {
    alert(`יש להקליד שם של רחוב בעברית בלבד`)
  return
  }
}
if (house_num < 1 || isNaN(house_num)) {
  alert(`מספר בית לא תקין`)
  return
}


  let user = new User (first_name, last_name,birth_date,city,street,house_num, user_email,user_name,user_password)
let flag5 =false
   for (let i = 0; i <users.length; i++) {
  
  if (users[i].user_email == user_email)
   {
     flag5 = true;
     break;
    
   }
   
   }
   if (flag5) {
    
    alert(`כתובת המייל כבר קיימת `)
    return;
   }
  
    else{
   users.push(user)
   users_images.push(img)
   
   localStorage.setItem(`users`,JSON.stringify(users))
   localStorage.setItem(`users_images`, JSON.stringify(users_images))
   
  location.href = `page11.html`
    
   }
  
  
  }
 function loginUser(event) {
  event.preventDefault()
  let user_name = document.querySelector(`#userName`).value
let user_password = document.querySelector(`#userPassword`).value
if (user_name === `admin` && user_password === `admin1234admin`) {
 
  sessionStorage.setItem(`login_user`,JSON.stringify(user_name))
   location.href = `admin.html`
   return;
  
}

for (let i = 0; i < user_name.length; i++) {
  for (let j = 0; j < hebcheack.length; j++) {
     if (user_name[i]===hebcheack[j] ) {
       alert(`שם משתמש לא תקין`)  
       return
     }
      
  }
    
}
if  (user_name.length >60) 
{
    alert(`שם משתמש ארוך מידי`)
    return
}
if (user_password.length < 7 || user_password.length > 12) {
    alert(`הסיסמא קצרה / ארוכה מידי`)
    return
}
let flag1 =false
let flag2 =false 
let flag3 = false
for (let i = 0; i < user_password.length; i++) {
   for (let j = 0; j < specials.length; j++) {
      if (user_password[i]===specials[j]) {
        flag1 = true  
      }
       
   }
   if (user_password[i]>=0 &&user_password[i]<=9) {
    flag2 = true 
   }
   if (user_password[i]>=`A` &&user_password[i]<=`Z`) {
    flag3 = true
   }
}
if (!flag1 || !flag2 || !flag3) {
    alert(`סיסמא לא תקינה`)
     return
}

   let user = users.filter((item)=> {return item.user_name === user_name})
   if (user.length == 0) {
     alert(`המשתמש לא קיים במערכת`)
     return;
   }
   user = user[0]

  
   if (user.user_password === user_password) {
     sessionStorage.setItem(`login_user`,JSON.stringify(user))
     location.href = `profile.html`
   }else
   {
     alert(`פרטי הזיהוי שגויים`)
     return
   }
 }
function showUsersTable() {
 let table = ``
let count = 0;
 let users_list = document.querySelector(`#admin_page`)
 for (let i = 0; i < users.length;i++) {
    let temp = users[i];
    let tempPic = users_images[i];
     table+=`<tr>
     
    <td colspan="2"><img src="${tempPic}" width="70" height="50"class="rounded-circle ms-2"> ${temp.user_name}</td>
    <td>${temp.getFullName()}</td>
    <td>${temp.getBirthdate()}</td>
   <td>${temp.street} ${temp.house_num}, ${temp.city} </td>
    <td>${temp.user_email}</td> 
    <td><button class="update"> <i data-id="${count}" class="fas fa-pen"></i></button></td> 
    <td><button class="delete"><i data-id="${count}" class="fas fa-trash-alt"></i></button></td> 
   
   
   </tr>`
   count++;
 }
 

 users_list.innerHTML += table
console.log(users)
 
}

function userDelete(event) {
  let current = event.target.dataset.id;
  users.splice(current,1)
  localStorage.removeItem(`users`);
 localStorage.setItem(`users`,JSON.stringify(users))
 localStorage.removeItem(`users_images`);
 users_images.splice(current,1)
 localStorage.setItem(`users_images`,JSON.stringify(users))
 location.reload();

}

function updateUsersArray(event) {
  current = event.target.dataset.id;
  localStorage.setItem(`user`,JSON.stringify(users[current]))
  localStorage.setItem(`image`,JSON.stringify(users_images[current]))
  location.href = `userEditDetails.html`


}


function  ShowUserInfo() {
 let tempUser = new User(login_user.first_name,login_user.last_name,login_user.birth_date,login_user.city,login_user.street,login_user.house_num,login_user.user_email,login_user.user_name,login_user.user_password )
  let div = document.querySelector(`#profile_user_details`)
  div.innerHTML = `
      <h1 style="text-align: center;" class=" display-5 fw-bold lh-1 mb-3"> שלום  ${tempUser.user_name}</h1><br>
                  <p class=" ms-3 lead"><i class="far fa-user"></i> ${tempUser.getFullName()}<br><br><i class="fas fa-map-marker-alt"></i> ${tempUser.street}  ${tempUser.house_num}, ${tempUser.city}<br><br><i class="fas fa-birthday-cake"></i> ${tempUser.getBirthdate()}<br><br><i class="fas fa-at"></i> ${tempUser.user_email}</p>
  `
}






function check() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].user_name == login_user.user_name)
    document.querySelector(`#pro_img`).src = users_images[i];
  }
}

function clearses() {
  sessionStorage.clear();
 location.href = `page1.html`;
}
function updateCurrentUser(event) {
  event.preventDefault()
  let first_name = document.querySelector(`#first_name2`).value
  let last_name = document.querySelector(`#last_name2`).value
  let birth_date = document.querySelector(`#birth_date2`).value
  let city = document.querySelector(`#city2`).value
  let street = document.querySelector(`#street2`).value
  let house_num  = document.querySelector(`#house_num2`).value
  let user_email = document.querySelector(`#user_email2`).value
 let user_name = document.querySelector(`#user_name2`).value
  let user_password = document.querySelector(`#user_password2`).value
  let user_password_con = document.querySelector(`#user_password_con2`).value
  for (let i = 0; i < user_name.length; i++) {
    for (let j = 0; j < hebcheack.length; j++) {
       if (user_name[i]===hebcheack[j] ) {
         alert(`שם משתמש לא תקין`)  
         return
       }
        
    }
      
  }
  if  (user_name.length >60) 
  {
      alert(`שם משתמש ארוך מידי`)
      return
  }
  if (user_password.length < 7 || user_password.length > 12) {
      alert(`הסיסמא קצרה / ארוכה מידי`)
      return
  }
   
  let flag1 =false
  let flag2 =false 
  let flag3 = false
  for (let i = 0; i < user_password.length; i++) {
     for (let j = 0; j < specials.length; j++) {
        if (user_password[i]===specials[j]) {
          flag1 = true  
        }
         
     }
     if (user_password[i]>=0 &&user_password[i]<=9) {
      flag2 = true 
     }
     if (user_password[i]>=`A` &&user_password[i]<=`Z`) {
      flag3 = true
     }
  }
  if (!flag1 || !flag2 || !flag3) {
      alert(`סיסמא לא תקינה`)
       return
  }
   if (user_password != user_password_con) {
         alert(`הסיסמאות לא תואמות`)
         return
     }
  
  
  for (let i = 0; i < first_name.length; i++) {
    if (first_name[i] >= 0 && first_name[i] <= 9) {
      alert(`יש להזין בשם משתמש טקסט בלבד`)
      return
    }
   for (let j = 0; j < specials.length; j++) {
     if (first_name[i]===specials[j]) {
      alert(`יש להזין בשם משתמש טקסט בלבד`)
      return
     }
    
     
   }
    
  }
  for (let i = 0; i < last_name.length; i++) {
    if (last_name[i]>=0 && last_name[i]<=9) {
      alert(`יש להזין בשם הפרטי טקסט בלבד`)
      return
    }
   for (let j = 0; j < specials.length; j++) {
     if (last_name[i]===specials[j]) {
      alert(`יש להזין בשם המשפחה טקסט בלבד`)
      return
     }
    
     
   }
    
  }
  let str = user_email.substring(user_email.length-3)
  if (str != "com") {
    alert(`אימייל לא תקין`)
      return
  }
  let counter = 0
  for (let i = 0; i < user_email.length; i++) {
    if (user_email[i]=== `@`) {
      counter++;
    }
    for (let j = 0; j < hebcheack.length; j++) {
      if (user_email[i]=== hebcheack[j])
      {
        alert(`אימייל לא תקין`)
        return
      }
      
    }
  if(counter>2)
  {
    alert(`אימייל לא תקין`)
    return
  }
    
  }
  let today = new Date();
  let parts = birth_date.split("-");
  if (parseInt(today.getFullYear()) == parseInt(parts[0])) {
    if (parseInt(parts[1]) > parseInt(today.getMonth() + 1)) {
      alert(`תאריך לידה לא תקין`)
      return
    }
    if (parseInt(parts[1]) == parseInt(today.getMonth() + 1) && parseInt(parts[2]) > parseInt(today.getDate())) {
      alert(`תאריך לידה לא תקין`)
      return 
    }
   
  
  }
  if (parseInt(parts[1])===parseInt(today.getMonth() + 1) && parseInt(parts[2])===parseInt(today.getDate())){
    if (parseInt(today.getFullYear()) == parseInt(parts[0])) {
      alert(`תאריך לידה לא תקין`)
    
      return 
    }
    if (parseInt(today.getFullYear()) - 120 >= parseInt(parts[0])){
      alert(`תאריך לידה לא תקין`)
     return
    }
   
  }
  
  let flag4 
  for (let i = 0; i < street.length; i++) {
    flag4 = false;
    for (let j = 0; j < hebcheack.length; j++) {
      
      if (street[i]=== hebcheack[j] || street[i]=== " " ) {
    flag4 = true;
    break;
      }
    }
   
    if (!flag4) {
      alert(`יש להקליד שם של רחוב בעברית בלבד`)
    return
    }
  }
  let flag6 ;
  for (let i = 0; i < city.length; i++) {
    flag6  = false;
    for (let j = 0; j < hebcheack.length; j++) {
      
      if (city[i]=== hebcheack[j] || city[i]=== " " || city[i]=== "-") {
    flag6 = true;
    break;
      }
    }
   
    if (!flag6) {
      alert(`יש להקליד שם של עיר בעברית בלבד`)
    return
    }
  }
  if (house_num < 1 || isNaN(house_num)) {
    alert(`מספר בית לא תקין`)
    return
  }
  
  
    
  let flag5 =false
     for (let i = 0; i <users.length; i++) {
    
    if (users[i].user_email == user_email)
     {
       flag5 = true;
       break;
      
     }
     
     }
     if (flag5) {
      
      alert(`כתובת המייל כבר קיימת `)
      return;
     }
  
  if (login_user =="admin") {
    let tempUser = JSON.parse(localStorage.getItem(`user`)) ;
    let theUser = new User (tempUser.first_name,tempUser.last_name,tempUser.birth_date,tempUser.city,tempUser.street,tempUser.house_num,tempUser.user_email,tempUser.user_name,tempUser.user_password)
    for (let i = 0; i < users.length; i++) {
      if (theUser.first_name === users[i].first_name && theUser.last_name === users[i].last_name &&theUser.birth_date === users[i].birth_date &&theUser.city === users[i].city &&theUser.street === users[i].street &&theUser.house_num === users[i].house_num &&theUser.user_email === users[i].user_email &&theUser.user_name === users[i].user_name &&theUser.user_password === users[i].user_password ) {
        users[i].updateDetails(first_name, last_name,birth_date,city,street,house_num, user_email,user_name,user_password)
        users_images[i]= JSON.parse(localStorage.getItem('userNewImage'));
        break;
      }
    }
   
localStorage.setItem(`users`,JSON.stringify(users));

localStorage.setItem(`usersImages`,JSON.stringify(users_images));
location.href = `admin.html`;
return;
  }
  let tempUser = new User (login_user.first_name,login_user.last_name,login_user.birth_date,login_user.city,login_user.street,login_user.house_num,login_user.user_email,login_user.user_name,login_user.user_password)
    for (let i = 0; i < users.length; i++) {
      if (tempUser.first_name === users[i].first_name && tempUser.last_name === users[i].last_name &&tempUser.birth_date === users[i].birth_date &&tempUser.city === users[i].city &&tempUser.street === users[i].street &&tempUser.house_num === users[i].house_num &&tempUser.user_email === users[i].user_email &&tempUser.user_name === users[i].user_name &&tempUser.user_password === users[i].user_password ) {
        users[i].updateDetails(first_name, last_name,birth_date,city,street,house_num, user_email,user_name,user_password)
        tempUser =users[i];
        users_images[i]= JSON.parse(localStorage.getItem('userNewImage'));
        break;
      }
    }

    sessionStorage.setItem(`login_user`,JSON.stringify(tempUser));
    localStorage.setItem(`users`,JSON.stringify(users));
    localStorage.setItem(`usersImages`,JSON.stringify(users_images));
    
    
    location.href = `profile.html`


 

}