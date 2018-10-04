var Goods=require("../model/goods.js");

async function goodsfind(ctx){
	var mydata=ctx.request.query;
	var result={};
	var goodstype1=await Goods.find({type:1});
	var goodstype2=await Goods.find({type:2});
	var goodstype3=await Goods.find({type:3});
	var goodsofften=await Goods.find({offten:1});
	
	
	
	
	console.log(goodstype2);
	if(goodstype1.length==0){
		result.errcode=1;
		result.msg="查询不到汉堡";
	}else if(goodstype2.length==0){
		result.errcode=2;
		result.msg="查询不到主食";
	}else if(goodstype3.length==0){
		result.errcode=3;
		result.msg="查询不到饮料";

	}else if(goodsofften.length==0){
		result.errcode=4;
		result.msg="查询不到常用商品";
	}else{
		result.errcode=0;
		result.msg="查询成功";
		result.list={
			goodstype1:goodstype1,
			goodstype2:goodstype2,
			goodstype3:goodstype3,
			goodsofften:goodsofften
		}
	}
	ctx.body=result
}
module.exports = goodsfind;
