$(document).ready(function(){
    console.log('footer');
})
$(document).ready(function(){
    console.log('header');

    var $todoInput = $('.todo-input');
    var $todoBtn = $('.todo-button');
    var $todoList = $('.todo-list');
    var $filterTodo = $('.filter-todo');

    // getTodos();
    document.addEventListener('DOMContentLoaded', getTodos);
    
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
        // console.dir(e.target);
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
        let todos;


        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    function getTodos(){
        let todos;

        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));

            $(todos).each(function(index, todo){
                // console.log( $(todo), todo);
    
                
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
        }

       
    };

    function removeLocalTodos(todo){
        let todos;

        if(localStorage.getItem('todos') === null){
            todos = [];
        }else{
            todos = JSON.parse(localStorage.getItem('todos'));
        }

        const todoIndex = $(todo).children().eq(0).html();

        todos.splice(todos.indexOf(todoIndex),1);
        localStorage.setItem('todos', JSON.stringify(todos));


    };

});
$(document).ready(function(){
    console.log('main intro');

    //탭 : s
    var $tab_item = $('.tab_item');

    $tab_item.on('click', function(){
        var dataIndex = $(this).attr('data-index'); 
        var $tab_content_item = $('.tab_content_item');

        $tab_item.removeClass('on');
        $(this).addClass('on');

        $tab_content_item.removeClass('on');
        $('#' + dataIndex).addClass('on');
        
    });
    //탭 : e

    //슬라이드 : s
    var $firstSlide = $('.slide_item:first-child');

    // 슬라이드 활성
    function activate(elem){
        elem.addClass('showing');
    }
    // 슬라이드 비활성
    function inactivate(elem){
        elem.removeClass('showing');
    }
    // 슬라이드 동작
    function slide(){
        var currentSlide = $('li.showing');
        if(currentSlide.length){
            inactivate(currentSlide);
            var nextSlide = currentSlide.next();
            if(nextSlide.length){
                activate(nextSlide);
            }else{
                activate($firstSlide);
            }

        }else{
            activate($firstSlide);
        }
    }
    setInterval( slide, 5000);
    //슬라이드 : e

})
$(document).ready(function(){
    console.log('visual');
})
$(document).ready(function(){
    console.log('sub community');
})