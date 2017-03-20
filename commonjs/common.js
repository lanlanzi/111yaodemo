//登录框验证
$(document).ready(function() {
    $('form :input').focus(function () {
        //验证用户名
        if ($(this).is('#inputName')) {
            if (this.value=="" ||( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) )) {
                $(".userErro").css("display","block")
            }else {
                $(".userErro").css("display","none")
            }
        }
        if ($(this).is('#inputName')) {
            if (this.value=="" ||( this.value!="" && !/^1[34578]\d{9}$/.test(this.value) )) {
                $(".userErro").css("display","block")
            }else {
                $(".userErro").css("display","none")
            }
        }
        if ($(this).is('#inputPassword')) {
            if (this.value=="" || this.value.length < 6 ) {
                $(".passwordErro").css("display","block")
            }else {
                $(".passwordErro").css("display","none")
            }
        }
    }).keyup(function () {
        $(this).triggerHandler("focus");
    });
    $('form :input').blur(function () {
        $(".userErro").css("display","none")
            $(".passwordErro").css("display","none")
    });
    //搜索框
//滑过菜单栏
    /*nav menu*/
   // console.log($(".stmenu"))
    $(".stmenu").hover(function()
        {
            $('.children').stop(true,true).hide();
            $(".navhover-decrtion").css("display","none");
            $('.nav-dropdown').removeClass('navhover');
            $(this).find('.children').delay(200).animate({ opacity:'show', height:'show' },200);
            $(this).find('.navhover-decrtion').delay(200).css("display","block");
            $(this).find('.nav-dropdown').delay(200).addClass('navhover');
        },
        function()
        {
            $('.children').stop(true,true).hide();
            $(".navhover-decrtion").css("display","none");
            $('.nav-dropdown').removeClass('navhover');
        });


//banner





});

