package com.object.csms.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.object.csms.entity.Company;
import com.object.csms.entity.Customer;
import com.object.csms.entity.User;
import com.object.csms.repository.CompanyRepository;
import com.object.csms.repository.CustomerRepository;
import com.object.csms.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository repo;
	@Autowired
	CompanyRepository comrepo;
	@Autowired
	CustomerRepository cusrepo;
	
	public Iterable<User> listAll() {
        return this.repo.findAll();
    }

	public void saveOrUpdate(User users)  
	{  
		repo.save(users); 		
	}
	public Optional<User> getById(int id)
	{
		return repo.findById(id);
	}
	
	public User getUserById(int id)  
	{  
		return repo.findById(id).get();  
	}
	
	public Object checkLogin(String username,String password)
	{
		Optional<User> u = repo.checkLogin(username, password);	
		if(u.isPresent() && u.get().getUserRole()==2)
		{
			User uobj = u.get();
			Optional<Company> com = comrepo.findByUserId(uobj.getUserId());
			if(com.isPresent())
			{
				com.get().getUser().setUserPassword(null);
				return com;
			}
			else
				return null;
		}
		else if(u.isPresent() && u.get().getUserRole()==3)
		{
			User uobj = u.get();
			Optional<Customer> cus = cusrepo.findByUserId(uobj.getUserId());
			if(cus.isPresent())
			{
				cus.get().getUser().setUserPassword(null);
				return cus;
			}
			else
				return null;
		}
		else
			return repo.checkLogin(username, password);
			
	}
	
	public void update(User users, int id)  
	{  
		repo.save(users);  
	}  
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	} 
		
}
