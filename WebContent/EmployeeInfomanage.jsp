<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.js"></script>
<link rel="stylesheet" type="text/css" href="common.css">
<script type="text/javascript" src="Errormsg.js"></script>
<script type="text/javascript" src="SetEmployeeInfomanage.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<meta charset="UTF-8">
<script type="text/javascript">
</script>
<title>社員情報管理</title>
</head>
<body>
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
				<td>社員番号:<input type="text" name="empid1" id="empid1" class="setbluetext" size="10" maxlength=6>OR　　社員名<input type="text" class="setbluetext" size="10" maxlength=10></td>
			</tr>
			<tr>
				<td>社員番号範囲:lyc<input type="text" name="empid1_1" id="empid1_1" class="setbluetext" size="5" maxlength=3>~<input type="text" name="empid1_2" id="empid1_2" class="setbluetext" size="5" maxlength=3></td>
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
				<td>社員名:</td><td><input type="text" class="setbluetext" size="10" maxlength=6></td>
			</tr>
			<tr>
				<td>性別:</td><td><input type="text" class="setbluetext" size="3" maxlength=2></td><td>年齢:<input type="text" class="setbluetext" size="3" maxlength=2><input type="button" value="カレンダー" class=""></td>
			</tr>
			<tr>
				<td>入社年月:</td><td><input type="text" class="setbluetext" size="10" maxlength=4></td><td>年:<input type="text" class="setbluetext" size="3" maxlength=2>月</td>
			</tr>
			<tr>
				<td>扶養人数:</td><td><input type="text" class="setbluetext" size="5" maxlength=2></td><td>給料:<input type="text" class="setbluetext" size="5" maxlength=5>円</td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td>初期パスワード:</td><td><input type="text" class="setbluetext" size="10" maxlength=6><font color="red">★</font></td>
			</tr>
			<tr>
				<td>社用メールアドレス:</td><td><input type="text" class="setbluetext" size="10" maxlength=6>＠lyc.co.jp</td>
			</tr>
			<tr>
				<td>私用メールアドレス:</td><td><input type="text" class="setbluetext" size="10" maxlength=6>＠lyc.co.jp</td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td>電話番号:</td><td><input type="text" class="setbluetext" size="10" maxlength=3>-<input type="text" class="setbluetext" size="10" maxlength=4>-<input type="text" class="setbluetext" size="10" maxlength=4></td>
			</tr>
			<tr>
				<td>権限:</td><td><input type="text" class="setbluetext" size="10" maxlength=3><font color="red">★</font></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td><font size=4><b>住所情報</b></font></td>
			</tr>
			<tr>
				<td>郵便番号:〒<input type="text" class="setbluetext" size="10" maxlength=4>-<input type="text" class="setbluetext" size="10" maxlength=4><input type="button" value="検索" class=""></td>
			</tr>
			<tr>
				<td>都道府県＋市区町村:<input type="text" class="setbluetext" size="20" maxlength=20></td>
			</tr>
			<tr>
				<td>以降の住所:<input type="text" class="setbluetext" size="20" maxlength=20></td>
			</tr>
			<tr>
				<td>最寄駅:<input type="text" class="setbluetext" size="5" maxlength=10></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td><font size=4><b>口座情報</b></font></td>
			</tr>
			<tr>
				<td>銀行名:<input type="text" class="setbluetext" size="20" maxlength=8></td>
			</tr>
			<tr>
				<td>支店名:<input type="text" class="setbluetext" size="20" maxlength=20></td><td>支店番号:<input type="text" class="setbluetext" size="20" maxlength=20></td>
			</tr>
			<tr>
				<td>口座番号:<input type="text" class="setbluetext" size="5" maxlength=10></td><td>口座名義人:<input type="text" class="setbluetext" size="5" maxlength=10></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:70px;left: 30%;">
			<tr>
				<td><input type="button" value="確定" class="setbluebtn"></td>
			</tr>
		</table>
	</div>
	<p style="margin-left:110px;margin-top:1000px"><a href="javascript:history.go(-1);">＜＜前画面に戻る</a></p>
</body>
</html>