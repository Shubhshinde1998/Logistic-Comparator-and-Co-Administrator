package com.object.csms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.object.csms.entity.Company;
import com.object.csms.entity.Customer;
import com.object.csms.service.CompanyService;
import com.object.csms.service.CustomerService;

public class CustomerController {
	@Autowired
	CustomerService services;
	
	@GetMapping("/getallcustomer")
	public Iterable<Customer> getCustomer()
	{
		return services.listAll();    
	}
	
	@PostMapping(value = "/customerregister")
	private int saveCustomer (@RequestBody Customer customer)  
	{  
		services.saveOrUpdate(customer);  
		return  customer.getCustomer_Id();
	}
	
	@RequestMapping("/customer/{id}")  
	private Customer getCustomer(@PathVariable(name = "id") int customerid)  
	{  
		return services.getCustomerById(customerid) ;
	}  
	    
	@PutMapping("/updatecustomer/{id}")	 
    private Customer update(@RequestBody Customer customer,@PathVariable int id)  
    {  
		customer.setCustomer_Id(id);
		services.saveOrUpdate(customer); 
		return customer;  
    }  
	 
	@DeleteMapping("/deletecompany/{id}")  
	private void deleteCompany(@PathVariable("id") int id)  
	{  
		services.delete(id);  
	}  
}
