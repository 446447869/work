package jp.co.display.common;

import java.util.Map;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
	/**
	*  こメソッドはセッションを使いやすいようにするための定義用のメソッドです。
	*  @param　Map　session
	*  @return
	*/
public class LogicBasic extends ActionSupport{
	private static final long serialVersionUID = 1L;
	public Map<String, Object> session=ActionContext.getContext().getSession();
}
