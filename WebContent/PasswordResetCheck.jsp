<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"></script>
<link rel="stylesheet" type="text/css" href="common.css">
<script type="text/javascript" src="Errormsg.js"></script>
<meta charset="UTF-8">
<script type="text/javascript">
function check(){
	document.getElementById('pwerr1').innerHTML="";
	document.getElementById('pwerr2').innerHTML="";
	document.getElementById('pwerr3').innerHTML="";
	pw.style="";
	pw2.style="";
	pw3.style="";
	sessionStorage.removeItem('Error5');
	if(pw.value==""){
		pw.style.borderColor="red";
		document.getElementById('pwerr1').innerHTML=MSG003.fontcolor("red");
	}
	else if('<%=session.getAttribute("EmployeePw")%>'!=md5(pw.value)){
		pw.style.borderColor="red";
		document.getElementById('pwerr1').innerHTML=MSG004.fontcolor("red");
	}
	else if(pw2.value.length<6){
		pw2.style.borderColor="red";
		document.getElementById('pwerr2').innerHTML=MSG004.fontcolor("red");
	}
	else if((/^[A-z0-9]+$/.test(pw2.value))==false){
		pw2.style.borderColor="red";
		document.getElementById('pwerr2').innerHTML=MSG004.fontcolor("red");
	}	
	else if(pw3.value.length<6){
		pw3.style.borderColor="red";
		document.getElementById('pwerr3').innerHTML=MSG004.fontcolor("red");
	}
	else if((/^[A-z0-9]+$/.test(pw3.value))==false){
		pw3.style.borderColor="red";
		document.getElementById('pwerr3').innerHTML=MSG004.fontcolor("red");
	}	
	else if(pw2.value!=pw3.value){
		pw3.style.borderColor="red";
		document.getElementById('pwerr3').innerHTML=MSG006.fontcolor("red");
	}
	else{
		
		document.getElementById('PwResetform').submit(); 
	}
}
</script>
<title>パスワードリセット画面</title>
</head>
<body>
	<div align="right">
				lyc株式会社
				<a href="SignOut" style="text-decoration:none;margin-left:30px;margin-right:30px">サインアウト</a>
	</div>
	<div align="center"><h1>社員勤務管理システム</h1></div>
	<div align="center">パースワードリセット</div>
	<p style="margin-left:110px"><%=session.getAttribute("authMaster")%>:<%=session.getAttribute("EmployeeName")%></p>
	<div style="position: absolute;
			top: 30%;
			left: 30%;"
			style="margin-top:60px">
		<form  action="PwReset.action" method="post" id="PwResetform">
			<table style="position: absolute;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
				
				<tr>
					<td>社員番号:	</td>
					<td><input readonly="readonly" value='<%=session.getAttribute("EmployeeNo") %>' name="checkpwBean.emp"/></td>
				</tr>
				<tr>
					<td>既存パスワード:</td>
					<td><input maxlength=12 type="password" id="pw" /></td>
					<td style="white-space: nowrap;" id="pwerr1"></td>
				</tr>
				<tr>
					<td>新しいパスワード:</td>
					<td><input maxlength=12 type="password" id="pw2" name="checkpwBean.pwd"/></td>
					<td style="white-space: nowrap;" id="pwerr2"></td>
				</tr>
				<tr>
					<td>新パスワード再入力:</td>
					<td><input maxlength=12 type="password" id="pw3"/></td>
					<td style="white-space: nowrap;" id="pwerr3"></td>
				</tr>
				
			</table>
		</form>
		<input style="position: absolute;top:150px;left:180px;" type="button" onclick="check()" value="確認" class="setinput">
	</div>
	<div style="position: absolute;top:500px;left:110px;">
		<a style="text-decoration:none; font-size:15px" href="SubMenuCheck.jsp">サブメニューに戻る</a>
	</div>
</body>
</html>