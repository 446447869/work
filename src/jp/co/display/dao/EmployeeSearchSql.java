package jp.co.display.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import DbConn.DBConn;
import jp.co.display.bean.EmployeeSearchBean;
import jp.co.display.pojo.EmployeeSearchPojo;

public class EmployeeSearchSql {
		DBConn db = new DBConn();
	    Connection conn = db.getConn();
	    
		List<EmployeeSearchPojo> employeeSearchList = new ArrayList<EmployeeSearchPojo>();    
	 
		public List<EmployeeSearchPojo> getEmployeeSearchList() {
			return employeeSearchList;
		}

		public void setEmployeeSearchList(List<EmployeeSearchPojo> employeeSearchList) {
			this.employeeSearchList = employeeSearchList;
		}

	   
		/**
		*  こメソッドは社員か管理者かを検索用のメソッドです。
		*  @param String employeeNo
		*  @return AuthMasterPojo AuthMasterPojo
		*/
	    public List<EmployeeSearchPojo> employeeSearchofDB(EmployeeSearchBean employeeSearchBean) throws SQLException {
	    		PreparedStatement pre;
	            String sql;
	            int page = 0;
	            sql = "select count(*) "
	    				+ "from lycdb.employee t1 left join lycdb.employee_detail t2 on t1.employeeNo = t2.employeeNo "
	    				+ "left join lycdb.address_information t3 on t1.employeeNo = t3.employeeNo "
	    				+ "left join lycdb.account_information t4 on t1.employeeNo = t4.employeeNo "
	    				+ "left join lycdb.gender_master t5 on t2.genderCode = t5.genderNo "
	    				+"where  t1.employeeNo !=''";
	    		if(employeeSearchBean.getEmployeeNo()!=""||
    				employeeSearchBean.getEmployeeName()!=""||
    				employeeSearchBean.getGenderNo()!=-1||
    				employeeSearchBean.getJoiningCompanyOfYear()!="0"||
    				employeeSearchBean.getIntoCompanyOfMonth()!="0"||
    				employeeSearchBean.getAge1()!=""||
    				employeeSearchBean.getAge2()!=""||
    				employeeSearchBean.getSalary()!="") {
	    			if(employeeSearchBean.getEmployeeNo()!="") {
	    				sql =sql + " and  t1.employeeNo = '"+employeeSearchBean.getEmployeeNo()+"'";
	    			}
	    			if(employeeSearchBean.getEmployeeName()!="") {
	    					sql =sql + " and t1.employeeName like '%"+employeeSearchBean.getEmployeeName()+"%'";
	    			}
	    			if(employeeSearchBean.getGenderNo()!=-1) {
	    					sql =sql + " and t5.genderNo = "+employeeSearchBean.getGenderNo();
	    			}	  
	    			if(!employeeSearchBean.getJoiningCompanyOfYear().equals("0")) {
	    					sql =sql + " and t2.JoiningCompanyOfYear = '"+employeeSearchBean.getJoiningCompanyOfYear()+"'";
	    			}	
	    			if(!employeeSearchBean.getIntoCompanyOfMonth().equals("0")) {
	    					sql =sql + " and t2.intoCompanyOfMonth = '"+employeeSearchBean.getIntoCompanyOfMonth()+"'";
	    			}	
	    			if(employeeSearchBean.getAge1()!="") {
	    					sql =sql + " and t2.age >= '"+employeeSearchBean.getAge1()+"'";
	    			}	
	    			if(employeeSearchBean.getAge2()!="") {
	    					sql =sql + " and t2.age <= '"+employeeSearchBean.getAge2()+"'";
	    			}	
	    			if(employeeSearchBean.getSalary()!="") {
	    					sql =sql + " and t2.salary >= '"+employeeSearchBean.getSalary()+"'";
	    			}
    			}
	            pre =conn.prepareStatement(sql);
	            ResultSet rs =pre.executeQuery();
	            while (rs.next()) {
	            page=rs.getInt("count(*)");
	            }
	            sql = "select t1.employeeNo,t1.employeeName,"
	    				+ "t2.age,t2.JoiningCompanyOfYear,t2.intoCompanyOfMonth,t2.companyMail,t2.phoneNo,t2.dependentsPerson,t2.salary,"
	    				+ "t3.firstHalfOfAddress,t3.secondHalfOfAddress,t3.nearestStation,"
	    				+ "t4.accountNo,t4.accountName,"
	    				+ "t5.genderProperties "
	    				+ "from lycdb.employee t1 left join lycdb.employee_detail t2 on t1.employeeNo = t2.employeeNo "
	    				+ "left join lycdb.address_information t3 on t1.employeeNo = t3.employeeNo "
	    				+ "left join lycdb.account_information t4 on t1.employeeNo = t4.employeeNo "
	    				+ "left join lycdb.gender_master t5 on t2.genderCode = t5.genderNo "
	    				+"where  t1.employeeNo !=''";
	    		if(employeeSearchBean.getEmployeeNo()!=""||
    				employeeSearchBean.getEmployeeName()!=""||
    				employeeSearchBean.getGenderNo()!=-1||
    				employeeSearchBean.getJoiningCompanyOfYear()!="0"||
    				employeeSearchBean.getIntoCompanyOfMonth()!="0"||
    				employeeSearchBean.getAge1()!=""||
    				employeeSearchBean.getAge2()!=""||
    				employeeSearchBean.getSalary()!="") {
	    			if(employeeSearchBean.getEmployeeNo()!="") {
	    				sql =sql + " and  t1.employeeNo = '"+employeeSearchBean.getEmployeeNo()+"'";
	    			}
	    			if(employeeSearchBean.getEmployeeName()!="") {
	    					sql =sql + " and t1.employeeName like '%"+employeeSearchBean.getEmployeeName()+"%'";
	    			}
	    			if(employeeSearchBean.getGenderNo()!=-1) {
	    					sql =sql + " and t5.genderNo = "+employeeSearchBean.getGenderNo();
	    			}	  
	    			if(!employeeSearchBean.getJoiningCompanyOfYear().equals("0")) {
	    					sql =sql + " and t2.JoiningCompanyOfYear = '"+employeeSearchBean.getJoiningCompanyOfYear()+"'";
	    			}	
	    			if(!employeeSearchBean.getIntoCompanyOfMonth().equals("0")) {
	    					sql =sql + " and t2.intoCompanyOfMonth = '"+employeeSearchBean.getIntoCompanyOfMonth()+"'";
	    			}	
	    			if(employeeSearchBean.getAge1()!="") {
	    					sql =sql + " and t2.age >= '"+employeeSearchBean.getAge1()+"'";
	    			}	
	    			if(employeeSearchBean.getAge2()!="") {
	    					sql =sql + " and t2.age <= '"+employeeSearchBean.getAge2()+"'";
	    			}	
	    			if(employeeSearchBean.getSalary()!="") {
	    					sql =sql + " and t2.salary >= '"+employeeSearchBean.getSalary()+"'";
	    			}
    					sql =sql + " order by "+employeeSearchBean.getOrder()+" limit "+(employeeSearchBean.getPage()*10)+",10";
	    		 }
	            pre =conn.prepareStatement(sql);
	            rs =pre.executeQuery();
	            int No=employeeSearchBean.getPage()*10+1;
	            employeeSearchList.clear();
	            while (rs.next()) {
	            	EmployeeSearchPojo employeeSearchPojo=new EmployeeSearchPojo();
	            	employeeSearchPojo.setListNo(No);
	            	employeeSearchPojo.setEmployeeNo(rs.getString("employeeNo"));
	            	employeeSearchPojo.setEmployeeName(rs.getString("employeeName"));
	            	employeeSearchPojo.setAge(rs.getInt("age"));
	            	employeeSearchPojo.setJoiningCompanyOfYear(rs.getString("JoiningCompanyOfYear"));
	            	employeeSearchPojo.setIntoCompanyOfMonth(rs.getString("intoCompanyOfMonth"));
	            	employeeSearchPojo.setCompanyMail(rs.getString("companyMail"));
	            	employeeSearchPojo.setPhoneNo(rs.getString("phoneNo"));
	            	employeeSearchPojo.setDependentsPerson(rs.getInt("dependentsPerson"));
	            	employeeSearchPojo.setSalary(rs.getString("salary"));
	            	employeeSearchPojo.setFirstHalfOfAddress(rs.getString("firstHalfOfAddress"));
	            	employeeSearchPojo.setSecondHalfOfAddress(rs.getString("secondHalfOfAddress"));
	            	employeeSearchPojo.setNearestStation(rs.getString("nearestStation"));
	            	employeeSearchPojo.setAccountNo(rs.getString("accountNo"));
	            	employeeSearchPojo.setAccountName(rs.getString("accountName"));
	            	employeeSearchPojo.setGender(rs.getString("genderProperties"));
	            	if(No==employeeSearchBean.getPage()*10+1) {
	            		employeeSearchPojo.setPageNo(page);	
	            	}
	            	employeeSearchList.add(employeeSearchPojo);
	            	No++;
	            }
	            db.closeConn();
	            return employeeSearchList;
	    }
}
