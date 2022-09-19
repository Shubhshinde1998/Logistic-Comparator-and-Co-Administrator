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
	private int customerId;
	
	@Column(name="customer_name")
	private String customerName;
	
	@Column(name="customer_emailid")
	private String customerEmail;
	
	@Column(name="customer_city")
	private String customerCity;
	
	@Column(name="customer_pincode")
	private int customerPincode;
	
	@Column(name="customer_contactno")
	private double customerContactNo;	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_Id", referencedColumnName = "userId")
	private User user;
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(int customerId, String customerName, String customerEmail, String customerCity, int customerPincode,
			int customerContactNo, User user) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerCity = customerCity;
		this.customerPincode = customerPincode;
		this.customerContactNo = customerContactNo;
		this.user = user;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerCity() {
		return customerCity;
	}

	public void setCustomerCity(String customerCity) {
		this.customerCity = customerCity;
	}

	public int getCustomerPincode() {
		return customerPincode;
	}

	public void setCustomerPincode(int customerPincode) {
		this.customerPincode = customerPincode;
	}

	public double getCustomerContactNo() {
		return customerContactNo;
	}

	public void setCustomerContactNo(int customerContactNo) {
		this.customerContactNo = customerContactNo;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
