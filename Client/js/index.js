$(function(){
	$.ajax({
		type:"get",
		url:url+"goodsfind",
		async:true,
		success:function(data){
			var htmlofften="";
			for(var i=0;i<data.list.goodsofften.length;i++){
				htmlofften+='<li class="goodsWarp"><p class="goodsname">'+data.list.goodsofften[i].goodsname+'</p><p>￥<span class="goodsprice">'+data.list.goodsofften[i].price+'</span>元</p></li>'
			}
			$("#TuiJian").html(htmlofften)
			
			var htmltype1="";
			for(var i=0;i<data.list.goodstype1.length;i++){
				htmltype1+='<li class="goodsWarp"><div><img src="'+imgurl+data.list.goodstype1[i].goodsimg+'" /></div><div><p class="goodsname">'+data.list.goodstype1[i].goodsname+'</p><p>￥<span class="goodsprice">'+data.list.goodstype1[i].price+'</span>元</p></div></li>'
			}
			$("#hanbao>ul").html(htmltype1)
			var htmltype2="";
			for(var i=0;i<data.list.goodstype2.length;i++){
				htmltype2+='<li class="goodsWarp"><div><img src="'+imgurl+data.list.goodstype2[i].goodsimg+'" /></div><div><p class="goodsname">'+data.list.goodstype2[i].goodsname+'</p><p>￥<span class="goodsprice">'+data.list.goodstype2[i].price+'</span>元</p></div></li>'
			}
			$("#zhushi>ul").html(htmltype2)
			
			var htmltype3="";
			for(var i=0;i<data.list.goodstype3.length;i++){
				htmltype3+='<li class="goodsWarp"><div><img src="'+imgurl+data.list.goodstype3[i].goodsimg+'" /></div><div><p class="goodsname">'+data.list.goodstype3[i].goodsname+'</p><p>￥<span class="goodsprice">'+data.list.goodstype3[i].price+'</span>元</p></div></li>'
			}
			$("#yinliao>ul").html(htmltype3)
			
			
			
		}
	});
	var haveGoods=[];
	var index=-1;
	
	$(".container").on("click",".goodsWarp",function(){
		
		for(var i=0;i<haveGoods.length;i++){
			if($(this).find(".goodsname").text()==haveGoods[i].goodsname){
				haveGoods[i].goodscount++;
				gethtml();
				return
			}else{
				index=-1
			}
		}
		if(index==-1){
			var goods={
				goodsname:$(this).find(".goodsname").text(),
				goodsprice:$(this).find(".goodsprice").text(),
				goodscount:1,
			}	
			haveGoods.push(goods)
		}
	})
	$(".btn_1").click(function(){
		haveGoods=[];
		gethtml();

	})
	function gethtml(){	
			var htmlhead='<tr><th>商品</th><th>数量</th><th>金额</th><th>操作</th></tr>'
			var html="";
			for(var i=0;i<haveGoods.length;i++){
				html+='<tr><td>'+haveGoods[i].goodsname+'</td><td>'+haveGoods[i].goodscount+'</td><td>'+haveGoods[i].goodsprice+'</td><td class="remove">删除</td></tr>'
			}
			$("#goodsThead").html(htmlhead+html)
		}
})
