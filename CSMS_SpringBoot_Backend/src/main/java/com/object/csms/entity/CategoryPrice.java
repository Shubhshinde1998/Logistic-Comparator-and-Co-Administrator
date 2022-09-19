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
@Table(name="category_pricing")
public class CategoryPrice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int categoryPricingId;
	
	@Column(name="category_price",nullable=false)
	private int categoryPrice;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="category_Id", referencedColumnName = "categoryId",nullable=false)
	private Category category;
	
	@Column (name="company_id",nullable=false)
	private int companyId;

	public CategoryPrice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CategoryPrice(int categoryPricingId, int categoryPrice, Category category, int companyId) {
		super();
		this.categoryPricingId = categoryPricingId;
		this.categoryPrice = categoryPrice;
		this.category = category;
		this.companyId = companyId;
	}
	

	public CategoryPrice(int categoryPrice, Category category, int companyId) {
		super();
		this.categoryPrice = categoryPrice;
		this.category = category;
		this.companyId = companyId;
	}

	public int getCategoryPricingId() {
		return categoryPricingId;
	}

	public void setCategoryPricingId(int categoryPricingId) {
		this.categoryPricingId = categoryPricingId;
	}

	public int getCategoryPrice() {
		return categoryPrice;
	}

	public void setCategoryPrice(int categoryPrice) {
		this.categoryPrice = categoryPrice;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public int getCompanyId() {
		return companyId;
	}

	public void setCompanyId(int companyId) {
		this.companyId = companyId;
	}

	
}
