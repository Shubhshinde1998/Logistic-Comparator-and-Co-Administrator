package com.object.csms.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="vehicles_details")
public class Vehicles_Details {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int vehicles_details_id;
	
	@Column(name="vehicles_details_no")
	private int vehicles_details_no;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="company_id", referencedColumnName = "Company_Id",nullable = false)
	private Company company;

	public Vehicles_Details() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Vehicles_Details(int vehicles_details_id, int vehicles_details_no, Company company) {
		super();
		this.vehicles_details_id = vehicles_details_id;
		this.vehicles_details_no = vehicles_details_no;
		this.company = company;
	}

	public int getVehicles_details_id() {
		return vehicles_details_id;
	}

	public void setVehicles_details_id(int vehicles_details_id) {
		this.vehicles_details_id = vehicles_details_id;
	}

	public int getVehicles_details_no() {
		return vehicles_details_no;
	}

	public void setVehicles_details_no(int vehicles_details_no) {
		this.vehicles_details_no = vehicles_details_no;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}
	
}
