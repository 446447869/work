/**
 * 
 */
function ClickBtn(num){
	$("input:button[id^='btn']").removeClass("setgreenbtn");
	$("input:button[id^='btn']").addClass("setbluebtn");
	$("#btn"+num).removeClass("setbluebtn");
	$("#btn"+num).addClass("setgreenbtn");
	//全てのインプット欄を活性化する
	$("#empid1_1").attr('disabled',false);
	$("#empid1_2").attr('disabled',false);
	$("#empid2").attr('disabled',false);
	if(num==1){
		//追加
		$("#empid1_1").attr('disabled',true);
		$("#empid1_2").attr('disabled',true);
		$("#empid2").attr('disabled',true);
		$.ajax({
			type:"post",
			url:"saiban。action",
			dataType:"json",
			async:false,
			success:function(employeePojo){
				$("#empid2").text(employeePojo.employeeNo);
			}
		});
	}
	else if(num==2){
		//修正
	}
	else if(num==3){
		//削除
	}
	else if(num==4){
		//一括修正
	}
	else if(num==5){
		//詳細検索画面へ
	}
	 }