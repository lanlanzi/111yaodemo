
$(document).ready(function() {
    var $div_li =$(".tabproduct-menu ul li ");
    $div_li.click(
        function () {
            $(this).addClass("slectedtab")
                .siblings().removeClass("slectedtab");
            var index =$div_li.index(this);
            $(".tabproduct-box>div")
                .eq(index).show()
                .siblings().hide();
        }
    );
})