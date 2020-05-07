/**
 * 
 */
function ClickBtn(num){
	$("input:button[id^='btn']").removeClass("setgreenbtn");
	$("input:button[id^='btn']").addClass("setbluebtn");
	$("#btn"+num).removeClass("setbluebtn");
	$("#btn"+num).addClass("setgreenbtn");
	$("input:text").removeClass("errtext");
	$("input:text").addClass("setbluetext");
	$("select").removeClass("errtext");
	$("select").addClass("setbluetext");
	//エラーメセッジクリア
	$("span[id$='err']").html("");
	//検索結果をクリア
	$("input").not(":button,#empid1_1,#empid1_2,#empid1,#empname1").val("");
	$("select").val("0");
	//全てのインプット欄を活性化する
	$("#empid1_1").attr('disabled',false);
	$("#empid1_2").attr('disabled',false);
	$("#empid2").attr('disabled',false);
	//選択中のボタンを保存。
	sessionStorage.setItem('button', num);
	if(num==1){
		//追加
		$("#empid1_1").attr('disabled',true);
		$("#empid1_2").attr('disabled',true);
		$("#empid2").attr('disabled',true);
		$("#FirstHalfOfAddress").attr('disabled',true);
		$("#SecondHalfOfAddress").attr('disabled',true);
		$.ajax({
			type:"post",
			url:"saiban.action",
			dataType:"json",
			async:false,
			success:function(json){
				$("#empid2").val(json.employeePojo.employeeNo);
				$("#Enter").attr('disabled',false);
			}
		});
		return;
	}
	else if(num==2){
		//修正
		$("#empid1_1").attr('disabled',true);
		$("#empid1_2").attr('disabled',true);
		$("#empid2").attr('disabled',true);
		if($("#empid1").val()=="" && $("#empname1").val()==""){
			$("#empid1err").html(MSG005)
			$("empid1").removeClass("errtext");
			$("empid1").addClass("setbluetext");
			$("empname1").removeClass("errtext");
			$("empname1").addClass("setbluetext");
		}
		else{
			$.ajax({
				type:"post",
				url:"correct.action",
				dataType:"json",
				async:false,
				data: {"employeeBean.employeeNo" : $("#empid1").val() , "employeeBean.employeeName":$("#empname1").val() }, 
				success:function(json){
					if (json.employeePojo.peopleNum<1){
						$("#empid1err").html(MSG005)
						$("empid1").removeClass("errtext");
						$("empid1").addClass("setbluetext");
						$("empname1").removeClass("errtext");
						$("empname1").addClass("setbluetext");
					}
					else if(json.employeePojo.peopleNum>1){
						$("#empid1err").html(MSG018)
						$("empid1").removeClass("errtext");
						$("empid1").addClass("setbluetext");
						$("empname1").removeClass("errtext");
						$("empname1").addClass("setbluetext");
					}
					else{
						$("input:text").attr('disabled',false);
						$("#empid2").attr('disabled',true);
						$("#Enter").attr('disabled',false);
						$("#empid2").val(json.employeePojo.employeeNo);
						$("#empname2").val(json.employeePojo.employeeName);
						$("#password").val("******");
						$("#Age").val(json.employeePojo.age);
						$("#JoiningCompanyOfYear").val(json.employeePojo.joiningCompanyOfYear);
						$("#IntoCompanyOfMonth").val(json.employeePojo.intoCompanyOfMonth);
						$("#CompanyMail").val(json.employeePojo.companyMail);
						$("#PersonalMail").val(json.employeePojo.personalMail);
						$("#PhoneNo1").val(json.employeePojo.phoneNo1);
						$("#PhoneNo2").val(json.employeePojo.phoneNo2);
						$("#PhoneNo3").val(json.employeePojo.phoneNo3);
						$("#AuthorityNo").val(json.employeePojo.authorityNo);
						$("#GenderNo").val(json.employeePojo.genderNo);
						$("#DependentsPerson").val(json.employeePojo.dependentsPerson);
						$("#Salary").val(json.employeePojo.salary);
						$("#PostalCode1").val(json.employeePojo.postalCode1);
						$("#PostalCode2").val(json.employeePojo.postalCode2);
						$("#FirstHalfOfAddress").val(json.employeePojo.firstHalfOfAddress);
						$("#SecondHalfOfAddress").val(json.employeePojo.secondHalfOfAddress);
						$("#NearestStation").val(json.employeePojo.nearestStation);
						$("#BankNo").val(json.employeePojo.bankNo);
						$("#BankBranchCode").val(json.employeePojo.bankBranchCode);
						$("#BankBranchName").val(json.employeePojo.bankBranchName);
						$("#AccountNo").val(json.employeePojo.accountNo);
						$("#AccountName").val(json.employeePojo.accountName);
						//前回アップロード時間
						sessionStorage.setItem('updateTime', json.employeePojo.updateTime);
					}
				}
			});
		}
		return;
	}
	else if(num==3){
		//削除
		$("#empid1_1").attr('disabled',true);
		$("#empid1_2").attr('disabled',true);
		$("#empid2").attr('disabled',true);
		if($("#empid1").val()=="" && $("#empname1").val()==""){
			$("#empid1err").html(MSG005)
			$("empid1").removeClass("errtext");
			$("empid1").addClass("setbluetext");
			$("empname1").removeClass("errtext");
			$("empname1").addClass("setbluetext");
		}
		else{
			$.ajax({
				type:"post",
				url:"correct.action",
				dataType:"json",
				async:false,
				data: {"employeeBean.employeeNo" : $("#empid1").val() , "employeeBean.employeeName":$("#empname1").val() }, 
				success:function(json){
					if (json.employeePojo.peopleNum<1){
						$("#empid1err").html(MSG005)
						$("empid1").removeClass("errtext");
						$("empid1").addClass("setbluetext");
						$("empname1").removeClass("errtext");
						$("empname1").addClass("setbluetext");
					}
					else if(json.employeePojo.peopleNum>1){
						$("#empid1err").html(MSG018)
						$("empid1").removeClass("errtext");
						$("empid1").addClass("setbluetext");
						$("empname1").removeClass("errtext");
						$("empname1").addClass("setbluetext");
					}
					else{
						$("#Enter").attr('disabled',false);
						$("input:text").attr('disabled',true);
						$("#empid1").attr('disabled',false);
						$("#empid1_1").attr('disabled',false);
						$("#empid1_2").attr('disabled',false);
						$("#empname1").attr('disabled',false);
						$("#empid2").val(json.employeePojo.employeeNo);
						$("#empname2").val(json.employeePojo.employeeName);
						$("#password").val("******");
						$("#Age").val(json.employeePojo.age);
						$("#JoiningCompanyOfYear").val(json.employeePojo.joiningCompanyOfYear);
						$("#IntoCompanyOfMonth").val(json.employeePojo.intoCompanyOfMonth);
						$("#CompanyMail").val(json.employeePojo.companyMail);
						$("#PersonalMail").val(json.employeePojo.personalMail);
						$("#PhoneNo1").val(json.employeePojo.phoneNo1);
						$("#PhoneNo2").val(json.employeePojo.phoneNo2);
						$("#PhoneNo3").val(json.employeePojo.phoneNo3);
						$("#AuthorityNo").val(json.employeePojo.authorityNo);
						$("#GenderNo").val(json.employeePojo.genderNo);
						$("#DependentsPerson").val(json.employeePojo.dependentsPerson);
						$("#Salary").val(json.employeePojo.salary);
						$("#PostalCode1").val(json.employeePojo.postalCode1);
						$("#PostalCode2").val(json.employeePojo.postalCode2);
						$("#FirstHalfOfAddress").val(json.employeePojo.firstHalfOfAddress);
						$("#SecondHalfOfAddress").val(json.employeePojo.secondHalfOfAddress);
						$("#NearestStation").val(json.employeePojo.nearestStation);
						$("#BankNo").val(json.employeePojo.bankNo);
						$("#BankBranchCode").val(json.employeePojo.bankBranchCode);
						$("#BankBranchName").val(json.employeePojo.bankBranchName);
						$("#AccountNo").val(json.employeePojo.accountNo);
						$("#AccountName").val(json.employeePojo.accountName);
						//前回アップロード時間
						sessionStorage.setItem('updateTime', json.employeePojo.updateTime);
					}
				}
			});
		}
		return;
	}
	else if(num==4){
		//一括修正
		var minNo=$("#empid1_1").val();
		var maxNo=$("#empid1_2").val();
		if(minNo==""){
			minNo="999";
		}
		else if (isNaN(minNo)){
			$("#empid1err").html(MSG022);
			$("empid1_1").removeClass("errtext");
			$("empid1_1").addClass("setbluetext");
			$("empid1_2").removeClass("errtext");
			$("empid1_2").addClass("setbluetext");
		}
		if(maxNo==""){
			maxNo="000";
		}
		else if (isNaN(maxNo)){
			$("#empid1err").html(MSG022);
			$("empid1_1").removeClass("errtext");
			$("empid1_1").addClass("setbluetext");
			$("empid1_2").removeClass("errtext");
			$("empid1_2").addClass("setbluetext");
		}
		$.ajax({
			type:"post",
			url:"maxMinEmpNo.action",
			dataType:"json",
			async:false,
			success:function(json){
				if(minNo==""){
					minNo="000";
				}
				else if(minNo<json.employeePojo.minemployeeNo){
					$("#empid1err").html(MSG022);
					$("empid1_1").removeClass("errtext");
					$("empid1_1").addClass("setbluetext");
					$("empid1_2").removeClass("errtext");
					$("empid1_2").addClass("setbluetext");
					return;
				}
				if(maxNo==""){
					maxNo="999";
				}
				else if(maxNo>json.employeePojo.maxemployeeNo){
					$("#empid1err").html(MSG022);
					$("empid1_1").removeClass("errtext");
					$("empid1_1").addClass("setbluetext");
					$("empid1_2").removeClass("errtext");
					$("empid1_2").addClass("setbluetext");
					return;
				}
					$("#Enter").attr('disabled',false);
					$("input:text").attr('disabled',false);
					$("#empid2").attr('disabled',true);
					$(".mark").text("");
					$("#AuthorityNo").val(-1);
					$("#GenderNo").val(-1);
					$("#DependentsPerson").val(-1);
			}
		});
		return;
	}
	else if(num==5){
		//詳細検索画面へ
		return;
	}
}
function enter(){
	//共通処理
	//エラーメセッジクリア
	$("span[id$='err']").html("");
	$("input:text").removeClass("errtext");
	$("input:text").addClass("setbluetext");
	$("select").removeClass("errtext");
	$("select").addClass("setbluetext");
	var numandalphabet=/^[0-9a-zA-Z]*$/g;
	var katakana=/^[ァ-ヶー　]*$/;
	var stop=false;
	var Salary=$("#Salary").val()
	if (sessionStorage.getItem('button')!="4"){
		if(Salary.length>3){
			Salary=Salary.substring(0,Salary.length-4)+""+Salary.substring(Salary.length-3);
		}
		if(isNaN(Salary)&&Salary!=""){
			("#Salaryerr$").html=MSG015;
			$("#Salary").removeClass("setbluetext");
			$("#Salary").addClass("errtext");
			stop=true;
		}
		else if(Salary.length<5&&Salary!=""){
			("#Salaryerr$").html=MSG008;
			$("#Salary").removeClass("setbluetext");
			$("#Salary").addClass("errtext");
			stop=true;
		}
		if($("#password").val()==""){
			$("#passworderr").html(MSG006);
			$("#password").removeClass("setbluetext");
			$("#password").addClass("errtext");
			stop=true;
		}
		else if($("#password").val().length<6){
			$("#passworderr").html(MSG009);
			$("#password").removeClass("setbluetext");
			$("#password").addClass("errtext");
			stop=true;
		}
		else if(!numandalphabet.test($("#password").val())&&$("#password").val()!="******"){
			$("#passworderr").html(MSG013);
			$("#password").removeClass("setbluetext");
			$("#password").addClass("errtext");
			stop=true;
		}
		else if(sessionStorage.getItem('button')==1&&$("#password").val()=="******"){
			$("#passworderr").html(MSG013);
			$("#password").removeClass("setbluetext");
			$("#password").addClass("errtext");
			stop=true;
		}
		var mailcheck = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
		if(!mailcheck.test($("#PersonalMail").val())&&$("#PersonalMail").val()!=""){
			$("#PersonalMailerr").html(MSG008);
			$("#PersonalMail").removeClass("setbluetext");
			$("#PersonalMail").addClass("errtext");
			stop=true;
		}
		var mailcheck = /^([\.a-zA-Z0-9_-])+/;
		if(!mailcheck.test($("#CompanyMail").val())&&$("#CompanyMail").val()!=""){
			$("#CompanyMailerr").html(MSG008);
			$("#CompanyMail").removeClass("setbluetext");
			$("#CompanyMail").addClass("errtext");
			stop=true;
	     }
		if($("#PhoneNo1").val().length+$("#PhoneNo2").val().length+$("#PhoneNo3").val().length>0){
			if($("#PhoneNo1").val().length+$("#PhoneNo2").val().length+$("#PhoneNo3").val().length<11){
		    	$("#PhoneNoerr").html(MSG011);
				$("#PhoneNo1").removeClass("setbluetext");
				$("#PhoneNo1").addClass("errtext");
				$("#PhoneNo2").removeClass("setbluetext");
				$("#PhoneNo2").addClass("errtext");
				$("#PhoneNo3").removeClass("setbluetext");
				$("#PhoneNo3").addClass("errtext");
		    	stop=true;
		    }
		    else if(isNaN($("#PhoneNo1").val())||isNaN($("#PhoneNo2").val())||isNaN($("#PhoneNo3").val())){
		    	$("#PhoneNoerr").html(MSG011);
		    	$("#PhoneNoerr").html(MSG011);
				$("#PhoneNo1").removeClass("setbluetext");
				$("#PhoneNo1").addClass("errtext");
				$("#PhoneNo2").removeClass("setbluetext");
				$("#PhoneNo2").addClass("errtext");
				$("#PhoneNo3").removeClass("setbluetext");
				$("#PhoneNo3").addClass("errtext");
		    	stop=true;
		    }
		}
	    if(($("#JoiningCompanyOfYear").val()=="0")!=($("#IntoCompanyOfMonth").val()=="0")){
			$("#IntoCompanyerr").html(MSG010);
	    	$("#PhoneNoerr").html(MSG011);
			$("#JoiningCompanyOfYear").removeClass("setbluetext");
			$("#JoiningCompanyOfYear").addClass("errtext");
			$("#IntoCompanyOfMonth").removeClass("setbluetext");
			$("#IntoCompanyOfMonth").addClass("errtext");
			stop=true;
	    }
	    if($("#PostalCode1").val().length!=0||$("#PostalCode2").val().length!=0){
		    if($("#PostalCode1").val().length<3||$("#PostalCode2").val().length<4){
			 	$("#empid3err").html(MSG020);
				$("#PostalCode1").removeClass("setbluetext");
				$("#PostalCode1").addClass("errtext");
				$("#PostalCode2").removeClass("setbluetext");
				$("#PostalCode2").addClass("errtext");	 	
				stop=true;
			}
	    }
	    if((isNaN($("#AccountNo").val())&&$("#AccountNo").val()!="")||(isNaN($("#BankBranchCode").val())&&$("#BankBranchCode").val()!="")){
		 	$("#empid2err").html(MSG015);
			$("#AccountNo").removeClass("setbluetext");
			$("#AccountNo").addClass("errtext");
			$("#BankBranchCode").removeClass("setbluetext");
			$("#BankBranchCode").addClass("errtext");	 	 	
			stop=true;
		}
	    else if(!katakana.test($("#AccountName").val())&&$("#AccountName").val()!=""){
	    	$("#empid2err").html(MSG017);
			$("#AccountName").removeClass("setbluetext");
			$("#AccountName").addClass("errtext");	
			stop=true;
	    }
	    else if($("#BankNo").val()=="0"){
	    	if($("#BankBranchCode").val()!=""||
			$("#BankBranchName").val()!=""||
			$("#AccountNo").val()!=""||
			$("#AccountName").val()!=""){
				$("#empid2err").html(MSG017);
				$("#BankNo").removeClass("setbluetext");
				$("#BankNo").addClass("errtext");
				$("#BankBranchCode").removeClass("setbluetext");
				$("#BankBranchCode").addClass("errtext");	 
				$("#BankBranchName").removeClass("setbluetext");
				$("#BankBranchName").addClass("errtext");
				$("#AccountNo").removeClass("setbluetext");
				$("#AccountNo").addClass("errtext");	 
				$("#AccountName").removeClass("setbluetext");
				$("#AccountName").addClass("errtext");	 
				stop=true;
	    	}
	    }
	    else if($("#BankNo").val()!="0"){
	    		if($("#BankBranchCode").val()==""||
				$("#BankBranchName").val()==""||
				$("#AccountNo").val()==""||
				$("#AccountName").val()==""){
					$("#empid2err").html(MSG017);
					$("#BankNo").removeClass("setbluetext");
					$("#BankNo").addClass("errtext");
					$("#BankBranchCode").removeClass("setbluetext");
					$("#BankBranchCode").addClass("errtext");	 
					$("#BankBranchName").removeClass("setbluetext");
					$("#BankBranchName").addClass("errtext");
					$("#AccountNo").removeClass("setbluetext");
					$("#AccountNo").addClass("errtext");	 
					$("#AccountName").removeClass("setbluetext");
					$("#AccountName").addClass("errtext");	 
					stop=true;
		    	}
		}
	    if (stop){
	    	return;
	    }
	}
	else{
		//一括修正チェック
		if(Salary.length>3){
			Salary=Salary.substring(0,Salary.length-4)+""+Salary.substring(Salary.length-3);
		}
		if(isNaN(Salary)&&Salary!=""){
			("#Salaryerr$").html=MSG015;
			$("#Salary").removeClass("setbluetext");
			$("#Salary").addClass("errtext");
			stop=true;
		}
		else if(Salary.length<5&&Salary!=""){
			("#Salaryerr$").html=MSG008;
			$("#Salary").removeClass("setbluetext");
			$("#Salary").addClass("errtext");
			stop=true;
		}
		if($("#password").val().length<6&&$("#password").val()!=""){
			$("#passworderr").html(MSG009);
			$("#password").removeClass("setbluetext");
			$("#password").addClass("errtext");
			stop=true;
		}
		else if(!numandalphabet.test($("#password").val())&&$("#password").val()!=""){
			$("#passworderr").html(MSG013);
			$("#password").removeClass("setbluetext");
			$("#password").addClass("errtext");
			stop=true;
		}
		var mailcheck = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
		if(!mailcheck.test($("#PersonalMail").val())&&$("#PersonalMail").val()!=""){
			$("#PersonalMailerr").html(MSG008);
			$("#PersonalMail").removeClass("setbluetext");
			$("#PersonalMail").addClass("errtext");
			stop=true;
		}
		var mailcheck = /^([\.a-zA-Z0-9_-])+/;
		if(!mailcheck.test($("#CompanyMail").val())&&$("#CompanyMail").val()!=""){
			$("#CompanyMailerr").html(MSG008);
			$("#CompanyMail").removeClass("setbluetext");
			$("#CompanyMail").addClass("errtext");
			stop=true;
	     }
		if($("#PhoneNo1").val().length+$("#PhoneNo2").val().length+$("#PhoneNo3").val().length>0){
			if($("#PhoneNo1").val().length+$("#PhoneNo2").val().length+$("#PhoneNo3").val().length<11){
		    	$("#PhoneNoerr").html(MSG011);
				$("#PhoneNo1").removeClass("setbluetext");
				$("#PhoneNo1").addClass("errtext");
				$("#PhoneNo2").removeClass("setbluetext");
				$("#PhoneNo2").addClass("errtext");
				$("#PhoneNo3").removeClass("setbluetext");
				$("#PhoneNo3").addClass("errtext");
		    	stop=true;
		    }
		    else if(isNaN($("#PhoneNo1").val())||isNaN($("#PhoneNo2").val())||isNaN($("#PhoneNo3").val())){
		    	$("#PhoneNoerr").html(MSG011);
		    	$("#PhoneNoerr").html(MSG011);
				$("#PhoneNo1").removeClass("setbluetext");
				$("#PhoneNo1").addClass("errtext");
				$("#PhoneNo2").removeClass("setbluetext");
				$("#PhoneNo2").addClass("errtext");
				$("#PhoneNo3").removeClass("setbluetext");
				$("#PhoneNo3").addClass("errtext");
		    	stop=true;
		    }
		}
	    if(($("#JoiningCompanyOfYear").val()=="0")!=($("#IntoCompanyOfMonth").val()=="0")){
			$("#IntoCompanyerr").html(MSG010);
	    	$("#PhoneNoerr").html(MSG011);
			$("#JoiningCompanyOfYear").removeClass("setbluetext");
			$("#JoiningCompanyOfYear").addClass("errtext");
			$("#IntoCompanyOfMonth").removeClass("setbluetext");
			$("#IntoCompanyOfMonth").addClass("errtext");
			stop=true;
	    }
	    if($("#PostalCode1").val().length!=0||$("#PostalCode2").val().length!=0){
		    if($("#PostalCode1").val().length<3||$("#PostalCode2").val().length<4){
			 	$("#empid3err").html(MSG020);
				$("#PostalCode1").removeClass("setbluetext");
				$("#PostalCode1").addClass("errtext");
				$("#PostalCode2").removeClass("setbluetext");
				$("#PostalCode2").addClass("errtext");	 	
				stop=true;
			}
	    }
	    if((isNaN($("#AccountNo").val())&&$("#AccountNo").val()!="")||(isNaN($("#BankBranchCode").val())&&$("#BankBranchCode").val()!="")){
		 	$("#empid2err").html(MSG015);
			$("#AccountNo").removeClass("setbluetext");
			$("#AccountNo").addClass("errtext");
			$("#BankBranchCode").removeClass("setbluetext");
			$("#BankBranchCode").addClass("errtext");	 	 	
			stop=true;
		}
	    else if(!katakana.test($("#AccountName").val())&&$("#AccountName").val()!=""){
	    	$("#empid2err").html(MSG017);
			$("#AccountName").removeClass("setbluetext");
			$("#AccountName").addClass("errtext");	
			stop=true;
	    }
//	    else if($("#BankNo").val()=="0"){
//	    	if($("#BankBranchCode").val()!=""||
//			$("#BankBranchName").val()!=""||
//			$("#AccountNo").val()!=""||
//			$("#AccountName").val()!=""){
//				$("#empid2err").html(MSG017);
//				$("#BankNo").removeClass("setbluetext");
//				$("#BankNo").addClass("errtext");
//				$("#BankBranchCode").removeClass("setbluetext");
//				$("#BankBranchCode").addClass("errtext");	 
//				$("#BankBranchName").removeClass("setbluetext");
//				$("#BankBranchName").addClass("errtext");
//				$("#AccountNo").removeClass("setbluetext");
//				$("#AccountNo").addClass("errtext");	 
//				$("#AccountName").removeClass("setbluetext");
//				$("#AccountName").addClass("errtext");	 
//				stop=true;
//	    	}
//	    }
//	    else if($("#BankNo").val()!="0"){
//	    		if($("#BankBranchCode").val()==""||
//				$("#BankBranchName").val()==""||
//				$("#AccountNo").val()==""||
//				$("#AccountName").val()==""){
//					$("#empid2err").html(MSG017);
//					$("#BankNo").removeClass("setbluetext");
//					$("#BankNo").addClass("errtext");
//					$("#BankBranchCode").removeClass("setbluetext");
//					$("#BankBranchCode").addClass("errtext");	 
//					$("#BankBranchName").removeClass("setbluetext");
//					$("#BankBranchName").addClass("errtext");
//					$("#AccountNo").removeClass("setbluetext");
//					$("#AccountNo").addClass("errtext");	 
//					$("#AccountName").removeClass("setbluetext");
//					$("#AccountName").addClass("errtext");	 
//					stop=true;
//		    	}
//		}
	    if (stop){
	    	return;
	    }
	}
	switch (sessionStorage.getItem('button')){
	case "1":
		//追加
    	if(confirm("インサートしてもよろしいでしょうか？")){
    		$.ajax({
    			type:"post",
    			url:"empDataSeting.action",
    			dataType:"json",
    			async:false,
    			data: { "employeeBean.button":sessionStorage.getItem('button'),
    					"employeeBean.employeeNo":$("#empid2").val(),
    					"employeeBean.employeeName":$("#empname2").val(),
    					"employeeBean.password":$("#password").val(),
    					"employeeBean.authorityCode":$("#AuthorityNo").val(),
    					"employeeBean.BankNo":$("#BankNo").val(),
    					"employeeBean.BankBranchCode":$("#BankBranchCode").val(),
    					"employeeBean.BankBranchName":$("#BankBranchName").val(),
    					"employeeBean.AccountNo":$("#AccountNo").val(),
    					"employeeBean.AccountName":$("#AccountName").val(),
    					"employeeBean.PostalCode1":$("#PostalCode1").val(),
    					"employeeBean.PostalCode2":$("#PostalCode2").val(),
    					"employeeBean.Age":$("#Age").val(),
    					"employeeBean.JoiningCompanyOfYear":$("#JoiningCompanyOfYear").val(),
    					"employeeBean.IntoCompanyOfMonth":$("#IntoCompanyOfMonth").val(),
    					"employeeBean.CompanyMail":$("#CompanyMail").val(),
    					"employeeBean.PersonalMail":$("#PersonalMail").val(),
    					"employeeBean.PhoneNo1":$("#PhoneNo1").val(),
    					"employeeBean.PhoneNo2":$("#PhoneNo2").val(),
    					"employeeBean.PhoneNo3":$("#PhoneNo3").val(),
    					"employeeBean.GenderNo":$("#GenderNo").val(),
    					"employeeBean.DependentsPerson":$("#DependentsPerson").val(),
    					"employeeBean.Salary":$("#Salary").val(),
    					"employeeBean.FirstHalfOfAddress":$("#FirstHalfOfAddress").val(),
    					"employeeBean.SecondHalfOfAddress":$("#SecondHalfOfAddress").val(),
    					"employeeBean.NearestStation":$("#NearestStation").val()
    				}, 
    			success:function(json){
    	    		if(json.employeePojo.succeed){
    	    			load();
    	    			alert("処理が成功しました");
    	    		}
    	    		else{
    	    			alert("処理が失敗しました");
    	    		}
    			}
    		});
    		return
    	}
		break;
	case "2":
		//修正
    	if(confirm("修正してもよろしいでしょうか？？")){
    		$.ajax({
    			type:"post",
    			url:"empDataSeting.action",
    			dataType:"json",
    			async:false,
    			data: { "employeeBean.button":sessionStorage.getItem('button'),
    					"employeeBean.employeeNo":$("#empid2").val(),
    					"employeeBean.employeeName":$("#empname2").val(),
    					"employeeBean.password":$("#password").val(),
    					"employeeBean.authorityCode":$("#AuthorityNo").val(),
    					"employeeBean.BankNo":$("#BankNo").val(),
    					"employeeBean.BankBranchCode":$("#BankBranchCode").val(),
    					"employeeBean.BankBranchName":$("#BankBranchName").val(),
    					"employeeBean.AccountNo":$("#AccountNo").val(),
    					"employeeBean.AccountName":$("#AccountName").val(),
    					"employeeBean.PostalCode1":$("#PostalCode1").val(),
    					"employeeBean.PostalCode2":$("#PostalCode2").val(),
    					"employeeBean.Age":$("#Age").val(),
    					"employeeBean.JoiningCompanyOfYear":$("#JoiningCompanyOfYear").val(),
    					"employeeBean.IntoCompanyOfMonth":$("#IntoCompanyOfMonth").val(),
    					"employeeBean.CompanyMail":$("#CompanyMail").val(),
    					"employeeBean.PersonalMail":$("#PersonalMail").val(),
    					"employeeBean.PhoneNo1":$("#PhoneNo1").val(),
    					"employeeBean.PhoneNo2":$("#PhoneNo2").val(),
    					"employeeBean.PhoneNo3":$("#PhoneNo3").val(),
    					"employeeBean.GenderNo":$("#GenderNo").val(),
    					"employeeBean.DependentsPerson":$("#DependentsPerson").val(),
    					"employeeBean.Salary":$("#Salary").val(),
    					"employeeBean.FirstHalfOfAddress":$("#FirstHalfOfAddress").val(),
    					"employeeBean.SecondHalfOfAddress":$("#SecondHalfOfAddress").val(),
    					"employeeBean.NearestStation":$("#NearestStation").val(),
    					"employeeBean.updateTime":sessionStorage.getItem('updateTime')
    				}, 
    			success:function(json){
    	    		if(json.employeePojo.succeed){
    	    			load();
    	    			alert("処理が成功しました");
    	    		}
    	    		else{
    	    			alert("処理が失敗しました");
    	    		}
    			}
    		});
    		return
    	}
		break;
	case "3":
		//削除
    	if(confirm("削除してもよろしいでしょうか？？")){
    		$.ajax({
    			type:"post",
    			url:"empDataSeting.action",
    			dataType:"json",
    			async:false,
    			data: { "employeeBean.button":sessionStorage.getItem('button'),
    					"employeeBean.employeeNo1":$("#empid1_1").val(),
    					"employeeBean.employeeNo1":$("#empid1_2").val(),
    					"employeeBean.employeeName":$("#empname2").val(),
    					"employeeBean.password":$("#password").val(),
    					"employeeBean.authorityCode":$("#AuthorityNo").val(),
    					"employeeBean.BankNo":$("#BankNo").val(),
    					"employeeBean.BankBranchCode":$("#BankBranchCode").val(),
    					"employeeBean.BankBranchName":$("#BankBranchName").val(),
    					"employeeBean.AccountNo":$("#AccountNo").val(),
    					"employeeBean.AccountName":$("#AccountName").val(),
    					"employeeBean.PostalCode1":$("#PostalCode1").val(),
    					"employeeBean.PostalCode2":$("#PostalCode2").val(),
    					"employeeBean.Age":$("#Age").val(),
    					"employeeBean.JoiningCompanyOfYear":$("#JoiningCompanyOfYear").val(),
    					"employeeBean.IntoCompanyOfMonth":$("#IntoCompanyOfMonth").val(),
    					"employeeBean.CompanyMail":$("#CompanyMail").val(),
    					"employeeBean.PersonalMail":$("#PersonalMail").val(),
    					"employeeBean.PhoneNo1":$("#PhoneNo1").val(),
    					"employeeBean.PhoneNo2":$("#PhoneNo2").val(),
    					"employeeBean.PhoneNo3":$("#PhoneNo3").val(),
    					"employeeBean.GenderNo":$("#GenderNo").val(),
    					"employeeBean.DependentsPerson":$("#DependentsPerson").val(),
    					"employeeBean.Salary":$("#Salary").val(),
    					"employeeBean.FirstHalfOfAddress":$("#FirstHalfOfAddress").val(),
    					"employeeBean.SecondHalfOfAddress":$("#SecondHalfOfAddress").val(),
    					"employeeBean.NearestStation":$("#NearestStation").val(),
    					"employeeBean.updateTime":sessionStorage.getItem('updateTime')
    				}, 
    			success:function(json){
    	    		if(json.employeePojo.succeed){
    	    			load();
    	    			alert("処理が成功しました");
    	    		}
    	    		else{
    	    			alert("処理が失敗しました");
    	    		}
    			}
    		});
    		return
    	}
		break;
	case "4":
		//一括修正
		var minNo=$("#empid1_1").val();
		var maxNo=$("#empid1_2").val();
		if (minNo!=""&&isNaN(minNo)){
			$("#empid1err").html(MSG022);
			$("empid1_1").removeClass("errtext");
			$("empid1_1").addClass("setbluetext");
			$("empid1_2").removeClass("errtext");
			$("empid1_2").addClass("setbluetext");
			return;
		}
		if (maxNo!=""&&isNaN(maxNo)){
			$("#empid1err").html(MSG022);
			$("empid1_1").removeClass("errtext");
			$("empid1_1").addClass("setbluetext");
			$("empid1_2").removeClass("errtext");
			$("empid1_2").addClass("setbluetext");
			return;
		}
		$.ajax({
			type:"post",
			url:"maxMinEmpNo.action",
			dataType:"json",
			async:false,
			success:function(json){
				if(minNo==""){
					minNo="000";
				}
				else if(minNo<json.employeePojo.minemployeeNo){
					$("#empid1err").html(MSG022);
					$("empid1_1").removeClass("errtext");
					$("empid1_1").addClass("setbluetext");
					$("empid1_2").removeClass("errtext");
					$("empid1_2").addClass("setbluetext");
					return;
				}
				if(maxNo==""){
					maxNo="999";
				}
				else if(maxNo>json.employeePojo.maxemployeeNo){
					$("#empid1err").html(MSG022);
					$("empid1_1").removeClass("errtext");
					$("empid1_1").addClass("setbluetext");
					$("empid1_2").removeClass("errtext");
					$("empid1_2").addClass("setbluetext");
					return;
				}
					$.ajax({
		    			type:"post",
		    			url:"empAllDataSeting.action",
		    			dataType:"json",
		    			async:false,
		    			data: { "employeeBean.button":sessionStorage.getItem('button'),
		    					"employeeBean.employeeNo1":minNo,
		    					"employeeBean.employeeNo2":maxNo,
		    					"employeeBean.employeeName":$("#empname2").val(),
		    					"employeeBean.password":$("#password").val(),
		    					"employeeBean.authorityCode":$("#AuthorityNo").val(),
		    					"employeeBean.BankNo":$("#BankNo").val(),
		    					"employeeBean.BankBranchCode":$("#BankBranchCode").val(),
		    					"employeeBean.BankBranchName":$("#BankBranchName").val(),
		    					"employeeBean.AccountNo":$("#AccountNo").val(),
		    					"employeeBean.AccountName":$("#AccountName").val(),
		    					"employeeBean.PostalCode1":$("#PostalCode1").val(),
		    					"employeeBean.PostalCode2":$("#PostalCode2").val(),
		    					"employeeBean.Age":$("#Age").val(),
		    					"employeeBean.JoiningCompanyOfYear":$("#JoiningCompanyOfYear").val(),
		    					"employeeBean.IntoCompanyOfMonth":$("#IntoCompanyOfMonth").val(),
		    					"employeeBean.CompanyMail":$("#CompanyMail").val(),
		    					"employeeBean.PersonalMail":$("#PersonalMail").val(),
		    					"employeeBean.PhoneNo1":$("#PhoneNo1").val(),
		    					"employeeBean.PhoneNo2":$("#PhoneNo2").val(),
		    					"employeeBean.PhoneNo3":$("#PhoneNo3").val(),
		    					"employeeBean.GenderNo":$("#GenderNo").val(),
		    					"employeeBean.DependentsPerson":$("#DependentsPerson").val(),
		    					"employeeBean.Salary":$("#Salary").val(),
		    					"employeeBean.FirstHalfOfAddress":$("#FirstHalfOfAddress").val(),
		    					"employeeBean.SecondHalfOfAddress":$("#SecondHalfOfAddress").val(),
		    					"employeeBean.NearestStation":$("#NearestStation").val()
		    				}, 
		    			success:function(json){
		    	    		if(json.employeePojo.succeed){
		    	    			load();
		    	    			alert("処理が成功しました");
		    	    		}
		    	    		else{
		    	    			alert("処理が失敗しました");
		    	    		}
		    			}
		    		});
				}
		});
		break;
	}
	
	
}
function load() {
	sessionStorage.setItem('button', 0);
	$("#empid2").attr('disabled',true);
	$("#FirstHalfOfAddress").attr('disabled',true);
	$("#SecondHalfOfAddress").attr('disabled',true);
	$("#BankBranchCode").attr('disabled',true);
	$("#BankBranchName").attr('disabled',true);
	$("#AccountNo").attr('disabled',true);
	$("#AccountName").attr('disabled',true);
	$("#Age").attr('disabled',true);
	$("#Enter").attr('disabled',true);
	$("input:button[id^='btn']").removeClass("setgreenbtn");
	$("input:button[id^='btn']").addClass("setbluebtn");
	$("input:text").removeClass("errtext");
	$("input:text").addClass("setbluetext");
	$("select").removeClass("errtext");
	$("select").addClass("setbluetext");
	//エラーメセッジクリア
	$("span[id$='err']").html("");
	//検索結果をクリア
	$("input").not(":button").val("");
	$("select").val("0");
	$(".mark").text("★");
}
function bank(){
	if ($("#BankNo").val()==0){
		$("#BankBranchCode").attr('disabled',true);
		$("#BankBranchName").attr('disabled',true);
		$("#AccountNo").attr('disabled',true);
		$("#AccountName").attr('disabled',true);
	}
	else{
		$("#BankBranchCode").attr('disabled',false);
		$("#BankBranchName").attr('disabled',false);
		$("#AccountNo").attr('disabled',false);
		$("#AccountName").attr('disabled',false);	
	}
}
function BankBranch(num){
	if(num==0){
		//支店名から
		$.ajax({
			type:"post",
			url:"bankcheck.action",
			dataType:"json",
			async:false,
			data: {"employeeBean.bankNo":$("#BankNo").val(),"employeeBean.bankBranchName":$("#BankBranchName").val()}, 
			success:function(json){
				if (json.employeePojo.BankBranchName!=null){
					$("#BankBranchNo").val();
					$("#BankBranchName").val();
					$("#empid1err").html(MSG019);
				}
				else{
					$("#BankBranchCode").val(json.employeePojo.bankBranchCode);
				}
			}
		});
	}
	else{
		//支店番号から
		$.ajax({
			type:"post",
			url:"bankcheck.action",
			dataType:"json",
			async:false,
			data: {"employeeBean.bankNo":$("#BankNo").val(),"employeeBean.bankBranchCode":$("#BankBranchCode").val()}, 
			success:function(json){
				if (json.employeePojo.BankBranchName!=null){
					$("#BankBranchNo").val();
					$("#BankBranchName").val();
					$("#empid2err").html(MSG019);
				}
				else{
					$("#BankBranchName").val(json.employeePojo.bankBranchName);
				}
			}
		});
	}
}
function setage(){
	var Calendar = new Array;
	Calendar = $("#Calendar").val().split("-"); 
	var Now=new Date();
	var Age = Now.getFullYear()- Calendar[0];
    if(Age>0){
        if( Now.getMonth()+1 ==  Calendar[1]) {
            if(Now.getDay()<Calendar[2])
            {
            	Age = Age - 1;
            }
        }
        else
        {
            if(Now.getMonth()+1<Calendar[1])
            {
                Age = Age - 1;
            }
        }
    }	
	$("#Age").val(Age);
}
function PostalCode(){
	if($("#PostalCode1").val().length<3||$("#PostalCode2").val().length<4) {
		$("#empid3err").html(MSG020);
		return
	}
	//先にデータベースで検索
	$.ajax({
		type:"post",
		url:"postalCodecheck.action",
		dataType:"json",
		async:false,
		data: {"employeeBean.postalCode1":$("#PostalCode1").val(),"employeeBean.postalCode2":$("#PostalCode2").val()}, 
		success:function(json){
			if (json.employeePojo.firstHalfOfAddress!=null){
				$("#FirstHalfOfAddress").val(json.employeePojo.firstHalfOfAddress);
				$("#SecondHalfOfAddress").val(json.employeePojo.secondHalfOfAddress);
				return
			}
		}
	});
	//条件で見つからない場合はAPI
	 AjaxZip3.zip2addr('PostalCode1','PostalCode2','FirstHalfOfAddress','FirstHalfOfAddress');
	 AjaxZip3.onFailure = function() {
		 	$("#FirstHalfOfAddress").val("");
		 	$("#SecondHalfOfAddress").val("");
			$("#FirstHalfOfAddress").attr('disabled',false);
			$("#SecondHalfOfAddress").attr('disabled',false);
    };
}
function PostalCodechange(){
	$("#FirstHalfOfAddress").val("");
	$("#SecondHalfOfAddress").val("");
}
function SalaryIn(){
	var Salary=$("#Salary").val()
	if(Salary.length>4){
		Salary=Salary.substring(0,Salary.length-4)+""+Salary.substring(Salary.length-3);
	}
	$("#Salary").val(Salary);
}
function SalaryOut(){
	var Salary=$("#Salary").val()
	if(Salary.length>3){
		Salary=Salary.substring(0,Salary.length-3)+','+Salary.substring(Salary.length-3);
	}
	$("#Salary").val(Salary);
}