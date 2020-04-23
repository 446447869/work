package jp.co.display.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import DbConn.DBConn;
import jp.co.display.pojo.EmployeePojo;

public class LoginAndPasswordResetSql {
	DBConn db = new DBConn();
    Connection conn = db.getConn();
    EmployeePojo employeePojo=new EmployeePojo();
	/**
	*  こメソッドはログイン、パスワード再設定用のメソッドです。
	*  @param String employeeNo
	*  	   String passwd
	*  	   boolean islogin
	*  	   EmployeePojo employeePojo
	*  @return EmployeePojo employeePojo
	*/
    public EmployeePojo selectEmployeeOfDb(String employeeNo,String passwd,boolean islogin) throws SQLException {
    	String sql=new String();
    	if(islogin) {
    		sql = "select * from lycdb.employee where password=md5(?) and employeeNo=?";
    	}
    	else {
    		sql = "update lycdb.employee SET password =md5(?),updateTime=now() WHERE employeeNo = ?";
    	}
			PreparedStatement pre =conn.prepareStatement(sql);
			pre.setString(1, passwd);
			pre.setString(2, employeeNo);
			if(islogin) {
				ResultSet rs =pre.executeQuery();
					while (rs.next()) {
					employeePojo.setEmployeeNo(rs.getString("employeeNo"));
					employeePojo.setPassword(rs.getString("password"));
					employeePojo.setEmployeeName(rs.getString("employeeName"));
					employeePojo.setAuthorityCode(rs.getInt("authorityCode"));
			    }
			}
			else {
				pre.execute();
			}
		db.closeConn();
		return employeePojo;
    }
}
