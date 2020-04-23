<%@page import="com.opensymphony.xwork2.ActionContext"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="common.css">
<script type="text/javascript" src="Errormsg.js"></script>
<meta charset="UTF-8">
<script type="text/javascript">
function startset() {
	if("<%=session.getAttribute("EmployeeNo") %>"!="" && "<%=session.getAttribute("EmployeeNo") %>"!="null"){
		document.getElementById('empno').value='<%=session.getAttribute("EmployeeNo") %>';
	}
	if("<%=session.getAttribute("Error5") %>"=="notexite" && sessionStorage.getItem("err5")==1){
		sessionStorage.setItem("err5", 0);
		document.getElementById('err5').innerHTML=MSG005.fontcolor("red");
	}
}
</script>
<script type="text/javascript">
	function check(){
		document.getElementById('err5').innerHTML="";
		document.getElementById('iderr').innerHTML="";
		document.getElementById('pwerr').innerHTML="";
		empno.style.borderColor=null;
		pwd.style.borderColor=null;
		if(empno.value.length==0){
			empno.style.borderColor="red";
			document.getElementById('iderr').innerHTML=MSG001.fontcolor("red");
			return false;
		}
		else if(empno.value.slice(0,3).toUpperCase()!="LYC"||empno.value.length<6){
			empno.style.borderColor="red";
			document.getElementById('iderr').innerHTML=MSG002.fontcolor("red");
			return false;
		}
		else if((/^[A-z0-9]+$/.test(empno.value))==false){
			empno.style.borderColor="red";
			document.getElementById('iderr').innerHTML=MSG010.fontcolor("red");
			return false;
		}		
		else if(pwd.value==""){
			pwd.style.borderColor="red";
			document.getElementById('pwerr').innerHTML=MSG003.fontcolor("red");
			return false;
		}
		else if(pwd.value.length<6){
			pwd.style.borderColor="red";
			document.getElementById('pwerr').innerHTML=MSG004.fontcolor("red");
			return false;
		}
		else if((/^[A-z0-9]+$/.test(pwd.value))==false){
			pwd.style.borderColor="red";
			document.getElementById('pwerr').innerHTML=MSG010.fontcolor("red");
			return false;
		}
		else{
			sessionStorage.setItem("err5", 1);
			document.getElementById('loginform').submit(); 
		}
	}
</script>
<title>ログイン画面</title>
</head>
<body onload="startset()">
<div>
	<p align="right" style="margin-right:60px">lyc株式会社</p>
</div>
<div 
  style="position: absolute;
  top: 20%;
  left: 37%;">
	<h1>社員勤務管理システム</h1>
	<div style="position: absolute;left: 100px;">
	<font size="2"><b>社員ログイン</b></font>
	</div>
	<div style="margin-top:60px">
		<form action="login.action" method="post" id="loginform">
			<table>
				<tr>
					<td style="letter-spacing:4px">社員番号:</td>
					<td><input id="empno" maxlength=6 name="checkpwBean.emp"></td>
					<td style="white-space: nowrap;" id="iderr"></td>
				</tr>
				<tr style="height:10px">
				</tr>
				<tr>
					<td>パスワード:</td>
					<td><input id="pwd" type="password" maxlength=12 name="checkpwBean.pwd"></td>
					<td style="white-space: nowrap;" id="pwerr"></td>	
				</tr>
			</table>
			<div style="position: absolute;top:200px;left: 110px;">
				<input class="setinput" type="button" onclick="check()" value="ログイン">
				<div style="position:absolute;top:80px;right: -100px; white-space: nowrap;" id="err5"></div>	
			</div>
		</form>
	</div>
</div>
</body>
</html>