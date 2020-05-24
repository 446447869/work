package jp.co.display.bean;

/**
*  こメソッドは従業員テーブルから取得する情報を保存用のメソッドです。
*  @param 	String employeeNo
			String employeeName
			String password
			Integer authorityCode
			Date updateTime
			Date createTime
*  @return 	String employeeNo
				String employeeName
				String password
				Integer authorityCode
				Date updateTime
				Date createTime
*/
public class EmployeeSearchBean {
	private String employeeNo;
	private String employeeName;
	private Integer genderNo;
	private String JoiningCompanyOfYear;
	private String IntoCompanyOfMonth;
	private String age1;
	private String age2;
	private String salary;
	private String order;
	private Integer Page;
	public String getEmployeeNo() {
		return employeeNo;
	}
	public void setEmployeeNo(String employeeNo) {
		this.employeeNo = employeeNo;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public Integer getGenderNo() {
		return genderNo;
	}
	public void setGenderNo(Integer genderNo) {
		this.genderNo = genderNo;
	}
	public String getJoiningCompanyOfYear() {
		return JoiningCompanyOfYear;
	}
	public void setJoiningCompanyOfYear(String joiningCompanyOfYear) {
		JoiningCompanyOfYear = joiningCompanyOfYear;
	}
	public String getIntoCompanyOfMonth() {
		return IntoCompanyOfMonth;
	}
	public void setIntoCompanyOfMonth(String intoCompanyOfMonth) {
		IntoCompanyOfMonth = intoCompanyOfMonth;
	}
	public String getAge1() {
		return age1;
	}
	public void setAge1(String age1) {
		this.age1 = age1;
	}
	public String getAge2() {
		return age2;
	}
	public void setAge2(String age2) {
		this.age2 = age2;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public Integer getPage() {
		return Page;
	}
	public void setPage(Integer page) {
		Page = page;
	}
}
