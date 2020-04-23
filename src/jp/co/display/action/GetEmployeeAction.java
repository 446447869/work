package jp.co.display.action;
import jp.co.display.common.LogicBasic;
import jp.co.display.pojo.AuthMasterPojo;
import jp.co.display.service.EmployeeInfoManageService;

public class GetEmployeeAction extends LogicBasic{
	private String employeeNo;
	public void setEmployeeNo(String employeeNo) {
		this.employeeNo = employeeNo;
	}
	public String getEmployeeNo() {
		return employeeNo;
	}
	private static final long serialVersionUID = 1L;
	/**
	*  こメソッドはアカウント権限を検索し、セッションにセットするメソッドです。
	*  @param string employeeNo
	*  		  string authMaster
	*  @return
	*/
	public void getEmployeeAction() throws Exception{
		String EmployeeNo=getEmployeeNo();
		EmployeeInfoManageService employeeInfoManageService=new EmployeeInfoManageService();
		AuthMasterPojo authMasterPojo=employeeInfoManageService.authMaster(EmployeeNo);
		String authMaster=authMasterPojo.getAuthorityProperties();
		session.put("authMaster", authMaster);
	}
}
