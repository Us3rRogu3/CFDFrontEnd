Chart.defaults.global.defaultFontColor = "gray";
Chart.defaults.global.defaultFontFamily = "'Josefin Sans', sans-serif";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.animation.easing = "easeOutCirc";

$(document).ready(function() {
    var toggle = true;
    var visible = false;
    var wid = $('.chat_bot').width();
    $(".pin_display").click(function() {
        if (visible) {
            $(".pin_hidden").css('visibility', 'hidden');
            visible = false;
        } else {
            visible = true;
            $(".pin_hidden").css('visibility', 'visible');
            setTimeout(function() {
                $(".pin_hidden").css('visibility', 'hidden');
                visible = false;
            }, 5000);
        }
    });
    $(".pin_hidden").click(function() {
        $(".pin_hidden").css('visibility', 'hidden');
        visible = false;
    });
    $(".scroll").click(function() {
        var id = $(this).attr('id');
        // console.log('click me');
        // console.log($(".main_content").find("#c" + id.toString()).offset().top);
        $("#body").animate({
            scrollTop: $(".main_content").find("#c" + id.toString()).offset().top -100
        }, 'slow');
    });
});
