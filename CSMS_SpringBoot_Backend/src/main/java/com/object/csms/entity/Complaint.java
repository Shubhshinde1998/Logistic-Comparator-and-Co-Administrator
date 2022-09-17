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
@Table(name="complaint")
public class Complaint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int complaintId;	
	
	
	@Column (name="complaint_status",nullable=false)
	private int complaintStatus;

	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Complaint(int complaintId, int customerId, Category complaintDescription, int complaintStatus) {
		super();
		this.complaintId = complaintId;
		this.complaintDescription = complaintDescription;
		this.complaintStatus = complaintStatus;
	}

	public int getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}



	public Category getComplaintDescription() {
		return complaintDescription;
	}

	public void setComplaintDescription(Category complaintDescription) {
		this.complaintDescription = complaintDescription;
	}

	public int getComplaintStatus() {
		return complaintStatus;
	}

	public void setComplaintStatus(int complaintStatus) {
		this.complaintStatus = complaintStatus;
	}

	
	
}
