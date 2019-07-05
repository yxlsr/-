define(["jquery"], function($){
    function slide(){
        console.log("banner");
        $(function(){
            var oul=$(".color").find("ul");
            var btn1=$(".color").find(".btn1");
            var btn2=$(".color").find(".btn2");
            
            var alis=oul.find("li");
            var timer = null; //每两秒切换一张图片
				var iNow = 0; //当前展示的图片的下标
           $("btn1").click=function(){
                alert("9")
                // iNow=$(this).index();
                // tab();
               
            }
            $("btn2").click=function(){
                alert("9")
                // iNow=$(this).index();
                // tab();
               
            }

            timer= setInterval(function(){
                iNow++;
                if(iNow == alis.size() - 1){
                    
                    oul.animate({top:-400 * iNow},4000,function(){
                        oul.css("top",0)
                    })
                    iNow = 0;

                }else{
                    tab()
                }

            },2000);
            
            $(".color").mouseenter(function(){
                btn1.css("display","block");
                btn2.css("display","block");
                clearInterval(timer);
               
            })
    
            $(".color").mouseleave(function(){
                btn1.css("display","none");
                btn2.css("display","none");
                timer= setInterval(function(){
                    iNow++;
                    if(iNow == alis.size() - 1){
                        
                        oul.animate({top:-400 * iNow},4000,function(){
                            oul.css("top",0)
                        })
                        iNow = 0;
    
                    }else{
                        tab()
                    }
    
                },2000);
            })

            function tab(){
               oul.animate({top:-400 * iNow},4000);
                
            }
            // var span1=$(".padd").find("span1");
            // var span2=$(".padd").find("span2");
            // $("span2").mouseenter(function(){

            // })
        })
    }
    return {
        banner:slide
    }
})
