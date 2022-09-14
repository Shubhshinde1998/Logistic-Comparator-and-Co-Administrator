package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int User_Id;
	
    
    @Column(nullable = false, length = 100,name="user_password")
    private String User_Password;
     
    @Column(nullable = false,name="user_role")
    private int User_Role;
     
    @Column(length = 20, name="user_status")
    @Value("false")
    private String User_Status;
    
    @Column(length=100, nullable = false, name="user_username")
    private String User_Username;

	public User(int user_Id, String user_Password, int user_Role, String user_Status,String user_Username) {
		super();
		User_Id = user_Id;
		User_Password = user_Password;
		User_Role = user_Role;
		User_Status = user_Status;
		User_Username = user_Username;
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

	public String getUser_Username() {
		return User_Username;
	}

	public void setUser_Username(String user_Username) {
		User_Username = user_Username;
	}

	@Override
	public String toString() {
		return "User [User_Id=" + User_Id + ", User_Password=" + User_Password + ", User_Role=" + User_Role
				+ ", User_Status=" + User_Status + ", User_Username=" + User_Username + "]";
	}
    
    
}
