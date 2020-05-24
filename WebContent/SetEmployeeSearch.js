/**
 * 
 */
function search1(page){
	$("#err").html("");
	$("#data").html("");
	$("input:text").removeClass("errtext");
	$("input:text").addClass("setbluetext");
	$("#pageNo").html("合計件数:0件");
	$("#lastpage").removeClass("pageshow");
	$("#nextpage").removeClass("pageshow");
	$("#lastpage").addClass("pagehide");	
	$("#nextpage").addClass("pagehide");
	if(page==0){
		var age1=$("#age1").val(); 
		var age2=$("#age2").val();
		$("#checkbox").attr("checked",false);
		if(age1!=""||age2!=""){
			if(age1==""){
				age1==20;
			}
			if(age2==""){
				age2==50;
			}
		}
		localStorage.setItem('page', page);
		localStorage.setItem('employeeNo',$("#employeeNo").val()); 
		localStorage.setItem('employeeName',$("#employeeName").val()); 
		localStorage.setItem('genderNo',$("#genderNo").val()); 
		localStorage.setItem('JoiningCompanyOfYear',$("#JoiningCompanyOfYear").val()); 
		localStorage.setItem('IntoCompanyOfMonth',$("#IntoCompanyOfMonth").val()); 
		localStorage.setItem('age1',age1); 
		localStorage.setItem('age2',age2); 
		localStorage.setItem('salary',$("#salary").val()); 
		localStorage.setItem('order',$("input[name='sort']:checked").val());  
		localStorage.setItem('page', localStorage.getItem('page')); 
		if($("#IntoCompanyOfMonth").val()!="0" && $("#JoiningCompanyOfYear").val()=="0"){
			$("#err").html(MSG002);
			$("#IntoCompanyOfMonth").removeClass("setbluetext");
			$("#JoiningCompanyOfYear").removeClass("setbluetext");
			$("#IntoCompanyOfMonth").addClass("err");	
			$("#JoiningCompanyOfYear").addClass("err");
			return;
		}
             $.cookie('checkValue','', { expires: 1 }); 
	}
	localStorage.setItem('page',parseInt(localStorage.getItem('page'))+page);
	$.ajax({
		type:"post",
		url:"correct.action",
		dataType:"json",
		async:false,
		data: {"employeeSearchBean.employeeNo" : localStorage.getItem('employeeNo'), 
				"employeeSearchBean.employeeName":localStorage.getItem('employeeName'), 
				"employeeSearchBean.genderNo":localStorage.getItem('genderNo'), 
				"employeeSearchBean.JoiningCompanyOfYear":localStorage.getItem('JoiningCompanyOfYear'), 
				"employeeSearchBean.IntoCompanyOfMonth":localStorage.getItem('IntoCompanyOfMonth'), 
				"employeeSearchBean.age1":localStorage.getItem('age1'), 
				"employeeSearchBean.age2":localStorage.getItem('age2'),  
				"employeeSearchBean.salary":localStorage.getItem('salary'), 
				"employeeSearchBean.order":localStorage.getItem('order'), 
				"employeeSearchBean.page" : localStorage.getItem('page'), 
		}, 
		success:function(json){
			var data;
			if(json.employeeSearchList.length==0){
				$("#err").html(MSG001);
				return;
			}
			$("#pageNo").html("合計件数:"+(json.employeeSearchList[0].pageNo)+"件");
			var thisPagecheckbox="";
			for(i=0;i<json.employeeSearchList.length;i++){
				data=data+"<tr style='height:5px;'> <td style='width: 60px;height:5px;'> <input type='checkbox'　class='checkItem'　name='checkItem' onchange='ChangeCheckbox(this.id)' id='"+json.employeeSearchList[i].employeeNo+"'></input></td>" 
				data=data+"<td style='width: 30px;'>"+json.employeeSearchList[i].listNo+"</td>"
				data=data+"<td style='width: 80px;'>"+json.employeeSearchList[i].employeeNo+"</td>"
				data=data+"<td style='width: 70px;'>"
				if(json.employeeSearchList[i].employeeName!=null){
					data=data+json.employeeSearchList[i].employeeName;
				}
				data=data+"</td><td style='width: 33px;'>"
				if(json.employeeSearchList[i].gender!=null){
					data=data+json.employeeSearchList[i].gender;
				}	
				data=data+"</td><td style='width: 31px;'>"
				if(json.employeeSearchList[i].age!=null){
					data=data+json.employeeSearchList[i].age;
				}	
				data=data+"</td><td style='width: 83px;'>"
				if(json.employeeSearchList[i].joiningCompanyOfYear+json.employeeSearchList[i].intoCompanyOfMonth!=null&&json.employeeSearchList[i].joiningCompanyOfYear+json.employeeSearchList[i].intoCompanyOfMonth!=0){
					data=data+json.employeeSearchList[i].joiningCompanyOfYear+"年"+json.employeeSearchList[i].intoCompanyOfMonth+"月";
				}	
				data=data+"</td><td style='width: 77px;'>"
				if(json.employeeSearchList[i].salary!=null){
					data=data+Math.round(json.employeeSearchList[i].salary.substring(0,4)/10)/10;
				}	
				data=data+"</td><td style='width: 65px;'>"
				if(json.employeeSearchList[i].dependentsPerson!=null){
					data=data+json.employeeSearchList[i].dependentsPerson;
				}	
				data=data+"</td><td style='width: 88px;'>"
				if(json.employeeSearchList[i].phoneNo!=null){
					data=data+json.employeeSearchList[i].phoneNo;
				}	
				data=data+"</td><td style='width: 130px;'>"
				if(json.employeeSearchList[i].nearestStation!=null){
					data=data+json.employeeSearchList[i].nearestStation;
				}	
				data=data+"</td><td style='width: 165px;'>"
				if(json.employeeSearchList[i].firstHalfOfAddress+json.employeeSearchList[i].secondHalfOfAddress!=null){
					data=data+(json.employeeSearchList[i].firstHalfOfAddress+json.employeeSearchList[i].secondHalfOfAddress).substring(0,16);
				}	
				data=data+"</td><td style='width: 210px;'>"
				if(json.employeeSearchList[i].accountName!=null){
					data=data+json.employeeSearchList[i].accountName.substring(0,16);
				}	
				data=data+"</td><td style='width: 64px;'>"
				if(json.employeeSearchList[i].accountNo!=null){
					data=data+json.employeeSearchList[i].accountNo;
				}	
				data=data+"</td><td style='width: 170px;'>"
				if(json.employeeSearchList[i].companyMail!=null){
					data=data+json.employeeSearchList[i].companyMail+"</td>"
				}	
			}
			$("#data").append(data);
			 $.cookie("thisPagecheckbox",thisPagecheckbox);
			var MaxPage=parseInt((json.employeeSearchList[0].pageNo+9)/10);
			if(localStorage.getItem('page')>0){
				$("#lastpage").removeClass("pagehide");
				$("#lastpage").addClass("pageshow");
			}
			if(MaxPage-1>localStorage.getItem('page')){
				$("#nextpage").removeClass("pagehide");
				$("#nextpage").addClass("pageshow");
			}
			var checkValue = $.cookie("checkValue").split(",");
			 for(var i=1;i<checkValue.length;i++){
				 if( $("#"+checkValue[i]).length>0){
					 $("#"+checkValue[i]).attr('checked', true);
				 }
			 }
			 if($("input:checkbox").length==0){
				 $("#checkbox").prop("checked",false);
			 }
			 else{
				$("#checkbox").prop("checked",true);
			 }
			 for (i=1;i<$("input:checkbox").length;i++){
				 var id=$("input:checkbox")[i].attributes[4].nodeValue;
					if($("#"+id).is(':checked')==false){
						$("#checkbox").prop("checked",false);
						return;
					}
				}
		}
		
	});
}
function load() {
	 $('input:radio:first').attr('checked', 'true');
	var Now=new Date();
	var Year = Now.getFullYear();
	for(y=2015,i=1;y<Year;y++,i++){
		$("#JoiningCompanyOfYear").append("<option value="+y+">"+y+"</option>");
	}
	//エラーメセッジクリア
	$("#err").html("");
	$("#data").html("");
	$("#search2").attr('disabled',true);
	localStorage.setItem('page', 0);
}
function ChangeCheckbox(id){
	if(id=="checkbox"){
		if($("#checkbox").prop("checked")){
			$("input:checkbox").prop("checked",true);
		}
		else{
			$("input:checkbox").prop("checked",false);
		}
	}
	var ids=""
	for (i=1;i<$("input:checkbox").length;i++){
		if (ids==""){
			ids=$("input:checkbox")[i].attributes[4].nodeValue
		}
		else{
			ids=ids+","+$("input:checkbox")[i].attributes[4].nodeValue
		}
	}
    var array = $.cookie("checkValue").split(",");
    var idsarray=ids.split(",");
    for(var i=0;i<idsarray.length;i++){
    	   for(var i2=0;i2<array.length;i2++){
	        if(idsarray[i]==array[i2]){
	            array.splice(i2,1);
	        }
	    }
    }
    for(var i=0;i<idsarray.length;i++){
        if($('#'+idsarray[i]).is(':checked')){
          	 array.push(idsarray[i]);
          }
    }
    $.cookie("checkValue",array);
}