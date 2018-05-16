package com.web.abc.model;

import java.util.Date;
import java.util.List;
/**
 *后台用户
 * @author zlr
 *
 */
public class OrgUserModel {
	
	//ID
	private int id;
	//编号工号
	private String userNum;
	//账号
	private String userAccount;
	//密码
	private String userPassword;
	//姓名
	private String userName;
	//性别
	private String userSex;
	//身份证
	private String userIdCardNum;
	//邮箱
	private String userEmail;
	//手机
	private String userPhone;
	//座机
	private String userTel;
	//创建时间
	private Date createDate;
	//更新时间
	private Date updateDate;
	//状态 0:锁定            1:解锁
	private int userStatus;
	//序号
	private int orderIndex;
	//qq号
	private String userqq;
	
	public String getUserqq() {
		return userqq;
	}
	public void setUserqq(String userqq) {
		this.userqq = userqq;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserNum() {
		return userNum;
	}
	public void setUserNum(String userNum) {
		this.userNum = userNum;
	}
	public String getUserAccount() {
		return userAccount;
	}
	public void setUserAccount(String userAccount) {
		this.userAccount = userAccount;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserSex() {
		return userSex;
	}
	public void setUserSex(String userSex) {
		this.userSex = userSex;
	}
	public String getUserIdCardNum() {
		return userIdCardNum;
	}
	public void setUserIdCardNum(String userIdCardNum) {
		this.userIdCardNum = userIdCardNum;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}
	public String getUserTel() {
		return userTel;
	}
	public void setUserTel(String userTel) {
		this.userTel = userTel;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public Date getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	public int getUserStatus() {
		return userStatus;
	}
	public void setUserStatus(int userStatus) {
		this.userStatus = userStatus;
	}
	public int getOrderIndex() {
		return orderIndex;
	}
	public void setOrderIndex(int orderIndex) {
		this.orderIndex = orderIndex;
	}
}
