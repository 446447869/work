package jp.co.display.pojo;


public class EmployeeSearchPojo {
	private Integer ListNo;
	private String employeeNo;
	private String employeeName;
	private String Gender;
	private Integer Age;
	private String JoiningCompanyOfYear;
	private String IntoCompanyOfMonth;
	private String Salary;
	private Integer DependentsPerson;
	private String PhoneNo;
	private String NearestStation;
	private String FirstHalfOfAddress;
	private String SecondHalfOfAddress;
	private String AccountNo;
	private String AccountName;
	private String CompanyMail;	
	private Integer PageNo;	
	/**
	* こメソッドは従業員テーブルから取得する情報を保存用のメソッドです。
	* @param 	String employeeNo
				String employeeName
				String password
				Integer authorityCode
				Date updateTime
				Date createTime
	* @return 	String employeeNo
					String employeeName
					String password
					Integer authorityCode
					Date updateTime
					Date createTime
	*/
	public Integer getListNo() {
		return ListNo;
	}
	public void setListNo(Integer listNo) {
		ListNo = listNo;
	}
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
	public String getGender() {
		return Gender;
	}
	public void setGender(String gender) {
		Gender = gender;
	}
	public Integer getAge() {
		return Age;
	}
	public void setAge(Integer age) {
		Age = age;
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
	public String getSalary() {
		return Salary;
	}
	public void setSalary(String salary) {
		Salary = salary;
	}
	public Integer getDependentsPerson() {
		return DependentsPerson;
	}
	public void setDependentsPerson(Integer dependentsPerson) {
		DependentsPerson = dependentsPerson;
	}
	public String getPhoneNo() {
		return PhoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		PhoneNo = phoneNo;
	}
	public String getNearestStation() {
		return NearestStation;
	}
	public void setNearestStation(String nearestStation) {
		NearestStation = nearestStation;
	}
	public String getFirstHalfOfAddress() {
		return FirstHalfOfAddress;
	}
	public void setFirstHalfOfAddress(String firstHalfOfAddress) {
		FirstHalfOfAddress = firstHalfOfAddress;
	}
	public String getSecondHalfOfAddress() {
		return SecondHalfOfAddress;
	}
	public void setSecondHalfOfAddress(String secondHalfOfAddress) {
		SecondHalfOfAddress = secondHalfOfAddress;
	}
	public String getAccountNo() {
		return AccountNo;
	}
	public void setAccountNo(String accountNo) {
		AccountNo = accountNo;
	}
	public String getAccountName() {
		return AccountName;
	}
	public void setAccountName(String accountName) {
		AccountName = accountName;
	}
	public String getCompanyMail() {
		return CompanyMail;
	}
	public void setCompanyMail(String companyMail) {
		CompanyMail = companyMail;
	}
	public Integer getPageNo() {
		return PageNo;
	}
	public void setPageNo(Integer pageNo) {
		PageNo = pageNo;
	}
	
}
