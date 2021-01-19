$(document).ready(function(){
    console.log('header');

    var $todoInput = $('.todo-input');
    var $todoBtn = $('.todo-button');
    var $todoList = $('.todo-list');
    var $filterTodo = $('.filter-todo');

    // getTodos();

    $todoBtn.on('click', addTodo);
    $todoList.on('click', delAndChk);
    $filterTodo.on('click', filterTodo);



    function addTodo(e){
        e.preventDefault();
        
        var todoDiv = $('<div class="todo">');
        $todoList.append(todoDiv);

        var todoNew = $('<li class="todo-item">');
        todoDiv.append(todoNew);
        todoNew.html($todoInput.val());

        // add todo to localstorage 
        saveLocalTodos($todoInput.val());

        var checkedBtn = $('<button class="checkedBtn">');
        todoDiv.append(checkedBtn);
        checkedBtn.append('<i class="fa fa-check">');

        var deleteBtn = $('<button class="deletedBtn">');
        todoDiv.append(deleteBtn);
        deleteBtn.append('<i class="fas fa-trash">');

        $todoInput.val('');
        
    };

    function delAndChk(e){
        var target= e.target;
        //delete todo
        if(target.classList[0] === "deletedBtn"){
            var todo = $(target).parent();
            //animateion
            todo.addClass('fall');

            //removeLocalTodos
            removeLocalTodos(todo);

            todo.on('transitionend', function(){
                todo.remove();
            });
        }

        // check todo
        if(target.classList[0] ==="checkedBtn"){
            var todo = $(target).parent();
            todo.addClass('completed');
        }

    };


    function filterTodo(e){
        var todos = $todoList.children();
        // console.log(todos)

        todos.each(function( index, todo){

            switch($(e.target).val()){
                case "all":
                    $(todo).css('display', 'flex');
                    break;
                case "completed":
                    if($(todo).hasClass('completed')){
                        $(todo).css('display', 'flex');
                    }else{
                        $(todo).css('display', 'none');
                    }
                    break;
                case "uncompleted":
                    if(!$(todo).hasClass('completed')){
                        $(todo).css('display', 'flex');
                    }else{
                        $(todo).css('display', 'none');
                    }
                    break;
            }
        })
    };

    function saveLocalTodos(todo){
        var todos;
        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    function getTodos(){
        var todos;

        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }

        todos.each(function(index, todo){
            
            var todoDiv = $('<div class="todo">');
            $todoList.append(todoDiv);

            var todoNew = $('<li class="todo-item">');
            todoDiv.append(todoNew);
            todoNew.html(todo);

            var checkedBtn = $('<button class="checkedBtn">');
            todoDiv.append(checkedBtn);
            checkedBtn.append('<i class="fa fa-check">');

            var deleteBtn = $('<button class="deletedBtn">');
            todoDiv.append(deleteBtn);
            deleteBtn.append('<i class="fas fa-trash">');
        });
    };

    function removeLocalTodos(todo){
        var todos;

        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }

        console.log(todo.children[0].innerText);
        
    };

});