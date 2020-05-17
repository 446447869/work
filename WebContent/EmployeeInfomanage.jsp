<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"></script>
<link rel="stylesheet" type="text/css" href="common.css">
<script type="text/javascript" src="Errormsg2.js"></script>
<script type="text/javascript" src="SetEmployeeInfomanage.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
<meta charset="UTF-8">
<script type="text/javascript">
</script>
<title>社員情報管理</title>
<link rel="shortcut icon" href="#"/>
</head>
<body onload="load()">
	<div align="right">
				lyc株式会社
				<a href="SignOut" style="text-decoration:none;margin-left:30px;margin-right:30px">サインアウト</a>
	</div>
	<div align="center"><h1>社員勤務管理システム</h1></div>
	<div align="center">社員情報管理画面</div>
	<p style="margin-left:110px"><%=session.getAttribute("authMaster")%>:<%=session.getAttribute("EmployeeName")%></p>
	<div style="position: relative;top: 30%;
		left: 30%;"
		style="margin-top:60px">
		<table id="buttons" style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td><input name="btn1" id="btn1" type="button" onclick="ClickBtn(1)" value="追加" class="setbluebtn"></td>
				<td><input name="btn2" id="btn2" type="button" onclick="ClickBtn(2)" value="修正" class="setbluebtn"></td>
				<td><input name="btn3" id="btn3" type="button" onclick="ClickBtn(3)" value="削除" class="setbluebtn"></td>
				<td><input name="btn4" id="btn4" type="button" onclick="ClickBtn(4)" value="一括修正" class="setbluebtn"></td>
				<td><input name="btn5" id="btn5" type="button" onclick="ClickBtn(5)" value="詳細検索画面へ" class="setbluebtn"></td>
			</tr>
		</table>
	</div>
	<div style="position: absolute;
		left: 30%;"
		style="margin-top:60px">
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td>社員番号:<input type="text" name="empid1" id="empid1" class="setbluetext" size="10" maxlength=6>OR　　社員名<input type="text" name="empname1" id="empname1" class="setbluetext" size="10" maxlength=10><span id="empid1err" class="err"></span></td>
			</tr>
			<tr>
				<td>社員番号範囲:lyc<input type="text" name="empid1_1" id="empid1_1" class="setbluetext" size="5" maxlength=3>~<input type="text" name="empid1_2" id="empid1_2" class="setbluetext" size="5" maxlength=3><span id="empidhanierr" class="err"></span></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td><hr width="600" align="center" style="border:3;" /></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td>社員番号:</td><td><input type="text" name="empid2" id="empid2" class="setbluetext" size="10" maxlength=6></td>
			<tr>
				<td>社員名:</td><td><input type="text" name="empname2" id="empname2" class="setbluetext" size="10" maxlength=10></td>
			</tr>
			<tr>
				<td>性別:</td>
				<td>
					<select name="genderNo"  id = "genderNo" class="setbluetext">
						<option selected value="0">男</option>
						<option value="1" >女</option>
					</select>
				</td>
				<td>年齢:<input type="text" name="Age" id="Age" class="setbluetext" size="3" maxlength=2><input type="date"  name="Calendar" id="Calendar" onchange="setage()" value="カレンダー" maxlength=8></td>
			</tr>
			<tr>
				<td>入社年月:</td>
				<td>
					<select name="JoiningCompanyOfYear" id = "JoiningCompanyOfYear" class="setbluetext">
						<option selected value="0"></option>
						<option value="2015" >2015</option>
						<option value="2016" >2016</option>
						<option value="2017" >2017</option>
						<option value="2018" >2018</option>
						<option value="2019" >2019</option>
						<option value="2020" >2020</option>
					</select>
				</td>
				<td>
				年:
					<select name="IntoCompanyOfMonth" id="IntoCompanyOfMonth"  class="setbluetext">
						<option selected value="0"></option>
						<option value="01" >1</option>
						<option value="02" >2</option>
						<option value="03" >3</option>
						<option value="04" >4</option>
						<option value="05" >5</option>
						<option value="06" >6</option>
						<option value="07" >7</option>
						<option value="08" >8</option>
						<option value="09" >9</option>
						<option value="10" >10</option>
						<option value="11" >11</option>
						<option value="12" >12</option>
					</select>
					月
					<span id="IntoCompanyerr" class="err"></span>
				</td>
			</tr>
			<tr>
				<td>扶養人数:</td>
				<td>
					<select name="DependentsPerson" id="DependentsPerson"  class="setbluetext">
						<option selected value="0">0</option>
						<option value="1" >1</option>
						<option value="2" >2</option>
						<option value="3" >3</option>
						<option value="4" >4</option>
						<option value="5" >5</option>
					</select>
				</td>
				<td>給料:<input type="text" name="Salary" id="Salary" onfocus="SalaryIn()" onblur="SalaryOut()" class="setbluetext" size="5" maxlength=6>円<span id="Salaryerr" class="err"></span></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td>初期パスワード:</td><td><input type="password" name="password" id="password"  class="setbluetext" size="10" maxlength=12><font class="mark" color="red">★</font><span id="passworderr" class="err"></span></td>
			</tr>
			<tr>
				<td>社用メールアドレス:</td><td><input type="text" name="CompanyMail" id="CompanyMail"  class="setbluetext" size="10" maxlength=20>＠lyc.co.jp<span id="CompanyMailerr" class="err"></span></td>
			</tr>
			<tr>
				<td>私用メールアドレス:</td><td><input type="text" name="PersonalMail" id="PersonalMail"  class="setbluetext" size="10" maxlength=20><span id="PersonalMailerr" class="err"></span></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td>電話番号:</td><td><input type="text" name="PhoneNo1" id="PhoneNo1" class="setbluetext" size="3" pattern="[0-9]" maxlength=3>-<input type="text" name="PhoneNo2" id="PhoneNo2" class="setbluetext" size="4" pattern="[0-9]" maxlength=4>-<input type="text" name="PhoneNo3" id="PhoneNo3" class="setbluetext" pattern="[0-9]" size="4" maxlength=4><span id="PhoneNoerr" class="err"></span></td>
			</tr>
			<tr>
				<td>権限:</td>
				<td>
					<select name="AuthorityNo" id="AuthorityNo" class="setbluetext" >
						<option selected value="0">社員</option>
						<option value="1" >管理者</option>
					</select>
					<font class="mark" color="red">★</font>
				</td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td><font size=4><b>住所情報</b></font></td>
			</tr>
			<tr>
				<td>郵便番号:〒
					<input type="text" name="PostalCode1" id="PostalCode1" class="setbluetext" onchange="PostalCodechange()" pattern="[0-9]" size="3" maxlength=3>-
					<input type="text" name="PostalCode2" id="PostalCode2" class="setbluetext" onchange="PostalCodechange()" pattern="[0-9]" size="4" maxlength=4>
					<input type="button" onclick="PostalCode()" id="PostSearch" value="検索" class="setbluebtn">
					<span id="empid3err" class="err"></span>
				</td>
			</tr>
			<tr>
				<td>都道府県＋市区町村:<input type="text" name="FirstHalfOfAddress" id="FirstHalfOfAddress" class="setbluetext" size="20" maxlength=20></td>
			</tr>
			<tr>
				<td>以降の住所:<input type="text" name="SecondHalfOfAddress" id="SecondHalfOfAddress" class="setbluetext" size="20" maxlength=20></td>
			</tr>
			<tr>
				<td>最寄駅:<input type="text" name="NearestStation" id="NearestStation" class="setbluetext" size="5" maxlength=20></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td><font size=4><b>口座情報</b></font><span id="empid2err" class="err"></span></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td>
					銀行名:
					<select name="BankNo" id="BankNo" onchange="bank(true)"class="setbluetext">
						<option selected value="0"></option>
						<option value="1" >三菱東京UFJ銀行</option>
						<option value="2" >みずほ銀行</option>
						<option value="3" >三井銀行</option>
						<option value="4" >郵政銀行</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>支店名:<input type="text" name="BankBranchName" id="BankBranchName" onblur="BankBranch(0)" class="setbluetext" size="20" maxlength=20></td>
				<td>支店番号:<input type="text" name="BankBranchCode" id="BankBranchCode" onblur="BankBranch(1)" class="setbluetext" size="4" pattern="[0-9]" maxlength=20></td>
			</tr>
			<tr>
				<td>口座番号:<input type="text" name="AccountNo" id="AccountNo" class="setbluetext" size="5" maxlength=7></td><td>口座名義人:<input type="text" pattern="[0-9]" name="AccountName" placeholder="タナカ" id="AccountName" class="setbluetext" size="5" maxlength=20></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:70px;left: 30%;">
			<tr>
				<td><input type="button" name="Enter" id="Enter" onclick="enter()" value="確定" class="setbluebtn"></td>
			</tr>
		</table>
	</div>
	<p style="margin-left:110px;margin-top:1000px"><a href="SubMenuCheck.jsp">＜＜前画面に戻る</a></p>
</body>
</html>