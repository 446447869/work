package jp.co.display.bean;

public class CheckpwBean {
	private String emp;
	private String pwd;
	/**
	*  こメソッドはﾊﾟｽﾜｰﾄﾞを検証するため、社員番号とパスワードをセット、ゲット用のメソッドです。
	*  @param string emp　社員番号
	*  		  string pwd パスワード
	*  @return string emp　社員番号
	*  		   string pwd パスワード
	
	*/
	public String getEmp() {
		return emp;
	}
	public void setEmp(String emp) {
		this.emp = emp;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
}
