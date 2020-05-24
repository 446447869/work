package jp.co.display.action;
import jp.co.display.bean.EmployeeBean;
import jp.co.display.common.LogicBasic;
import jp.co.display.pojo.EmployeePojo;
import jp.co.display.service.EmployeeInfoManageService;

public class EmpSetingAction extends LogicBasic{
	private EmployeePojo employeePojo;
	private EmployeeBean employeeBean;
	public EmployeeBean getEmployeeBean() {
		return employeeBean;
	}

	public void setEmployeeBean(EmployeeBean employeeBean) {
		this.employeeBean = employeeBean;
	}

	public EmployeePojo getEmployeePojo() {
		return employeePojo;
	}

	public void setEmployeePojo(EmployeePojo employeePojo) {
		this.employeePojo = employeePojo;
	}
	private static final long serialVersionUID = 1L;
	public String empDataSetingAction() throws Exception{
		EmployeeInfoManageService employeeInfoManageService=new EmployeeInfoManageService();
		employeePojo=employeeInfoManageService.empDataSeting(employeeBean);
		return SUCCESS;
	}
	public String empDataAllSetingAction() throws Exception{
		EmployeeInfoManageService employeeInfoManageService=new EmployeeInfoManageService();
		employeePojo=employeeInfoManageService.empDataAllSeting(employeeBean);
		return SUCCESS;
	}
	
}
