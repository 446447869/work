package jp.co.display.common;

import java.sql.*;

public class DbConnectionFactory{
	private Connection conn; 
	/**
	*  こメソッドはデータベース接続用のメソッドです。
	*  @param　String url
	*		　　　String user
	*  	　　　String passwd
	* 		　　　Connection　conn
	*  @return　Connection　conn
	*/
    public Connection getConn(){
        String url = "jdbc:mysql://localhost:3306/lycdb?serverTimezone=JST&characterEncoding=UTF-8";
        String user = "root"; 
        String passwd = "root";					
        try {  									
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = (Connection) DriverManager.getConnection(url, user, passwd);
        } catch (ClassNotFoundException e) {  									
            e.printStackTrace();  									
        } catch (SQLException e) {  									
            e.printStackTrace();  									
        }  									
        return conn;  									
    }  									
    public void closeConn(){  									
        if(conn!=null) {  									
            try{  									
                conn.close();  									
            }catch(Exception e){  									
                e.printStackTrace();  									
            }
        }
    }
}
