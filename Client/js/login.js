$(function(){
	var inputRrror=1;
	$("#username").blur(function(){
		if($(this).val().length<6||$(this).val().length>12){
			$(".Hint_1").text("用户名必须在6-12位！");
			inputRrror=1
		}else{
			$(".Hint_1").text("");
			inputRrror=0
		}
	})
	$("#login").click(function(){
		if(inputRrror==1){
			AlertMsg("信息输入有误！")
		}else{
			$.ajax({
				type:"post",
				url:url+"login",
				async:true,
				data:{
					username:$("#username").val(),
					userpwd:$("#passwordone").val()
				},
				success:function(data){
					if(data.errcode==0){
						localStorage.setItem("token",data.token);
						localStorage.setItem("username",$("#username").val());
						location.href="index.html";
					}else{
						 AlertMsg(data.msg)
					}
				}
			});
		}
		
	})
	function AlertMsg(y){
		$('.alert').fadeIn()
		$('.alert').text(y)
		setTimeout(function(){
			$('.alert').fadeOut()
		},3000)
	}
})