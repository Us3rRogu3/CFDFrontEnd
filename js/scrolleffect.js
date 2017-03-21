$(window).on("load", function() {
    var items= document.getElementsByClassName('scroll_effect');
    // console.log(items[0].offset().top);
    var Ele1 = 0;
    var Ele2 = 0;
    var i;
    var scrollPos = 0;
    var lasPos = 0;
    var offset1 = 0;
    var offset2 = 0;
    var height = $(window).height();
    $(window).scroll(function() {
        scrollPos = $(window).scrollTop();
        offset1 = $(items[Ele1]).offset().top - height + 100;
        offset2 = $(items[Ele2]).offset().top - 100;
        if (scrollPos > lasPos) {
            if (scrollPos > offset1) {
                //intro transition
                if (Ele1 < items.length) {
                    var classNames = $(items[Ele1]).attr("class").toString().split(' ');
                    console.log(classNames);
                    var className = classNames[classNames.length - 2].split('_')[1];
                    console.log(className);
                    $(items[Ele1]).removeClass(className).addClass(className);
                    Ele1++;
                }
            }
            if (scrollPos > offset2) {
                //outro transition
                if (Ele2 < items.length) {
                    var classNames = $(items[Ele2]).attr("class").toString().split(' ');
                    var className = classNames[classNames.length - 1];
                    $(items[Ele2]).removeClass(className).addClass(className);
                    Ele2++;
                }
            }
        } else {
            if (scrollPos < offset1) {
                //intro transition
                if (Ele1 > -1) {
                    var classNames = $(items[Ele1]).attr("class").toString().split(' ');
                    var className = classNames[classNames.length - 2];
                    $(items[Ele1]).removeClass(className).addClass(className);
                    Ele1--;
                }
            }
            if (scrollPos < offset2) {
                //outro transition
                if (Ele2 > -1) {
                    var classNames = $(items[Ele2]).attr("class").toString().split(' ');
                    var className = classNames[classNames.length - 1];
                    $(items[Ele2]).removeClass('invisible').removeClass(className).addClass(className);
                    Ele2--;
                }
            }
        }
        lasPos = scrollPos;
    });
});
