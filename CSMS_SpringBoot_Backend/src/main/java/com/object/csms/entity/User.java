package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int User_Id;
    
    @Column(nullable = false, length = 100)
    private String User_Password;
     
    @Column(nullable = false)
    private int User_Role;
     
    @Column(length = 20)
    private String User_Status;

	public User(int user_Id, String user_Password, int user_Role, String user_Status) {
		super();
		User_Id = user_Id;
		User_Password = user_Password;
		User_Role = user_Role;
		User_Status = user_Status;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUser_Id() {
		return User_Id;
	}

	public void setUser_Id(int user_Id) {
		User_Id = user_Id;
	}

	public String getUser_Password() {
		return User_Password;
	}

	public void setUser_Password(String user_Password) {
		User_Password = user_Password;
	}

	public int getUser_Role() {
		return User_Role;
	}

	public void setUser_Role(int user_Role) {
		User_Role = user_Role;
	}

	public String getUser_Status() {
		return User_Status;
	}

	public void setUser_Status(String user_Status) {
		User_Status = user_Status;
	}
    
    
}
