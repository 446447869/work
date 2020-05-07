package jp.co.display.service;
import java.sql.SQLException;

import jp.co.display.bean.EmployeeBean;
import jp.co.display.dao.*;
import jp.co.display.pojo.AuthMasterPojo;
import jp.co.display.pojo.EmployeePojo;
public class EmployeeInfoManageService {
	 /**
	 *  Daoのメソッドを呼び出す。
	 *  @param String employeeNo AuthMasterPojo authMaster
	 *  @return AuthMasterPojo authMaster
	 */
	AuthMasterPojo authMaster=new AuthMasterPojo();
	EmployeePojo employeePojo=new EmployeePojo();
	EmployeeBean employeeBean=new EmployeeBean();
	public AuthMasterPojo authMaster(String employeeNo) throws SQLException{
		
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		authMaster=employeeInfoManageSql.selectEmployeeofDB(employeeNo);
		return authMaster;
	}
	public EmployeePojo saiBan() throws SQLException{
		//追加検索処理
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		employeePojo=employeeInfoManageSql.selectMaxEmployeeofDB();
		employeePojo.setEmployeeNo("lyc"+String.format("%03d", Integer.parseInt(employeePojo.getEmployeeNo().substring(3))+1));
		return employeePojo;
	}
	public EmployeePojo maxMinEmpNo() throws SQLException{
		//追加検索処理
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		employeePojo=employeeInfoManageSql.selectMaxMinEmployeeofDB();
		employeePojo.setMaxemployeeNo(String.format("%03d", Integer.parseInt(employeePojo.getMaxemployeeNo().substring(3))));
		employeePojo.setMinemployeeNo(String.format("%03d", Integer.parseInt(employeePojo.getMinemployeeNo().substring(3))));
		return employeePojo;
	}
	public EmployeePojo correct(EmployeeBean employeeBean) throws SQLException {
		//修正検索処理
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		employeePojo=employeeInfoManageSql.selectEmployeeofDB(employeeBean);
		return employeePojo;
	}
	public EmployeePojo bankcheck(EmployeeBean employeeBean) throws SQLException {
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		employeePojo=employeeInfoManageSql.bankcheck(employeeBean);
		return employeePojo;
	}
	public EmployeePojo postalCodecheck(EmployeeBean employeeBean) throws SQLException {
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		employeePojo=employeeInfoManageSql.postalcodecheck(employeeBean);
		return employeePojo;
	}
	public EmployeePojo empDataSeting(EmployeeBean employeeBean) throws SQLException{
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		if(employeeBean.getBankNo().equals("0")){
			employeeBean.setBankBranchCode(null);
			employeeBean.setBankBranchName(null);
			employeeBean.setAccountNo(null);
			employeeBean.setAccountName(null);
		}
		employeePojo=employeeInfoManageSql.empDataSeting(employeeBean);
		return employeePojo;
	}
	public EmployeePojo empDataAllSeting(EmployeeBean employeeBean) throws SQLException{
		EmployeeInfoManageSql employeeInfoManageSql=new EmployeeInfoManageSql();
		if(employeeBean.getBankNo().equals("0")){
			employeeBean.setBankBranchCode(null);
			employeeBean.setBankBranchName(null);
			employeeBean.setAccountNo(null);
			employeeBean.setAccountName(null);
		}
		employeePojo=employeeInfoManageSql.empDataSeting(employeeBean);
		return employeePojo;
	}
}
