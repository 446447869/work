/**
 * 
 */
function ClickBtn(num){
	$(".mark").text("★");
	$("input:button[id^='btn']").removeClass("setgreenbtn");
	$("input:button[id^='btn']").addClass("setbluebtn");
	$("#btn"+num).removeClass("setbluebtn");
	$("#btn"+num).addClass("setgreenbtn");
	$("input:text").removeClass("errtext");
	$("input:text").addClass("setbluetext");
	$("input:password").removeClass("errtext");
	$("input:password").addClass("setbluetext");
	$("#genderNo option[value='-1']").remove();
	$("#AuthorityNo option[value='-1']").remove();
	$("#DependentsPerson option[value='-1']").remove();
	$("select").removeClass("errtext");
	$("select").addClass("setbluetext");
	$("select").attr('disabled',false);
	$("input:password").attr('disabled',false);
	$("input:text").attr('disabled',false);
	$("#FirstHalfOfAddress").attr('disabled',true);
	$("#SecondHalfOfAddress").attr('disabled',true);
	$("#BankBranchCode").attr('disabled',true);
	$("#BankBranchName").attr('disabled',true);
	$("#AccountNo").attr('disabled',true);
	$("#AccountName").attr('disabled',true);
	$("#Age").attr('disabled',true);
	$("#Calendar").attr('disabled',false);
	$("#PostSearch").attr('disabled',false);
	$("#FirstHalfOfAddress").attr('disabled',true);
	$("#SecondHalfOfAddress").attr('disabled',true);
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
		$("#genderNo option[value='-1']").remove();
		$("#AuthorityNo option[value='-1']").remove();
		$("#DependentsPerson option[value='-1']").remove();
		if($("#empid1").val()=="" && $("#empname1").val()==""){
			$("#empid1err").html(MSG005)
			$("empid1").removeClass("setbluetext");
			$("empid1").addClass("errtext");
			$("empname1").removeClass("setbluetext");
			$("empname1").addClass("errtext");
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
						$("#empid1").removeClass("setbluetext");
						$("#empid1").addClass("errtext");
						$("#empname1").removeClass("setbluetext");
						$("#empname1").addClass("errtext");
					}
					else if(json.employeePojo.peopleNum>1){
						$("#empid1err").html(MSG018)
						$("#empid1").removeClass("setbluetext");
						$("#empid1").addClass("errtext");
						$("#empname1").removeClass("setbluetext");
						$("#empname1").addClass("errtext");
					}
					else{
						$("input:text").attr('disabled',false);
						$("#empid1_1").attr('disabled',true);
						$("#empid1_2").attr('disabled',true);
						$("#empid2").attr('disabled',true);
						$("#Enter").attr('disabled',false);
						$("#FirstHalfOfAddress").attr('disabled',true);
						$("#SecondHalfOfAddress").attr('disabled',true);
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
						$("#genderNo").val(json.employeePojo.genderNo);
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
						SalaryOut();
						bank(false);
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
		$("#genderNo option[value='-1']").remove();
		$("#AuthorityNo option[value='-1']").remove();
		$("#DependentsPerson option[value='-1']").remove();
		if($("#empid1").val()=="" && $("#empname1").val()==""){
			$("#empid1err").html(MSG005)
			$("#empid1").removeClass("setbluetext");
			$("#empid1").addClass("errtext");
			$("#empname1").removeClass("setbluetext");
			$("#empname1").addClass("errtext");
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
						$("#empid1").removeClass("setbluetext");
						$("#empid1").addClass("errtext");
						$("#empname1").removeClass("setbluetext");
						$("#empname1").addClass("errtext");
						return
					}
					else if(json.employeePojo.peopleNum>1){
						$("#empid1err").html(MSG018)
						$("#empid1").removeClass("setbluetext");
						$("#empid1").addClass("errtext");
						$("#empname1").removeClass("setbluetext");
						$("#empname1").addClass("errtext");
						return
					}
					else{
						$("#Enter").attr('disabled',false);
						$("input:text").attr('disabled',true);
						$("select").attr('disabled',true);
						$("input:password").attr('disabled',true);
						$("#Calendar").attr('disabled',true);
						$("#PostSearch").attr('disabled',true);
						$("#empid1").attr('disabled',false);
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
						$("#genderNo").val(json.employeePojo.genderNo);
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
						SalaryOut();
					}
				}
			});
		}
		return;
	}
	else if(num==4){
		//一括修正
		$("#genderNo").append("<option value='-1'></option>");
		$("#AuthorityNo").append("<option value='-1'></option>");
		$("#DependentsPerson").append("<option value='-1'></option>");
		var minNo=$("#empid1_1").val();
		var maxNo=$("#empid1_2").val();
		if(minNo==""&&maxNo==""){
			$("#empidhanierr").html(MSG022);
			return;
		}
		if(minNo==""){
			minNo="000";
		}
		else if (isNaN(minNo)){
			$("#empidhanierr").html(MSG022);
			$("empid1_1").removeClass("setbluetext");
			$("empid1_1").addClass("errtext");
			$("empid1_2").removeClass("setbluetext");
			$("empid1_2").addClass("errtext");
			return;
		}
		if(maxNo==""){
			maxNo="999";
		}
		else if (isNaN(maxNo)){
			$("#empidhanierr").html(MSG022);
			$("empid1_1").removeClass("setbluetext");
			$("empid1_1").addClass("errtext");
			$("empid1_2").removeClass("setbluetext");
			$("empid1_2").addClass("errtext");
			return;
		}
		maxNo=(Array(3).join(0) + maxNo).slice(-3);
		minNo=(Array(3).join(0) + minNo).slice(-3);
		if(maxNo<minNo){
			$("#empidhanierr").html(MSG022);
			$("empid1_1").removeClass("setbluetext");
			$("empid1_1").addClass("errtext");
			$("empid1_2").removeClass("setbluetext");
			$("empid1_2").addClass("errtext");
			return;
		}
		else 

		$.ajax({
			type:"post",
			url:"maxMinEmpNo.action",
			dataType:"json",
			async:false,
			success:function(json){
				if($("#empid1_1").val()!=""){
					if(minNo<json.employeePojo.minemployeeNo){
						$("#empidhanierr").html(MSG022);
						$("empid1_1").removeClass("setbluetext");
						$("empid1_1").addClass("errtext");
						$("empid1_2").removeClass("setbluetext");
						$("empid1_2").addClass("errtext");
						return;
					}
				}
				if($("#empid1_2").val()!=""){
					if(maxNo>json.employeePojo.maxemployeeNo){
						$("#empidhanierr").html(MSG022);
						$("empid1_1").removeClass("setbluetext");
						$("empid1_1").addClass("errtext");
						$("empid1_2").removeClass("setbluetext");
						$("empid1_2").addClass("errtext");
						return;
					}
				}
					$("#Enter").attr('disabled',false);
					$("input:text").attr('disabled',false);
					$("#Age").attr('disabled',true);
					$("#BankBranchCode").attr('disabled',true);
					$("#BankBranchName").attr('disabled',true);
					$("#AccountNo").attr('disabled',true);
					$("#AccountName").attr('disabled',true);
					$("#empid2").attr('disabled',true);
					$(".mark").text("");
					$("#AuthorityNo").val(-1);
					$("#genderNo").val(-1);
					$("#DependentsPerson").val(-1);
					PostalCodechange();
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
	$("input:password").removeClass("errtext");
	$("input:password").addClass("setbluetext");
	$("#Calendar").attr('disabled',false);
	$("#PostSearch").attr('disabled',false);
	var numandalphabet=/^[0-9a-zA-Z]*$/g;
	var katakana=/^[ァ-ヶー　]*$/;
	var stop=false;
	var Salary=$("#Salary").val();
	if (sessionStorage.getItem('button')!="4"){
		if($("#empname2").val()==""){
			$("#empname2err").html(MSG006);
			$("#empname2").removeClass("setbluetext");
			$("#empname2").addClass("errtext");
			stop=true;
		}
		if(Salary.length>3){
			Salary=Salary.substring(0,Salary.length-4)+""+Salary.substring(Salary.length-3);
		}
		if(isNaN(Salary)&&Salary!=""){
			$("#Salaryerr").html(MSG015);
			$("#Salary").removeClass("setbluetext");
			$("#Salary").addClass("errtext");
			stop=true;
		}
		else if(Salary.length<5&&Salary!=""){
			$("#Salaryerr").html(MSG008);
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
		var mailcheck = /^[0-9a-zA-Z_]{1,}$/;
		if(!mailcheck.test($("#CompanyMail").val())&&$("#CompanyMail").val()!=""){
			$("#CompanyMailerr").html(MSG008);
			$("#CompanyMail").removeClass("setbluetext");
			$("#CompanyMail").addClass("errtext");
			stop=true;
	     }
		if($("#PhoneNo1").val().length+$("#PhoneNo2").val().length+$("#PhoneNo3").val().length>0){
			if($("#PhoneNo1").val().length+$("#PhoneNo2").val().length+$("#PhoneNo3").val().length<11){
		    	$("#PhoneNoerr").html(MSG014);
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
			 	$("#bankerr").html(MSG015);
				$("#AccountNo").removeClass("setbluetext");
				$("#AccountNo").addClass("errtext");
				$("#BankBranchCode").removeClass("setbluetext");
				$("#BankBranchCode").addClass("errtext");	 	 	
				stop=true;
			}
		    else if(!katakana.test($("#AccountName").val())&&$("#AccountName").val()!=""){
		    	$("#bankerr").html(MSG012);
				$("#AccountName").removeClass("setbluetext");
				$("#AccountName").addClass("errtext");	
				stop=true;
		    }
		    else if($("#BankNo").val()=="0"){
		    	if($("#BankBranchCode").val()!=""||
				$("#BankBranchName").val()!=""||
				$("#AccountNo").val()!=""||
				$("#AccountName").val()!=""){
					$("#bankerr").html(MSG017);
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
					$("#bankerr").html(MSG017);
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
			$("#Salaryerr").html(MSG015);
			$("#Salary").removeClass("setbluetext");
			$("#Salary").addClass("errtext");
			stop=true;
		}
		else if(Salary.length<5&&Salary!=""){
			$("#Salaryerr").html(MSG008);
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
		 	$("#bankerr").html(MSG015);
			$("#AccountNo").removeClass("setbluetext");
			$("#AccountNo").addClass("errtext");
			$("#BankBranchCode").removeClass("setbluetext");
			$("#BankBranchCode").addClass("errtext");	 	 	
			stop=true;
		}
	    else if(!katakana.test($("#AccountName").val())&&$("#AccountName").val()!=""){
	    	$("#bankerr").html(MSG017);
			$("#AccountName").removeClass("setbluetext");
			$("#AccountName").addClass("errtext");	
			stop=true;
	    }
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
    					"employeeBean.GenderNo":$("#genderNo").val(),
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
    	if(confirm("修正してもよろしいでしょうか？")){
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
    					"employeeBean.GenderNo":$("#genderNo").val(),
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
    	    			$("#empid1err").html(MSG016);	 
    	    			alert("処理が失敗しました");
    	    		}
    			}
    		});
    		return
    	}
		break;
	case "3":
		//削除
    	if(confirm("削除してもよろしいでしょうか？")){
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
    					"employeeBean.GenderNo":$("#genderNo").val(),
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
		if(minNo==""){
			minNo="000";
		}
		else if (isNaN(minNo)){
			$("#empidhanierr").html(MSG022);
			$("empid1_1").removeClass("errtext");
			$("empid1_1").addClass("setbluetext");
			$("empid1_2").removeClass("errtext");
			$("empid1_2").addClass("setbluetext");
			return;
		}
		if(maxNo==""){
			maxNo="999";
		}
		else if (isNaN(maxNo)){
			$("#empidhanierr").html(MSG022);
			$("empid1_1").removeClass("errtext");
			$("empid1_1").addClass("setbluetext");
			$("empid1_2").removeClass("errtext");
			$("empid1_2").addClass("setbluetext");
			return;
		}
		maxNo=(Array(3).join(0) + maxNo).slice(-3);
		minNo=(Array(3).join(0) + minNo).slice(-3);
		if(maxNo<minNo){
			$("#empidhanierr").html(MSG022);
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
				if($("#empid1_1").val()!=""){
					if(minNo<json.employeePojo.minemployeeNo){
						$("#empidhanierr").html(MSG022);
						$("empid1_1").removeClass("errtext");
						$("empid1_1").addClass("setbluetext");
						$("empid1_2").removeClass("errtext");
						$("empid1_2").addClass("setbluetext");
						return;
					}
				}
				if($("#empid1_2").val()!=""){
					if(maxNo>json.employeePojo.maxemployeeNo){
						$("#empidhanierr").html(MSG022);
						$("empid1_1").removeClass("errtext");
						$("empid1_1").addClass("setbluetext");
						$("empid1_2").removeClass("errtext");
						$("empid1_2").addClass("setbluetext");
						return;
					}
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
		    					"employeeBean.GenderNo":$("#genderNoNo").val(),
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
	$("input:password").removeClass("errtext");
	$("input:password").addClass("setbluetext");
	$("select").removeClass("errtext");
	$("select").addClass("setbluetext");
	//エラーメセッジクリア
	$("span[id$='err']").html("");
	//検索結果をクリア
	$("input").not(":button").val("");
	$("select").val("0");
	$(".mark").text("★");

		var Now=new Date();
		var Year = Now.getFullYear();
		var Month = Now.getMonth()+1;
		Month=(Array(2).join(0) + Month).slice(-2);
		var Day = Now.getDate();
		Day=(Array(2).join(0) + Day).slice(-2);
		$('#Calendar').attr('max',Year-20+'-'+Month+'-'+Day);
		$('#Calendar').attr('min',Year-50+'-'+Month+'-'+Day);
}
function bank(ischange){
	if (ischange){
	$("#BankBranchCode").val("");
	$("#BankBranchName").val("");
	$("#AccountNo").val("");
	$("#AccountName").val("");
	}
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
	$("#bankerr").html("");
	$("BankBranchCode").removeClass("errtext");
	$("BankBranchCode").addClass("setbluetext");
	$("BankBranchName").removeClass("errtext");
	$("BankBranchName").addClass("setbluetext");
	if(num==0){
		//支店名から
		$.ajax({
			type:"post",
			url:"bankcheck.action",
			dataType:"json",
			async:false,
			data: {"employeeBean.bankNo":$("#BankNo").val(),"employeeBean.bankBranchName":$("#BankBranchName").val()}, 
			success:function(json){
				if (json.employeePojo.bankBranchCode==null){
					$("#BankBranchCode").val("");
					$("#BankBranchName").val("");
					$("BankBranchCode").removeClass("setbluetext");
					$("BankBranchCode").addClass("errtext");
					$("BankBranchName").removeClass("setbluetext");
					$("BankBranchName").addClass("errtext");
					$("#bankerr").html(MSG019);
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
				if (json.employeePojo.bankBranchName==null){
					$("#BankBranchCode").val("");
					$("#BankBranchName").val("");
					$("BankBranchCode").removeClass("setbluetext");
					$("BankBranchCode").addClass("errtext");
					$("BankBranchName").removeClass("setbluetext");
					$("BankBranchName").addClass("errtext");
					$("#bankerr").html(MSG019);
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
            if(Now.getDate()<Calendar[2])
            {
            	Age = Age - 1;
            }
        }
        else
        {
            if(Now.getMonth()+1<=Calendar[1])
            {
                Age = Age - 1;
            }
        }
    }	
	$("#Age").val(Age);
}
function PostalCode(){
	$("#empid3err").html("");
	$("PostalCode1").removeClass("errtext");
	$("PostalCode1").addClass("setbluetext");
	$("FirstHalfOfAddress").removeClass("errtext");
	$("FirstHalfOfAddress").addClass("setbluetext");
	$("SecondHalfOfAddress").removeClass("errtext");
	$("SecondHalfOfAddress").addClass("setbluetext");
	$("PostalCode2").removeClass("errtext");
	$("PostalCode2").addClass("setbluetext");
	$("#FirstHalfOfAddress").attr('disabled',true);
	$("#SecondHalfOfAddress").attr('disabled',true);
	if($("#PostalCode1").val().length<3||$("#PostalCode2").val().length<4) {
		$("#empid3err").html(MSG020);
		$("PostalCode1").removeClass("setbluetext");
		$("PostalCode1").addClass("errtext");
		$("PostalCode2").removeClass("setbluetext");
		$("PostalCode2").addClass("errtext");
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
				$("#SecondHalfOfAddress").attr('disabled',false);
				return
			}
		}
	});
	//条件で見つからない場合はAPI
	 AjaxZip3.zip2addr('PostalCode1','PostalCode2','FirstHalfOfAddress','FirstHalfOfAddress');
	 $("#SecondHalfOfAddress").attr('disabled',false);
	 AjaxZip3.onFailure = function() {
		 if(sessionStorage.getItem('button')==1){
		 	$("#FirstHalfOfAddress").val("");
		 	$("#SecondHalfOfAddress").val("");
			$("#FirstHalfOfAddress").attr('disabled',false);
		 }
		 else{
		 	$("#FirstHalfOfAddress").val("");
		 	$("#SecondHalfOfAddress").val("");
			$("#empid3err").html(MSG020);
			$("PostalCode1").removeClass("setbluetext");
			$("PostalCode1").addClass("errtext");
			$("PostalCode2").removeClass("setbluetext");
			$("PostalCode2").addClass("errtext");
			$("#SecondHalfOfAddress").attr('disabled',true);
		 }
    };
}
function PostalCodechange(){
	if($("#PostalCode1").val()==""||$("#PostalCode2").val()==""){
		$("#FirstHalfOfAddress").val("");
		$("#SecondHalfOfAddress").val("");
		$("#FirstHalfOfAddress").attr('disabled',true);
		$("#SecondHalfOfAddress").attr('disabled',true);
	}
}
function SalaryIn(){
	var Salary=$("#Salary").val()
	if(Salary.length>4){
		Salary=Salary.substring(0,Salary.length-4)+""+Salary.substring(Salary.length-3);
	}
	$("#Salary").val(Salary);
}
function SalaryOut(){
	var Salary=$("#Salary").val();
	Salary=Salary.replace(/\b(0+)/gi,"");
	if(Salary.length>3){
		Salary=Salary.substring(0,Salary.length-3)+','+Salary.substring(Salary.length-3);
	}
	if($("#Salary").val()!=""&&Salary==""){
		Salary=0;
	}
	$("#Salary").val(Salary);
}