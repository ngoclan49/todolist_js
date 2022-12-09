var tasks = [];

addItem.addEventListener('click', function(e){
    e.preventDefault();
    var newTask = document.getElementById('newTask').value;
    var notiInput = document.getElementById('notiInput');
    var addItem = document.getElementById('addItem');
    var toDo = document.getElementById('todo');
    var complete = document.getElementById('completed');
    var card = document.getElementsByClassName('card__todo')
    var arr = {};
        arr.name = newTask,
        arr.status = toDo
    tasks.push(arr);
    console.log(tasks);
    newTask = ''
})

function loadTask() {
    var str = `
                <tr>
                    <ul></ul>
                    <ul></ul>
                </tr>
              `;
    for (i = 0; i < tasks.length; i ++) {
        str += `
        <tr>
            <ul>${toDo}</ul>
            <ul>${complete}</ul>
        </tr>
      `
    }
}



