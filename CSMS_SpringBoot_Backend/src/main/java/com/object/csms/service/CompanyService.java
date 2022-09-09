package com.object.csms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.Company;
import com.object.csms.repository.CompanyRepository;

@Service
public class CompanyService {

	@Autowired
	CompanyRepository repo;
	
	public Iterable<Company> listAll() {
        return this.repo.findAll();
    }

	public void saveOrUpdate(Company company)  
	{  
		repo.save(company); 		
	}
	
	public Company getCompanyById(int id)  
	{  
		return repo.findById(id).get();  
	}	
	
	public void update(Company company, int id)  
	{  
		repo.save(company);  
	}  
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	}
}
