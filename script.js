var namei = document.getElementById("name");

var datei = document.getElementById("date");

var amounti = document.getElementById("amount");

var button = document.getElementById("button");

var td = document.getElementsByTagName("td");

var tbody = document.getElementById("funciona");

var del = document.getElementById("del");

var tr = document.getElementsByClassName("f");

var delall = document.getElementsByClassName("del");

var div = document.getElementById("alltable");

 
button.addEventListener("click", principal);

del.addEventListener("click", removeall);

del.addEventListener("click", removedelete);

div.addEventListener("click", removetd);

div.addEventListener("click", removetdwdelete);


function addArows() {
  let addExpensee = setTimeout(function addExpense(element) {

  var newtr = document.createElement("tr");

  newtr.classList.add("f");

  var tdname = document.createElement("td");

  tdname.innerText = namei.value;

  tdname.classList.add("text");

  newtr.appendChild(tdname);

  var tddate = document.createElement("td");

  tddate.innerText = datei.value;

  newtr.appendChild(tddate);

  var tdamount = document.createElement("td");

  tdamount.innerText = amounti.value;

  tdamount.classList.add("text");

  newtr.appendChild(tdamount);

  var button2 = document.createElement("button");

  button2.innerHTML = "X";

  button2.classList.add("btn");

  newtr.appendChild(button2);

  namei.value = "";

  datei.value = "";

  amounti.value = "";

  document.getElementById("funciona").appendChild(newtr);
} , 0.1)
}
function principal () {

   if(namei.value.length > 0 && datei.value.length > 0 && amounti.value.length > 0 ){
    addTable()
    addArows()
    adddeletebutton()
   } 
   else alert ("Preencha Todos os Campos!")
} 




function addTable () {

  if(alltable.children.length === 0) {
  const table = document.createElement("table")
  table.setAttribute("id","table")
  div.appendChild(table);
  

  const trbody = document.createElement("tbody")
  table.appendChild(trbody)
  trbody.setAttribute("id","funciona")


  const tr= document.createElement("tr");
  trbody.appendChild(tr)

  const thname = document.createElement("th")
  thname.setAttribute("id","thname")
  thname.innerText= "Name"
  tr.appendChild(thname);

  const thdate = document.createElement("th")
  thdate.setAttribute("id","thdate")
  thdate.innerText= "Date"
  tr.appendChild(thdate);

  const thamount = document.createElement("th")
  thamount.setAttribute("id","thamount")
  thamount.innerText= "Amount"
  tr.appendChild(thamount);

  const thth = document.createElement("th")
  thth.setAttribute("id","thth")
  thth.innerText= ""
  tr.appendChild(thth);}

  
}


function adddeletebutton() {
  if (del.children.length === 0) {
    const button = document.createElement("button");

    button.innerHTML = "Delete All";

    button.classList.add("del");

    del.appendChild(button);
  }
}



function removetd(element) {
  const item = element.target;

  if (item.classList[0] === "btn") {
    const remov = item.parentElement;

    remov.remove();
  }
}

function removeall(e) {
  item= e.target
  if(item.classList[0] ==="del") {
    alltable.children[0].remove()
  } 
}


function removedelete(e) {
  item = e.target
  if(item.classList[0] === "del"){
    item.remove(item)
  }
}

function removetdwdelete(e)
{
  item = e.target
  if(item.classList[0] === "btn" && tr.length === 0){
         alltable.children[0].remove()
         del.children[0].remove()

  }
  else false
}


