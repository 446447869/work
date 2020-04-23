package jp.co.display.action;
import jp.co.display.service.LoginAndPasswordResetService;
import jp.co.display.bean.CheckpwBean;
import jp.co.display.common.LogicBasic;
import jp.co.display.pojo.EmployeePojo;

public class LoginAction extends LogicBasic{

	private static final long serialVersionUID = 1L;
	public CheckpwBean checkpwBean;

	public CheckpwBean getCheckpwBean() {
			return checkpwBean;
		}
		public void setCheckpwBean(CheckpwBean checkpwBean) {
			this.checkpwBean = checkpwBean;
		}
		
	/**
	*  こメソッドはログイン用のメソッドです。
	*  @param boolean islogin
	*  @return ERROR⇒ログインページに戻る。
	*  		SUCCESS⇒次の画面へ進む。
	*/	
	public String loginAction() throws Exception{
		LoginAndPasswordResetService loginAndPasswordResetService=new LoginAndPasswordResetService();
		boolean islogin=true;
		EmployeePojo loginAndPasswordResetpojo= loginAndPasswordResetService.loginAndPasswordResetpojo(checkpwBean.getEmp(), checkpwBean.getPwd(),islogin);
		if (loginAndPasswordResetpojo.getEmployeeNo()==null) {
			session.put("Error5","notexite");
			return ERROR;}
		else {
			session.put("Error5","");
			session.put("EmployeeName",loginAndPasswordResetpojo.getEmployeeName());
			session.put("EmployeeNo",loginAndPasswordResetpojo.getEmployeeNo());
			session.put("EmployeePw",loginAndPasswordResetpojo.getPassword());
			return SUCCESS;
		}
	}
}