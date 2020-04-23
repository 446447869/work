package jp.co.display.pojo;

import java.sql.Date;

public class EmployeePojo {
	private String employeeNo;
	private String employeeName;
	private String password;
	private int authorityCode;
	private Date updateTime;
	private Date createTime;
	/**
	*  こメソッドは従業員テーブルから取得する情報を保存用のメソッドです。
	*  @param 	String employeeNo
				String employeeName
				String password
				int authorityCode
				Date updateTime
				Date createTime
	*  @return 	String employeeNo
					String employeeName
					String password
					int authorityCode
					Date updateTime
					Date createTime
	*/
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public int getAuthorityCode() {
		return authorityCode;
	}
	public void setAuthorityCode(int authorityCode) {
		this.authorityCode = authorityCode;
	}
	public Date getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getEmployeeNo() {
		return employeeNo;
	}
	public void setEmployeeNo(String employeeNo) {
		this.employeeNo = employeeNo;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
