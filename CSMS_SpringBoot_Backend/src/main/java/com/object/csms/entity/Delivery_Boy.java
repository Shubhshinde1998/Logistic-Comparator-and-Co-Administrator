package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="delivery_boy")
public class Delivery_Boy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int delivery_boy_id;
	
	@Column(name="delivery_boy_name")
	private String delivery_boy_name;
	
	@Column(name="company_id",nullable=false)
	private int company_id;
	@Column(name="delivery_boy_contactno")
	private String delivery_boy_contactno;
	
	@Column(name="delivery_boy_emailid")
	private String delivery_boy_emailid;
	@Column(name="delivery_boy_age")
	private int delivery_boy_age;
	@Column(name="delivery_boy_license")
	private int delivery_boy_license;
	

	


	public Delivery_Boy() {
		super();
	}





	public Delivery_Boy(int delivery_boy_id, String delivery_boy_name, int company_id, String delivery_boy_contactno,
			String delivery_boy_emailid, int delivery_boy_age, int delivery_boy_license) {
		super();
		this.delivery_boy_id = delivery_boy_id;
		this.delivery_boy_name = delivery_boy_name;
		this.company_id = company_id;
		this.delivery_boy_contactno = delivery_boy_contactno;
		this.delivery_boy_emailid = delivery_boy_emailid;
		this.delivery_boy_age = delivery_boy_age;
		this.delivery_boy_license = delivery_boy_license;
	}





	public int getDelivery_boy_id() {
		return delivery_boy_id;
	}





	public void setDelivery_boy_id(int delivery_boy_id) {
		this.delivery_boy_id = delivery_boy_id;
	}





	public String getDelivery_boy_name() {
		return delivery_boy_name;
	}





	public void setDelivery_boy_name(String delivery_boy_name) {
		this.delivery_boy_name = delivery_boy_name;
	}





	public int getCompany_id() {
		return company_id;
	}





	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}





	public String getDelivery_boy_contactno() {
		return delivery_boy_contactno;
	}





	public void setDelivery_boy_contactno(String delivery_boy_contactno) {
		this.delivery_boy_contactno = delivery_boy_contactno;
	}





	public String getDelivery_boy_emailid() {
		return delivery_boy_emailid;
	}





	public void setDelivery_boy_emailid(String delivery_boy_emailid) {
		this.delivery_boy_emailid = delivery_boy_emailid;
	}





	public int getDelivery_boy_age() {
		return delivery_boy_age;
	}





	public void setDelivery_boy_age(int delivery_boy_age) {
		this.delivery_boy_age = delivery_boy_age;
	}





	public int getDelivery_boy_license() {
		return delivery_boy_license;
	}





	public void setDelivery_boy_license(int delivery_boy_license) {
		this.delivery_boy_license = delivery_boy_license;
	}


	

	
	
}

