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
	
	@Column (name="complaint_description",nullable=false)
	private String complaintDescription;

	
	@Column (name="complaint_status",nullable=false)
	private String complaintStatus;

	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Complaint(int complaintId, int customerId, String complaintDescription, String complaintStatus) {
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



	public String getComplaintDescription() {
		return complaintDescription;
	}

	public void setComplaintDescription(String complaintDescription) {
		this.complaintDescription = complaintDescription;
	}

	public String getComplaintStatus() {
		return complaintStatus;
	}

	public void setComplaintStatus(String complaintStatus) {
		this.complaintStatus = complaintStatus;
	}

	
	
}
