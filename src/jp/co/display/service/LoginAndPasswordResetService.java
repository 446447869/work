package jp.co.display.service;

import java.sql.SQLException;
import jp.co.display.dao.*;
import jp.co.display.pojo.EmployeePojo;

public class LoginAndPasswordResetService {
	/**
	*  Daoのメソッドを呼び出す。
	*  @param String employeeNo
		  	  String passwd
	*  @return EmployeePojo employeePojo
	*/
	public EmployeePojo loginAndPasswordResetpojo(String employeeNo,String passwd,Boolean islogin) throws SQLException{
		EmployeePojo employeePojo=new EmployeePojo();
		LoginAndPasswordResetSql loginAndPasswordResetSql=new LoginAndPasswordResetSql();
		employeePojo=loginAndPasswordResetSql.selectEmployeeOfDb(employeeNo, passwd,islogin);
		return employeePojo;
	}
}
