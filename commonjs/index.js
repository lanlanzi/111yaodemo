$(document).ready(function() {
    $.getJSON('../data/goods.json',function (res) {
        //console.log(res)
             $.each(res.data,function (index,value) {
                 console.log()
                   if(index==0){
                     $(".adr-product a img").attr("src",value.imgSrc);
                  }
                  else {
                       $(".index-product-show img").attr("src",value.imgSrc);
                       $(".index-product-name").html(value.productName);
                       $(".index-product-express").html(value.productExpress);
                       $(".index-product-price span").html("¥"+value.price);
                       $(".index-product-price i").html("¥"+value.oldPrice);
                   }


            //     var $a =$('<a></a>');
            //     $a.attr('href','detail.html?id='+value.id);
            //     $a.html(value.description)
            //     $('.list-l').append($a);
             })

        })

});