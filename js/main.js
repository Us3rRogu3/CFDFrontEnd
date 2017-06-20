$(document).ready(function() {
    var slide = "1";
    var timerId;
    var scroll_start = 0;
    var offset = 70;
    var slide2 = 4;
    var timer = function() {
        var no = parseInt(slide) + 1;
        if (slide == 3) {
            no = 1;
        }
        // console.log(no + slide);
        $("#ftt" + slide).removeClass('active');
        $("#ftt" + no).addClass('active');
        $("#fi" + slide).removeClass('block').addClass('none');
        $("#fi" + no).removeClass('none').addClass('block');
        $("#f" + slide).removeClass('selected');
        $("#f" + no).addClass('selected');
        slide = no;
    }
    var timer2 = function() {
        var no = parseInt(slide2) + 1;
        if (slide2 == 6) {
            no = 4;
        }
        // console.log(no + slide);
        $("#ftt" + slide2).removeClass('active');
        $("#ftt" + no).addClass('active');
        $("#fi" + slide2).removeClass('block').addClass('none');
        $("#fi" + no).removeClass('none').addClass('block');
        $("#f" + slide2).removeClass('selected');
        $("#f" + no).addClass('selected');
        slide2 = no;
    }
    timerId = setInterval(timer, 10000);
    timerId2 = setInterval(timer2, 10000);
    $('.option').click(function() {
        var no = $(this).attr('id').substring(2, 3);
        // console.log(no + slide);
        var temp = parseInt(no);
        if (temp > 3) {
            $("#ftt" + slide2).removeClass('active');
            $("#ftt" + no).addClass('active');
            $("#fi" + slide2).removeClass('block').addClass('none');
            $("#fi" + no).removeClass('none').addClass('block');
            $("#f" + slide2).removeClass('selected');
            $("#f" + no).addClass('selected');
            slide2 = no;
            // console.log('case 2');
            clearInterval(timerId2);
            timerId2 = setInterval(timer2, 10000);
        } else {
            $("#ftt" + slide).removeClass('active');
            $("#ftt" + no).addClass('active');
            $("#fi" + slide).removeClass('block').addClass('none');
            $("#fi" + no).removeClass('none').addClass('block');
            $("#f" + slide).removeClass('selected');
            $("#f" + no).addClass('selected');
            slide = no;
            // console.log('case 1');
            clearInterval(timerId);
            timerId = setInterval(timer, 10000);
        }
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
    // $(".hover").hover(function() {
    //     // console.log('onhover');
    //     clearInterval(timerId);
    // }, function(){
    //     // console.log('offhover');
    //     timerId = setInterval(timer, 5000);
    // });
});
