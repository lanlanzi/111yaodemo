/**
 * Created by Administrator on 2017/3/15.
 */
$(document).ready(function(){

        $("form :input").blur(function() {
            //注意：这里的this是DOM对象，$(this)才是jQuery对象
            var $parent = $(this).parent();
            //删除之前的错误提醒信息
            $parent.find(".msg").remove();
            //验证“名称”
            if ($(this).is("#name")) {
                //运用jQuery中的$.trim()方法，去掉首位空格
                if ($.trim(this.value) == "" || $.trim(this.value).length < 6) {
                    $(".passwordErro").css("display", "block")
                }
        }
    });
});