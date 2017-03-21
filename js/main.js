$(document).ready(function() {
    var slide = "1";
    var timerId;
    var scroll_start = 0;
    var offset = 100;
    var timer = function() {
        var no = parseInt(slide) + 1;
        if (slide == 6) {
            no = 1;
        }
        // console.log(no + slide);
        $("#ft" + slide).removeClass('block').addClass('none');
        $("#fi" + slide).removeClass('block').addClass('none');
        $("#ft" + no).removeClass('none').addClass('block');
        $("#fi" + no).removeClass('none').addClass('block');
        $("#f" + slide).removeClass('selected');
        $("#f" + no).addClass('selected');
        slide = no;
    }
    timerId = setInterval(timer, 5000);
    $('.features').click(function() {
        var no = $(this).attr('id').substring(1, 2);
        // console.log(no + slide);
        $("#ft" + slide).removeClass('block').addClass('none');
        $("#fi" + slide).removeClass('block').addClass('none');
        $("#ft" + no).removeClass('none').addClass('block');
        $("#fi" + no).removeClass('none').addClass('block');
        $("#f" + slide).removeClass('selected');
        $("#f" + no).addClass('selected');
        slide = no;
        clearInterval(timerId);
        timerId = setInterval(timer, 5000);
    });
    $(window).scroll(function() {
        scroll_start = $(this).scrollTop();
        // console.log(scroll_start + "  " + offset.top);
        if (scroll_start > offset) {
            $('#navmain').css('background-color', '#ffffff');
            // $('#backdrop').css('margin-top', function() {
            //     return (-1) * (scroll_start - offset) / 4;
            // });
            $("#navmain").addClass("shadow");
        } else {
            $('#navmain').css('background-color', 'transparent');
            // $('#backdrop').css('margin-top', '0');
            $("#navmain").removeClass("shadow");
        }
    });
    $(".hover").hover(function() {
        // console.log('onhover');
        clearInterval(timerId);
    }, function(){
        // console.log('offhover');
        timerId = setInterval(timer, 5000);
    });
});
