package com.object.csms.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Customer_Id;
	
	@Column(name="customer_name")
	private String Customer_Name;
	
	@Column(name="customer_emailid")
	private String Customer_Emailid;
	
	@Column(name="customer_city")
	private String Customer_City;
	
	@Column(name="customer_pincode")
	private int Customer_Pincode;
	
	@Column(name="customer_contactno")
	private int Customer_Contactno;	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="User_Id", referencedColumnName = "User_Id")
	private User user;
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(int customer_Id, String customer_Name, String customer_Emailid, String customer_City, int customer_Pincode,
			int customer_Contactno, User user) {
		super();
		Customer_Id = customer_Id;
		Customer_Name = customer_Name;
		Customer_Emailid = customer_Emailid;
		Customer_City = customer_City;
		Customer_Pincode = customer_Pincode;
		Customer_Contactno = customer_Contactno;
		this.user = user;
	}
	public int getCustomer_Id() {
		return Customer_Id;
	}
	public void setCustomer_Id(int customer_Id) {
		Customer_Id = customer_Id;
	}
	public String getCustomer_Name() {
		return Customer_Name;
	}
	public void setCustomer_Name(String customer_Name) {
		Customer_Name = customer_Name;
	}
	public String getCustomer_Emailid() {
		return Customer_Emailid;
	}
	public void setCustomer_Emailid(String customer_Emailid) {
		Customer_Emailid = customer_Emailid;
	}
	public String getCustomer_City() {
		return Customer_City;
	}
	public void setCustomer_City(String customer_City) {
		Customer_City = customer_City;
	}
	public int getCustomer_Pincode() {
		return Customer_Pincode;
	}
	public void setCustomer_Pincode(int customer_Pincode) {
		Customer_Pincode = customer_Pincode;
	}
	public int getCustomer_Contactno() {
		return Customer_Contactno;
	}
	public void setCustomer_Contactno(int customer_Contactno) {
		Customer_Contactno = customer_Contactno;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
}
