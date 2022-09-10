package com.object.csms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.Company;
import com.object.csms.entity.Customer;
<<<<<<< HEAD

=======
import com.object.csms.repository.CompanyRepository;
>>>>>>> 51bca0db950d86f50cc358485bf963f1a5f04234
import com.object.csms.repository.CustomerRepository;
@Service
public class CustomerService {
	@Autowired
	CustomerRepository repo;
	
	public Iterable<Customer> listAll() {
        return this.repo.findAll();
    }

	public void saveOrUpdate(Customer customer)  
	{  
		repo.save(customer); 		
	}
	
	public Customer getCustomerById(int id)  
	{  
		return repo.findById(id).get();  
	}	
	
	public void update(Customer customer, int id)  
	{  
		repo.save(customer);  
	}  
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	}
}
