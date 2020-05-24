package jp.co.display.service;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import jp.co.display.bean.EmployeeSearchBean;
import jp.co.display.dao.EmployeeSearchSql;
import jp.co.display.pojo.EmployeeSearchPojo;

public class EmployeeSearchService {
	private EmployeeSearchBean employeeSearchBean;
	List<EmployeeSearchPojo> employeeSearchList = new ArrayList<EmployeeSearchPojo>(); 
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
	public List<EmployeeSearchPojo> EmployeeSearch(EmployeeSearchBean employeeSearchBean) throws SQLException {
		//修正検索処理
		EmployeeSearchSql employeeSearchSql=new EmployeeSearchSql();
		employeeSearchList=employeeSearchSql.employeeSearchofDB(employeeSearchBean);
		return employeeSearchList;
	}
}
