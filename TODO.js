var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  
}
var btnadd = document.getElementById('add-item');
var list = document.getElementById('item-list');
var input = document.getElementById('input');
function check(){
    if(input.value === ''){
        alert('Please enter a valid input');
        return false;}
    else{
        return true;
    }
;}
function close(){
    var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}
function add() { var inputtext = input.value;
    var newElement = document.createElement('li');
    var textnode = document.createTextNode(inputtext);
    newElement.appendChild(textnode);
    newElement.setAttribute('id', ('item-list' + (list.childElementCount + 1) ));
    list.appendChild(newElement);
    input.value = '';
    var myNodelist = document.getElementsByTagName("li");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newElement.appendChild(span);
    

};
btnadd.addEventListener('click', function() { if(check()===true){ 
    
    add();};});

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnadd.click();
      
    }
  });