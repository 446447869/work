package jp.co.display.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Types;

import org.apache.commons.lang3.StringUtils;

import DbConn.DBConn;
import jp.co.display.bean.EmployeeBean;
import jp.co.display.pojo.AuthMasterPojo;
import jp.co.display.pojo.EmployeePojo;

public class EmployeeInfoManageSql {
	DBConn db = new DBConn();
    Connection conn = db.getConn();
    AuthMasterPojo AuthMasterPojo=new AuthMasterPojo();
    EmployeeBean employeeBean=new EmployeeBean();
    EmployeePojo employeePojo=new EmployeePojo();
	/**
	*  こメソッドは社員か管理者かを検索用のメソッドです。
	*  @param String employeeNo
	*  @return AuthMasterPojo AuthMasterPojo
	*/
    public AuthMasterPojo selectEmployeeofDB(String employeeNo) throws SQLException {
            String sql = "select authorityProperties from employee join authority_master on employee.authorityCode=authority_master.authorityNo and employee.employeeNo=?;";
            PreparedStatement pre =conn.prepareStatement(sql);
            pre.setString(1, employeeNo);
            ResultSet rs =pre.executeQuery();
            while (rs.next()) {
            	AuthMasterPojo.setAuthorityProperties(rs.getString("authorityProperties"));
            }
            db.closeConn();
        return AuthMasterPojo;
    }
    public EmployeePojo selectMaxEmployeeofDB() throws SQLException {
        String sql = "select max(employeeNo) as employeeNo from employee;";
        PreparedStatement pre =conn.prepareStatement(sql);
        ResultSet rs =pre.executeQuery();
        while (rs.next()) {
        	employeePojo.setEmployeeNo(rs.getString("employeeNo"));
        }
        db.closeConn();
    return employeePojo;
    }
    public EmployeePojo selectEmployeeofDB(EmployeeBean employeeBean) throws SQLException {
    	String sql;
    	PreparedStatement pre;
    	int peopleNum=0;
    	if (employeeBean.getEmployeeNo() != "") {
    		sql = "select t1.employeeNo,t1.employeeName,t1.updateTime,"
				+ "t2.age,t2.JoiningCompanyOfYear,t2.intoCompanyOfMonth,t2.companyMail,t2.personalMail,t2.phoneNo,t2.dependentsPerson,t2.salary,"
				+ "t3.postalCode,t3.firstHalfOfAddress,t3.secondHalfOfAddress,t3.nearestStation,"
				+ "t4.bankBranchCode,t4.accountNo,t4.accountName,"
				+ "t5.bankNo,"
				+ "t6.bankBranchName,"
				+ "t7.genderNo,"
				+ "t8.authorityNo "
				+ "from lycdb.employee t1 left join lycdb.employee_detail t2 on t1.employeeNo = t2.employeeNo "
				+ "left join lycdb.address_information t3 on t1.employeeNo = t3.employeeNo "
				+ "left join lycdb.account_information t4 on t1.employeeNo = t4.employeeNo "
				+ "left join lycdb.bank_master t5 on t4.bankCode = t5.bankNo "
				+ "left join lycdb.bank_barnch_master t6 on t4.bankBranchCode = t6.bankBranchNo "
				+ "left join lycdb.gender_master t7 on t2.genderCode = t7.genderNo "
				+ "left join lycdb.authority_master t8  on t1.authorityCode = t8.authorityNo "
				+ "where  t1.employeeNo = ?;";
            pre =conn.prepareStatement(sql);
    		pre.setString(1, employeeBean.getEmployeeNo());
    	}
    	else{
    		sql = "select t1.employeeNo,t1.employeeName,t1.employeeName,t1.updateTime,"
				+ "t2.age,t2.JoiningCompanyOfYear,t2.intoCompanyOfMonth,t2.companyMail,t2.personalMail,t2.phoneNo,t2.dependentsPerson,t2.salary,"
				+ "t3.postalCode,t3.firstHalfOfAddress,t3.secondHalfOfAddress,t3.nearestStation,"
				+ "t4.bankBranchCode,t4.accountNo,t4.accountName,"
				+ "t5.bankNo,"
				+ "t6.bankBranchName,"
				+ "t7.genderNo,"
				+ "t8.authorityNo "
				+ "from lycdb.employee t1 left join lycdb.employee_detail t2 on t1.employeeNo = t2.employeeNo "
				+ "left join lycdb.address_information t3 on t1.employeeNo = t3.employeeNo "
				+ "left join lycdb.account_information t4 on t1.employeeNo = t4.employeeNo "
				+ "left join lycdb.bank_master t5 on t4.bankCode = t5.bankNo "
				+ "left join lycdb.bank_barnch_master t6 on t4.bankBranchCode = t6.bankBranchNo "
				+ "left join lycdb.gender_master t7 on t2.genderCode = t7.genderNo "
				+ "left join lycdb.authority_master t8  on t1.authorityCode = t8.authorityNo "
				+ "where  t1.employeeName = ?;";
            pre =conn.prepareStatement(sql);
    		pre.setString(1, employeeBean.getEmployeeName());
       }
        ResultSet rs =pre.executeQuery();
        while (rs.next()) {
        	employeePojo.setEmployeeNo(rs.getString("employeeNo"));
        	employeePojo.setEmployeeName(rs.getString("employeeName"));  
        	employeePojo.setUpdateTime(rs.getString("updateTime"));
        	employeePojo.setAge(rs.getInt("age"));
        	employeePojo.setJoiningCompanyOfYear(rs.getString("JoiningCompanyOfYear"));
        	employeePojo.setIntoCompanyOfMonth(rs.getString("intoCompanyOfMonth"));
        	if(rs.getString("companyMail")!=null) {
        		employeePojo.setCompanyMail(rs.getString("companyMail").substring(0,rs.getString("companyMail").length()-10));
        	}
        	
        	employeePojo.setPersonalMail(rs.getString("personalMail"));
        	if(rs.getString("phoneNo")!=null){
        		if(rs.getString("phoneNo").length()==11){
	            	employeePojo.setPhoneNo1(rs.getString("phoneNo").substring(0,3));
	            	employeePojo.setPhoneNo2(rs.getString("phoneNo").substring(3,7));
	            	employeePojo.setPhoneNo3(rs.getString("phoneNo").substring(7,11));	
        		}
        	}
        	employeePojo.setAuthorityNo(rs.getInt("authorityNo"));
        	employeePojo.setGenderNo(rs.getInt("genderNo"));
        	employeePojo.setDependentsPerson(rs.getInt("dependentsPerson"));
        	employeePojo.setSalary(rs.getString("salary"));
        	if(rs.getString("postalCode").length()==7){
            	employeePojo.setPostalCode1(rs.getString("postalCode").substring(0,3));
            	employeePojo.setPostalCode2(rs.getString("postalCode").substring(3,7));
        	}
        	employeePojo.setFirstHalfOfAddress(rs.getString("firstHalfOfAddress"));
        	employeePojo.setSecondHalfOfAddress(rs.getString("secondHalfOfAddress"));
        	employeePojo.setNearestStation(rs.getString("nearestStation"));
        	employeePojo.setBankNo(rs.getString("bankNo"));
        	employeePojo.setBankBranchCode(rs.getString("bankBranchCode"));
        	employeePojo.setBankBranchName(rs.getString("bankBranchName"));
        	employeePojo.setAccountNo(rs.getString("accountNo"));
        	employeePojo.setAccountName(rs.getString("accountName"));
        	peopleNum+=1;
        }
        employeePojo.setPeopleNum(peopleNum);
        db.closeConn();
    return employeePojo;
}
	public EmployeePojo bankcheck(EmployeeBean employeeBean) throws SQLException {
		 String sql = "select bankBranchNo,bankBranchName from lycdb.bank_barnch_master where BankCode = ? and (bankBranchName = ? or bankBranchNo=?)";	
	        PreparedStatement pre =conn.prepareStatement(sql);
	        pre.setString(1, employeeBean.getBankNo());
	        pre.setString(2, employeeBean.getBankBranchName());
	        pre.setString(3, employeeBean.getBankBranchCode());
	        ResultSet rs =pre.executeQuery();
	        while (rs.next()) {
	        	employeePojo.setBankBranchCode(rs.getString("bankBranchNo"));
	        	employeePojo.setBankBranchName(rs.getString("bankBranchName"));
	        }
	        db.closeConn();
	    return employeePojo;
	}
	public EmployeePojo postalcodecheck(EmployeeBean employeeBean) throws SQLException {
		 String sql = "SELECT firstHalfOfAddress,secondHalfOfAddress FROM address_information where postalCode=?";	
	        PreparedStatement pre =conn.prepareStatement(sql);
	        pre.setString(1, employeeBean.getPostalCode1()+employeeBean.getPostalCode2());
	        ResultSet rs =pre.executeQuery();
	        while (rs.next()) {
	        	employeePojo.setFirstHalfOfAddress(rs.getString("firstHalfOfAddress"));
	        	employeePojo.setSecondHalfOfAddress(rs.getString("secondHalfOfAddress"));
	        }
	        db.closeConn();
	    return employeePojo;
	}
	public EmployeePojo empDataSeting(EmployeeBean employeeBean) throws SQLException {
		if (employeeBean.getButton().equals("1")){
			//追加
			try {
				//テーブルemployee
				String sql= "insert into lycdb.employee values(?,?,MD5(?),?,now(),now())";
				PreparedStatement pre =conn.prepareStatement(sql);
				conn.setAutoCommit(false);
				pre.setString(1,employeeBean.getEmployeeNo());
				pre.setString(2,employeeBean.getEmployeeName());
				pre.setString(3,employeeBean.getPassword());
				pre.setInt(4,employeeBean.getAuthorityCode());
				pre.executeUpdate();
				//テーブルemployee_detail
				sql = "insert into lycdb.employee_detail values(?,?,?,?,?,?,?,?,?,?,now(),now())";	
				pre =conn.prepareStatement(sql);
				pre.setString(1,employeeBean.getEmployeeNo());
				pre.setInt(2,employeeBean.getGenderNo());
				if (employeeBean.getAge() == null) {
					pre.setNull(3,Types.INTEGER);
				}
				else{
					pre.setInt(3,employeeBean.getAge());
				}			
				pre.setString(4,employeeBean.getJoiningCompanyOfYear());
				pre.setString(5,employeeBean.getIntoCompanyOfMonth());
				pre.setString(6,employeeBean.getCompanyMail()+"@lyc.co.jp");
				pre.setString(7,employeeBean.getPersonalMail());
				pre.setString(8,employeeBean.getPhoneNo1()+employeeBean.getPhoneNo2()+employeeBean.getPhoneNo3());
				pre.setInt(9,employeeBean.getDependentsPerson());  
				if (employeeBean.getSalary() == null) {
					pre.setNull(10,Types.INTEGER);
				}
				else{
					pre.setInt(10,employeeBean.getSalary());
				}
				pre.executeUpdate();
				//テーブルaddress_information
				sql = "insert into lycdb.address_information values(?,?,?,?,?,now(),now())";
				pre =conn.prepareStatement(sql);
				pre.setString(1,employeeBean.getEmployeeNo());
				pre.setString(2,employeeBean.getPostalCode1()+ employeeBean.getPostalCode2());
				pre.setString(3,employeeBean.getFirstHalfOfAddress());
				pre.setString(4,employeeBean.getSecondHalfOfAddress());
				pre.setString(5,employeeBean.getNearestStation());

				pre.executeUpdate();
				//テーブルaccount_information	
				sql = "insert into lycdb.account_information values(?,?,?,?,?,now(), now())";
				pre =conn.prepareStatement(sql);
				pre.setString(1,employeeBean.getEmployeeNo());		    
				pre.setString(2,employeeBean.getBankNo());		
				pre.setString(3,employeeBean.getBankBranchCode());    		    
				pre.setString(4,employeeBean.getAccountNo());
				pre.setString(5,employeeBean.getAccountName()); 
				pre.executeUpdate();
				conn.commit();	 
			    db.closeConn();
			}
			catch(SQLException e){
				conn.rollback();
				db.closeConn();
				employeePojo.setSucceed(false);
				return employeePojo;
			}
			finally {
				}			
			}
		//修正
		else if(employeeBean.getButton().equals("2")) {
			try {
				//テーブルemployee
				String sql="update lycdb.employee set employeeName ='"+employeeBean.getEmployeeName()+"'";
				if (!employeeBean.getPassword().equals("******")) {
					sql=sql+",password = MD5('"+employeeBean.getPassword()+"')";
				}
				sql=sql+",authorityCode ='"+employeeBean.getAuthorityCode()+"',updateTime= now() where employeeNo ='"+employeeBean.getEmployeeNo()+"'and updateTime='"+employeeBean.getUpdateTime()+"';";
				PreparedStatement pre =conn.prepareStatement(sql);
				conn.setAutoCommit(false);
				int haspre=pre.executeUpdate();
				if (haspre==1) {
					//テーブルemployee_detail
					sql="update lycdb.employee_detail set genderCode = ?,age= ?,JoiningCompanyOfYear= ?,intoCompanyOfMonth= ?,companyMail= ? , personalMail = ?, phoneNo = ?,dependentsPerson = ?,salary = ?,updateTime=now() where employeeNo = ?";
					pre =conn.prepareStatement(sql);
					pre.setInt(1,employeeBean.getGenderNo());
					if (employeeBean.getAge() == null) {
						pre.setNull(2,Types.INTEGER);
					}
					else{
						pre.setInt(2,employeeBean.getAge());
					}
					pre.setString(3,employeeBean.getJoiningCompanyOfYear());
					pre.setString(4,employeeBean.getIntoCompanyOfMonth());
					pre.setString(5,employeeBean.getCompanyMail()+"@lyc.co.jp");
					pre.setString(6,employeeBean.getPersonalMail());
					pre.setString(7,employeeBean.getPhoneNo1()+employeeBean.getPhoneNo2()+employeeBean.getPhoneNo3());
					pre.setInt(8,employeeBean.getDependentsPerson());    
					if (employeeBean.getSalary() == null) {
						pre.setNull(9,Types.INTEGER);
					}
					else{
						pre.setInt(9,employeeBean.getSalary());
					}
					pre.setString(10,employeeBean.getEmployeeNo());
					pre.executeUpdate();
					//テーブルaddress_information
					sql ="update lycdb.address_information set postalCode = ? ,firstHalfOfAddress = ?,secondHalfOfAddress = ?,nearestStation = ?,updateTime=now() where employeeNo = ?";
					pre =conn.prepareStatement(sql);
					pre.setString(1,employeeBean.getPostalCode1()+ employeeBean.getPostalCode2());
					pre.setString(2,employeeBean.getFirstHalfOfAddress());
					pre.setString(3,employeeBean.getSecondHalfOfAddress());
					pre.setString(4,employeeBean.getNearestStation());
					pre.setString(5,employeeBean.getEmployeeNo());
					pre.executeUpdate();
					//テーブルaccount_information	
					sql ="update lycdb.account_information set bankCode = ?,bankBranchCode = ?,accountNo = ?,accountName = ?,updateTime=now() where employeeNo = ?";
					pre =conn.prepareStatement(sql);		    
					pre.setString(1,employeeBean.getBankNo());		
					pre.setString(2,employeeBean.getBankBranchCode());    		    
					pre.setString(3,employeeBean.getAccountNo());
					pre.setString(4,employeeBean.getAccountName());
					pre.setString(5,employeeBean.getEmployeeNo());
					pre.executeUpdate();
					conn.commit();	 
				    db.closeConn();
				}
				else {
					employeePojo.setSucceed(false);
					return employeePojo;
				}
				}
				
				
			catch(SQLException e){
				conn.rollback();
				db.closeConn();
				employeePojo.setSucceed(false);
				return employeePojo;
			}
			finally {
				}	
		}
		//削除
		else if(employeeBean.getButton().equals("3")) {
			try {
				//テーブルemployee
				String sql= "delete from lycdb.employee where employeeNo = ?";
				PreparedStatement pre =conn.prepareStatement(sql);
				conn.setAutoCommit(false);
				pre.setString(1,employeeBean.getEmployeeNo());
				int haspre=pre.executeUpdate();
				//テーブルemployee_detail
				sql = "delete from lycdb.employee_detail where employeeNo = ?";	
				pre =conn.prepareStatement(sql);
				conn.setAutoCommit(false);
				pre.setString(1,employeeBean.getEmployeeNo());
				pre.execute();
				//テーブルaddress_information
				sql = "delete from lycdb.address_information where employeeNo = ?";
				pre =conn.prepareStatement(sql);
				conn.setAutoCommit(false);
				pre.setString(1,employeeBean.getEmployeeNo());
				pre.execute();
				//テーブルaccount_information	
				sql = "delete from lycdb.account_information where employeeNo = ?";
				pre =conn.prepareStatement(sql);
				conn.setAutoCommit(false);
				pre.setString(1,employeeBean.getEmployeeNo());
				pre.execute();
				conn.commit();	 
			    db.closeConn();
				if (haspre<1) {
					employeePojo.setSucceed(false);
					return employeePojo;
				}
			}
			catch(SQLException e){
				conn.rollback();
				db.closeConn();
				employeePojo.setSucceed(false);
				return employeePojo;
			}
			finally {
				}	
		}
	else if(employeeBean.getButton().equals("4")) {
		try {
			//テーブルemployee
			String sql="";
			boolean first=false;
			conn.setAutoCommit(false);
			if (StringUtils.isNotBlank(employeeBean.getEmployeeName())||
				StringUtils.isNotBlank(employeeBean.getPassword())||
				employeeBean.getAuthorityCode()!=-1) 
				{
				sql="update lycdb.employee set ";
				if(StringUtils.isNotBlank(employeeBean.getEmployeeName())) {
					 sql=sql+"employeeName ='"+employeeBean.getEmployeeName()+"'";
					 first=true;
				}
				if (StringUtils.isNotBlank(employeeBean.getPassword())) {
					if(first) {
					sql=sql+",";
					}
					sql=sql+"password = MD5('"+employeeBean.getPassword()+"')";
					first=true;
				}
				if(employeeBean.getAuthorityCode()!=-1) {
					if(first) {
					sql=sql+",";
					}
					sql=sql+"authorityCode ='"+employeeBean.getAuthorityCode()+"'";
					first=true;
				}
				sql=sql+",updateTime= now() where employeeNo >='lyc"+employeeBean.getEmployeeNo1()+"'and employeeNo <='lyc"+employeeBean.getEmployeeNo2()+"';";
				PreparedStatement pre =conn.prepareStatement(sql);
				pre.executeUpdate();
			}
		
			//テーブルemployee_detail
			first=false;
			if (employeeBean.getGenderNo()!=null||
				employeeBean.getAge()!=null||
				!employeeBean.getJoiningCompanyOfYear().equals("0")||
				!employeeBean.getIntoCompanyOfMonth().equals("0")||
				StringUtils.isNotBlank(employeeBean.getCompanyMail())||
				StringUtils.isNotBlank(employeeBean.getPersonalMail())||
				StringUtils.isNotBlank(employeeBean.getPhoneNo1())||
				!employeeBean.getDependentsPerson().equals(-1)||
				employeeBean.getSalary()!=null)
				{
				sql="update lycdb.employee_detail set ";
				if(employeeBean.getGenderNo()!=null) {
					 sql=sql+"genderCode ='"+employeeBean.getGenderNo()+"'";
					 first=true;
				}
				if(employeeBean.getAge()!=null) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"age ='"+employeeBean.getAge()+"'";
					 first=true;
				}
				if(!employeeBean.getJoiningCompanyOfYear().equals("0")) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"JoiningCompanyOfYear ='"+employeeBean.getJoiningCompanyOfYear()+"'";
					 first=true;
				}			
				if(!employeeBean.getIntoCompanyOfMonth().equals("0")) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"intoCompanyOfMonth ='"+employeeBean.getIntoCompanyOfMonth()+"'";
					 first=true;
				}		
				if(StringUtils.isNotBlank(employeeBean.getCompanyMail())) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"companyMail ='"+employeeBean.getCompanyMail()+"'";
					 first=true;
				}	
				if(StringUtils.isNotBlank(employeeBean.getPersonalMail())) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"personalMail ='"+employeeBean.getPersonalMail()+"'";
					 first=true;
				}
				if(StringUtils.isNotBlank(employeeBean.getPhoneNo1())) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"phoneNo ='"+employeeBean.getPhoneNo1()+employeeBean.getPhoneNo2()+employeeBean.getPhoneNo3()+"'";
					 first=true;
				}	
				if(!employeeBean.getDependentsPerson().equals(-1)) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"dependentsPerson ='"+employeeBean.getDependentsPerson()+"'";
					 first=true;
				}
				if(employeeBean.getSalary()!=null) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"salary ='"+employeeBean.getSalary()+"'";
					 first=true;
				}
				sql=sql+",updateTime= now() where employeeNo >='lyc"+employeeBean.getEmployeeNo1()+"'and employeeNo <='lyc"+employeeBean.getEmployeeNo2()+"';";
				PreparedStatement pre =conn.prepareStatement(sql);
				pre.executeUpdate();
			}
		
			//テーブルaddress_information
			first=false;
			if (StringUtils.isNotBlank(employeeBean.getPostalCode1())||
				StringUtils.isNotBlank(employeeBean.getFirstHalfOfAddress())||
				StringUtils.isNotBlank(employeeBean.getSecondHalfOfAddress())||
				StringUtils.isNotBlank(employeeBean.getNearestStation()))
				{
				sql="update lycdb.account_information set ";
				if(StringUtils.isNotBlank(employeeBean.getPostalCode1())) {
					 sql=sql+"postalCode ='"+employeeBean.getPostalCode1()+ employeeBean.getPostalCode2()+"'";
					 first=true;
				}
				if(StringUtils.isNotBlank(employeeBean.getFirstHalfOfAddress())) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"firstHalfOfAddress ='"+employeeBean.getFirstHalfOfAddress()+"'";
					 first=true;
				}
				if(StringUtils.isNotBlank(employeeBean.getSecondHalfOfAddress())) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"secondHalfOfAddress ='"+employeeBean.getSecondHalfOfAddress()+"'";
					 first=true;
				}
				if(StringUtils.isNotBlank(employeeBean.getNearestStation())) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"nearestStation ='"+employeeBean.getNearestStation()+"'";
					 first=true;
				}			
				sql=sql+",updateTime= now() where employeeNo >='lyc"+employeeBean.getEmployeeNo1()+"'and employeeNo <='lyc"+employeeBean.getEmployeeNo2()+"';";
				PreparedStatement pre =conn.prepareStatement(sql);
				pre.executeUpdate();
			}
			//テーブルaccount_information	
			first=false;
			if (!employeeBean.getBankNo().equals("0")||
				StringUtils.isNotBlank(employeeBean.getBankBranchCode())||
				StringUtils.isNotBlank(employeeBean.getAccountNo())||
				StringUtils.isNotBlank(employeeBean.getAccountName()))
				{
				sql="update lycdb.account_information set ";
				if(!employeeBean.getBankNo().equals("0")) {
					 sql=sql+"bankCode ='"+employeeBean.getPostalCode1()+ employeeBean.getBankNo()+"'";
					 first=true;
				}
				if(StringUtils.isNotBlank(employeeBean.getBankBranchCode())) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"bankBranchCode ='"+employeeBean.getBankBranchCode()+"'";
					 first=true;
				}
				if(StringUtils.isNotBlank(employeeBean.getAccountNo())) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"accountNo ='"+employeeBean.getAccountNo()+"'";
					 first=true;
				}
				if(StringUtils.isNotBlank(employeeBean.getAccountName())) {
					if(first) {
					sql=sql+",";
					}	
					 sql=sql+"accountName ='"+employeeBean.getAccountName()+"'";
					 first=true;
				}			
				sql=sql+",updateTime= now() where employeeNo >='lyc"+employeeBean.getEmployeeNo1()+"'and employeeNo <='lyc"+employeeBean.getEmployeeNo2()+"';";
				PreparedStatement pre =conn.prepareStatement(sql);
				pre.executeUpdate();
			}
			conn.commit();	 
		    db.closeConn();
		}
		catch(SQLException e){
			conn.rollback();
			db.closeConn();
			employeePojo.setSucceed(false);
			return employeePojo;
		}
		finally {
			}	
	}
	employeePojo.setSucceed(true);
	return employeePojo;
	}
    public EmployeePojo selectMaxMinEmployeeofDB() throws SQLException {
        String sql = "select min(employeeNo) as minemployeeNo, max(employeeNo) as maxemployeeNo from lycdb.employee;";
        PreparedStatement pre =conn.prepareStatement(sql);
        ResultSet rs =pre.executeQuery();
        while (rs.next()) {
        	employeePojo.setMaxemployeeNo(rs.getString("maxemployeeNo"));
        	employeePojo.setMinemployeeNo(rs.getString("minemployeeNo"));
        }
        db.closeConn();
    return employeePojo;
    }
}
