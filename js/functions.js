
var tsize 

function createtable(event)
{  let element = event.target /// תפיסה של האלמנט שעליו התבצעה הלחיצה 
  create(element)
  
}

function  create(element)
{
 
let size = element.dataset.size // תפיסה של הדאטה סייז של האלמנט שעליו התבצעה הלחיצה 
if (size == "r11") {
  tsize = 11
  document.querySelector(`#game`).innerHTML=table(tsize)            
}
 else if (size == "r12") {
  tsize = 12
  document.querySelector(`#game`).innerHTML=table(tsize) 
 }
 else if (size == "r13") {
  tsize = 13
  document.querySelector(`#game`).innerHTML=table(tsize) 
 } 
 else if (size == "r14") {
  tsize = 14
  document.querySelector(`#game`).innerHTML=table(tsize) 
 } 
 else if (size == "r15") {
  tsize = 15
  document.querySelector(`#game`).innerHTML=table(tsize) 
 } 
}

 function players() { /// פונקציה ששמה במערך את הערך שהכניס המשתמש לכמות הספינות מכל סוג
let shipt2 = parseInt(document.getElementById("type2").value);
 let shipt3 = parseInt(document.getElementById("type3").value);
let shipt4 = parseInt(document.getElementById("type4").value);
let shipt5= parseInt(document.getElementById("type5").value);
  
var playersAmaount = [shipt2,shipt3,shipt4,shipt5];
for (let i = 0; i < playersAmaount.length; i++) {
  if (!(playersAmaount[i]>=0 && playersAmaount[i]<=9))
  {
    playersAmaount[i] = 0;
  }
}

 
  return playersAmaount
 }




function show() {
var tds = document.querySelectorAll(`#game table td`)
let players_arr = players();
let typ2 = 0
let typ3 = 0
let typ4 = 0
let typ5 = 0

 addClassTaken(tds)
document.querySelector(`#game`).style="display: flexbox;"//הצגה של הלוח 
document.querySelector(`#shipstatus`).innerHTML =  shipstatus()
 tds.forEach(td => td.addEventListener(`click`,function(e) {
  reveltd(td)}))
  function reveltd(td) {
  if(!td.classList.contains(`boom`))
  {
    if(td.classList.contains(`type2`))
    {
      typ2++
     if(typ2%2==0){
        players_arr[0]--;
       document.querySelector(`#shipstatus`).innerHTML =  shipstatus2(players_arr)
       }
    };
    if(td.classList.contains(`type3`))
    {typ3++
      if(typ3%3==0){
        players_arr[1]--;
       document.querySelector(`#shipstatus`).innerHTML =  shipstatus2(players_arr)
       }

    };
    if(td.classList.contains(`type4`))
    {
      typ4++;
      if(typ4%4==0){
        players_arr[2]--;
       document.querySelector(`#shipstatus`).innerHTML =  shipstatus2(players_arr)
       }
    } 
    if(td.classList.contains(`type5`))
    {
      typ5++;
      if(typ5%5==0){
        players_arr[3]--;
       document.querySelector(`#shipstatus`).innerHTML =  shipstatus2(players_arr)
       }
    } 
  
  }
  
  if(td.classList.contains(`taken`))
  {
    td.classList.add(`boom`)
  }
  else{
    td.classList.add(`miss`)
  }
  let gameOver = true;
  for (let k = 0; k < players_arr.length; k++) {
    if (players_arr[k]!==0) {
      gameOver = false;
      break;
    }
    
  }
  if(gameOver){
if(confirm(`ניצחת !!! כל הכבוד ..משחק נוסף?`))
{
  location.reload()
}else{
  location.href = `profile.html`
}

}
}



}
 
function shipstatus2(players_arr) {
 
 
  let board=`<table class="table table-bordered border-primary h-250 p-5 text-white bg-dark rounded-3">`
 
for(let i=0,j=2; i < players_arr.length ;i++,j++)
if (!(players_arr[i]>=0 && players_arr[i]<=9)) {
  players_arr[i] = 0
  board+=`<tr><td>ships type ${j}</td>
  <td>0</td></tr> `
}
else
{ board+=`<tr><td>ships type ${j}</td>
         <td>${players_arr[i]}</td></tr> `
  
}

  return  board
}


var locations =[]


function  addClassTaken(tds)
{
  
  let isTaken 
  let isRightEdge
   let isLeftEdge
   let ind = 0
   let arr = players()
   let randomestart = Math.abs(Math.floor(Math.random()* tds.length))
   for (let i = 0; i < shipArray.length; i++)
    {
    
   let current = shipArray[i].ship
   for (let j = 0; j < arr[i]; j++) {
      
      isTaken = current.some(index => tds[randomestart + index].classList.contains(`taken`));
   
      isRightEdge = current.some(index => (randomestart + index) % tsize === tsize-1)
    
      isLeftEdge = current.some(index => (randomestart + index) % tsize === 0)
      
if (!isTaken&&  !isRightEdge && !isLeftEdge ){
  current.forEach(index => tds[randomestart+index].classList.add(`taken`,shipArray[i].name));
  locations[ind] = randomestart
  ind++
} 
 else
 {
  j--;
  randomestart = Math.abs(Math.floor(Math.random()* tds.length))
 
  continue;
 } 


 randomestart = Math.abs(Math.floor(Math.random()* tds.length))
    if (whatLocation(randomestart,current))
     {
      randomestart= randomestart+1;
     continue;
     }
  
    
    }
   
   }

}


    
   
function whatLocation(randomestart,current) {
  for (let k = 0; k < locations.length; k++)
  {
    return randomestart === locations[k]+current.length;
  
  }
  
}


function table(size) {
  let count = 0
  let board=`<table>`
 
for(let i=0,j=0; i < size ;i++,j++)
{
  board+=`<tr value="tr${j}">`

    for(let k=0 ; k < size ; k++)
    {
      board+= `<td data-id = "${count}" class="td" ></td>`
      count++
    }

    board+=`</tr>`
  
}

  return  board
}






function shipstatus() {
  let shipsArr = players()
  let board=`<table class="table table-bordered border-primary h-250 p-5 text-white bg-dark rounded-3">`
 
for(let i=0,j=2; i < shipsArr.length ;i++,j++){
     board+=`<tr><td>ships type ${j}</td>
         <td>${shipsArr[i]}</td></tr> `
  
}

  return  board
}


