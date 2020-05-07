package jp.co.display.action;

import jp.co.display.common.LogicBasic;
import jp.co.display.pojo.EmployeePojo;
import jp.co.display.service.EmployeeInfoManageService;

public class SaiBanAction extends LogicBasic{
	/**
	 * 
	 */
	private EmployeePojo employeePojo;
	public EmployeePojo getEmployeePojo() {
		return employeePojo;
	}

	public void setEmployeePojo(EmployeePojo employeePojo) {
		this.employeePojo = employeePojo;
	}

	private static final long serialVersionUID = 1L;

	/**
	*  こメソッドはアカウント権限を検索し、セッションにセットするメソッドです。
	*  @param string employeeNo
	*  		  string authMaster
	 * @return 
	*  @return
	*/
	public String saiBanAction() throws Exception{
		EmployeeInfoManageService employeeInfoManageService=new EmployeeInfoManageService();
		employeePojo=employeeInfoManageService.saiBan();	
		return "success";
	}
	public String maxMinEmpNoAction() throws Exception{
		EmployeeInfoManageService employeeInfoManageService=new EmployeeInfoManageService();
		employeePojo=employeeInfoManageService.maxMinEmpNo();	
		return "success";
	}
}