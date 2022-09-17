package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vehicles_details")
public class VehicleDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int vehiclesDetailsId;
	
	@Column(name="vehicles_details_no",nullable=false)
	private String vehiclesDetailsNo;
	
	@Column(name="company_id",nullable=false)
	private int companyId;

	public VehicleDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VehicleDetails(int vehicleDetailsId, String vehiclesDetailsNo, int companyId) {
		super();
		this.vehiclesDetailsId = vehicleDetailsId;
		this.vehiclesDetailsNo = vehiclesDetailsNo;
		this.companyId = companyId;
	}

	public int getVehicleDetailsId() {
		return vehiclesDetailsId;
	}

	public void setVehicleDetailsId(int vehicleDetailsId) {
		this.vehiclesDetailsId = vehicleDetailsId;
	}

	public String getVehiclesDetailsNo() {
		return vehiclesDetailsNo;
	}

	public void setVehiclesDetailsNo(String vehiclesDetailsNo) {
		this.vehiclesDetailsNo = vehiclesDetailsNo;
	}

	public int getCompanyId() {
		return companyId;
	}

	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}

	
}
