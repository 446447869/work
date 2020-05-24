<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="common.css">
<script type="text/javascript" src="Errormsg3.js"></script>
<script type="text/javascript" src="SetEmployeeSearch.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<meta charset="UTF-8">
<script type="text/javascript">
</script>
<title>社員勤務管理システム</title>
<link rel="shortcut icon" href="#"/>
</head>
<body onload="load()">
	<div align="right">
				lyc株式会社
				<a href="SignOut" style="text-decoration:none;margin-left:30px;margin-right:30px">サインアウト</a>
	</div>
	<div align="center"><h1>社員勤務管理システム</h1></div>
	<div align="center">社員情報詳細検索画面</div>
	<p style="margin-left:110px"><%=session.getAttribute("authMaster")%>:<%=session.getAttribute("EmployeeName")%></p>
	<div style="position: relative;top: 30%;
		left: 30%;"
		style="margin-top:60px">
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td><span id="err" class="err"></span></td>
			</tr>
		</table>
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td>社員番号</td>
				<td><input type="text" name="employeeNo" id="employeeNo" class="setbluetext" size="10" maxlength=6></td>
				<td>社員名</td>
				<td><input type="text" name="employeeName" id="employeeName" class="setbluetext" size="10" maxlength=10></td>
				<td>性別:</td>
				<td>
					<select name="genderNo"  id = "genderNo" class="setbluetext">
						<option selected value="-1"></option>
						<option value="0">男</option>
						<option value="1" >女</option>
					</select>
				</td>
				<td>
				<input type="button" name="search1" id="search1" class="setbluebtn" size="10" value="検索" onclick="search1(0)">
				</td>
			</tr>
			<tr>
				<td>入社年月</td>
				<td>
					<select name="JoiningCompanyOfYear" id = "JoiningCompanyOfYear" class="setbluetext">
						<option selected value="0"></option>
					</select>
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
				</td>
				<td>年齢</td>
				<td><input type="number" name="age1" id="age1" class="setbluetext" size="2" maxlength=2 min="20" max="50">～<input type="number" name="age2" id="age2" class="setbluetext" size="2" maxlength=2 min="20" max="50"></td>
				<td>給料</td>
				<td><input type="text" name="salary" id="salary" class="setbluetext" size="5" maxlength=6>以上</td>
				<td><input type="button" name="search2" id="search2" onclick="search2()" value="個別社員情報出力" class="setbluebtn"></td>
			</tr>
		</table>
	</div>
	<div style="position: relative;top: 30%;
		left: 40%;"
		style="margin-top:60px">
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;">
			<tr>
				<td>      
					<input type="radio" id="sort1" name="sort" value="t1.employeeNo">
					<label for="sort1">デフォルト</label>
					<input type="radio" id="sort2" name="sort" value="t2.age , t1.employeeNo">
					<label for="sort2">年齢</label>
					<input type="radio" id="sort3" name="sort" value="t2.JoiningCompanyOfYear , t2.intoCompanyOfMonth , t1.employeeNo">
					<label for="sort3">入社年月</label>
					<input type="radio" id="sort4" name="sort" value="t2.salary , t1.employeeNo">
					<label for="sort4">給料</label>
				</td>
			</tr>
		</table>
	</div>
		<div style="position: relative;top: 30%;
		left: 25%;"
		style="margin-top:60px">
		<table style="position: relative;white-space: nowrap;border-collapse:separate; border-spacing:10px;font-size:small;">
			<tr>
				<td>
					<span>社員情報明細</span>
				</td>
				<td>
					<span id="pageNo">合計件数:0件</span>
				</td>
			</tr>
		</table>
	</div>
	<div style="position: absolute;
		left: 15%;margin-top:80px">
		<table id="cell" border="1" class="cell">
	        <thead>
	            <tr style="background-color:#3498DB;">
		              <th style="width: 60px;">選択<input type="checkbox" id="checkbox" onchange="ChangeCheckbox(this.id)"></input></th>
				      <th style="width: 30px;">番号</th>
				      <th style="width: 80px;">社員番号</th>
				      <th style="width: 70px;">社員名</th>
				      <th style="width: 33px;">性別</th>
				      <th style="width: 31px;">年齢</th>
				      <th style="width: 83px;">入社年月</th>
				      <th style="width: 77px;">給料(万円)</th>
				      <th style="width: 65px;">扶養人数</th>
				      <th style="width: 88px;">電話番号</th>
				      <th style="width: 130px;">寄り駅</th>
				      <th style="width: 165px;">住所</th>
				      <th style="width: 210px;">口座名義人</th>
				      <th style="width: 64px;">口座番号</th>
				      <th style="width: 170px;">社用メールアドレス</th>
	            </tr>
	        </thead>
	        <tbody id="data">
	        </tbody>
        </table>
	</div>
	<div style="position:fixed; top:200px;
	left: 45%;">
		<table id="pagetable">
		    <tr>
			    <th id="lastpage" class="pagehide" onclick="search1(-1)">前ページ&lt;&lt;</th>
				<th id="nextpage" class="pagehide" onclick="search1(+1)">&gt;&gt;次ページ</th>
		    </tr>
		</table>
	</div>
	<p style="margin-left:110px;margin-top:480px"><a href="EmployeeInfomanage.jsp">＜＜前画面に戻る</a></p>
</body>
</html>