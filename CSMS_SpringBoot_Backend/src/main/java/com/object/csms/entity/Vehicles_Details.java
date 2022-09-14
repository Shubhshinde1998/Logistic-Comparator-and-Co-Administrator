package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vehicles_details")
public class Vehicles_Details {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int vehicles_details_id;
	
	@Column(name="vehicles_details_no")
	private String vehicles_details_no;
	
	@Column(name="company_id",nullable=false)
	private int company_id;

	public Vehicles_Details() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vehicles_Details(int vehicles_details_id, String vehicles_details_no, int company_id) {
		super();
		this.vehicles_details_id = vehicles_details_id;
		this.vehicles_details_no = vehicles_details_no;
		this.company_id = company_id;
	}

	public int getVehicles_details_id() {
		return vehicles_details_id;
	}

	public void setVehicles_details_id(int vehicles_details_id) {
		this.vehicles_details_id = vehicles_details_id;
	}

	public String getVehicles_details_no() {
		return vehicles_details_no;
	}

	public void setVehicles_details_no(String vehicles_details_no) {
		this.vehicles_details_no = vehicles_details_no;
	}

	public int getCompany_id() {
		return company_id;
	}

	public void setCompany_id(int company_id) {
		this.company_id = company_id;
	}

	
	
}
