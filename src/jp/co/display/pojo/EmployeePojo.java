package jp.co.display.pojo;


public class EmployeePojo {
	private String employeeNo;
	private String employeeName;
	private String password;
	private int authorityCode;
	private String updateTime;
	private String createTime;
	private int Age;
	private String JoiningCompanyOfYear;
	private String IntoCompanyOfMonth;
	private String CompanyMail;
	private String PersonalMail;
	private String PhoneNo1;
	private String PhoneNo2;
	private String PhoneNo3;
	private String AuthorityProperties;
	private int AuthorityNo;
	private int GenderNo;
	private String GenderProperties;
	private int DependentsPerson;
	private String Salary;
	private String PostalCode1;
	private String PostalCode2;
	private String FirstHalfOfAddress;
	private String SecondHalfOfAddress;
	private String NearestStation;
	private String BankName;
	private String BankNo;
	
	private String BankBranchCode;
	private String BankBranchName;
	private String AccountNo;
	private String AccountName;
	private int PeopleNum;
	private Boolean Succeed; 
	private String MinemployeeNo;
	private String MaxemployeeNo;
	
	/**
	* こメソッドは従業員テーブルから取得する情報を保存用のメソッドです。
	* @param 	String employeeNo
				String employeeName
				String password
				int authorityCode
				Date updateTime
				Date createTime
	* @return 	String employeeNo
					String employeeName
					String password
					int authorityCode
					Date updateTime
					Date createTime
	*/
	
	public String getEmployeeNo() {
		return employeeNo;
	}
	public String getMinemployeeNo() {
		return MinemployeeNo;
	}
	public void setMinemployeeNo(String minemployeeNo) {
		this.MinemployeeNo = minemployeeNo;
	}
	public String getMaxemployeeNo() {
		return MaxemployeeNo;
	}
	public void setMaxemployeeNo(String maxemployeeNo) {
		this.MaxemployeeNo = maxemployeeNo;
	}
	public Boolean getSucceed() {
		return Succeed;
	}
	public void setSucceed(Boolean succeed) {
		this.Succeed = succeed;
	}
	public int getAuthorityNo() {
		return AuthorityNo;
	}
	public void setAuthorityNo(int authorityNo) {
		AuthorityNo = authorityNo;
	}
	public int getGenderNo() {
		return GenderNo;
	}
	public void setGenderNo(int genderNo) {
		GenderNo = genderNo;
	}
	public String getBankNo() {
		return BankNo;
	}
	public void setBankNo(String bankNo) {
		BankNo = bankNo;
	}
	public void setEmployeeNo(String employeeNo) {
		this.employeeNo = employeeNo;
	}
	public String getAuthorityProperties() {
		return AuthorityProperties;
	}
	public void setAuthorityProperties(String authorityProperties) {
		AuthorityProperties = authorityProperties;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getAuthorityCode() {
		return authorityCode;
	}
	public void setAuthorityCode(int authorityCode) {
		this.authorityCode = authorityCode;
	}
	public String getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public int getAge() {
		return Age;
	}
	public void setAge(int age) {
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
	public String getCompanyMail() {
		return CompanyMail;
	}
	public void setCompanyMail(String companyMail) {
		CompanyMail = companyMail;
	}
	public String getPersonalMail() {
		return PersonalMail;
	}
	public void setPersonalMail(String personalMail) {
		PersonalMail = personalMail;
	}
	public String getPhoneNo1() {
		return PhoneNo1;
	}
	public void setPhoneNo1(String phoneNo1) {
		PhoneNo1 = phoneNo1;
	}
	public String getPhoneNo2() {
		return PhoneNo2;
	}
	public void setPhoneNo2(String phoneNo2) {
		PhoneNo2 = phoneNo2;
	}
	public String getPhoneNo3() {
		return PhoneNo3;
	}
	public void setPhoneNo3(String phoneNo3) {
		PhoneNo3 = phoneNo3;
	}
	public String getGenderProperties() {
		return GenderProperties;
	}
	public void setGenderProperties(String genderProperties) {
		GenderProperties = genderProperties;
	}
	public int getDependentsPerson() {
		return DependentsPerson;
	}
	public void setDependentsPerson(int dependentsPerson) {
		DependentsPerson = dependentsPerson;
	}
	public String getSalary() {
		return Salary;
	}
	public void setSalary(String salary) {
		Salary = salary;
	}
	public String getPostalCode1() {
		return PostalCode1;
	}
	public void setPostalCode1(String postalCode1) {
		PostalCode1 = postalCode1;
	}
	public String getPostalCode2() {
		return PostalCode2;
	}
	public void setPostalCode2(String postalCode2) {
		PostalCode2 = postalCode2;
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
	public String getNearestStation() {
		return NearestStation;
	}
	public void setNearestStation(String nearestStation) {
		NearestStation = nearestStation;
	}
	public String getBankName() {
		return BankName;
	}
	public void setBankName(String bankName) {
		BankName = bankName;
	}
	public String getBankBranchCode() {
		return BankBranchCode;
	}
	public void setBankBranchCode(String bankBranchCode) {
		BankBranchCode = bankBranchCode;
	}
	public String getBankBranchName() {
		return BankBranchName;
	}
	public void setBankBranchName(String bankBranchName) {
		BankBranchName = bankBranchName;
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
	public int getPeopleNum() {
		return PeopleNum;
	}
	public void setPeopleNum(int peopleNum) {
		PeopleNum = peopleNum;
	}
}
