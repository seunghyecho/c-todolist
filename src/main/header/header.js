$(document).ready(function(){
    console.log('header');

    var $todoInput = $('.todo-input');
    var $todoBtn = $('.todo-button');
    var $todoList = $('.todo-list');
    var $filterTodo = $('.filter-todo');

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

        todos.each(function(todo){
            
            console.log(todo)
            console.log($(todo))
            console.log($(e.target).val())

            switch($(e.target).val()){
                case "all":
                    $(todo).css('display', 'flex');
                    $(todo).css('background', 'red');
                    break;
                case "completed":
                    if($(todo).hasClass('completed')){
                        $(todo).css('display', 'flex');
                        $(todo).css('background', 'red');
                    }else{
                        $(todo).css('display', 'none');
                    }
            }
        })
    };




    var $gnbLi = $('#gnb > li');
    $gnbLi.on('mouseover', function(){
        $(this).children('a').addClass('on');
        $(this).children('ul').stop().slideDown(800);

    });
    $gnbLi.on('mouseleave', function(){
        $(this).children('a').removeClass('on');
        $(this).children('ul').stop().slideUp(800);

    });
})