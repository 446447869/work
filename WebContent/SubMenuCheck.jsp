<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib uri="/struts-tags" prefix="s"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="common.css">
<s:action name="GetEmployee" executeResult="false">
<s:param name="employeeNo" value='%{#session.EmployeeNo}'></s:param>
</s:action>
<script type="text/javascript">
//　初期表示は非表示
function myFunction(){
	document.getElementById("EmployeeInfomanage").style.visibility = "hidden";
	if('<%=session.getAttribute("authMaster")%>'=="管理者"){
		// blockで表示
		document.getElementById("EmployeeInfomanage").style.visibility = "";
	}
	else{
		document.getElementById("EmployeeInfomanage").style.visibility = "hidden";
	}
}
</script>
<meta charset="UTF-8">
<title>サブメニュー</title>
</head>
<body onload="myFunction()">
	<div align="right">lyc株式会社
		<!-- アカウント情報消し、サインイン画面に戻る -->
		<a href="SignOut.action" style="text-decoration:none;margin-left:30px;margin-right:30px">サインアウト</a>
	</div>
	<div  align="center">
	<h1>社員勤務管理システム</h1>
	<p><b>メニュー一覧</b></p>
<!--社員名を表示 -->
	</div>
	<div style="margin-left:60px;"><%=session.getAttribute("authMaster") %>:<%=session.getAttribute("EmployeeName") %></div>
	<div align="center" style="margin-top:60px;">
		<button  style="margin-right:50px;" class="setbigsize setdiv" onclick="">実績入力</button>
		<button  style="margin-left:50px;" class="setbigsize setdiv" onclick="location.href='EmployeeInfomanage.jsp'" id="EmployeeInfomanage">社員情報管理</button>
	</div>
	<div align="center" style="margin-top:10px;">
	<button class="setsmallsize">休憩時間設定</button>
	</div>
	<div  align="center" style="margin-top:10px;">
		<input type="button" style="margin-right:50px;" class="setbut setbigsize setdiv" value="パスワードリセット" onclick="location.href='PasswordResetCheck.jsp'">
		<button style="margin-left:50px;" class="setbut setbigsize setdiv">実績検索</button>
	</div>
	<div style="margin-top:20px;"><a style="text-decoration:none;font-size:10px" href="LoginCheck.jsp">ログイン画面に戻る</a></div>
</body>
</html>