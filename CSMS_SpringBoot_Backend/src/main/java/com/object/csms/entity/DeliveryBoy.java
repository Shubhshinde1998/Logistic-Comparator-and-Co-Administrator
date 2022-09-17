package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="delivery_boy")
public class DeliveryBoy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int deliveryBoyId;
	
	@Column(name="delivery_boy_name",nullable=false)
	private String deliveryBoyName;
	
	@Column(name="delivery_boy_contactno",nullable=false)
	private String deliveryBoyContactNo;
	
	@Column(name="delivery_boy_emailid",nullable=false)
	private String deliveryBoyEmail;
	
	@Column(name="delivery_boy_age",nullable=false)
	private int deliveryBoyAge;
	
	@Column(name="delivery_boy_license",nullable=false)
	private int deliveryBoyLicense;
	
	@Column(name="company_id",nullable=false)
	private int companyId;

	public DeliveryBoy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DeliveryBoy(int deliveryBoyId, String deliveryBoyName, String deliveryBoyContactNo, String deliveryBoyEmail,
			int deliveryBoyAge, int deliveryBoyLicense, int companyId) {
		super();
		this.deliveryBoyId = deliveryBoyId;
		this.deliveryBoyName = deliveryBoyName;
		this.deliveryBoyContactNo = deliveryBoyContactNo;
		this.deliveryBoyEmail = deliveryBoyEmail;
		this.deliveryBoyAge = deliveryBoyAge;
		this.deliveryBoyLicense = deliveryBoyLicense;
		this.companyId = companyId;
	}

	public int getDeliveryBoyId() {
		return deliveryBoyId;
	}

	public void setDeliveryBoyId(int deliveryBoyId) {
		this.deliveryBoyId = deliveryBoyId;
	}

	public String getDeliveryBoyName() {
		return deliveryBoyName;
	}

	public void setDeliveryBoyName(String deliveryBoyName) {
		this.deliveryBoyName = deliveryBoyName;
	}

	public String getDeliveryBoyContactNo() {
		return deliveryBoyContactNo;
	}

	public void setDeliveryBoyContactNo(String deliveryBoyContactNo) {
		this.deliveryBoyContactNo = deliveryBoyContactNo;
	}

	public String getDeliveryBoyEmail() {
		return deliveryBoyEmail;
	}

	public void setDeliveryBoyEmail(String deliveryBoyEmail) {
		this.deliveryBoyEmail = deliveryBoyEmail;
	}

	public int getDeliveryBoyAge() {
		return deliveryBoyAge;
	}

	public void setDeliveryBoyAge(int deliveryBoyAge) {
		this.deliveryBoyAge = deliveryBoyAge;
	}

	public int getDeliveryBoyLicense() {
		return deliveryBoyLicense;
	}

	public void setDeliveryBoyLicense(int deliveryBoyLicense) {
		this.deliveryBoyLicense = deliveryBoyLicense;
	}

	public int getCompanyId() {
		return companyId;
	}

	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}

	
}

