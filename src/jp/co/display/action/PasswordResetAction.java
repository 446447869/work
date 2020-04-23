package jp.co.display.action;
import jp.co.display.bean.CheckpwBean;
import jp.co.display.common.LogicBasic;
import jp.co.display.service.LoginAndPasswordResetService;
public class PasswordResetAction  extends LogicBasic{

	private static final long serialVersionUID = 1L;
	
	public CheckpwBean checkpwBean;
	public CheckpwBean getCheckpwBean() {
		return checkpwBean;
	}
	public void setCheckpwBean(CheckpwBean checkpwBean) {
		this.checkpwBean = checkpwBean;
	}
	/**
	*  こメソッドはパスワードリセット用のメソッドです。
	*  @param　boolean islogin
	*  @return　 ログインページに戻る。
	*/
	public String PwResetAction() throws Exception {
		checkpwBean.getPwd();
		checkpwBean.getEmp();
		boolean islogin=false;
		LoginAndPasswordResetService loginAndPasswordResetService=new LoginAndPasswordResetService();
		loginAndPasswordResetService.loginAndPasswordResetpojo(checkpwBean.getEmp(), checkpwBean.getPwd(),islogin);
		return SUCCESS;
	}
}
