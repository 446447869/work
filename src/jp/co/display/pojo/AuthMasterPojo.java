package jp.co.display.pojo;

public class AuthMasterPojo {


	private String authorityProperties;
	/**
	*  こメソッドは権限マスターテーブルから取得する権限名を保存用のメソッドです。
	*  @param string authorityProperties
	*  @return string authorityProperties
	*/
	public String getAuthorityProperties() {
		return authorityProperties;
	}
	public void setAuthorityProperties(String Propertie) {
		this.authorityProperties =Propertie;
	}
}
