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
});

//搜索框
