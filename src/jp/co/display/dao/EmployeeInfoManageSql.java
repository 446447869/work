package jp.co.display.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import DbConn.DBConn;
import jp.co.display.pojo.AuthMasterPojo;
import jp.co.display.pojo.EmployeePojo;

public class EmployeeInfoManageSql {
	DBConn db = new DBConn();
    Connection conn = db.getConn();
    AuthMasterPojo AuthMasterPojo=new AuthMasterPojo();
    EmployeePojo employeePojo=new EmployeePojo();
	/**
	*  こメソッドは社員か管理者かを検索用のメソッドです。
	*  @param String employeeNo
	*  @return AuthMasterPojo AuthMasterPojo
	*/
    public AuthMasterPojo selectEmployeeofDB(String employeeNo) throws SQLException {
            String sql = "select authorityProperties from employee join authority_master on employee.authorityCode=authority_master.authorityNo and employee.employeeNo=?;";
            PreparedStatement pre =conn.prepareStatement(sql);
            pre.setString(1, employeeNo);
            ResultSet rs =pre.executeQuery();
            while (rs.next()) {
            	AuthMasterPojo.setAuthorityProperties(rs.getString("authorityProperties"));
            }
            db.closeConn();
        return AuthMasterPojo;
    }
    public EmployeePojo selectMaxEmployeeofDB() throws SQLException {
        String sql = "select max(employeeNo) as employeeNo from employee;";
        PreparedStatement pre =conn.prepareStatement(sql);
        ResultSet rs =pre.executeQuery();
        while (rs.next()) {
        	employeePojo.setEmployeeNo(rs.getString("employeeNo"));
        }
        db.closeConn();
    return employeePojo;
}
}
