$(function () {

    $('.toggle-btn').on('click',function(){
        $(this).toggleClass('on');
        $('.nav-modal-wrapper').slideToggle();
    });

    setTimeout(function () {
        $('.top-text').fadeIn(1300);
    }, 400);/*top-text end*/
    
    var $skillText = $('.skill-text p');
    $('.skill').hover(
        function () {
            $(this).find($skillText).addClass('text-active');
        },
        function () {
            $(this).find($skillText).removeClass('text-active');
        }
    );/* skill-text action end */

    var $workMask=$('.work-mask');
    $('.works-box').hover(
        function () {
            $(this).find($workMask).fadeIn('.work-mask');
        },
        function () {
            $(this).find($workMask).fadeOut('.work-mask');
        }
    );/* works-mask  hover end */
    
    var $bgMask=$('.bg-mask');
    $('.thumbnail').hover(
        function () {
            $(this).find($bgMask).fadeIn('.bg-mask');
        },
        function () {
            $(this).find($bgMask).fadeOut('.bg-mask');
        }
    );/* bg-mask hover end */


    var $next = $('.next');
    var $back = $('.back');
    var $worksArea = $('.works-area');
    var $thuAir = $('#thu1');
    var $thuWri = $('#thu2');
    var $thuMan = $('#thu3');
    $('.thumbnail').on('click',function () {
        if ($(this).hasClass('air')) {
            if ($worksArea.hasClass('position02')) {
                $worksArea.removeClass('position02');
                $worksArea.addClass('position01');
                $next.removeClass('disable');
                $back.addClass('disable');
            } else if ($worksArea.hasClass('position03')) {
                $worksArea.removeClass('position03');
                $worksArea.addClass('position01');
                $next.removeClass('disable');
                $back.addClass('disable');
            }
            $thuAir.addClass('select');
            $thuWri.removeClass('select');
            $thuMan.removeClass('select');
        } else if ($(this).hasClass('write')) {
            if ($worksArea.hasClass('position01')) {
                $worksArea.removeClass('position01');
                $worksArea.addClass('position02');
                $next.removeClass('disable');
                $back.removeClass('disable');
            } else if ($worksArea.hasClass('position03')) {
                $worksArea.removeClass('position03');
                $worksArea.addClass('position02');
                $next.removeClass('disable');
                $back.removeClass('disable');
            }
            $thuWri.addClass('select');
            $thuAir.removeClass('select');
            $thuMan.removeClass('select');
        } else {
            if ($worksArea.hasClass('position01')) {
                $worksArea.removeClass('position01');
                $worksArea.addClass('position03');
                $next.addClass('disable');
                $back.removeClass('disable');
            } else if ($worksArea.hasClass('position02')) {
                $worksArea.removeClass('position02');
                $worksArea.addClass('position03');
                $next.addClass('disable');
                $back.removeClass('disable');
            }
            $thuMan.addClass('select');
            $thuAir.removeClass('select');
            $thuWri.removeClass('select');
        }
    });/* thumbnail action end */

    $('.arrow').on('click',function ()  {
        if ($(this).hasClass('next')) {
            if ($worksArea.hasClass('position01')) {
                $worksArea.removeClass('position01');
                $worksArea.addClass('position02');
                $back.removeClass('disable');
                $thuAir.removeClass('select');
                $thuWri.addClass('select');
            } else if ($worksArea.hasClass('position02')) {
                $worksArea.removeClass('position02');
                $worksArea.addClass('position03');
                $next.addClass('disable');
                $thuWri.removeClass('select');
                $thuMan.addClass('select');
            }
        } else if ($(this).hasClass('back')) {
            if ($worksArea.hasClass('position03')) {
                $worksArea.removeClass('position03');
                $worksArea.addClass('position02');
                $next.removeClass('disable');
                $thuMan.removeClass('select');
                $thuWri.addClass('select');
            } else if ($worksArea.hasClass('position02')) {
                $worksArea.removeClass('position02');
                $worksArea.addClass('position01');
                $back.addClass('disable');
                $thuWri.removeClass('select');
                $thuAir.addClass('select');
            }
        }
    });/* arrow click action end */

    var skillsOffset = $('#skills').offset().top;
   /* var worksOffset  = $('#wo').offset().top;
    var profileOffset  = $('#pr').offset().top;*/
    var docH = $(document).innerHeight();
    var winH = $(window).innerHeight();
    var bottom = docH - winH + 14;
    var $toTop = $('#toTop');
    var timeoutId ;

    $(window).on('load resize', function(){
        window.addEventListener('scroll',function ()  {
            if ( timeoutId ) return ;

            timeoutId = setTimeout( function () {
                timeoutId = 0 ;
                if ($(this).scrollTop() >= skillsOffset) {
                    $toTop.fadeIn();
                } else {
                    $toTop.hide();
                }
                if (bottom <= $(window).scrollTop()) {
                    $toTop.addClass('toTopMove');
                } else {
                    $toTop.removeClass('toTopMove');
                }
            }, 300 ) ;
        });
    });/* scroll action end */

    console.log(bottom);

    $toTop.on('click',function ()  {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $('.scroll-btn').on('click',function ()  {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
            scrollTop: position
        }, 500);
        $('.nav-modal-wrapper').hide();
        $('.toggle-btn').removeClass('on');
    });/* scroll move action end*/

});/* all end */