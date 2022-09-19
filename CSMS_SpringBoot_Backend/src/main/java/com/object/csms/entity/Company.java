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
@Table(name="company")
public class Company {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int companyId;
	
	@Column(name="company_name",nullable=false)
	private String companyName;
	
	@Column(name="company_emailid",nullable=false)
	private String companyEmail;
	
	@Column(name="company_city",nullable=false)
	private String companyCity;
	
	@Column(name="company_pincode",nullable=false)
	private int companyPincode;
	
	@Column(name="company_contactno",nullable=false)
	private double companyContactNo;	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_Id", referencedColumnName = "userId",nullable=false)
	private User user;
	
	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Company(int companyId, String companyName, String companyEmail, String companyCity, int companyPincode,
			int companyContactNo, User user) {
		super();
		this.companyId = companyId;
		this.companyName = companyName;
		this.companyEmail = companyEmail;
		this.companyCity = companyCity;
		this.companyPincode = companyPincode;
		this.companyContactNo = companyContactNo;
		this.user = user;
	}

	public int getCompanyId() {
		return companyId;
	}

	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyEmail() {
		return companyEmail;
	}

	public void setCompanyEmail(String companyEmail) {
		this.companyEmail = companyEmail;
	}

	public String getCompanyCity() {
		return companyCity;
	}

	public void setCompanyCity(String companyCity) {
		this.companyCity = companyCity;
	}

	public int getCompanyPincode() {
		return companyPincode;
	}

	public void setCompanyPincode(int companyPincode) {
		this.companyPincode = companyPincode;
	}

	public double getCompanyContactNo() {
		return companyContactNo;
	}

	public void setCompanyContactNo(int companyContactNo) {
		this.companyContactNo = companyContactNo;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
