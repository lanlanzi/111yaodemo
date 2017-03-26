
$(document).ready(function() {
    (function(){
        function Zoom(object){
            this.zoomArea=$(".zoom",object);//保存促发放大效果的区域
            this.moveArea=$(".move",object);//保存移动区域
            this.zoomDetail=$(".zoomDetail",object);//保存放大镜区域
            this.zoomDetailImg=$("img",this.zoomDetail);//保存放大镜里面的图
            this.zoomAreaWidth=this.zoomArea.width();
            this.moveAreaWidth=this.moveArea.width();
            this.zoomAreaHeight=this.zoomArea.height();
            this.moveAreaHeight=this.moveArea.height();
            this.zoomDetailWidth=this.zoomDetail.width();
            this.zoomDetailHeight=this.zoomDetail.height();
            this.zoomAreaOffset=this.zoomArea.offset();//初始化放大区域在视口中的相对偏移;
            this.XY=null;//初始化鼠标相对于放大区域的偏移偏移值
            this.moveBili=null;//
            var _this_=this;
            this.zoomArea.mousemove(function(e){//当鼠标在放大区域移动的时候执行
                _this_.move(e.pageX,e.pageY);
            }).mouseover(function(){
                _this_.moveArea.show();
                _this_.zoomDetail.show();
            }).mouseout(function(){
                _this_.moveArea.hide();
                _this_.zoomDetail.hide();
            });
            this.calculate();//初始化并计算出需要的比例值
            //以下是小图部分的功能实现
            this.l=0;
            this.scrollObj=$(".slideMain ul",object);//保存ul滚动对象
            this.lis=this.scrollObj.children();//保存小图片列表
            this.btnR=$(".btnR",object);//保存右边按钮
            this.btnL=$(".btnL",object);//保存左边边按钮
            this.lis.click(function(){
                _this_.changeImgSrc(this);
            });

        };
        Zoom.prototype={
            scrollLeft:function(){
                if(Math.abs(this.l)==this.s){return};
                this.l--;
                this.scrollObj.animate({left:this.l*58+"px"},"fast");
            },
            scrollRight:function(){
                if(this.l==0){return};
                this.l++;
                this.scrollObj.animate({left:this.l*58+"px"},"fast");
            },
            changeImgSrc:function(o){
                //改变标识样式
                $(o).addClass("selected").siblings().removeClass("selected");
                this.zoomArea.find("img").attr("src",$(o).find("img").attr("medium-img"));
                this.zoomDetailImg.attr("src",$(o).find("img").attr("medium-img"));

            },
            move:function(x,y){//鼠标在放大区域移动的时候执行的函数
                this.XY=this.mousePosAndSetPos(x,y);//计算出鼠标相对于放大区域的x,y值
                //设置滑块的位置
                this.moveArea.css({
                    left:this.XY.offsetX+"px",
                    top:this.XY.offsetY+"px"
                });
                //设置大图在细节位置
                this.zoomDetailImg.css({
                    marginLeft:-this.XY.offsetX*this.moveBili+"px",
                    marginTop:-this.XY.offsetY*this.moveBili+"px"
                });
            },
            mousePosAndSetPos:function(x,y){//实时计算并设置滑块的位置
                x=x-this.zoomAreaOffset.left-this.moveArea.width()/2;
                y=y-this.zoomAreaOffset.top-this.moveArea.height()/2;
                x=x<0?0:x;
                y=y<0?0:y;
                x=x>(this.zoomAreaWidth-this.moveAreaWidth)?this.zoomAreaWidth-this.moveAreaWidth:x;
                y=y>(this.zoomAreaHeight-this.moveAreaHeight)?this.zoomAreaHeight-this.moveAreaHeight:y;
                return {
                    offsetX:x,
                    offsetY:y
                };
            },
            calculate:function(){//计算函数
                var widthBili,heightBili;
                //计算移动的滑块与放大镜铺面显示的比例宽高
                widthBili=(this.zoomAreaWidth*this.zoomDetailWidth)/this.moveAreaWidth;
                heightBili=(this.zoomAreaHeight*this.zoomDetailHeight)/this.moveAreaHeight;
                //把比出来的宽高
                this.zoomDetailImg.css({width:widthBili+"px",height:heightBili+"px"});
                //返回移动的比例
                this.moveBili=(widthBili-this.zoomDetailWidth)/(this.zoomAreaWidth-this.moveAreaWidth);
            }
        };
        var zoom=new Zoom($(".ZoomMain").eq(0));
    })();})