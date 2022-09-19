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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="feedback")
public class Feedback {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer feedbackId;
	
	@Column(name="feedback_description")
	private String feedbackDiscription;
	
<<<<<<< HEAD
	@Column(name="customer_id",nullable=false)
	private Integer customerId;

	public Feedback(Integer feedbackId, String feedbackDiscription, Integer customerId) {
=======
	@Column(name="customer_id")
	private Integer customerId;

	@Column(name="company_id")
	private Integer companyId;

	public Feedback(Integer feedbackId, String feedbackDiscription, Integer customerId, Integer companyId) {
>>>>>>> c43cc97e3945ae9e57febbed955d4da103904304
		super();
		this.feedbackId = feedbackId;
		this.feedbackDiscription = feedbackDiscription;
		this.customerId = customerId;
		this.companyId = companyId;
	}

	public Integer getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(Integer feedbackId) {
		this.feedbackId = feedbackId;
	}

	public String getFeedbackDiscription() {
		return feedbackDiscription;
	}

	public void setFeedbackDiscription(String feedbackDiscription) {
		this.feedbackDiscription = feedbackDiscription;
	}

	public Integer getCustomerId() {
		return customerId;
	}

<<<<<<< HEAD
	public void setCustomer(Integer customerId) {
=======
	public void setCustomerId(Integer customerId) {
>>>>>>> c43cc97e3945ae9e57febbed955d4da103904304
		this.customerId = customerId;
	}

	public Integer getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}

	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
