package jp.co.display.action;

import jp.co.display.common.LogicBasic;
	/**
	*  こメソッドはログアウト時に、セッションをクリア用のメソッドです。
	*  @param
	*  @return ログインページに戻る。
	*/
public class SignOutAction extends LogicBasic{
	private static final long serialVersionUID = 1L;
	public String signOut(){
		session.clear();
		return SUCCESS;
	}
}