package jp.co.display.action;

import jp.co.display.common.LogicBasic;
import jp.co.display.pojo.EmployeeSearchPojo;
import java.util.List;

import jp.co.display.bean.EmployeeSearchBean;
import jp.co.display.service.EmployeeSearchService;

public class CorrectAction extends LogicBasic{
	/**
	 * 
	 */
	private EmployeeSearchBean employeeSearchBean;
	private  List<EmployeeSearchPojo> employeeSearchList; 

	public EmployeeSearchBean getEmployeeSearchBean() {
		return employeeSearchBean;
	}
	public void setEmployeeSearchBean(EmployeeSearchBean employeeSearchBean) {
		this.employeeSearchBean = employeeSearchBean;
	}
	
	public List<EmployeeSearchPojo> getEmployeeSearchList() {
		return employeeSearchList;
	}
	public void setEmployeeSearchList(List<EmployeeSearchPojo> employeeSearchList) {
		this.employeeSearchList = employeeSearchList;
	}

	private static final long serialVersionUID = 1L;
	public String correctAction() throws Exception{
		
		EmployeeSearchService employeeSearchService=new EmployeeSearchService();
		employeeSearchList=employeeSearchService.EmployeeSearch(employeeSearchBean);	
		return "success";
	}
}