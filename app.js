var btnadd = document.getElementById('add-item');
var list = document.getElementById('item-list');
var input = document.getElementById('input');

window.addEventListener('load',()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || [];
	const nameInput = document.querySelector('#name');
	const newTodoForm = document.querySelector('#new-todo-form');

	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);

    
})
})
btnadd.onclick = function() {
    if(input.value === ''){
        alert('Please enter a valid input');}
    else{

            var inputtext = input.value;
            localStorage.setItem("item",(inputtext));
            var newElement = document.createElement('li');
            var textnode = document.createTextNode(inputtext);
            newElement.appendChild(textnode);
            newElement.classList.add("task");
            list.appendChild(newElement);
            newElement.addEventListener('click', function() {
                if(this.className.match("task")){
                    this.className = "done";
                }
                else{
                    this.className = "task";
                }
            });
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            newElement.appendChild(span);
            span.addEventListener('click', function() {
                newElement.style.display = "none";
            });

            input.value = '';

        };
};

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnadd.click();
      localStorage.getItem("item");
      
    }
});

