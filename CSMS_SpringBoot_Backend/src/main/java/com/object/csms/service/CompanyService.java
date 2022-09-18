package com.object.csms.service;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.object.csms.entity.Company;
import com.object.csms.entity.User;
import com.object.csms.repository.CategoryPriceRepository;
import com.object.csms.repository.CompanyRepository;
import com.object.csms.repository.DeliveryBoyRepository;
import com.object.csms.repository.UserRepository;
import com.object.csms.repository.VehicleRepository;

@Service
public class CompanyService {

	@Autowired
	CompanyRepository repo;
	
	@Autowired
	VehicleRepository vrepo;
	
	@Autowired
	DeliveryBoyRepository drepo;
	
	@Autowired
	UserRepository urepo;
	
	@Autowired
	CategoryPriceRepository crepo;
	
	UserService uservice;
	
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
	
	@Transactional
	public List<Company> findByUserId() {
		String state="false";
		int role =2;
		List<User> u = urepo.findByStatus(state,role);
		List<Company> c = new ArrayList<Company>();
		for(User list : u) {
			int id = list.getUserId();
			Company cs =repo.findByUserIdd(id);
		 	if(cs!=null) {
			c.add(cs);
			}
		 	
		}
		return c;
	}
	/*public List<Company> findPendingCompany()
	{
		return repo.findPendingCompany();
	}*/
	@Transactional
	public Optional<Company> approved(int id) {
		
		Optional<Company> c = repo.findById(id);
		int userid = c.get().getUser().getUserId();
		Optional<User> u = urepo.findById(userid);
		u.get().setUserStatus("true");
		
		return c;
	}
	
}
