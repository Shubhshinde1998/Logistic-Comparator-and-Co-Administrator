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
	private int feedbackId;
	
	@Column(name="feedback_description",nullable=false)
	private String feedbackDiscription;
	
	@Column(name="customer_id",nullable=false)
	private int customerId;

	public Feedback(int feedbackId, String feedbackDiscription, int customerId) {
		super();
		this.feedbackId = feedbackId;
		this.feedbackDiscription = feedbackDiscription;
		this.customerId = customerId;
	}

	public int getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}

	public String getFeedbackDiscription() {
		return feedbackDiscription;
	}

	public void setFeedbackDiscription(String feedbackDiscription) {
		this.feedbackDiscription = feedbackDiscription;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomer(int customerId) {
		this.customerId = customerId;
	}

	public Feedback() {
		super();
	}
     
	
}
