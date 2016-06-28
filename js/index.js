;(function($){
	//页面一打开加载页面
	var em=$("#em"),
		span=$(".span"),
		idx=0,
		i=0,
		j=0,
		index=0,
		h=$(window).height(),
		count=$(".ti").size(),
		w=$(window).width(),
		len=$(".box").size(),
		startX,moveX,direction,
		lens=$(".swiper").size(),
		startY,moveY,direction;
		
	timer=setInterval(function(){
		idx+=2;
		if (idx>=102) {
			$("#load").hide();	
			$(".sexChoose").show();
			clearInterval(timer);
		};
		em.css("width",idx+"%");
		span.html(idx+"%");
	},100)
	//点击男女性别进入星座页面
	$("#nav>a").on("click",function(){
		$("#sexChoose").hide();
		$("#star").show();
	}) 
	//点击星座进入内容页
	$("#wrap>div dl").on("click",function(){
		location.href="content.html";
	})
	$(".xingzuo dl").each(function(){
		$(this).on("click",function(){
			var data=$(this).data("val");
			//console.log(data);
			location.href="content.html"
		})
		
	})
	/*	引导页，左右滑动*/
	$("#content").on("swipeLeft",function(){
			i++;
			if (i>=len-1) {i=len-1};
			Fn();
	}).on("swipeRight",function(){
			i--;
			if (i<0) {i=0};
			Fn();
	})

	//点击左右按钮切换上一张下一张
		$("#right").on("click",function(){
			i++;
			if (i>=len-1) {	i=len-1;}
			Fn();

		})
		$("#left").on("click",function(){
			i--;
			if (i<0) {
				i=0;
			}
			Fn();
		})
		function Fn(){
			dis=-i*w;
			$(".box").css({"-webkit-transform":"translate3d("+dis+"px,0,0)","transition":"transform 0.5s"})
		}
	//点击约会按钮分别进入到约会页面
	$("#btns").on("click",function(){
		$(".content").hide();
		_data=$(".content .box").eq(i).data("val");
		//console.log(data);
		if (_data=="yuehui") {
			$(".question .qusLover").show().siblings().hide();
			//alert(1)
		}else if (_data=="gongzuo") {
			$(".question .qusWork").show().siblings().hide();
		}else if (_data=="wan") {
			$(".question .qusPlay").show().siblings().hide();
			//alert(3)
		}
	})
	 var scoreNum=0;
	 var numRander=parseInt(Math.random()*2+1);
	//点击获取锦囊按钮，对应到相应的锦囊，对应的两个锦囊随机挑选
	$(".resultBtn").on("tap",function(){
		$(".result").hide();
		$(".shejiao").show();
		$(".target").hide();
		
		if (_data=="yuehui") {		
			//console.log(numRander);
			var numRander=Math.floor(Math.random()*2+1);
			$(".Socials1").show().siblings().hide();
			$(".Socials1 .detail").eq(numRander).show().siblings().hide();
			//console.log(numRander)
			if (numRander==1) {
				$(".s").html("爱的开场白");
			
			}else if (numRander==2) {
				alert(1)
				$(".s").html("我们");
				
			};
		}else if (_data=="gongzuo") {
			var numRander=parseInt(Math.random()*2+1);
			$(".Socials2").show().siblings().hide();
			$(".Socials2 .detail").eq(numRander).show().siblings().hide();
			if (numRander==1) {
				$(".s").html("甜");
			
			}else if (numRander==2) {
				alert(1)
				$(".s").html("主动权");
				
			};
		
		}else if (_data=="wan") {
			var numRander=parseInt(Math.random()*2+1);
			$(".Socials3").show().siblings().hide();
			$(".Socials3 .detail").eq(numRander).show().siblings().hide();
			if (numRander==1) {
				$(".s").html("慢半拍");
			
			}else if (numRander==2) {
				alert(1)
				$(".s").html("刷存在感");
				
			};
			
		}
	})
	//选择锦囊里面的选项,并记录，页面滑动，显示结果
	var dex=0;
	$("dd").find("p").on("click",function(){
			dex++;
			$(this).parents(".Socials").css({
				"-webkit-transform":"translate3d(0,"+(dex*-h)+"px,0)",
			 	"-webkit-transition":"all 0.5s"
			})
			$(".target").show();
			$(".shejiao").css({"height":"0","-webkit-transition":"all .5s"});
			
	})
		/*if (numRander==1) {
			$(".target").find("span").html("爱的开场白");
			$(".target").find("span").html("甜");
			$(".target").find("span").html("慢半拍");
		}else if (numRander==2) {
			$(".target").find("span").html("我们");
			$(".target").find("span").html("主动权");
			$(".target").find("span").html("刷存在感");
		};*/

	//.question qusLover 约会场景
	qusLover();
	function qusLover(){
		//约会往上滑动
		var length=$(".questionLover").length,startY,moveY,direction,k2=0;
		for(var k=0;k<=length-1;k++){
			$(".questionLover").eq(k).on("touchstart",function(e){
				startY=e.touches[0].screenY;
				//console.log(startX);
			}).on("touchmove",function(e){
				moveY=e.touches[0].screenY;
				//direction=moveX-startX;
			}).on("touchend",function(){
				//alert(1);
				((moveY-startY)>0)&&(direction="下滑动")||(direction="上滑动");
				if (direction=="上滑动") {
					$(this).css({
						"-webkit-transform":"translate3d(0,"+(-k*w)+"px,0)",
						"transition":"all .5s",
						"height":0
					})
					$(this).next().show();
				}
			})
			//左右滑动
			$(".questionLover").eq(k).next().find(".choiceLover").on("swipeLeft",function(){
				k2++;
				var lengths=$(this).find(".Lover").size();
				//console.log(lengths);
				if (k2>=lengths-1) {k2=lengths-1};
				var x=-k2*w;
				//console.log(x)
				$(this).css({"-webkit-transform":"translate3d("+x+"px,0,0)","transition":"all  0.5s"})

			}).on("swipeRight",function(){
				k2--;
				if (k2<0) {k2=0};
				var x=-k2*w;
				$(this).css({"-webkit-transform":"translate3d("+x+"px,0,0)","transition":"all 0.5s"})
			})
			//按钮左右滑动
			$(".questionLover").eq(k).next().find(".left").on("click",function(){
					//alert(4);
					var x=-k2*w;
					//console.log(length1);
					k2--;
					if (k2<0) {k2=0};
					$(this).parent().find(".choiceLover").css({"-webkit-transform":"translate3d("+x+"px,0,0)","transition":"all  0.5s"})

			})
			$(".questionLover").eq(k).next().find(".right").on("click",function(){
					//alert(4);
					var x=-k2*w,
					length1=$(this).parent().find(".choiceLover").find(".Lover").size();
					//console.log(length1);
					k2++;
					//console.log(k2);
					if (k2>=length1-1) {k2=length1-1} 
					$(this).parent().find(".choiceLover").css({"-webkit-transform":"translate3d("+x+"px,0,0)","transition":"all  0.5s"})
			})
			//点击按钮上下左右滑动 点击按钮答题记录分数
			
			$(".questionLover").eq(k).next().find(".btn-lover").on("click",function(){
				//alert(3)第二个按钮第二个滑动页面显示，对应的问题显示

				$(this).parent().hide().eq(k).show();
				 var choiceNum=$(this).parent().find(".Lover").eq(k2).data("choice");
				 var dataNum=$(this).parent().find(".Lover").eq(k2).data("num");
				 var dataBtn=$(this).data("btn");
				 //console.log(dataBtn);
				 //console.log(scoreNum)
				 	if (scoreNum>75&&scoreNum<=90) {
					 			$(".result .success").show();
								 $(".result .loser").hide();
								// alert(2);
					 }else if (scoreNum>=50&&scoreNum<=75) {

								$(".result .success").hide();
								$(".result .loser").show();
					}else if(scoreNum>=5&&scoreNum<=45){
					 			
								$(".result .success").hide();
								$(".result .loser").show();
								// alert(1);
					}else if(scoreNum>=90&&scoreNum<=100){	 			
								$(".result .success").hide();
								$(".result .loser").show();
								// alert(4);
					}
				 scoreNum=scoreNum+dataNum;
				 if (dataBtn=="last") {
				 		$(".question").hide();
				 		$(".result").show();
				 		//alert(scoreNum)
					 	if (scoreNum>75&&scoreNum<=90) {
					 			$(".result .success").show();
								 $(".result .loser").hide();
								// alert(2);
					 	}
						else if(scoreNum>=5&&scoreNum<=45){					 			
								$(".result .success").hide();
								$(".result .loser").show();
								// alert(1);
					 	}
					 	else if(scoreNum>=50&&scoreNum<=75){					 			
								$(".result .success").hide();
								$(".result .loser").show();
								// alert(3);
					 	}
					 	else if(scoreNum>=90&&scoreNum<=100){	 			
								$(".result .success").show();
								$(".result .loser").hide();
								// alert(4);
					 	}
						 $(".nums").html(scoreNum);
				}

			})
				
		}
		


	}
		
			

})(Zepto)