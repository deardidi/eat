var User=require("../model/user.js");
var Token=require("../model/token.js");
var stringRandom=require("string-random");
async function login(ctx){
	var mydata=ctx.request.body;
	var result={};
	var userfind=await User.find({username:mydata.username,userpwd:mydata.userpwd});
	if(userfind.length==0){
		result.errcode=1;
		result.msg="用户名和密码错误！"
		ctx.body=result;
	}else{
		var time=Date.now();
		var ovtime=time+3*24*60*60*1000;
		var token=stringRandom(32);
		var tokenfind=await Token.find({username:mydata.username});
		if(tokenfind.length==0){
			var tokensave=new Token({
				username :mydata.username ,
				token: token,
				overtime: ovtime
			})
			await tokensave.save();
		}else{
			await Token.update({username:mydata.username},{
				token: token,
				overtime: ovtime
			})
		}
		result.errcode=0;
		result.msg="登录成功";
		result.token=token;
		ctx.body=result;
	}
}
module.exports = login;
