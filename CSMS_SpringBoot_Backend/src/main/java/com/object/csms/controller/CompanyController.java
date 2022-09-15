package com.object.csms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.Company;
import com.object.csms.service.CompanyService;

@RestController
@CrossOrigin(origins="*")
public class CompanyController {

	@Autowired
	CompanyService services;
	
	@GetMapping("/getallcompany")
	public Iterable<Company> getCompany()
	{
		return services.listAll();    
	}
	
	@PostMapping(value = "/companyregister")
	private ResponseEntity<Company> saveCompany (@RequestBody Company company)  
	{  
		services.saveOrUpdate(company);
		return  new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@RequestMapping("/company/{id}")  
	private Company getCompany(@PathVariable(name = "id") int companyid)  
	{  
		return services.getCompanyById(companyid) ;
		
	}  
	    
	@PutMapping("/updatecompany/{id}")	 
    private Company update(@RequestBody Company company,@PathVariable int id)  
    {  
		company.setCompany_Id(id);
		services.saveOrUpdate(company); 
		return company;  
    }  
	 
	@DeleteMapping("/{id}/deletecompany")  
	private void deleteCompany(@PathVariable("id") int id)  
	{  
		services.delete(id);
	}  
}
