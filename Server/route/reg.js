var User=require("../model/user.js");
async function reg(ctx){
	var mydata=ctx.request.body;
	var result={};
	var userfind=await User.find({username:mydata.username});
	if(userfind.length!=0){
		result.errcode=1;
		result.msg="用户名已经存在！"
		ctx.body=result;
	}else{
		var telfind=await User.find({usertel:mydata.usertel});
		if(telfind.length!=0){
			result.errcode=2;
			result.msg="手机号已经存在！"
			ctx.body=result;
		}else{
			var user=new User({
				username : mydata.username,
				userpwd: mydata.userpwd,
				usertel: mydata.usertel
			})
			await user.save()
			result.errcode=0;
			result.msg="注册成功"
			ctx.body=result;
		}
	}
}
module.exports = reg;
