package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.beans.factory.annotation.Value;


@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;
	
   
    @Column(nullable = false, length = 100,name="user_password")
    private String userPassword;
     
    @Column(nullable = false,name="user_role")
    private int userRole;
     
    @Column(length = 20, name="user_status")
    @Value("false")
    private String userStatus;
    
    @Column(length=100, nullable = false, name="user_username")
    private String userUsername;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int userId, String userPassword, int userRole, String userStatus, String userUsername) {
		super();
		this.userId = userId;
		this.userPassword = userPassword;
		this.userRole = userRole;
		this.userStatus = userStatus;
		this.userUsername = userUsername;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public int getUserRole() {
		return userRole;
	}

	public void setUserRole(int userRole) {
		this.userRole = userRole;
	}

	public String getUserStatus() {
		return userStatus;
	}

	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}

	public String getUserUsername() {
		return userUsername;
	}

	public void setUserUsername(String userUsername) {
		this.userUsername = userUsername;
	}

}
