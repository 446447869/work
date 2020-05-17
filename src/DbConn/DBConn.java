package DbConn;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
public class DBConn{
	private Connection conn;
	/**
	*  こメソッドはデータベースアクセス用のメソッドです。
	*  @param String url
	*  		　　String user
	*  		　　String pwd
	*  @return Connection　conn
	*/
    public Connection getConn(){
        String url = "jdbc:mysql://localhost:3306/lycdb?serverTimezone=JST&allowPublicKeyRetrieval=true&useSSL=false&characterEncoding=UTF-8";
        String user = "root";
        String pwd = "root";
        try {  									
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = (Connection) DriverManager.getConnection(url, user, pwd);
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
