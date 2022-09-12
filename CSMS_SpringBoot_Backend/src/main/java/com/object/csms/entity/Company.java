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
	private int Company_Id;
	
	@Column(name="company_name")
	private String Company_Name;
	
	@Column(name="company_emailid")
	private String Company_Emailid;
	
	@Column(name="company_city")
	private String Company_City;
	
	@Column(name="company_pincode")
	private int Company_Pincode;
	
	@Column(name="company_contactno")
	private int Company_Contactno;	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="User_Id", referencedColumnName = "User_Id")
	private User user;
	
	
	/*@OneToMany(mappedBy = "company",cascade = CascadeType.ALL)
	private List<Vehicles_Details> vehicle;*/
	
	public Company() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Company(int company_Id, String company_Name, String company_Emailid, String company_City, int company_Pincode,
			int company_Contactno, User user) {
		super();
		Company_Id = company_Id;
		Company_Name = company_Name;
		Company_Emailid = company_Emailid;
		Company_City = company_City;
		Company_Pincode = company_Pincode;
		Company_Contactno = company_Contactno;
		this.user = user;
	}
	public int getCompany_Id() {
		return Company_Id;
	}
	public void setCompany_Id(int company_Id) {
		Company_Id = company_Id;
	}
	public String getCompany_Name() {
		return Company_Name;
	}
	public void setCompany_Name(String company_Name) {
		Company_Name = company_Name;
	}
	public String getCompany_Emailid() {
		return Company_Emailid;
	}
	public void setCompany_Emailid(String company_Email) {
		Company_Emailid = company_Email;
	}
	public String getCompany_City() {
		return Company_City;
	}
	public void setCompany_City(String company_City) {
		Company_City = company_City;
	}
	public int getCompany_Pincode() {
		return Company_Pincode;
	}
	public void setCompany_Pincode(int company_Pincode) {
		Company_Pincode = company_Pincode;
	}
	public int getCompany_Contactno() {
		return Company_Contactno;
	} 
	public void setCompany_Contactno(int company_Contact) {
		Company_Contactno = company_Contact;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
}
