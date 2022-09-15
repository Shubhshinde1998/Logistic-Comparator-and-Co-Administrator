package com.object.csms.service;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.object.csms.entity.Company;
import com.object.csms.repository.CompanyRepository;
import com.object.csms.repository.DeliveryBoyRepository;
import com.object.csms.repository.VehicleRepository;

@Service
public class CompanyService {

	@Autowired
	CompanyRepository repo;
	
	@Autowired
	VehicleRepository vrepo;
	
	@Autowired
	DeliveryBoyRepository drepo;
	
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
	
	/*public Optional<Company> findByUser_Id(User u)
	{
		return repo.findByUser_Id(u);
	}*/
	
	public void update(Company company, int id)  
	{  
		repo.save(company);  
	}  
	
	@Transactional
	public void delete(int id)  
	{  
		drepo.deleteByCompanyId(id);
		vrepo.deleteByCompanyId(id);
		repo.deleteById(id);  
	}
	
}
