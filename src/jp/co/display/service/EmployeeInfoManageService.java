package jp.co.display.service;
import java.sql.SQLException;

import jp.co.display.dao.*;
import jp.co.display.pojo.AuthMasterPojo;
import jp.co.display.pojo.EmployeePojo;
public class EmployeeInfoManageService {
	 /**
	 *  Daoのメソッドを呼び出す。
	 *  @param String employeeNo AuthMasterPojo authMaster
	 *  @return AuthMasterPojo authMaster
	 */
	public AuthMasterPojo authMaster(String employeeNo) throws SQLException{
		AuthMasterPojo authMaster=new AuthMasterPojo();
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		authMaster=employeeInfoManageSql.selectEmployeeofDB(employeeNo);
		return authMaster;
	}
	public EmployeePojo saiBan() throws SQLException{
		EmployeePojo employeePojo=new EmployeePojo();
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		employeePojo=employeeInfoManageSql.selectMaxEmployeeofDB();
		employeePojo.setEmployeeNo("lyc"+String.format("%03d", Integer.parseInt(employeePojo.getEmployeeNo().substring(3)+1)));
		return employeePojo;
	}
}
