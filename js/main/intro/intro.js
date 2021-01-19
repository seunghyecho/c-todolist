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